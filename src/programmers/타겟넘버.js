// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  var answer = 0;
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);
  return answer;
}

solution([1, 1, 1, 1, 1], 3);

`
  dfs는 탐색 알고리즘.
  조합 문제?  

  dfs -> recursion.
  recursion
    - 1. base case
    - 2. action when called
    - 3. action when returned

  dfs 파라미터 정하기
    - shared context or local variables

  
// binary tree ? 

              0
           -1   +1
         -1 +1 -1 +1


// why ? 

// simple array => graph thinking
dfs()
dfs()
dfs()
`;
