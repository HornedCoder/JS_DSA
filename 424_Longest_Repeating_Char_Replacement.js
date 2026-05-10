/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    // Create an Array for each alphabet(A-Z) so that it can store their freq. inside window.
    const charArray = new Array(26).fill(0);

    for(let right = 0; right < s.length; right++){
        // Convert character to a 0-25 index ('A' has ASCII value 65)
        const rightIndex = s.charCodeAt(right) - 65;
        charArray[rightIndex] ++;

        // Update the maximum frequency seen in the current window
        maxFreq = Math.max(maxFreq, charArray[rightIndex]);

        // If characters to replace exceed k, shrink the window from the left
        const currWindowLength = right - left +1;

        if (currWindowLength - maxFreq > k){
            const leftIndex = s.charCodeAt(left) - 65;
            charArray[leftIndex] --;
            left++;
        }

        // Update the longest valid window length found so far
        maxLength = Math.max(maxFreq, right-left+1)
    }
    return maxLength;
    
};
