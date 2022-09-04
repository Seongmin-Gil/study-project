function solution(arr)
{
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i-1] !== arr[i]) {
            answer.push(arr[i])
        }
    }
    return answer;
}

const arr = [1, 1, 1, 1, 3, 4, 4, 5, 6];

console.log(solution(arr));