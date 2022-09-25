// https://leetcode.com/problems/flipping-an-image/

function flipAndInvertImage(image: number[][]): number[][] {
  const result: number[][] = [];
  // brute force ?
  for (let row of image) {
    const r: number[] = [];
    for (let item of row) {
      let cell = 0;
      if (item === 0) cell = 1;
      r.push(cell);
    }
    result.push(r.reverse());
  }

  return result;
}

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
