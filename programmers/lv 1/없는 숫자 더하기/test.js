function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    const finder = numbers.find((el) => el === i);
    if (!finder) {
      answer += i;
    }
  }

  return answer === 0 ? -1 : answer;
}

const numbers = [1, 3, 4, 5, 6, 8, 9, 0];
console.log(solution(numbers));
