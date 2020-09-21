// Write a fucntion that takes an array of integers (positive or negative or both) and return 
// the sum of the absolute value of each element.

const getAbsSum = function(arr) {
    const result = arr.reduce((el, cur) => {
        return Math.abs(el) + Math.abs(cur)
    }, 0);
    console.log(result);
};


getAbsSum([2, -1, 4, 8, 10]) 
// ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) 
// ➞ 22

getAbsSum([2, 4, 6, 8, 10]) 
// ➞ 30

getAbsSum([-1]) 
//➞ 1