class CacheMap {
  constructor(size) {
    this.m = new Array(size).fill("").reduce((prev, cur, idx) => {
      prev[idx] = cur;
      return prev;
    }, {});
  }

  getMap() {
    return this.m;
  }
}

function solution(cacheSize, cities) {
  var answer = 0;
  if (cacheSize === 0) return cities.length * 5;

  const cacheMap = new CacheMap(cacheSize);
  console.log(cacheMap.getMap());

  //     for (let i = 0; i < cities.length; i++) {
  //         const idx = i % cacheSize
  //         if (cacheMap[idx] === cities[idx].toLowerCase()) {
  //             answer += 1
  //         } else {
  //             answer += 5
  //         }

  //         cacheMap[]

  //     }
  return answer;
}
