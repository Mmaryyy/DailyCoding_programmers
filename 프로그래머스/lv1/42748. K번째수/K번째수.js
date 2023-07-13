function solution(array, commands) {
  // 각 command에서 시작지점, 끝지점, 타겟 을 알아낸다.
  //* 첫번째 요소는 '0' 인덱스를 가지므로 각 숫자에서 -1을 한 값이 실제로 얻어낼 인덱스의 값이다.
  // 시작지점-1 ~ 끝지점-1 까지 잘라낸 배열을 오름차순으로 정렬하고
  // 그 배열의 타겟-1번째 인덱스 값을 리턴값으로 한다.

  const result = []

  commands.forEach((command) => {
    const [start, end, target] = command
    const sliced = array.slice(start - 1, end).sort((a, b) => a - b)
    result.push(sliced[target - 1])
  })
  return result
}
