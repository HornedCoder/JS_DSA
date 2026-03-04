/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//This Solution is the farstest!!!


var twoSum = function(nums, target) {
    //Create a Map.
    mapNums = new Map();
    for (let i = 0; i< nums.length;i++){
        //Find the compliment.
        const comp = target - nums[i];
        //Check if the compliment is present or not?
        //This is a smart way. WHY????
        //We check the map before adding the current number.
        //This automatically prevents using the exact number twice.
        if (mapNums.has(comp)){
            return [mapNums.get(comp), i];
        }

        //Now we add the current number to map
        //Map => (key=nums[i]):(value=i)
        mapNums.set(nums[i],i);

    }

    
};
