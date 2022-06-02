let string = 'abcdefghijkmnopqura'; 

function firstDuplicate(string){

    for(let i =0; i < string.length; i++){

    let char = string[i]; 
    let counter = 0; 
    if(string[i] !== string[i - 1] || string[i] !== string[i + 1]){return }
        for(let j = 0; j < string.length; j++){

            if(char === string[j]){
            counter++;
                if(counter === 2){
                return (j+1); 
                }
            }
        }
    }
    return -1;
}

console.log(firstDuplicate(string));
module.exports = firstDuplicate;