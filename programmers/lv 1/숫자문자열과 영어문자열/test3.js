//프로그래머스 lv1 숫자문자열과 영어문자열

const test = 'two4sixseven';

function solution(s) {
    var answer = 0;
    let result = s
    //num 배열을 만들어 각 인덱스 값에 해당하는 영어문자를 넣음
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
    //num 배열을 돌면서 해당 영어 단어가 존재하는지 확인
    for( let i = 0; i < num.length; i++) {
        //존재하는 영어 단어를 split를 통해 ''로 지움
        let arr = result.split(num[i]);
        //지워진 구간을 해당 인덱스 값으로 넣어서 숫자로 변환
        result = arr.join(i);
    }
    //처음에 문자열로 받았기 때문에 number로 변환
    return answer = parseInt(result)
}

console.log(solution(test));
//정규표현식과 reduce함수를 이용한 방법

const numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
function solutionTwo(s) {
    //reduce 함수 설명 : answer은 누적되는 값, current는 현재 값, index는 해당 배열의 index, s는 초기값
    //RegExp는 정규표현식으로 answer.relpace를 통해 numList에서 해당 단어를 정규표현식을 통하여 찾고 index값으로 변환
    return Number(numList.reduce((answer, current, index) => answer.replace(new RegExp(current, 'g'), index), s));
}

console.log(solutionTwo(test));