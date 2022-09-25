// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
function countGoodSubstrings(s: string): number {
  const isGood = (wdw: string) => {
    return wdw.length === new Set(wdw).size;
  };
  let answer = 0;

  // 1. initial window
  let wdw = "";
  for (let i = 0; i < 3; i++) {
    wdw += s[i];
  }

  // 2. initial check
  if (isGood(wdw)) answer += 1;

  // 3. sliding the window
  for (let i = 0; i < s.length - 3; i++) {
    wdw = `${wdw.slice(1)}${s[i + 3]}`;
    if (isGood(wdw)) answer += 1;
  }

  return answer;
}
