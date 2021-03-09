/**
 * 给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length > 0) {
        let i = 0;
        let len = matrix[0].length;
        let y = matrix.length - 1;
        while (i <= len) {
            let low = 0;
            let hight = y;
            while (low <= hight) {
                let mid = Math.floor((low + hight) / 2);
                if (matrix[mid][i] === target) {
                    y = mid;
                    return true;
                } else if (matrix[mid][i] < target) {
                    y = mid;
                    low = mid + 1;
                } else {
                    hight = mid - 1;
                }
            }
            i++
        }
    }
    return false
};

console.time()
console.log(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20))
  console.timeEnd()