function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const rotated = rotate(s, i);

        if (isValid(rotated)) {
            answer += 1;
        }
    }

    return answer;
}

const rotate = (s, k) => {
    const arr = Array.from(s);
    for (let i = 0; i < k; i++) {
        const first = arr[0];
        arr.shift();
        arr.push(first);
    }
    return arr.join("");
};

const isValid = (s) => {
    const lookup = {
        "}": "{",
        "]": "[",
        ")": "(",
    };
    const stack = [];
    for (const char of s) {
        if (stack.length === 0) {
            stack.push(char);
            continue;
        }
        const top = stack[stack.length - 1];
        if (char === "}" || char === ")" || char === "]") {
            if (top === lookup[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    if (stack.length > 0) return false;
    return true;
};

console.log(solution("[](){}"));
