function solution(numbers) {
    // 곱한 수가 가장 크려면
    // 가장 큰 수 2개를 추려서
    // 그 값을 곱하면 됨
    // 오름차순으로 정렬해서 0, 1 번째를 곱한 값을 리턴
    
    numbers.sort((a, b) => b - a)
    
    return numbers[0] * numbers[1]
}