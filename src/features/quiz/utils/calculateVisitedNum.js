export function calculateVisitedNum(visit){
    let visitNum = 0;
    for(let i = 0; i < visit.length; i++){
        if(visit[i]){
            visitNum +=1;
        }
    }
    return visitNum;
}