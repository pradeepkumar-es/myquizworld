import { questions as fallbackQuestions } from "../data/mockQuestions";

// Cache fetched questions and active requests.
const apiCache = new Map();
const inRunningRequests = new Map();

// Normalize the API payload into a questions array.
function getQuestionsFromPayload(data) {
  if (Array.isArray(data?.results)) {
    return data.results;
  }
  return [];
}

// Fetch quiz questions with caching and fallback support.
export async function quizAPI(url, categoryNum) {
  const cacheKey = `${categoryNum || "default"}::${url}`;

  // Return cached results if already available.
  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  // Reuse the same request if one is already running.
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

        // Retry once after a short pause for rate limiting.
        if (response.status === 429 && attempt === 0) {
          attempt += 1;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }

        throw new Error(`API failed with status code: ${response.status}`);
      } catch (error) {
        // Fall back to local questions if the API fails.
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