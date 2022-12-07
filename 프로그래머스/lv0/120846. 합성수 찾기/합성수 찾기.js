function solution(n) {
    // n을 포함하는 곳까지 1씩 증가하면서 체크하기 (1, 2, 3제외 -> 무조건 합성수 아님)
    // n <= 3 이면 0 리턴하면 됨
    // ele가 2부터 본인을 포함하는 곳까지 1씩 증가하면서
    // 나누어 떨어지는 수가 1개라도 있으면 count 증가시키기.
    // 마지막에 count 리턴
    let count = 0
    
    if (n <= 3) return 0
    
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                count++
                break
            }
        }
    }
    return count
}