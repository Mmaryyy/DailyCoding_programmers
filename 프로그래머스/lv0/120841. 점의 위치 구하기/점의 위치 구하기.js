function solution(dot) {
    let [x, y] = dot
    
    if (x > 0 && y > 0) return 1
    else if (y > 0 && x < 0) return 2
    else if (y < 0 && x < 0) return 3
    else return 4
}