const bubbleSort = nums => {
    // 여기에 코드를 작성해주세요.
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                [[nums[j]], [nums[j + 1]]] = [[nums[j + 1]], [nums[j]]]
            }
        }
    }
    return nums
}

const nums = [6, 5, 3, 2, 8];

console.log(bubbleSort(nums));