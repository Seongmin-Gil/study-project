function solution(x) {
  let answer = true;
  const stringNum = String(x);
  let sumNum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    console.log(stringNum[i]);
    sumNum += Number(stringNum[i]);
  }
  if (x % sumNum !== 0) {
    answer = false;
  }
  return answer;
}

console.log(solution(12));
