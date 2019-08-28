
let dice = [1, 1, 1];
let i = 0;
let dice0 = document.querySelector('.dice0');
let dice1 = document.querySelector('.dice1');
let dice2 = document.querySelector('.dice2');

function InitialiseDice(){
    dice.forEach(el => {
        el = Math.floor(Math.random() * 6) + 1;
        dice[i++] = el;
    });
}

InitialiseDice();
console.log(dice);
dice0.textContent = dice[0];
dice1.textContent = dice[1];
dice2.textContent = dice[2];

