// Given what is supposed to be typed and what is actually typed, 
// write a function that returns the broken key(s).
// The function looks like:

// so imagine this function is trying to figure out which keys on the keyboard are broken
// so you’re figuring out which characters in the second string are incorrect, then returning them in an array.


const findBrokenKeys = (correctStr, typedStr) => {
    // Check tyeped length.
    if (correctStr.length !== typedStr.length) {
        console.log("You shold type correct word length!")
    }
    // Compare words.
    const resultArr = [];
    for (let i = 0; i < correctStr.length; i++) {
        if (correctStr[i] !== typedStr[i]) {
            resultArr.push(correctStr[i]);
        }
        
    }
    // Remove multiple value.
    const removeMultiElement = new Set(resultArr);
    // Go back array.
    return Array.from(removeMultiElement);
};


// findBrokenKeys(correct phrase, what you actually typed)
console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
//  ➞ ["p"]
console.log(findBrokenKeys("starry night", "starrq light"))
//  ➞ ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5"))
//  ➞ ["b", "e", "v", "n"]

