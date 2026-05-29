/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][matrix[i].length-1] >= target){
            return matrix[i].includes(target);
        }
        else{
            continue;
        }
    }
    return false;
    
};

// Better solution is to use BS, faltten the 2d array into 1d and
//then implement BS.
