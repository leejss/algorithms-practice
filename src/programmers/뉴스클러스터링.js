function solution(str1, str2) {
    const filteredStr1 = Array.from(str1)
        .map((char) => char.toLowerCase())
        .join("");

    const filteredStr2 = Array.from(str2)
        .map((char) => char.toLowerCase())
        .join("");

    // console.log(filteredStr1);
    // console.log(filteredStr2);

    let stack = [];
    const ar1 = [];
    for (const letter of filteredStr1) {
        if (stack.length === 0) {
            stack.push(letter);
            continue;
        }

        // Push
        stack.push(letter);
        const joined = stack.join("");

        if (joined.match(/[a-z]/)) {
            console.log({ joined });
            ar1.push(joined);
        }
        stack = [];
        stack.push(letter);
    }

    console.log(ar1);

    stack = [];
    const ar2 = [];
    for (const letter of filteredStr2) {
    }

    // 교집합 / 합집합 * 65536
    // return answer;
}

solution("E=M*C^2", "e=m*c^2");

// 공집합일 경우 리턴 1
