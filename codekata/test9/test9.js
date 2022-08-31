const selectionSort = (nums) => {
    // 아래 코드를 작성해주세요.
    let min;
    for (let i = 0; i < nums.length; i++) {
        min = nums[i];
        let index = i
        for (let j = i+1; j < nums.length; j++) {
            if (min > nums[j]) {
                min = nums[j];
                index = j
            }
        }
        [nums[i], nums[index]] = [nums[index], nums[i]]
    }
    return nums
}

const nums = [10, 5, 7, 1, 3, 2, 4, 6, 9, 8];
console.log(selectionSort(nums))