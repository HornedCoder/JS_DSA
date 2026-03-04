/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
    
var isAnagram = function(s, t) {
    // mapS creates a map to check frequency of each word in a string.
    const mapS = new Map();
    for (const word of s){
        
        //This line gets the freq. of the word, if the word is not present then sets to 0.
        const currentCountS = mapS.get(word) || 0;
        mapS.set(word, currentCountS+1)
    }
    
    //Create a duplicate map.
    const mapT = mapS;

    //This loop decrements the freq. The logic is if the freq at the end becomes 0 for every
    // word then its an anagram.
    for (const word of t){
        const currentCountT = mapT.get(word)
        // If the character doesn't exist OR the count is already 0 return false.
        if (!currentCountT){
            return false;
        }

        mapT.set(word, currentCountT-1)
    }

    //Checks if freq/count of each word is 0.
    for (const count of mapT.values()){
        if (count != 0){
            return false;
        }
    }
    return true;

 
};
