function solution(n) {
  let answer = n % 2 === 1 ? 2 : 1;
  let sum = 0;
  let max = 1;
  let min = 1;

  if (n === 1) return 1;

  while (max <= n / 2) {
    if (sum < n) {
      sum += max;
      max += 1;
    } else if (sum === n) {
      answer += 1;
      sum += max;
      max += 1;
    } else {
      sum -= min;
      min += 1;
    }
  }
  return answer;
}

console.log(solution(5));
