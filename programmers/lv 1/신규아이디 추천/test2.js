// 프로그래머스 lv 1 신규아이디 추천
// 정규표현식 이용
function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^\w\.\-]/g, '').replace(/\.{2,}/g, '.').replace(/^\./, '').replace(/\.$/, '');
    if(!new_id) {
        new_id = 'a';
    }
    if(new_id.length >= 16) {
        new_id = new_id.slice(0, 15).replace(/\.$/, '');
    }
    if(new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id[new_id.length - 1])
    }
    return new_id;
}