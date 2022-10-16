function solution(arr, divisor) {
  const answer = [];
  for (el of arr) {
    if (el % divisor === 0) {
      answer.push(el);
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const arr = [10, 5, 2, 1];
console.log(solution(arr, 5));
