export function shuffleCollection(collection){
//Fisher yates algorithm
//loop down element from last element to 2nd element and swap with random index with current index

const collectionCopy = [...collection]; //copy the collection to avoid mutating of collection if it is present in state
for(let i = collectionCopy.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));

    //swap using array destructuring
    [collectionCopy[i], collectionCopy[j]] = [collectionCopy[j], collectionCopy[i]];
}

return collectionCopy
}