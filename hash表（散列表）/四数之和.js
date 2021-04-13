/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const res = []
    const len = nums.length
    if (len < 4) {
        return res
    }
    nums.sort((a, b) => (a - b))

    for (let i = 0; i < len; i++) {
        if(i > 0 && nums[i]==nums[i-1]){
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if(j > (i + 1) && nums[j] === nums[j - 1]){
                continue;
            }
            let L = j+1;
            let R = len-1;
            while (L < R) {
                let tmp = nums[i]+nums[j]+nums[L]+nums[R];
                if(tmp === target){
                    res.push([nums[i],nums[j],nums[L],nums[R]]);
                    while(L<R && nums[L]==nums[L+1]) L++;
                    while(L<R && nums[R]==nums[R-1]) R--;
                    L++;
                    R--;
                }else if(tmp < target){
                    L++;
                }else{
                    R--;
                }
            }
        }
    }
    return res
};

const res = fourSum([2,2,2,2,2], 8)

console.log(res)