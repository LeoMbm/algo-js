function rand10() {
    return Math.floor(Math.random() * 10 + 1);
}

console.log(rand10())




function multiRand(n) {
   return Array.from({length: n}, () => rand10());
    }


   

console.log(multiRand(10))