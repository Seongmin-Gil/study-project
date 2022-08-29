const groupAnagrams = strs => {
    const newStrs = {};
    for (const str of strs) {
        const key = [...str].sort().join('');
        if (!newStrs[key]) {
            newStrs[key] = [];
        }
        newStrs[key].push(str);
    }
    return Object.values(newStrs);
};


const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));