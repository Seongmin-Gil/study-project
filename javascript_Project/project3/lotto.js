const result = document.getElementById('result');
const bonusInput = document.getElementById('bonus');

const candidate = Array(45).fill().map((value, index) => index+1);

let shuffle = [];
let spliceArray = [];

for(let i = candidate.length; i > 0; i --) {
    const random = Math.floor(Math.random() * candidate.length);
    spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0]
    shuffle.push(value);
}

const winNum = shuffle.splice(0, 6);
winNum.sort((a, b) => a - b);
const bonusNum = shuffle[0]

function drawBall(number, parent) {
    const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = number;
        parent.appendChild(ball);
        if (number < 10) {
            ball.style.backgroundColor = 'red';
            ball.style.color = 'white';
        } else if (number < 20) {
            ball.style.backgroundColor = 'orange';
        } else if (number < 30) {
            ball.style.backgroundColor = 'yellow';
        } else if (number < 40) {
            ball.style.backgroundColor = 'blue';
            ball.style.color = 'white';
        } else {
            ball.style.backgroundColor = 'green';
            ball.style.color = 'white';
        }
}

for(let i=0; i < 6; i++) {
    setTimeout(() => {
        drawBall(winNum[i], result);
    }, 1000 * i+1);
}


setTimeout(() => {
    drawBall(bonusNum, bonusInput);
}, 7000);