function solution(n, t) {
    
    if (t === 1) return 2 * n
    return 2 * solution(n, t-1)
}