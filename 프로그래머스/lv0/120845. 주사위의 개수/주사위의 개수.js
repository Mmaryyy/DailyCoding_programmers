function solution(box, n) {
    // box = [상자의 가로, 상자의 세로, 상자의 높이]
    // n = 주사위 모서리의 길이
    // 주사위가 최대로 들어가려면
    // 각 변을 주사위 모서리로 나눈 것의 몫을 다 곱하면 됨.
    
    return box.map(ele => parseInt(ele / n)).reduce((acc, cur) => acc * cur)
}