/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let l = 0;
    let n = s.length;
    let charSet =  new Set()
    
    for (let r = 0; r<n; r++){
        while (charSet.has(s[r])){
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        ans = Math.max(ans, r-l+1);
    }
    return ans;


};
