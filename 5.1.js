function askTvSeries(){
    let ask1 = prompt("What's the name of your favourite TV series ?");
    let ask2 = prompt("What's the year of the release for your TV series ?");
    let ask3 = [];
    let ask4 = prompt('Cast Members')

    while (ask4 !== 'End'){
        ask4 = prompt('Cast Members');
        ask3.push(ask4);
        
        if(ask4 === 'End'){

            ask3.pop();

        }
    }
    
    let object = {

        Name : ask1,

        Year : ask2,

        Actor : ask3,

    }

    return object;
}
console.log(askTvSeries())