/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length-1;
    let ans = 0;
    let lMax = height[l];
    let rMax = height[r];
    
    while (l < r){
        if (lMax < rMax){
            l++;
            lMax = Math.max(lMax, height[l]);
            ans += lMax - height[l];
        }
        else{
            r--;
            rMax = Math.max(rMax, height[r]);
            ans += rMax- height[r];
        }
    }
    return ans
};
