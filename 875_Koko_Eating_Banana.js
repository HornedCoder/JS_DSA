/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let result = high;

    const canFinish = (speed) =>{
        let hoursNeeded = 0;
        for (let pile of piles){
            hoursNeeded += Math.ceil(pile/speed)
        }

        return hoursNeeded <= h;
    };

    while (low <= high){
        let mid = Math.floor((low + high)/2);

        if (canFinish(mid)){
            result  = mid;
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }

    return result;
};
