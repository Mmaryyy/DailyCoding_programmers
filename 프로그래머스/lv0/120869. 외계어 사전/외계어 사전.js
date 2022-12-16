function solution(spell, dic) {
    // dic 안에 word 순서대로 확인
    // word1안에서 spell의 첫번째 인덱스 === 마지막 인덱스 이면 단어 안에서 한 번만 출현한 문자 ==> result += 1
    // 위 인덱스가 -1이면 그건 없는 문자
    // result === spell.length => spell 안의 모든 문자를 포함함
    // 위 상황에 걸리는 word가 나오면 return 1
    // 아니면 result 0으로 초기화, 다음 단어 확인하러
    
    for (let word of dic) {
        let result = 0
        for (let char of spell) {
            if (word.indexOf(char) === word.lastIndexOf(char) && word.indexOf(char) !== -1) result++
        }
        if (spell.length === result) return 1
    }

    return 2
}