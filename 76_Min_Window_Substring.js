/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length === 0 || s.length === 0) return "";

    // 1. Build frequency map for t
    const tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    const window = new Map();
    let have = 0;
    const need = tMap.size; // Total unique characters needed
    
    let res = [-1, -1];
    let resLen = Infinity;
    let l = 0;

    // 2. Expand the right pointer
    for (let r = 0; r < s.length; r++) {
        const currLetter = s[r];
        window.set(currLetter, (window.get(currLetter) || 0) + 1);

        // Track if the current character meets the requirement
        if (tMap.has(currLetter) && window.get(currLetter) === tMap.get(currLetter)) {
            have++;
        }

        // 3. Shrink the window from the left as long as it's valid
        while (have === need) {
            // Update our minimum window result
            if ((r - l + 1) < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }

            const leftLetter = s[l];
            // Decrement the left character frequency
            window.set(leftLetter, window.get(leftLetter) - 1);

            // If a required character drops below the needed threshold, update 'have'
            if (tMap.has(leftLetter) && window.get(leftLetter) < tMap.get(leftLetter)) {
                have--;
            }
            l++; // Shrink window
        }
    }

    // 4. Return the substring if found, otherwise empty string
    return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);
};
