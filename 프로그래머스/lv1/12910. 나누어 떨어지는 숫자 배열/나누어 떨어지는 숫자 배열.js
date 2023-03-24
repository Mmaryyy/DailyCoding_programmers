function solution(arr, divisor) {
    // element 중 divisor로 나누어 떨어지는 값을 담은 배열을
    // 오름차순으로 정렬하여 리턴
    // 하나도 없다면 배열에 -1을 담아 반환
    
    const filter = arr.filter(el => el % divisor === 0)
    if (filter.length === 0) return [-1]
    return filter.sort((a, b) => a - b)
}