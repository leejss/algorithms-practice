function solution(left, right) {
    let answer = 0;
    const getFactorsLength = (n) => {
        const arr = [];
        for (let i = 1; i < n + 1; i++) {
            if (n % i === 0) arr.push(i);
        }
        return arr.length;
    };

    for (let i = left; i < right + 1; i++) {
        const factorLength = getFactorsLength(i);
        if (factorLength % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    console.log(answer);
    return answer;
}

solution(6, 10);

// 지수에 1을 더한 값을 곱한다.
