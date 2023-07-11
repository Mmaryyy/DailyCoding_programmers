function solution(sizes) {
    // 각 명함을 같은 방향(-> 가로방향)으로 정렬한다
    // 명함 크기에서 길이가 긴 것 -> 가로, 길이가 짧은 것을 -> 세로로 로 분류 정렬
    // 각 가로와 세로 길이 중 가장 큰 값으로 지갑을 만든다.
  const width = []
  const height = []
  
  sizes.forEach((size) => {
    width.push(Math.max(...size))
    height.push(Math.min(...size))
  })

  return Math.max(...width) * Math.max(...height)
}