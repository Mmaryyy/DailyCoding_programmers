function solution(t, p) {
  // 문자열 t에서 p와 길이가 같은 부분 문자열을 만들고
  // 부분 문자열의 크기가 p의 크기보다 작거나 같은 수의 갯수를 리턴하라 -> Number로 변환해서 비교할 것
  const substrings = []
  const length = p.length

  for (let i = 0; i < t.length - length + 1; i++) { 
    let slice = Number(t.slice(i, i +length))
    if (slice <= Number(p)) {
        substrings.push(slice)
    }
  }

  return substrings.length
}