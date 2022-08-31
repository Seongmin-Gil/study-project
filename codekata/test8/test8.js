const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left+right)/ 2);
        
        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        }
    }

    return -1
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 15;
console.log(search(nums, target))