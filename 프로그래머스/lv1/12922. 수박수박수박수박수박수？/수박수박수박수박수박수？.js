function solution(n) {
    let even = '수'
    let odd = '박'
    let answer = ''
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer += even
            continue
        }
        answer += odd
    }
    return answer
}