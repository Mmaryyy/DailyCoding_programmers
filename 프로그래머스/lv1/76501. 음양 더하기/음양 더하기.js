function solution(absolutes, signs) {
    // absolutes에 signs(양수, 음수) 적용한 새 배열을 만들고
    // 그 배열의 합을 구함
    return absolutes.map((el, idx) => {
        if (signs[idx]) {
            return el
        } return el * (-1)
    }). reduce((acc, cur) => acc + cur, 0)
}