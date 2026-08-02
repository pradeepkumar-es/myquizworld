import { questions as fallbackQuestions } from "../data/mockQuestions";

// Global memory caches keep fetched question sets stable during the session.
// This prevents duplicate API calls when a user revisits the same category.
const apiCache = new Map();
const inRunningRequests = new Map();

// OpenTDB delivers results inside the `results` array.
// This helper normalizes the response and gives us a clean question list.
function getQuestionsFromPayload(data) {
  if (Array.isArray(data?.results)) {
    return data.results;
  }
  return [];
}

// Fetch quiz questions with caching and fallback support.
// This is the main bridge between the UI and the Open Trivia DB API.
export async function quizAPI(url, categoryNum) {
  const cacheKey = `${categoryNum || "default"}::${url}`;

  // If the same quiz set was already fetched, return it instantly.
  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  // If the same request is already in flight, reuse it instead of starting a duplicate fetch.
  if (inRunningRequests.has(cacheKey)) {
    return inRunningRequests.get(cacheKey);
  }

  const requestPromise = (async () => {
    let attempt = 0;

    while (attempt < 2) {
      try {
        const response = await fetch(url, {
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          const results = getQuestionsFromPayload(data);

          if (results.length > 0) {
            apiCache.set(cacheKey, results);
            return results;
          }

          throw new Error("No questions returned from API");
        }

        // Retry once when the API is rate limiting requests.
        if (response.status === 429 && attempt === 0) {
          attempt += 1;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }

        throw new Error(`API failed with status code: ${response.status}`);
      } catch (error) {
        // Use the local mock database if the API is unavailable or broken.
        console.warn("API request failed, using local quiz data:", error);
        const fallback = fallbackQuestions.slice(0, 10);
        apiCache.set(cacheKey, fallback);
        return fallback;
      }
    }
  })();

  inRunningRequests.set(cacheKey, requestPromise);

  try {
    return await requestPromise;
  } finally {
    inRunningRequests.delete(cacheKey);
  }
}
