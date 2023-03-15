function solution(s){
    let countP = 0
    let countY = 0
    let answer = false
    
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === 'p') {
            countP++
        } else if (s[i].toLowerCase() === 'y') {
            countY++
        }
    }
    if (countP === countY) answer = true
    else if (countP === 0 && countY === 0) answer = true
    
    return answer
}