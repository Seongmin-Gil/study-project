function solution(n) {
    const number = Math.sqrt(n);
    if(number % 1 === 0) {
        return (number + 1) * (number + 1);
    } else {
        return -1;
    }
}

console.log(solution(121));