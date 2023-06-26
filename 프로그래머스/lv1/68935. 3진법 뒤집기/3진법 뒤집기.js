function solution(n) {
  // 앞뒤 반전하여 reverse
  // 그 수를 다시 10진수로 변환한다. parseInt()
  
  const convert = (number, target, present) => {
    // 10진수로 변환해야 할 때 === target이 10일때
    if (target === 10) {
      return parseInt(number, present)
    }
    // 그 외의 경우 toString() 사용
    return number.toString(target)
  }
  
  const reverseString = (str) => {
    return str.split('').reverse().join('')
  }
  
  return convert(reverseString(convert(n, 3)), 10, 3)
}