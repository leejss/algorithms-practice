//https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

function runningSum(nums: number[]): number[] {
  // add previous sum
  let prevSum = 0;

  return nums.map((num) => {
    const result = num + prevSum;
    prevSum += num;
    return result;
  });
}

console.log(runningSum([1, 2, 3, 4]));
