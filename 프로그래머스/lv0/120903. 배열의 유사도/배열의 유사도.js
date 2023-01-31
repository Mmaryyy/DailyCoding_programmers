function solution(s1, s2) {
    let count = 0
    for (let firstEle of s1) {
        if (s2.indexOf(firstEle) !== -1) {
            count++
        }
    }
    return count
}