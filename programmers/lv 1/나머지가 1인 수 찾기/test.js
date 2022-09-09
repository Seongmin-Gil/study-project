function solution(n) {
    var answer = 0;
    while (true) {
        if(n % answer === 1) {
            return answer ;
        }
        answer += 1;
    }
}

const n = 10
console.log(solution(n));