function solution(s){
    let open  = 0
    let close = 0
    
    for (let el of s) {
        if (el === '(') {
            open++
            continue
        } else if (el === ')') {
            close++
        }
    }
    
    return open === close
}