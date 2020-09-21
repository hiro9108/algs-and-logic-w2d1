// Given an array of 10 numbers, return the maximum possible total 
// made by summing just 5 of the 10 numbers.

const maxTotal = function(arr) {
    const newArr = arr.sort((a, b) => a-b).slice(-5);
    const result = newArr.reduce((el, cur) => el + cur);
    console.log(result);
};

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) 
//➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) 
//➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
//➞ 40