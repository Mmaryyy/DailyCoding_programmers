function solution(n) {
    // n의 제곱근을 구하고
    let sqrt = Math.sqrt(n)
    // 그게 정수 인지 판별
    // 판별 1. 1로 나눈 나머지가 0이면 정수
    // 판별 2. Number.isInteger(num) 값으로 판별 가능
    if (sqrt % 1 === 0 && sqrt > 0) {
        // 제곱 구하기 
        // 1. num * num
        // 2. num ** 2
        // 3. Math.pow(num, 2)
        return Math.pow(sqrt + 1, 2)
    }
    return -1
}