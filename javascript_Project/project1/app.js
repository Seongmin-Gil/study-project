const input = document.querySelector("#input");
const btn = document.querySelector("button");
const word = document.getElementById("word");
const order = document.getElementById("order");

const number = Number(prompt("몇명 참가하나요?"));


function onClick() {
    let player = Number(order.textContent);
    if(player < number) {
        player += 1;
        order.textContent = player;
    } else {
        order.textContent = 1;
    }
    game()
}

let gameWord;

function game() {
    let newWord = input.value;
    if((!gameWord || gameWord[gameWord.length-1] === newWord[0]) && newWord.length === 3) {
        gameWord = newWord;
        word.innerText = gameWord;
    } else if(newWord.length !== 3){
        alert("3글짜를 입력하세요.")
    } else {
    alert("틀렸습니다요!!!");
    }
    input.value = '';
    input.focus();
}

btn.addEventListener('click', onClick);