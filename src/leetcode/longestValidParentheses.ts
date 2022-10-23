function longestValidParentheses(s: string): number {
  let longest = 0;
  let len = 0;
  const stack: string[] = [];

  for (const p of s) {
    if (p === "(") {
      stack.push(p);
      continue;
    } else {
      if (stack.length === 0) {
        stack.push(p);
        continue;
      } else {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          len += 2;
          if (len > longest) {
            longest = len;
          }
        } else {
          stack.push(p);

          len = 0;
        }
      }
    }
  }

  return longest;
}

longestValidParentheses("(()");
