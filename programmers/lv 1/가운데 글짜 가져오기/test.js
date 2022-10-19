function solution(s) {
  const mid = Math.round(s.length / 2);
  return s.length % 2 === 1 ? s[mid - 1] : s[mid - 1] + s[mid];
}

console.log(solution("abcd"));
