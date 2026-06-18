// export async function quizAPI(url = "https://opentdb.com/api.php?amount=10&type=multiple"){ //default url for random category
export async function quizAPI(url, categoryNum){ //default url for random category
    const cached = localStorage.getItem(`${categoryNum}`);
    console.log("CACHE", cached)
    if(JSON.parse(cached).length > 0){ //for .length to work we need to parse  because data from localStorage is stringified data
        console.log("returning from cache");
        return JSON.parse(cached);
    }

    try{
        console.log("fetching from api")
        // const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const response = await fetch(url);
        if(response.ok){
             const data = await response.json();
             const results = data.results;

             console.log("Setting cache");
             localStorage.removeItem(`${categoryNum}`); //remove if any already exist with this key for fresh data
             localStorage.setItem(`${categoryNum}`, JSON.stringify(results)); //Caching: for avoiding status code 429 from api in development mode for too may requests
             return results;
        }else{
            throw new Error("API failed with status code: "+response.status)
        }
    }catch(error){
        alert("API Error: "+error);
        return null;
    }
        
       
    
}