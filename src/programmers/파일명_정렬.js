function solution(files) {
    let answer = [];
    const lookupArr = [];
    for (const file of files) {
        lookupArr.push(generate(file));
    }

    answer = lookupArr.sort((a, b) => {
        if (a.HEAD.toLocaleLowerCase() > b.HEAD.toLocaleLowerCase()) {
            return 1;
        } else if (a.HEAD.toLocaleLowerCase() < b.HEAD.toLocaleLowerCase()) {
            return -1;
        } else {
            // Same HEAD
            if (parseInt(a.NUMBER) > parseInt(b.NUMBER)) {
                return 1;
            } else if (parseInt(a.NUMBER) < parseInt(b.NUMBER)) {
                return -1;
            } else {
                // Same NUMBER
                return 0;
            }
        }
    });
    answer = answer.map((obj) => Object.values(obj).join(""));
    return answer;
}

const generate = (filename) => {
    const lookup = {
        HEAD: "",
        NUMBER: "",
        TAIL: "",
    };
    let arr = Array.from(filename);

    for (let i = 0; i < arr.length; i++) {
        if (/[0-9]/.test(arr[i])) {
            lookup.HEAD = arr.slice(0, i).join("");
            arr = arr.slice(i);
            break;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (/[a-z.-\s]/i.test(arr[i])) {
            lookup.NUMBER = arr.slice(0, i).join("");
            lookup.TAIL = arr.slice(i).join("");
            arr = [];
            break;
        }
    }

    if (arr.length > 0) {
        lookup.NUMBER = arr.slice().join("");
        arr = [];
    }

    return lookup;
};

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]);
