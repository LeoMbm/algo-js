function askTvSeries(){
    let ask1 = prompt("What's the name of your favourite TV series ?");
    let ask2 = prompt("What's the year of the release for your TV series ?");
    let ask3 = [];
    let ask4 = prompt('Cast Members')

    while (ask4 !== 'End'){
        ask4 = prompt('Cast Members');
        ask3.push(ask4);

    }
    
    let obj2 = {

        Name : ask1,

        Year : ask2,

        Actor : ask3,

    }

    return obj2;
}


console.log(askTvSeries())