function solution(n)
{
    var answer = 0;
    const str = n.toString()
    for (const num of str) {
        answer += Number(num)
    }
    return answer;
}

const n = 123;
console.log(solution(n))