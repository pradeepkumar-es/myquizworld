export function calculateSolvedNum(queResponse) {
  let solvedNum = 0;
  for (let i = 0; i < queResponse.length; i++) {
    if (!queResponse[i]) continue;
    if (queResponse[i].isSolved) {
      solvedNum += 1;
    }
  }
  return solvedNum;
}
