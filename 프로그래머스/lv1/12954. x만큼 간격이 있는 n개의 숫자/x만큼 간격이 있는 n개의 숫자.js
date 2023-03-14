function solution(x, n) {
    var answer = [];
    let ele = x
    while (answer.length < n) {
        answer.push(ele)
        ele += x
    }
    return answer
}