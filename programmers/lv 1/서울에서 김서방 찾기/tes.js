function solution(seoul) {
  const position = seoul.findIndex((el) => el === "Kim");
  return `김서방은 ${position}에 있다`;
}

const seoul = ["jane", "Kim"];
console.log(solution(seoul));
