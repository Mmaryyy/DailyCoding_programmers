function solution(a, b) {
    return a.map((el, idx) => {
        return el * b[idx]
    }).reduce((acc, cur) => acc + cur, 0)
}