function solution(score) {
    // 평균을 내는 함수를 만들고
    // 각 배열의 평균 점수로 이루어진 배열을 다시 정렬해서 등수(인덱스..가 될 수 없네)로 정렬된 새로운 배열
    // 값이 같으면 같은 값을 내보내야 함..

    const getAve = ([ english, math ]) => {
        return (english + math) / 2
    }

    let aveArr = []

    for (let student of score) {
        aveArr.push(getAve(student))
    }

    let sortedArr = [...aveArr].sort((a,b) => b-a)
    let result = []

    for (let aveScore of aveArr) {
        result.push(sortedArr.indexOf(aveScore) + 1)
    }
    
    return result
}