type SpecialArray = Array<number | SpecialArray>;

function helper(arr: SpecialArray, m: number) {
  let sum = 0;
  for (const e of arr) {
    if (Array.isArray(e)) {
      sum = helper(e, m + 1);
    } else {
      sum += e;
    }
  }
  return sum * m;
}

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray) {
  // Write your code here.
  return helper(array, 1);
}

// pass different parameters when further calling the function
// how function looks?

// recursive funciton
// when to stop calling?

// base condiiton or 얼마나 호출하는지 정하기. for loop을 이용해서
