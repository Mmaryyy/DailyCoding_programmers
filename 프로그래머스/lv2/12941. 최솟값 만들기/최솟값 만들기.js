function solution(A,B){
    // 곱셈의 합이 최소값이 되려면
    // 오름차순 - 내림차순으로 각각 정렬된 요소의 곱을 더하면 된다
    
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0)
} 