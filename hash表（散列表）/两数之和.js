/**
 * 给定一个包含n 个整数的数组nums和一个目标值target，判断nums中是否存在四个元素 a和b，使得a + b的值与target相等？找出所有满足条件且不重复的二元组。
 * 注意：答案中不可以包含重复的二元组。
 * 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var twoSum = function(nums, target) {
  let i = 0;
  let j = 1;
  while (i < nums.length) {
    if (nums[i] + nums[j] === target) {
      return [i, j]
    } else {
      if (j >= (nums.length - 1)) {
        i++;
        j = i + 1;
      } else {
        j++;
      }
    }
  }
  return []
};
