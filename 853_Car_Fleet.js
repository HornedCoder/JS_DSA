/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a,b) => b[0] - a[0]);

    const stackTime = [];
    for (const [p, s] of cars){
        currTime = (target-p) / s;

        if (stackTime.length === 0 || currTime > stackTime[stackTime.length-1]){
            stackTime.push(currTime);
        }
    }

    return stackTime.length;
    
};
