function solution(numbers, direction) {
    // 방향이 right면 맨 끝 요소를 맨 앞으로 보내고
    // 방향이 left면 맨 앞 요소를 맨 끝으로 보내고
    
    let temp = ''
    
    if (direction === 'right') {
        temp = numbers.pop()
        numbers.unshift(temp)
        return numbers
    } 
    temp = numbers.shift()
    numbers.push(temp)
    return numbers
    
}