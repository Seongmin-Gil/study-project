const input = document.getElementById("input");
const logs = document.getElementById("logs");
const form = document.getElementById("form");
const title = document.getElementById('tries');

// 숫자 배열 만들기
const number = [];
for (i=1; i<10;i++) {
    number.push(String(i));
    
}

// 정답 만들기
const answer = [];
for(i=0; i<4; i++) {
    let index = Math.floor(Math.random()*number.length);
    answer.push(number[index]);
    number.splice(index, 1);
}

let count = 1;

console.log("정답:", answer);

function checkIt(strike, ball) {``
    if(strike == 4) {
        const homeRun = document.createTextNode("Homerun");
        logs.appendChild(homeRun);
    } else if (strike === 0 && ball === 0) {
        const out = document.createTextNode("OUT");
        logs.appendChild(out);
    } else {
        const result = document.createTextNode(`strike: ${strike}, ball: ${ball}`);
        logs.appendChild(result);
    }
}

function submitEvent(event) {
    let strike = 0;
    let ball = 0;
    event.preventDefault();
    const value = input.value;
    input.value = '';
    const userNum = value.split('');
    if (count < 6) {
        const tries = document.createTextNode(`${count}번째 시도!!`)
        title.appendChild(tries);
        baseBallGame(userNum);
        checkIt(strike, ball);
        count += 1
    } else {
        console.log("게임 끝")
    }

    function baseBallGame(userNum) {
        for(i=0; i < answer.length; i++) {
            if (userNum.indexOf(answer[i]) >= 0) {
                if (i === userNum.indexOf(answer[i])) {
                    strike += 1;
                } else {
                    ball += 1;
                }
            }
        }
    }

    // const end = document.createTextNode("게임 종료");
    // logs.appendChild(end);
    
}

form.addEventListener('submit', submitEvent)