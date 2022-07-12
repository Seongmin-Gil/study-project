//프로그래머스 lv 1 로또 최고 최저 순위

lottos = [2, 10, 0, 0, 32, 19];
win_nums = [5, 10, 22, 38, 19, 1];

function solution(lottos, win_nums) {
    let answer = [];
    const correctNum = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    const missNum = lottos.filter((lotto) => lotto === 0).length;
    let min = 7 - correctNum >= 6 ? 6 : 7 - correctNum;
    let max = min - missNum < 1 ? 1 : min - missNum;
    answer = [max, min]
    return answer;
}

console.log(solution(lottos, win_nums));