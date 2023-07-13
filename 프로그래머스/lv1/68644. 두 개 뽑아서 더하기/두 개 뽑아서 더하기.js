function solution(numbers) {
  // 서로 다른 인덱스에 있는 요소를 조합하여 2개로 만들고
  // 그 합이 중복되지 않는 수를 담아
  // 오름차순의 배열로 리턴하기
  const answer = []

  numbers.forEach((el, idx) => {
    const fixed = el
    const rest = numbers.slice(idx + 1)
    rest.forEach((el) => {
      let sum = fixed + el
      if (answer.indexOf(sum) > -1) return
      answer.push(sum)
    })
  })

  return answer.sort((a, b) => a - b)
}