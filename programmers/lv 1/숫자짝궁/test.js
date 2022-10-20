function solution(X, Y) {
  let answer = "";
  const arrayX = new Array(10).fill(0);
  const arrayY = new Array(10).fill(0);

  [...X].map((el) => {
    return (arrayX[Number(el)] += 1);
  });
  [...Y].map((el) => {
    return (arrayY[Number(el)] += 1);
  });

  for (let i = 0; i < arrayX.length; i++) {
    if (arrayX[i] !== 0 && arrayY[i] !== 0) {
      const min = arrayX[i] > arrayY[i] ? arrayY[i] : arrayX[i];
      answer += i.toString().repeat(min);
    }
  }
  answer = answer.split("").reverse().join("");
  if (answer.length === 0) answer = "-1";
  if (answer[0] === "0") answer = "0";

  return answer;
}

const X = "100";
const Y = "200";

console.log(solution(X, Y));
