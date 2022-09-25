// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
function firstPalindrome(words: string[]): string {
  const isPalindrome = (word: string): boolean => {
    let start = 0;
    let end = word.length - 1;
    while (start < end) {
      if (word[start] !== word[end]) return false;
      start += 1;
      end -= 1;
    }
    return true;
  };

  for (const word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
}
