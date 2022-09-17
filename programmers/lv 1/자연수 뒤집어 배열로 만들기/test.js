function solution(n) {
    const nums = String(n)
    var answer = [];
    let count = nums.length-1;
    while(count >= 0) {
        answer.push(Number(nums[count]))
        count -= 1
    }
    return answer;
}

const n = 12345;
console.log(solution(n));