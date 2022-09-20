function solution(s){
    let answer = true;
    const word = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;

    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'p') {
            pCount += 1;
        } else if(word[i] === 'y') {
            yCount += 1;
        }
    }

    if(pCount !== yCount) [
        answer = false
    ]

    return answer;
}

const s = 'PpsdYdy'
console.log(solution(s));