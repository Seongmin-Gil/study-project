//프로그래머스 키패드누르기 

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//각 위치별 중간 번호들과의 거리 계산을 위한 식
function getDistance(ax, ay, bx, by) {
    return Math.abs(ax - bx) + Math.abs(ay - by);
}

function solution(numbers, hand) {
    let answer = '';
    // 각 패드의 위치를 좌표로 미리 설정
    const pad = {
        "1" : [0, 3],
        "4" : [0, 2],
        "7" : [0, 1],
        "*" : [0, 0],
        "2" : [1, 3],
        "5" : [1, 2],
        "8" : [1, 1],
        "0" : [1, 0],
        "3" : [2, 3],
        "6" : [2, 2],
        "9" : [2, 1],
        "#" : [2, 0],
    }
    //처음 손가락 위치
    const position = ["*", "#"];

    for (let i = 0; i < numbers.length; i++) {
        //왼손가락은 3으로 나눈 나머지 1인 경우
        if (numbers[i] % 3 === 1) {
            position[0] = numbers[i];
            answer += "L";
        // 오른손가락은 3으로 나눠 떨어지는 수, 0제외
        } else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
            position[1] = numbers[i];
            answer += "R";
        //키패드 중간 값인 경우
        } else {
            //키패드 값의 좌표를 구함
            const [mx, my] = pad[numbers[i]];
            //현재 왼손의 좌표를 구함
            const [lx, ly] = pad[position[0]];
            //현재 오른손의 좌표를 구함
            const [rx, ry] = pad[position[1]];
            //각 손가락과 중간값의 거리를 구함
            const leftPosition = getDistance(lx, ly, mx, my);
            const rightPosition = getDistance(rx, ry, mx, my);
            //가까운 값의 손가락으로 결정 같을 경우 주 손으로 결정
            if (leftPosition > rightPosition) {
                position[1] = numbers[i];
                answer += "R";
            } else if (rightPosition > leftPosition) {
                position[0] = numbers[i];
                answer += "L";
            } else {
                if(hand === "left") {
                    position[0] = numbers[i];
                    answer += "L";
                } else {
                    position[1] = numbers[i];
                answer += "R";
                }
            }
        }
    }
    return answer;
}

console.log(solution(test, 'left'));