function topK(nums, k) {
    // 여기에 코드를 작성해주세요.
    const arr = new Array(Math.max.apply(null, nums) + 1).fill(0);
    const result = [];
    console.log(arr)
    for (const num of nums) {
        console.log(num);
        arr[num] += 1;
    }
    console.log(arr)
    const sorted = arr.slice().sort((a, b) => b - a)
    console.log(sorted)
    for (let i = 0; i < k; i++) {
        result.push(arr.indexOf(sorted[i]));
    }
    return result
}

nums = [1, 1, 1, 2, 2, 3];
k = 2