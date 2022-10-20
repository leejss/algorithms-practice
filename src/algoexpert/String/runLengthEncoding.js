function runLengthEncoding(string) {
    let stack = [];
    let answer = "";
    for (const currentChar of string) {
        if (stack.length === 0) {
            stack.push(currentChar);
            continue;
        }
        const top = stack[stack.length - 1];

        if (top === currentChar) {
            if (stack.length === 9) {
                stack = [currentChar];
                answer += `9${currentChar}`;
            } else {
                stack.push(currentChar);
            }
        } else {
            answer += `${stack.length}${top}`;
            stack = [currentChar];
        }
    }

    answer += `${stack.length}${stack[0]}`;
    return answer;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
