/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    //Create a Map.
    const mapNums = new Map();
    for (const n of nums){
        const freq = mapNums.get(n) || 0;
        mapNums.set(n, freq+1);
    }

    //Sort Map based on values. It needs 3 steps to sort.
    //Step 1: Create an array of [key, values] pair.
    const mapArray = [...mapNums.entries()];
    //Step 2: Sort. Decreasing order thats why b[1]-a[1].
    mapArray.sort((a,b) => b[1]-a[1]);
    //Step 3: Convert back to Map.
    const sortedMap = new Map(mapArray)

    //Now create an array of keys which is in decending order already.(Line 19)
    const ans = []
    const keyArray = [...sortedMap.keys()];
    for (let i = 0; i<k ; i++){
        ans.push(keyArray[i])
    }

    return ans;


};
