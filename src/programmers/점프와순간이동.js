function solution(n) {
    const minBattery = (n) => {
        if (n === 1) return 1;
        if (n % 2 === 0) {
            return minBattery(n / 2);
        } else {
            return minBattery((n - 1) / 2) + 1;
        }
    };
    return minBattery(n);
}
