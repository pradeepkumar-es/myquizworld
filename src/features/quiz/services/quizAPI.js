export async function quizAPI(){
    const cached = localStorage.getItem("quiz");
    console.log("CACHE", cached)
    if(cached){
        console.log("returning from cache");
        return JSON.parse(cached);
    }

    try{
        console.log("fetching from api")
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        if(response.ok){
             const data = await response.json();
             const results = data.results;

             console.log("Setting cache");
             localStorage.removeItem("quiz");
             localStorage.setItem("quiz", JSON.stringify(results)); //Caching: for avoiding status code 429 from api in development mode for too may requests
             return results;
        }else{
            throw new Error("API failed with status code: "+response.status)
        }
    }catch(error){
        alert("API Error: "+error);
        return null;
    }
        
       
    
}