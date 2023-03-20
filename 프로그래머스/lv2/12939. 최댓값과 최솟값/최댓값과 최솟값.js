function solution(s) {
    const num = s.split(' ')
    return `${Math.min(...num)} ${Math.max(...num)}`
}