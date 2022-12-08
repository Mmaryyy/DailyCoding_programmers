function solution(n) {
    let result = 1
    let i = 1
    
    while (result < n) {
        i++
        result *= i
    } 
    
    if (result > n) return i - 1
    return i
}