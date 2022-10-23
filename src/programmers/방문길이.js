class Path {
    constructor() {
        this.arr = [];
    }

    push(value) {
        if (this.arr.length === 5) return;
        this.arr.push(value);
    }

    getLength() {
        return this.arr.length;
    }
}

class Direction {
    constructor(dir, start) {
        this.value = {
            dir,
            start,
        };
    }

    getDir() {
        return this.value;
    }
}

// 처음 걸어본 길.
function solution(dirs) {
    // MAX_SIZE = 5
    const table = {
        L: new Path(),
        R: new Path(),
        D: new Path(),
        U: new Path(),
    };

    for (const dir of dirs) {
        if (dir === "L") {
            table.L.push();
        }
        if (dir === "R") {
        }
        if (dir === "U") {
        }
        if (dir === "D") {
        }
    }

    return Object.values(table).reduce((prev, cur) => {
        prev += cur.length;
        return prev;
    }, 0);
}
