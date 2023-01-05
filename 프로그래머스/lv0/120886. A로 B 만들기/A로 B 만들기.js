function solution(before, after) {
    // before 순회하면서
    // after 스트링 요소 하나씩 replace('')
    // after 스트링 길이가 0이 되면 1, 아니면 0

    for (let char of before) {
        after = after.replace(char, '')
        // replace는 immutable method
        // 바뀐 값으로 재할당 해줘야 바뀐 채로 덮어쓰인다
    }

    if (after.length === 0) return 1
    return 0
}