const getLengthOfStr = str => {
    // 아래 코드를 작성해주세요.
    let countMax = 0;
    let current_String = '';

    for (const index in str) {
        let char = str.charAt(index);
        let indexOfChar = current_String.indexOf(char);

        if (indexOfChar !== -1) {
            current_String = current_String.substr(indexOfChar + 1);
        }

        current_String += char;
        countMax = Math.max(countMax, current_String.length);
    }

    return countMax;
}

str = 'abcabcabc';
console.log(getLengthOfStr(str))