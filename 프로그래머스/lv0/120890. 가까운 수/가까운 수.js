function solution(array, n) {
    // array 순회하면서 요소 - n 을 빼고
    // 계산값이 음수일 때 양수로 바꾸기
    // 가장 작은 차이값과 그 요소를 저장해두고
    // 저장해 둔 값보다 적은 차이값이 나타나면 교체
    
    let min = Math.abs(array[0] - n)
    let gap = 0
    let closerNum = array[0]
    
    for (let i = 1; i < array.length; i++) {
        gap = Math.abs(array[i] - n)
        if (gap < min) {
            min = gap
            closerNum = array[i]
        } else if (gap === min) {
            closerNum = closerNum < array[i] ? closerNum : array[i]
        }
    }
    return closerNum
}