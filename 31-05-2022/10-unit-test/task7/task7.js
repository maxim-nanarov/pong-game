let array = [[1, 0, 1, 1],
             [1, 1, 1, 1],
             [1, 1, 0, 1],
             [1, 1, 1, 1],
             [1, 1, 1, 0]];

function fixForZero(array){
    console.log(array[0].length);
    console.log(array.length);
    let arrayOfIndex =[];
    
    for(let i = 0; i < array.length; i++){
        
        for(let j =0; j < array[0].length; j++){
            if(array[i][j] === 0){
            arrayOfIndex.push([i,j]);
            }
        }
    }

    for(let i = 0; i < arrayOfIndex.length; i++){
        let R = arrayOfIndex[i][0];//Rows
        let T = arrayOfIndex[i][1];//Cells
        nullfyRowsAndTours(array,R,T);
    }
    return array;
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function nullfyRowsAndTours(array, R, T){
    for(let i = 0; i < array.length; i++){
        array[i][T] = 0;
    }
    for(let i = 0; i < array[0].length; i++){
        array[R][i] = 0;
    }
    
}

fixForZero(array);
module.exports = fixForZero;