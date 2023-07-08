function solution(number) {
  // 1. 입력되는 원소를 순서에 관계없이 3개씩 조합하고
  // 2. 각 조합이 되는 배열의 원소 합이 0인 것의 갯수를 리턴한다.
  let answer = []
  const LENGTH = 3
  
  const getThreeCombinations = (arr, selectNumber) => {
    const results = []
    if (selectNumber === 1) return arr.map(value => [value])

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1)
      const combinations = getThreeCombinations(rest, selectNumber - 1)
      const attached = combinations.map((combination) => [fixed, ...combination])
      results.push(...attached)
    })
    return results
  }

  answer = getThreeCombinations(number, LENGTH).filter((el) => {
    if (el.reduce((acc, cur) => acc + cur, 0) === 0) return el
  })

  return answer.length
}