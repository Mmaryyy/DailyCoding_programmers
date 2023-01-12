function solution(my_string) {
    // split할 때 모든 알파벳을 split할 수 있도록 -> 정규 표현식
    // 대소문자 구문도 포함하도록
    
    let result = 0
    let num = 0

    for (let el of my_string + ' ') {
        // 자연수로 문자열이 끝나는 경우 마지막 글자까지 확인하지 않기 때문에
        // 마지막 문자까지 확인하기 위해 공백 1개 추가
        if (parseInt(el) || parseInt(el) === 0) {
            // el이 0인 경우 parseInt(el) 값을 falsy한 값으로 인식하여 문자에 안 더해지므로 별도 추가
            num += el
        } else {
            result += parseInt(num)
            num = 0
        }
    }

    return result
}