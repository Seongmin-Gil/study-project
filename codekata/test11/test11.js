const reverseString = str => {
    // 여기에 코드를 입력해주세요.
    if (str.length === 0) {
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

const str = 'hello';
console.log(reverseString(str));