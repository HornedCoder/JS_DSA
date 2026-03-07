/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //Create a Map to store our groups.
    const groups = new Map();

    //Create a key which stores Anagrams.
    for (const s of strs){
        const sortedKey = s.split("").sort().join("");

        //Get the existing array or set an empty one for new key.
        if(!groups.has(sortedKey)){
            groups.set(sortedKey, [])
        }
        groups.get(sortedKey).push(s);
    }

    //Use of spread operator.
    return [...groups.values()]
};
