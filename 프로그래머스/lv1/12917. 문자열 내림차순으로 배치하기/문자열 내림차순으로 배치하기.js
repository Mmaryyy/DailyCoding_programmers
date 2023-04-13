function solution(s) {
    let upper = []
    let lower = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === s[i]) {
            upper.push(s[i])
        } else {
            lower.push(s[i])
        }
    }
    return lower.sort().reverse().join('') + upper.sort().reverse().join('')
}