function solution(sizes) {
    const sortArr = sizes.map(([w, h]) => w < h ? [h , w] : [w, h]);
    
    let maxArr = [0, 0];
    sortArr.forEach(([w, h]) => {
        if (w > maxArr[0]) maxArr[0] = w;
        if(h > maxArr[1]) maxArr[1] = h;
    })
    
    return maxArr[0] * maxArr[1];
}

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

console.log(solution(sizes));