function solution(s) {
    // 대문자로 바뀌어야 하는 조건
    // 문자열의 첫 글자 -> index가 0이거나
    // 공백 다음의 글자일때
    // 나머지 경우에는 lower case로 변환해서 더하기
    
    let result = ''
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] === ' ') {
            result += s[i].toUpperCase()
            continue
        }
        result += s[i].toLowerCase()
    }
    
    return result
}