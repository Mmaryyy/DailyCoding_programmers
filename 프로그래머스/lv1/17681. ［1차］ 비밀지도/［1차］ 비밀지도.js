function solution(n, arr1, arr2) {
    // 1. 지도마다 입력된 정수를 주어진 자릿수(n)의 2진수로 변환한다
    // 2. 두 배열의 같은 인덱스의 요소를 확인
    // 3. 문자열의 인덱스에 두 배열의 하나라도 1을 가지면 #로 변환한 문자열로 변환
    //    아니면 ' '으로 변환
    const convertToBin = (num, n) => {
        return num.toString(2).padStart(n, "0")
    }
    
    let result = []
    
    for (let i = 0; i < n; i++) {
        let res = ''
        let first = convertToBin(arr1[i], n)
        let second = convertToBin(arr2[i], n)
        for (let j = 0; j < n; j++) {
            if (first[j] === '1' || second[j] === '1') {
                res += '#'
            } else {
                res += ' '
            }
        }
        result.push(res)
    }
    return result
}