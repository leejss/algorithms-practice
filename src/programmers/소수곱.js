function solution(n) {
    let answer = [-1, -1];

    for (let i = 2; i < n / 2 + 1; i++) {
        const remainder = n % i;
        if (remainder === 0) {
            const quo = n / i;
            if (isPrime(i) && isPrime(quo)) {
                answer = [i, quo];
                break;
            }
        }
    }
    return answer;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
