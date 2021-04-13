/**
 * @param {string} s
 * @return {number}
 * 使用有限状态机
 */
const EOF = Symbol('EOF');
const stack = [];
let n = '';
let op = '';

function data (c) {
    if (c === EOF) {
        if (op === '*') {
            n = stack.pop() * Number(n);
        } else if (op === '/') {
            n = Math.floor(stack.pop() / Number(n));
        } else if (op === '-') {
            n = - Number(n);
        } else {
            n = Number(n);
        }
        stack.push(n);
    } else if (c.match(/^[0-9]$/)) {
        return recordNumber(c);
    } else if (c === '+' || c === '-' || c === '*' || c === '/') {
        op = c;
        return handleOp(c);
    } else {
        return data
    }
}

function recordNumber (c) {
    if (c === EOF) {
        if (op === '*') {
            n = stack.pop() * Number(n);
        } else if (op === '/') {
            n = Math.floor(stack.pop() / Number(n));
        } else if (op === '-') {
            n = - Number(n);
        } else {
            n = Number(n);
        }
        stack.push(n);
    } else if (c.match(/^[0-9]$/)) {
        n += c;
        return recordNumber;
    } else {
        if (op === '*') {
            n = stack.pop() * Number(n);
        } else if (op === '/') {
            n = Math.floor(stack.pop() / Number(n));
        } else if (op === '-') {
            n = - Number(n);
        } else {
            n = Number(n);
        }
        op = '';
        return data(c);
    }
}

function handleOp (c) {
    stack.push(n);
    n = "";
    return data;
}
function getSum(total, num) {
    return total + num;
}
var calculate = function (s) {
    let state = data;
    for (let i = 0; i < s.length; i++) {
        state = state(s.charAt(i));
    }
    state = state(EOF);
    return stack.reduce(getSum)
};

console.log(calculate(" 3/2 \n"));