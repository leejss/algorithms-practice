function solution(nums) {
  const mx = nums.length / 2;

  const counter = nums.reduce((prev, cur) => {
    if (prev[cur]) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }
    return prev;
  }, {});

  return Object.keys(counter).length > mx ? mx : Object.keys(counter).length;
}
