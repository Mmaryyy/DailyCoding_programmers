function solution(x, n) {
    return Array(n).fill(x).map((el, idx) => (idx + 1) * el)
}