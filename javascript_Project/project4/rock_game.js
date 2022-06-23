const $computer = document.getElementById('computer');
const $score = document.getElementById('score');
const $scissors = document.getElementById('scissors');
const $rock = document.getElementById('rock');
const $paper = document.getElementById('paper');

const IMG_URL = './img/rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`; // 가위
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
    scissors: '0', // 가위
    rock: '-220px', // 바위
    paper: '-440px', // 보
};

let computerChoice = 'scissors';
const changeComputerHand = () => {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors';
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') {
        computerChoice = 'rock';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
}
let intervall = setInterval(changeComputerHand, 50);
let score = 0;

//비동기 함수로 인한 중복 실행을 막기 위한 요소
let clickable = true;
function clickButton(event) {
    if (clickable) {
        clearInterval(intervall);
        let user = event.target.id;
        user = numberChange(user);
        let computerChoiceNum = numberChange(computerChoice);
        let diff = user - computerChoiceNum;
        let message;
        if (diff === -1 || diff === 2) {
            score -= 1;
            message = '패배';
        } else if (diff === -2 || diff === 1) {
            score += 1;
            message = '승리';
        } else {
            message = '무승부';
        }
        $score.textContent = `${message} 총점 : ${score}점`;
        clickable = false;
        setTimeout(() => {
            clickable = true;
            intervall = setInterval(changeComputerHand, 50);
        }, 1000);
    }
}

// 가위는 0, 바위는 1, 보는 2로 숫자 변환
function numberChange(id) {
    if (id === 'scissors') {
        id = 0;
    } else if (id === 'rock') {
        id = 1;
    } else if (id === 'paper') {
        id = 2;
    }
    return id;
}



$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);