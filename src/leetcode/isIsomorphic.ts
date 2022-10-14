// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let result = true;

  const counter = (arr: string) => {
    const m: Record<string, number> = {};

    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in m)) {
        m[arr[i]] = i;
      }
    }

    return m;
  };

  const sm = counter(s);
  const tm = counter(t);

  const sr = Array.from(s).map((char) => sm[char]);
  const tr = Array.from(t).map((char) => tm[char]);

  for (let i = 0; i < sr.length; i++) {
    if (sr[i] !== tr[i]) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isIsomorphic("foo", "bar"));

// foo => 011
// bar => 012

// { 0: f, 1: 0}

// bar
// {0 :b, 1: a, 2: r}

//
