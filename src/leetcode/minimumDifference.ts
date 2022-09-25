// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
function minimumDifference(nums: number[], k: number): number {
  const sorted = [...nums].sort((a, b) => (a > b ? 1 : -1));

  let wdw: number[] = [];

  const getMinDiff = (nums: number[]): number => {
    if (nums.length < 2) return 0;
    return nums[nums.length - 1] - nums[0];
  };

  for (let i = 0; i < k; i++) {
    wdw.push(sorted[i]);
  }

  let minDiff = getMinDiff(wdw);

  for (let i = 0; i < nums.length - k; i++) {
    wdw = wdw.slice(1).concat(sorted[i + k]);
    const diff = getMinDiff(wdw);

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6);
