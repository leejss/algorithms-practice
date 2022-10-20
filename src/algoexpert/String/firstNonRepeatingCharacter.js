function firstNonRepeatingCharacter(string) {
    // Write your code here.

    const lookup = Array.from(string).reduce((obj, letter, index) => {
        if (letter in obj) {
            obj[letter].push(index);
        } else {
            obj[letter] = [index];
        }
        return obj;
    }, {});

    let minIdx = string.length;
    for (const key in lookup) {
        if (lookup[key].length > 1) continue;
        if (lookup[key][0] < minIdx) {
            minIdx = lookup[key][0];
            answer = key;
        }
    }

    return minIdx === string.length ? -1 : minIdx;
}

firstNonRepeatingCharacter("abcdcaf");
