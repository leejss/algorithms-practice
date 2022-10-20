function solution(n, words) {
  const wordTable = {
    [words[0]]: 1,
  };

  let answer = [0, 0];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const th = (i % n) + 1;
    if (th === 1) {
      turn++;
    }

    const prevWord = words[i - 1];
    if (prevWord[prevWord.length - 1] !== word[0]) {
      answer = [th, turn];
      break;
    }
    if (word in wordTable) {
      answer = [th, turn];
      break;
    }
    wordTable[word] = th;
  }
  return answer;
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);

// 특정 인덱스애 도달했을 때 혹은 어떤 조건에 의해 turn이 올라가는지 정하기
