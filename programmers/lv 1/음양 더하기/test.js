function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach( (value, index) => {
        if(signs[index] === false) value = value * -1;
        answer += value
    });
    
    return answer;
}

const absolutes = [4, 7 ,12];
const signs = [true, false, true];

console.log(solution(absolutes, signs));