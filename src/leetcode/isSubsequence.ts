// https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) count++;
  }
  return count === s.length;
}
console.log(isSubsequence("abc", "ahbgdc"));
