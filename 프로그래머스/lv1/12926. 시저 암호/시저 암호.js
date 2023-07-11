function solution(s, n) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let result = ''
  for (let i = 0; i < s.length; i++) {
      // 해당 문자가 대문자인지 여부를 저장해둠
      if (s[i] === ' ') { 
          result += ' '
          continue
      }
      let isUpper = s[i] === s[i].toUpperCase()
      let originalIdx = isUpper ? alphabet.indexOf(s[i]) : alphabet.indexOf(s[i].toUpperCase())
      let nextIdx = originalIdx + n >= alphabet.length ? originalIdx + n - alphabet.length : originalIdx + n
      if (isUpper) {
          result += alphabet[nextIdx]
      } else {
          result += alphabet[nextIdx].toLowerCase()
      }    
  }
  return result
}