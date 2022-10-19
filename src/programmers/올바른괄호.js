function solution(s) {
  const stack = [];
  for (const p of s) {
    if (p === "(") {
      stack.push(p);
    } else {
      if (stack.length === 0) return false;
      const top = stack[stack.length - 1];
      if (top !== "(") return false;
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
