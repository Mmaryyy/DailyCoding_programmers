function solution(arr1, arr2) {
    // arr1의 길이만큼 순회하면서 각 요소에 연산한다
    // arr1의 n번째 요소를 순회하며 arr2의 n번째 요소를 더한 값을 리턴한다

    return arr1.map((el, i) => {
        return el.map((num, idx) => {
            return num + arr2[i][idx]
        })
    });
}