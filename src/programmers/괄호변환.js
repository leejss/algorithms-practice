const isComplete = (s) => {
    const stack = [];

    for (const char of s) {
        if (char === "(") {
            stack.push(char);
        } else {
            const popped = stack.pop();
            if (popped !== "(") return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
};

const isBalanced = (s) => {
    const counter = Array.from(s).reduce((obj, cur) => {
        if (obj[cur]) {
            obj[cur] += 1;
        } else {
            obj[cur] = 1;
        }
        return obj;
    }, {});

    const leftLength = counter["("];
    const rightLength = counter[")"];
    return leftLength === rightLength;
};

const split = (s) => {
    let w = "";
    let v = "";
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }
        stack.push(s[i]);
        const joined = stack.join("");
        if (isBalanced(joined)) {
            w = Array.from(s)
                .slice(0, i + 1)
                .join("");
            v = Array.from(s)
                .slice(i + 1)
                .join("");
        }
    }
    return [w, v];
};

function solution(p) {
    let answer = "";
    // 빈 문자열을 반환
    if (p === "") return "";
    // 만약 p가 올바른 문자열이라면 그대로 반환한다.
    if (isComplete(p)) return p;

    // 문자열 p는 균형잡힌 문자열
    // p를 균형잡힌 문자열 u,v로 분리한다. u + v
    let [u, v] = split(p);

    if (isComplete(u)) {
        // u가 올바른 괄호 문자열인 경우 v에 대해서 알고리즘을 수행한다.
        const result = solution(v);
        u = u + result;
        return u;
    } else {
        answer += solution(v);
        answer += ")";
    }
    return answer;
}

console.log(solution(")("));
