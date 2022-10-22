function solution(s) {
    const filtered = s
        .split("}")
        .filter(Boolean)
        .map((item) => item.replaceAll(/{/gi, ""))
        .map((item) => item.split(",").filter(Boolean))
        .sort((a, b) => a.length - b.length)
        .flat();

    const table = {};
    const answer = [];
    for (let i = 0; i < filtered.length; i++) {
        const currentN = parseInt(filtered[i]);
        console.log(i, currentN);
        if (i === 0) {
            table[currentN] = true;
            answer.push(currentN);
        }
        if (!table[currentN]) {
            table[currentN] = true;
            answer.push(currentN);
        }
    }

    console.log(table);
    console.log(answer);
    return answer;
}

// "{{2},{2,1},{2,1,3},{2,1,3,4}}"
solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");

// function solution(s) {
//     return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
//         .sort((a, b) => a.length - b.length)
//         .reduce((arr, v, n) => {
//             if (n) {
//                 return arr.concat(v.filter((f) => !arr.includes(f)));
//             }
//             return v;
//         }, []);
// }
