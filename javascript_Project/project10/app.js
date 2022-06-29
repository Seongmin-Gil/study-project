const $beginner = document.querySelector('#beginner');
const $intermediate = document.querySelector('#intermediate');
const $highClass = document.querySelector('#highClass');
const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');
const $time = document.querySelector('#timer');
const grade = {
    beginner: {
        row: 10,
        cell: 10,
        mine: 10,
    },
    intermediate: {
        row: 25,
        cell: 25,
        mine: 50,
    },
    highClass: {
        row: 25,
        cell: 25,
        mine: 100,
    }
};

let row;
let cell;
let mine;
let data;
let openCount = 0;
let startTime;
let interval;



const CODE = {
    normal: -1,
    question: -2,
    flag: -3,
    questionMine: -4,
    flagMine: -5,
    Mine: -6,
    opened: 0,
}

function setMine() {
    const baseArr = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while (baseArr.length > row * cell - mine) {
        const chosen = baseArr.splice(Math.floor(Math.random() * baseArr.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.normal);
        }
    }
    for (let k = 0; k < shuffle.length; k++) {
        const mineRow = Math.floor(shuffle[k] / cell);
        const minCell = shuffle[k] % cell;
        data[mineRow][minCell] = CODE.Mine;
    }
    return data;
}

function countMine(rowIndex, cellIndex) {
    const mines = [CODE.Mine, CODE.flagMine, CODE.questionMine];
    let count = 0;
    mines.includes(data[rowIndex - 1]?.[cellIndex - 1]) && count++;
    mines.includes(data[rowIndex - 1]?.[cellIndex]) && count++;
    mines.includes(data[rowIndex - 1]?.[cellIndex + 1]) && count++;
    mines.includes(data[rowIndex][cellIndex - 1]) && count++;
    mines.includes(data[rowIndex][cellIndex + 1]) && count++;
    mines.includes(data[rowIndex + 1]?.[cellIndex - 1]) && count++;
    mines.includes(data[rowIndex + 1]?.[cellIndex]) && count++;
    mines.includes(data[rowIndex + 1]?.[cellIndex + 1]) && count++;
    return count;
}

function open(rowIndex, cellIndex) {
    if (data[rowIndex]?.[cellIndex] >= CODE.opened) return;
    const target = $tbody.children[rowIndex]?.children[cellIndex];
    if (!target) return;
    const count = countMine(rowIndex, cellIndex);
    target.textContent = count || '';
    target.className = 'opened';
    data[rowIndex][cellIndex] = count;
    openCount++;
    if (openCount === row * cell - mine) {
        const time = Math.floor((new Date() - startTime) / 1000);
        clearInterval(interval);
        $tbody.removeEventListener('contextmenu', onRightClick);
        $tbody.removeEventListener('click', onLeftClick);
        setTimeout(() => {
            alert(`승리했습니다! ${time}초가 걸렸습니다.`);
            history.go(0);
        }, 0);
    }
    return count;
}

function opendAround(rowIndex, cellIndex) {
    setTimeout(() => {
        const count = open(rowIndex, cellIndex);
        if (count === 0) {
            opendAround(rowIndex - 1, cellIndex - 1);
            opendAround(rowIndex - 1, cellIndex);
            opendAround(rowIndex - 1, cellIndex + 1);
            opendAround(rowIndex, cellIndex - 1);
            opendAround(rowIndex, cellIndex + 1);
            opendAround(rowIndex + 1, cellIndex - 1);
            opendAround(rowIndex + 1, cellIndex);
            opendAround(rowIndex + 1, cellIndex + 1);
        }
    }, 0);
}

function onLeftClick(event) {
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    const cellData = data[rowIndex][cellIndex];
    if (cellData === CODE.normal) {
        opendAround(rowIndex, cellIndex);
    } else if (cellData === CODE.Mine) {
        target.textContent = '뻥'
        target.className = 'openedMine'
        clearInterval(interval);
        $tbody.removeEventListener('contextmenu', onRightClick);
        $tbody.removeEventListener('click', onLeftClick);
        setTimeout(() => {
            alert(`패배...`);
            history.go(0);
        }, 0);
    }
}

function onRightClick(event) {
    event.preventDefault();
    const target = event.target;
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    const cellData = data[rowIndex][cellIndex];
    if (cellData === CODE.Mine) {
        data[rowIndex][cellIndex] = CODE.flagMine;
        target.className = 'flag';
        target.textContent = '!';
    } else if (cellData === CODE.flagMine) {
        data[rowIndex][cellIndex] = CODE.questionMine;
        target.className = 'question';
        target.textContent = '?';
    } else if (cellData === CODE.questionMine) {
        data[rowIndex][cellIndex] = CODE.Mine;
        target.className = '';
        target.textContent = 'X';
    } else if (cellData === CODE.normal) {
        data[rowIndex][cellIndex] = CODE.flag;
        target.className = 'flag';
        target.textContent = '!';
    } else if (cellData === CODE.flag) {
        data[rowIndex][cellIndex] = CODE.question;
        target.className = 'question';
        target.textContent = '?';
    } else if (cellData === CODE.question) {
        data[rowIndex][cellIndex] = CODE.normal;
        target.className = '';
        target.textContent = '';
    }
}

function drawTable() {
    data = setMine();
    data.forEach((row) => {
        const $tr = document.createElement('tr');
        row.forEach((cell) => {
            const $td = document.createElement('td');
            if (cell === CODE.Mine) {
                $td.textContent = 'X';
            }
            $tr.append($td);
        });
        $tbody.append($tr);
        $tbody.addEventListener('contextmenu', onRightClick);
        $tbody.addEventListener('click', onLeftClick)
    });
}

function startGame(event) {
    const lev = event.target.id;
    if (lev === 'beginner') {
        row = grade.beginner.row;
        cell = grade.beginner.cell;
        mine = grade.beginner.mine;
    } else if (lev === 'intermediate') {
        row = grade.intermediate.row;
        cell = grade.intermediate.cell;
        mine = grade.intermediate.mine;
    } else if (lev === 'highClass') {
        row = grade.highClass.row;
        cell = grade.highClass.cell;
        mine = grade.highClass.mine;
    }
    $time.style.display = 'block';
    drawTable();
    $beginner.removeEventListener('click', startGame);
    $intermediate.removeEventListener('click', startGame);
    $highClass.removeEventListener('click', startGame);
    startTime = new Date();
    interval = setInterval(() => {
        const time = Math.floor((new Date() - startTime) / 1000);
        $time.textContent = `${time}초`;
    }, 1000);
}

$beginner.addEventListener('click', startGame);
$intermediate.addEventListener('click', startGame);
$highClass.addEventListener('click', startGame);
