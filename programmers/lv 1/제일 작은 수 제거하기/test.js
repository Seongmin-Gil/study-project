function solution(arr) {
  const answer = arr.filter((el) => el !== Math.min(...arr));
  return answer.length === 0 ? [-1] : answer;
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));
