var halvesAreAlike = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    function countVowels(str) {
        let count = 0;
        for (let char of str) {
            if (vowels.has(char)) {
                count++;
            }
        }
        return count;
    }
    const mid = s.length / 2;
    const a = s.slice(0, mid);
    const b = s.slice(mid);
    const countA = countVowels(a);
    const countB = countVowels(b);
    return countA === countB;
};
const s = "textbook";
console.log(halvesAreAlike(s))