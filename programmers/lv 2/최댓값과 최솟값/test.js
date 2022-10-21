function solution(s) {
  const arrayS = s.split(" ").sort((a, b) => a - b);
  const answer = arrayS[0] + " " + arrayS[arrayS.length - 1];

  return answer;
}

const s = "1 2 3 4";
console.log(solution(s));
