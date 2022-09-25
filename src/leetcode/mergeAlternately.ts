// https://leetcode.com/problems/merge-strings-alternately/
function mergeAlternately(word1: string, word2: string): string {
  const answerArr: string[] = [];

  let l1 = 0;
  let l2 = 0;
  let n = 0;
  // How to express alternation?
  while (l1 < word1.length && l2 < word2.length) {
    if (n === 0 || n % 2 === 0) {
      // word1
      answerArr.push(word1[l1]);
      l1++;
    } else {
      // word2
      answerArr.push(word2[l2]);
      l2++;
    }
    n++;
  }

  // clean-up
  if (word1.length > word2.length) {
    for (let i = l1; i < word1.length; i++) {
      answerArr.push(word1[i]);
    }
  } else {
    for (let i = l2; i < word2.length; i++) {
      answerArr.push(word2[i]);
    }
  }

  return answerArr.join("");
}
