function solution(s) {
  const lookup = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  var answer = "";
  const isChar = (char) => {
    return Object.is(parseInt(char), NaN);
  };
  let currentWord = "";
  for (const char of s) {
    if (!isChar(char)) {
      answer += char;
    } else {
      currentWord += char;
      if (currentWord in lookup) {
        answer += lookup[currentWord];
        currentWord = "";
      }
    }
  }

  return parseInt(answer);
}

solution("one4seveneight");
