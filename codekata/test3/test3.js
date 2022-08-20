const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

const minPathSum = grid => {
    const result = [];
    const rightLength = grid[0].length-1;
    const underLength = grid.length-1;

    const path = (under, right, acc) => {
        acc += grid[under][right];
        if(right < rightLength && under < underLength) {
            path(under, right + 1, acc);
            path(under + 1, right, acc);
        }
        if(right === rightLength && under < underLength) {
            path(under + 1, right, acc);
        }
        if(right < rightLength && under === underLength) {
            path(under, right + 1, acc);
        }
        if(right === rightLength && under === underLength ) {
            result.push(acc);
        }
    }
    path(0,0,0)
    return Math.min(...result);
}

console.log(minPathSum(grid));