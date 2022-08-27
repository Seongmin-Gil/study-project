const solution = N => {
    let bin = N.toString(2)
    console.log(bin);
    let zeroArr = bin.split(1)
    console.log(zeroArr)
    let countZeroArr = []

    for (let i of zeroArr) {
        countZeroArr.push(i.length)
    }
    console.log(countZeroArr)
    countZeroArr.pop()

    return Math.max(...countZeroArr)
}