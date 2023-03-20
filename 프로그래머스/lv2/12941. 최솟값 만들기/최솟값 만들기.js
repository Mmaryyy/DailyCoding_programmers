function solution(A,B){
    // 곱셈의 합이 최소값이 되려면
    // 오름차순 - 내림차순으로 각각 정렬된 요소의 곱을 더하면 된다
    
    const sortedA = A.sort((a, b) => b - a)
    const sortedB = B.sort((a, b) => a - b)
    
    const result = []
    
    for (let i = 0; i < sortedA.length; i++) {
        result.push(sortedA[i] * sortedB[i])
    }
    
    return result.reduce((acc, cur) => acc + cur, 0)
} 