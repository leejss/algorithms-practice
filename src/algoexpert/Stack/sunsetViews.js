function sunsetViews(buildings, direction) {
  // Write your code here.
  const stack = [];
  if (direction === "EAST") {
    for (let i = buildings.length - 1; i > -1; i--) {
      if (stack.length === 0) {
        stack.push(i);
      } else {
        if (buildings[i] > buildings[stack[stack.length - 1]]) {
          stack.push(i);
        }
      }
    }
  } else {
    for (let i = 0; i < buildings.length; i++) {
      if (stack.length === 0) {
        stack.push(i);
      } else {
        if (buildings[i] > buildings[stack[stack.length - 1]]) {
          stack.push(i);
        }
      }
    }
  }
  return stack.sort((a, b) => (a > b ? 1 : -1));
}
