function solution(clothes) {
  const closet = clothes.reduce((prev, cur) => {
    if (cur[1] in prev) {
      prev[cur[1]].push(cur[0]);
    } else {
      prev[cur[1]] = [cur[0]];
    }
    return prev;
  }, {});

  const countArr = Object.values(closet).map((v) => v.length + 1);
  const answer = countArr.reduce((prev, cur) => {
    return prev * cur;
  });

  return answer - 1;
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
