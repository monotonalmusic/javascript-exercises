const reverseString = function(input) {
    //Make variable to recieve input
    let reverse = '';
    for (i = 1;i < input.length+1; i++)
        reverse += input[input.length - i]

    return reverse
};

reverseString('bitch')

// Do not edit below this line
module.exports = reverseString;
