function solution(s) {
  // 문자열을 순회하면서
  // 없으면 result에 -1을 저장
  // obj[key]가 있으면 result에 앞에 저장된 인덱스와 현재 인덱스를 비교해서 저장 그 인덱스를 저장해서 update!
  
  const arr = s.split('')
  const result = []
  const obj = {}
  arr.forEach((el, idx) => {
    let res = -1
    if (obj[el] === undefined) result.push(res)
    else {
      res = idx - obj[el]
      result.push(res)
    }
    obj[el] = idx
  })

  return result
}