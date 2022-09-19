function solution(n) {
    let nums = String(n).split('').sort((a, b) => b - a)
    return Number(nums.join(''))
}

console.log(solution(118372))