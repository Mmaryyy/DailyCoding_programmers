function solution(s){
    let top = 0
    
    for (let bracket of s) {
        if (bracket === '(') {
            top++
            continue
        } else {
            if (top === 0) return false
            top--
        }
    }

    return top === 0
}