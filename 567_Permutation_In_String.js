/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;


    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);

    // Fill s1Count then first Window of s2.
    for (let i =0; i< s1.length; i++){
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    // Helper Funct to check s1Count array and WindowCount Array are identical.
    const isMatch = (arr1, arr2) => arr1.every((val, i) => val === arr2[i]);

    // Sliding the window over s2.
    for (let i =0; i< s2.length-s1.length; i++){
        //Check for 1st window which we created on line 13 and then check other window as i gets iterated.
        if (isMatch(s1Count, windowCount)) return true;

        //Slide and update window.
        windowCount[s2.charCodeAt(i) -97]--;
        //Add thhe character at index 'i+s1.length'(new  window)
        windowCount[s2.charCodeAt(i+s1.length)-97]++;
    }

    //Check the last window
    return isMatch(s1Count, windowCount);

};
