function solution(answers) {
  const result = [0, 0, 0];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (p1[i % p1.length] === answer) result[0] += 1;
    if (p2[i % p2.length] === answer) result[1] += 1;
    if (p3[i % p3.length] === answer) result[2] += 1;
  }

  const max = result.reduce((prev, cur) => {
    if (cur > prev) prev = cur;
    return prev;
  }, 0);

  const answer = [];
  result.forEach((p, i) => {
    if (p === max) {
      answer.push(i + 1);
    }
  });
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
