function solution(s) {
  const answer = [0, 0];
  while (s != "1") {
    answer[0] += 1;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "1") count += 1;
    }
    answer[1] += s.length - count;
    s = count.toString(2);
  }
  return answer;
}

console.log(solution("011101"));
