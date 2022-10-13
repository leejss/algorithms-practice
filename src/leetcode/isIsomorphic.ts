// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
function isIsomorphic(s: string, t: string): boolean {
  // occurrance map
  // keep order

  const counter = (arr: string) => {
    return Array.from(arr).reduce((prev, cur) => {
      if (!(cur in prev)) {
        prev[cur] = 1;
      } else {
        prev[cur] += 1;
      }
      return prev;
    }, {} as Record<string, number>);
  };

  const counterSLength = Object.keys(counter(s)).length;
  const counterTLength = Object.keys(counter(t)).length;

  return counterSLength !== counterTLength ? false : true;
}

isIsomorphic("badc", "baba");
