function solution(a, b) {
  const daysForWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  
  const getDaysForMonth = () => {
    const result = {}
    for (let i = 1; i <= 12; i++) {
      let def = 30
      if (i % 2 === 1) {
        if (i <= 8) {
          def += 1
          result[i] = def
        } else {
          result[i] = def
        }
      } else {
        if (i < 8) {
          if (i === 2) {
            def -= 1
            result[i] = def
          } else {
            result[i] = def
          }
        } else {
          def += 1
          result[i] = def
        }
      }
    }
    return result
  }
  const daysForMonth = getDaysForMonth()
  // a월 b일과 1월 1일 사이에 며칠(gap)이 있는지 계산하고
  // 기준점이 되는 금요일의 인덱스와 gap을 더해서 7로 나눈 나머지 숫자가
  // 인덱스인 요일을 내놓으면 됨.
  let gap = b - 1

  for (let i = 1; i < a; i++) {
    gap += daysForMonth[i]
  }
  
  const STANDARDIDX = daysForWeek.indexOf('FRI')
  const targetIdx = (STANDARDIDX + gap) % 7

  return daysForWeek[targetIdx]
}