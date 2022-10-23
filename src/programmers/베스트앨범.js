/**
 * 
 * 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
  장르 내에서 많이 재생된 노래를 먼저 수록합니다.
  장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 
 */

function solution(genres, plays) {
  const answer = [];
  const m = {};

  // 룩업 테이블을 생성한다.
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const song = [plays[i], i];
    if (genre in m) {
      m[genre][0].push(song);
      m[genre][1] += song[0];
    } else {
      m[genre] = [[song], song[0]];
    }
  }

  // 가장 많이 재생된 장르를 찾는다.
  const stack = [];
  for (const g in m) {
    if (stack.length === 0) {
      stack.push(g);
    } else {
      const top = stack[stack.length - 1];
      if (m[g][1] > m[top][1]) {
        stack.push(g);
      }
    }
  }

  // sort
  for (const g in m) {
    // m[g][0].sort((a, b) => (a[0] - b[0] > 0 ? -1 : 1));
    m[g][0].sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      } else if (a[0] === b[0]) {
        if (a[1] > b[1]) return 1;
        else return -1;
      }
      return 1;
    });
  }

  while (answer.length < 4 && stack.length !== 0) {
    const popped = stack.pop();
    const songs = m[popped][0];

    if (songs.length === 1) {
      answer.push(songs[0][1]);
    }
    if (songs.length > 1) {
      answer.push(songs[0][1]);
      answer.push(songs[1][1]);
    }
  }

  // 장르 내에서 가장 많이 재생된 노래 두 곡을 선정한다.
  // 재생 횟수가 같은 경우 고유 번호가 낮은 노래를 수록한다.

  // console.dir(m);
  // console.log(answer);

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
