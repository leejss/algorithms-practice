function solution(brown, yellow) {
    let answer = [];
    // 총 타일 개수를 구한다.
    const total = brown + yellow;
    const x = ((yellow - total - 4) * -1) / 2;
    console.log(x);

    let combs = [];

    // 곱해서 총 타일 갯수가 되는 값을 구한다.

    // 가로 세로의 곱은 다음 조건을 만족해야 한다.
    // 1. 중앙에는 노란색.
    // 2. 테투리 1줄은 갈색
    // 3. 가로는 세로보다 크거나 같다.

    // 테두리에 들어가야할 갈색 타일의 갯수

    for (let i = 1; i <= total; i++) {
        if (total % i === 0) combs.push([i, total / i]);
    }
    for (const comb of combs) {
        const [w, h] = comb;
        if (h > w) continue;
        if (w + h === x) {
            answer.push(w, h);
            break;
        }
    }
    return answer;
}
