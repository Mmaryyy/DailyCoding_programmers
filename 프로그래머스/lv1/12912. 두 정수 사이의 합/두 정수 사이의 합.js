function solution(a, b) {
    const arr = new Array()
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        arr.push(i)
    }
    return arr.reduce((acc, cur) => acc + cur, 0)
}