/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 1. Convert to lowercase and remove non-alphanumeric characters
    // [^a-z0-9] means "anything that is NOT a letter or a digit"
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Check if the string matches its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
};
