// https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

// O(n^2)
function pivotIndex(nums: number[]): number {
  const sum = (arr: number[], l: number, r: number) => {
    if (l === r) return 0;
    return arr.slice(l, r).reduce((prev, cur) => prev + cur);
  };

  for (let i = 0; i < nums.length; i++) {
    const leftSum = sum(nums, 0, i);
    const rightSum = sum(nums, i + 1, nums.length);
    if (leftSum == rightSum) return i;
  }

  return -1;
}

// O(n)
function pivotIndex2(nums: number[]) {
  const totalSum = nums.reduce((prev, cur) => prev + cur);

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex2([2, 1, -1]));
