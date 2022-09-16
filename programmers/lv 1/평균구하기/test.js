function solution(arr) {
    const sum = arr.reduce((acc, num) => acc + num);
    return sum/arr.length;
}

const arr = [1, 2, 3, 4, 5];

console.log(solution(arr));