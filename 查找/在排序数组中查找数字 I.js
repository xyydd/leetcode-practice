/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let hight = nums.length - 1;
    let len = nums.length - 1;
    let count = 0;
    let targetI = -1;
    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2);
        if (target === nums[mid]) {
            targetI = mid;
            count++;
            break;
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            hight = mid - 1
        }
    }
    let c = 1;
    if (targetI !== -1) {
        while ((targetI - c) >= 0 || (targetI + c) <= len) {
            let a = targetI - c;
            let b = targetI + c;
            c++;
            if (a >= 0) {
                if (nums[a] === target) {
                    count++
                }
            }
            if (b <= len) {
                if (nums[b] === target) {
                    count++
                }
            }
        }
        return count;
    } else {
        return count;
    }
};

console.log(search([2,2], 2));
