function solution(d, budget) {
  d.sort((a, b) => a - b);

  let turn = 0;
  for (const a of d) {
    if (budget - a < 0) break;
    else {
      budget -= a;
      turn += 1;
    }
  }
  return turn;
}

solution([2, 2, 3, 3], 10);
