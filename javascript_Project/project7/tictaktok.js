const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');

const rows = [];
let mark = 'O';

const markChange = () => {
    // if(mark === 'O') {
    //     mark = 'X';
    // } else {
    //     mark = 'O';
    // }

    mark = mark === 'O' ? 'X' : 'O'; // 삼항 연산자로 변환
}

const winner = (target) => {
    // let rowIndex;
    // let cellIndex;

    // rows.forEach((row, ri) => {
    //     row.forEach((cell, ci) => {
    //         if (cell === target) {
    //             rowIndex = ri;
    //             cellIndex = ci;
    //         }
    //     });
    // });
    // 위의 코드를 아래와 같이 rowIndex와 cellIndex 함수를 이용하여 간단하게 만들 수 있음
    let rowIndex = target.parentNode.rowIndex;
    let cellIndex = target.cellIndex;
    let userWinner = false;
    // row 일치 
    if (rows[rowIndex][0].textContent === mark &&
        rows[rowIndex][1].textContent === mark &&
        rows[rowIndex][2].textContent === mark) {
        userWinner = true;
    }
    // cell 일치

    if (rows[0][cellIndex].textContent === mark &&
        rows[1][cellIndex].textContent === mark &&
        rows[2][cellIndex].textContent === mark) {
        userWinner = true;
    }
    // 대각선
    if (rows[0][0].textContent === mark &&
        rows[1][1].textContent === mark &&
        rows[2][2].textContent === mark) {
        userWinner = true;
    }
    if (rows[2][2].textContent === mark &&
        rows[1][1].textContent === mark &&
        rows[0][0].textContent === mark) {
        userWinner = true;
    }
    return userWinner;
}

const winnerAndDraw = (target) => {
    const userWinner = winner(target);
    if (userWinner) {
        $result.textContent = `${mark} 승리!!!`;
        $table.removeEventListener('click', clickEvent);
        return;
    }
    // 무승부
    // let draw = true;
    // rows.forEach((row) => {
    //     row.forEach((cell) => {
    //         if(!cell.textContent) {
    //             draw = false;
    //         }
    //     });
    // });
    //flat()함수를 통해 2차배열을 1차 배열로 만듬
    // every함수를 이용하여 cell 배열에 모든 내용이 있으면 true 반환
    let draw = rows.flat().every((cell) => cell.textContent);
    if (draw) {
        $result.textContent = '무승부';
        return;
    }
    markChange();
}

const clickEvent = (event) => {
    if (event.target.textContent !== '') {
        console.log('빈칸이 아님!!');
        return;
    }
    event.target.textContent = mark;
    winnerAndDraw(event.target);
    //컴퓨터 차례
    if (mark === 'X') {
        //비어있는 cell 파악하기
        const emptyCells = rows.flat().filter((value) => !value.textContent);
        //비어있는 cell 중 무작위 하나 선정
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.textContent = 'X';
        //승리 여부 파악 후 mark 변환
        winnerAndDraw(randomCell);
    }
}

for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td');
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
    $table.addEventListener('click', clickEvent); //이벤트 버블링을 이용해서 $td에서 발생하는 이벤트도 동작 가능
}

body.appendChild($table);
body.appendChild($result);

