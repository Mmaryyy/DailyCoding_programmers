function solution(A, B) {
    // A : "hello", B : "ohell" 오른쪽으로 한 칸 밀면 같아짐. 민 횟수 : 1 리턴
    // A : "apple", B : "elppa" 아무리 밀어도 안됨. 안 되면 -1
    // 밀어서 같아지는 조건
    // 1. 내용이 같은 요소의 양 옆의 요소가 내용이 같아야함
    // 2. (단, 0번째 요소와 length-1 번째 요소를 서로를 양 옆의 요소로 함)
    // 모든 요소를 확인해서 위의 조건을 충족하면 (B에서의 인덱스 - A에서의 인덱스)이 이동 수
    // 그게 아니면 -1리턴

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                // 각 스트링에서 요소가 가지는 인덱스
                let temp = B
                // B 문자열 값 가져오기
                const left = temp.slice(0,j)
                // j 인덱스를 기준으로 왼쪽 문자 잘라서
                temp = temp.substring(j)+left
                // 뒤에 다시 붙이기
                if (A === temp) return (j-i)
                // A와 B가 같으면 이동 수 리턴
            }
        }
    }
    return -1
}
