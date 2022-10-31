function solution(n) {
  const one = n.toString(2).split("1");
  while (true) {
    n++;
    if (one.length == n.toString(2).split("1").length) return n;
  }
}

console.log(solution(78));
