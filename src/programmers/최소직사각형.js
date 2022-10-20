function solution(sizes) {
  let mw = 0;
  let mh = 0;
  const flip = (size) => {
    return [size[1], size[0]];
  };

  for (const size of sizes) {
    const flipped = flip(size);
    const t1 = [mw, mh];
    const t2 = [mw, mh];

    if (size[0] > mw) {
      t1[0] = size[0];
    }
    if (size[1] > mh) {
      t1[1] = size[1];
    }

    if (flipped[0] > mw) {
      t2[0] = flipped[0];
    }
    if (flipped[1] > mh) {
      t2[1] = flipped[1];
    }
    if (t1[0] + t1[1] > t2[0] + t2[1]) {
      mw = t2[0];
      mh = t2[1];
    } else {
      mw = t1[0];
      mh = t1[1];
    }
  }

  return mw * mh;
}

function solution2(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
console.log(
  solution2([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
