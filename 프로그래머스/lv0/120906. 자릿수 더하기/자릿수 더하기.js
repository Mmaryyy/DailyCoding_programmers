function solution(n) {
    let string = String(n)
    let result = 0
    for (let char of string) {
        result += parseInt(char)
    }
    return result
}