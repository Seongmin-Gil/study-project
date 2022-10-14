function solution(a, b) {
  const maxNum = a > b ? a : b;
  let minNum = a > b ? b : a;
  let answer = minNum;
  while (minNum < maxNum) {
    minNum += 1;
    answer += minNum;
  }
  return answer;
}

const a = 3;
const b = 5;

console.log(solution(5, 3));
