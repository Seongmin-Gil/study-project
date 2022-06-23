const $display = document.getElementById('display');
const $result = document.getElementById('result');
const $list = document.getElementById('list');

let startTime;
let endTime;
let timeOut;
let timeResult = [];

function clickEvent(event) {
    if (event.target.classList.contains('wait')) {
        event.target.classList.replace('wait', 'ready');
        $display.textContent = '초록색으로 변하면 클릭하세요!!'
        timeOut = setTimeout(function () {
            startTime = new Date()
            $display.classList.replace('ready', 'start')
            $display.textContent = '클릭!!!'
        }, Math.floor(Math.random() * 1000) + 2000);
    } else if (event.target.classList.contains('ready')) {
        clearTimeout(timeOut);
        $display.classList.replace('ready', 'wait');
        $display.textContent = '너무 성급했어요!!'
    } else if (event.target.classList.contains('start')) {
        endTime = new Date()
        event.target.classList.replace('start', 'wait');
        $display.textContent = '클릭해서 시작하기'
        let result = endTime - startTime;
        timeResult.push(result);
        let average = timeResult.reduce((acc, el) => acc + el) / timeResult.length;
        $result.textContent = `결과 : ${result} ms, 평균 : ${average} ms`;
        const topList = timeResult.sort((a, b) => a - b).slice(0, 3);
        topList.forEach((top, index) => {
            $result.append(
                document.createElement('br'), `${index + 1}위: ${top} ms`
            );
        });
        startTime = null;
        endTime = null;
    }
}



$display.addEventListener('click', clickEvent);