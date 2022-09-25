// https://leetcode.com/problems/find-the-k-beauty-of-a-number/
function divisorSubstrings(num: number, k: number): number {
  // k-beauty: number of substring that meet the following conditions
  // - length of k
  // - divisor of num - 나누어 떨어지는 수
  // - leading zeros are allowed ! => "01" means 1

  let answer = 0;

  // 1. convert num to string
  const numStr = `${num}`;

  // 2. make initial window
  let wdw = "";
  for (let i = 0; i < k; i++) {
    wdw += numStr[i];
  }

  // 3. initial check
  if (num % parseInt(wdw) === 0) answer += 1;

  // 4. sliding the window until (length - k)
  for (let i = 0; i < numStr.length - k; i++) {
    // remove left and add right => remove first char of wdw, and add numStr[i + k]

    wdw = `${wdw.slice(1)}${numStr[i + k]}`;

    if (num % parseInt(wdw) === 0) answer += 1;
  }

  console.log(answer);

  return answer;
}
