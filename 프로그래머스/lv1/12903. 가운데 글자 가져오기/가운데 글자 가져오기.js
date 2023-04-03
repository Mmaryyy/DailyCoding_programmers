function solution(s) {
    // 문자열의 길이가 홀수면 길이 - 1 / 2 의 인덱스 값을 가져오면 됨
    // 문자열의 길이가 짝수면 길이 - 1 / 2 에서 0.5를 뺀 곳의 인덱스 + 그 값의 다음 인덱스 값을 문자열로 리턴
    const center = (s.length - 1) / 2
    if (s.length % 2) {
        // 홀수면
        return s[center]
    } else {
        return s[Math.floor(center)] + s[Math.round(center)]
    }
}