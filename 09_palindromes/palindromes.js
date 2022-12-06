const palindromes = function (string) {
    const upper = string.toUpperCase()
    const filterString = upper.split('').filter(char => /[a-zA-Z]/.test(char))
    const newString = filterString.join('')
    const reveArrVal = filterString.reverse()
    const revString = reveArrVal.join('')
    
    if (newString === revString) {
        return true
    }
    else {
        return false
    }
    
};
// Do not edit below this line
module.exports = palindromes;
