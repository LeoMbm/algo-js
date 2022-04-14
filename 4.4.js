
function pickLearner(inputAr){
   
    const arrIndex = Math.floor(Math.random() * inputAr.length);
    const item = inputAr[arrIndex];

    return item;
}

let arr = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];

let result = arrIndex(arr);

console.log(result)


