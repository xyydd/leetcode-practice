/**
 * 给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     const l =nums.length
//     nums.sort((a ,b) => {
//         return a - b
//     });
//     const res = []
//     for (let i = 0; i < l; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         const target = -nums[i];
//         for (let j = i + 1; j < l; j++) {
//             let k = l - 1;
//             if (j > i + 1 && nums[j] === nums[j - 1]) {
//                 continue;
//             }

//             while (j < k && nums[j] + nums[k] > target) {
//                 k--;
//             }

//             if (k === j) {
//                 break
//             }
//             if (nums[j] + nums[k]  === target) {
//                 res.push([nums[i], nums[j], nums[k]])
//             }
//         }
//     }
//     return res
// };
var threeSum = function(nums) {
    var res = [];
    if(nums.length<3){
        return res;
    }
    nums = nums.sort((a,b)=>{return a-b});
    if(nums[0]>0){
        return res;
    }
    let len = nums.length;
    for(let i=0;i<len;i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        if(nums[i]>0){
            return res;
        }
        let L = i+1;
        let R = len-1;
        while(L<R){
            let tmp = nums[i]+nums[L]+nums[R];
            if(tmp==0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L<R && nums[L]==nums[L+1]) L++;
                while(L<R && nums[R]==nums[R-1]) R--;
                L++;
                R--;
            }else if(tmp<0){
                L++;
            }else{
                R--;
            }
        }
    }
    return res;
};
const a = [[-82,-11,93],[-82,13,69],[-82,17,65],[-82,21,61],[-82,26,56],[-82,33,49],[-82,34,48],[-82,36,46],[-70,-14,84],[-70,-6,76],[-70,1,69],[-70,13,57],[-70,15,55],[-70,21,49],[-70,34,36],[-66,-11,77],[-66,-3,69],[-66,1,65],[-66,10,56],[-66,17,49],[-49,-6,55],[-49,-3,52],[-49,1,48],[-49,2,47],[-49,13,36],[-49,15,34],[-49,21,28],[-43,-14,57],[-43,-6,49],[-43,-3,46],[-43,10,33],[-43,12,31],[-43,15,28],[-43,17,26],[-29,-14,43],[-29,1,28],[-29,12,17],[-14,-3,17],[-14,1,13],[-14,2,12],[-11,-6,17],[-11,1,10],[-3,1,2]]
console.log(a.length)
const res = threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49])
console.log(res)

let b = a.filter(item => {
    item.sort()
    for (let i = 0; i < res.length; i++) {
        let item2 = res[i].sort()
        if (item[0] === item2[0] && item[1] === item2[1] && item[2] === item2[2]) {
            return false
        }
    }
    return true
})
// 0:(3) [-29, 12, 17]
// 1:(3) [-14, -3, 17]
// 2:(3) [-14, 1, 13]
// 3:(3) [-11, -6, 17]
// 4:(3) [-11, 1, 10]
console.log(b)
