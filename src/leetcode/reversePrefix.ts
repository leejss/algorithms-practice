// https://leetcode.com/problems/reverse-prefix-of-word/
function reversePrefix(word: string, ch: string): string {
  const arr = Array.from(word);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      reverseArr(arr, 0, i);
      break;
    }
  }

  return arr.join("");
}

const reverseArr = (wordArr: string[], left: number, right: number) => {
  while (left < right) {
    swap(wordArr, left, right);
    left += 1;
    right -= 1;
  }
};

const swap = (arr: string[], left: number, right: number) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};
