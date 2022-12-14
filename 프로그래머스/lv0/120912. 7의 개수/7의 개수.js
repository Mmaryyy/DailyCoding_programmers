function solution(array) {
    // array안의 요소를 전부 한 글자씩 쪼개어 새 배열을 만들고
    // 내용이 7인 것의 갯수를 센다
    
    let newArr = []
    let count = 0
    
    // 안에 요소가 split의 결과물(배열 형태) 그대로 들어가기 때문에 스프레드
    for (let el of array) {
        newArr.push(...String(el).split(''))
    }
    
    for (let el of newArr) {
        if (el === '7') count++
    }
    
    return count
}