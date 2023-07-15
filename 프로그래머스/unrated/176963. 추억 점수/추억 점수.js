function solution(name, yearning, photo) {
  // name - yearning을 조합한 obj 생성
  // 각 사진의 사람을 점수로 변환한 배열을 생성하고
  // 그것의 합을 구하면 각 사진의 합의 만들어짐
  // 모든 사진을 조회하고 계산해서 하나의 배열로 리턴

  const result = []

  const getObj = (name, yearning) => {
    const result = {}
    name.forEach((el, idx) => {
        result[el] = yearning[idx]
    })
    return result
}
const getSum = (people, score) => {
  const scoreArr = people.map((name) => score[name] || 0)
  const totalScore = scoreArr.reduce((acc, cur) => acc + cur, 0)
  return totalScore
}
  const scoreObj = getObj(name, yearning)


  return photo.map((el, idx) => {
    return getSum(el, scoreObj)
  })
}