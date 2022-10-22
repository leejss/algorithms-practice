function solution(record) {
    const logs = [];
    const users = {};

    const message = (command, uid) => {
        if (command === "Enter") {
            return `${users[uid]}님이 들어왔습니다.`;
        }
        if (command === "Leave") {
            return `${users[uid]}님이 나갔습니다.`;
        }
    };

    for (const msg of record) {
        const [command, uid, nick] = msg.split(" ");
        if (command === "Enter" || command === "Change") {
            users[uid] = nick;
        }
    }

    // console.log(users);
    for (const msg of record) {
        const [command, uid] = msg.split(" ");
        if (command === "Enter" || command === "Leave") logs.push(message(command, uid));
    }

    return logs;
}
