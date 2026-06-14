export async function quizAPI(){
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await response.json();
        const results = data.results;
    return results;
}