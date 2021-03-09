/**
 * @param {string} S
 * @return {string}
 */
// var removeDuplicates = function(S) {
//     for (let i = 0; i < (S.length - 1); i++) {
//         if (S[i] === S[i + 1]) {
//             let a = S[i]
//             return removeDuplicates(S.split(a + a).join(''));
//         }
//     }
//     return S
// };

var removeDuplicates = function(S) {
    if (S === '') {
        return S;
    }

    const stack = [];
    for (let i = 0; i < S.length; i++) {
        const a = S.charAt(i);
        if (stack.length <= 0) {
            stack.push(a);
        } else {
            if (a === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(a);
            }
        }
    }
    return stack.join('');
};

console.log(removeDuplicates('abbaca'))