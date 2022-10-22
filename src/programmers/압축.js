const generateDict = () => {
    const dict = {};
    for (let i = 0; i < 26; i++) dict[String.fromCharCode(65 + i)] = i + 1;
    return dict;
};

function solution(msg) {
    const dict = generateDict();
    let length = Object.keys(dict).length;
    let left = 0;
    let right = 1;
    const answer = [];

    while (left < msg.length) {
        let w = msg[left];
        while (true) {
            let c = msg.substring(left, right + 1);

            if (!dict[c]) {
                length += 1;
                dict[c] = length;
                answer.push(dict[w]);
                break;
            } else {
                right++;
                w = c;
                if (right >= msg.length) {
                    answer.push(dict[w]);
                    break;
                }
            }
        }
        left = right;
        right = left + 1;
    }

    return answer;
}

solution("KAKAO");
