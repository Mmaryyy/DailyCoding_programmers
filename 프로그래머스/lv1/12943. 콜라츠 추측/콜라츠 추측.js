function solution(num) {
  // 예외처리 2. 카운트가 500번을 넘어가면 -1을 반환하고 종료
  // num이 짝수면 2로 나누고
  // num이 홀수면 4을 곱하고 1을 더한다
  
  let count = 0
  let number = num
  
  // 예외처리 1. num === 1 return 0
  if (num === 1) return 0

  while (number !== 1 && count < 500) {
  count ++

    if (number % 2 === 0) {
      number = number / 2
    } else {
      number = number * 3 + 1
    }

    if (number === 1) {
      break
    }
  }

  return count >= 500 ? -1 : count
}