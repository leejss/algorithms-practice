function sortStack(stack) {
  const sorted = [];
  const findMin = (arr, result) => {
    if (arr.length === 0) {
      return;
    }
    const s = [];
    let idx = -1;

    for (let i = 0; i < arr.length; i++) {
      if (s.length === 0) {
        s.push(arr[i]);
      } else {
        if (arr[i] < s[arr.length - 1]) {
          s.push(arr[i]);
          idx = i;
        }
      }
    }
    result.push(s[s.length - 1]);
    findMin(arr.splice(arr.splice(idx, 1)), result);
  };

  findMin(stack, sorted);
  return sorted;
}
