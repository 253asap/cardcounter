const PLUSBTN = document.getElementById('plusBtn');
const MINUSBTN = document.getElementById('minusBtn');
const ZEROBTN = document.getElementById('zeroBtn');
const RESETBTN = document.getElementById('resetBtn');
const DECKINPUT = document.getElementById('decksLeft');
const COUNTOUTPUT = document.getElementById('count');
const TRUECOUNTOUTPUT = document.getElementById('trueCount');
const DECKCOUNTOUTPUT = document.getElementById('deckCount');

let count = 0;
let deckCount = 8;
let cardsPassed = 0;

let updateDisplays = (decks) =>{
    console.log(parseInt(decks));
    COUNTOUTPUT.innerHTML = count;
    TRUECOUNTOUTPUT.innerHTML = count / decks;
    DECKCOUNTOUTPUT.innerHTML = decks;
}

let cardPassed = ()=>{
    cardsPassed++;
    let decks = deckCount;
    let deckTotal = decks * 52;
    deckTotal = deckTotal - cardsPassed;
    if(deckTotal/52 < Math.ceil(deckTotal/52)-0.5 ){
        decks = Math.floor(deckTotal/52);
    }else{
        decks = Math.ceil(deckTotal/52);
    }
    updateDisplays(decks);
}

let increaseCount = ()=>{
    count++;
    cardPassed()
    updateDisplays();
}

let decreaseCount = ()=>{
    count--;
    cardPassed()
    updateDisplays();
}

let resetEverything = ()=>{
    count = 0;
    deckCount = 8;
    cardsPassed = 0;
    updateDisplays();
}

PLUSBTN.addEventListener('click', increaseCount);
MINUSBTN.addEventListener('click', decreaseCount);
ZEROBTN.addEventListener('click', cardPassed);
RESETBTN.addEventListener('click', resetEverything);
