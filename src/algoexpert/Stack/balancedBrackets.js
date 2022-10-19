function balancedBrackets(string) {
  // Write your code here.

  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (const s of string) {
    if (Object.keys(pair).indexOf(s) !== -1) {
      if (stack.length > 0 && stack[stack.length - 1] === pair[s]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s);
    }
  }
  if (stack.length > 0) return false;

  return true;
}

console.log(balancedBrackets("([])(){}(())()()"));
