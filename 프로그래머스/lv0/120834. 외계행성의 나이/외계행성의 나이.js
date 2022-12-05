function solution(age) {
    //변환할 알파벳은 그 알파벳 요소의 인덱스임
    const alpabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let ageStr = '' + age;
    let result = ''
    
    for(let i = 0; i < ageStr.length; i++) {
        result += alpabet[ageStr[i]]
        }
    
    return result
}
