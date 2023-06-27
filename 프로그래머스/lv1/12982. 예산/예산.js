function solution(d, budget) {
  // 부서별 신청 금액을 오름차순으로 정렬하고
  // 그 합이 budget보다 작거나 같을 때까지 금액을 더해가며 카운팅
  // 그 카운팅한 숫자를 리턴
  
  let sorted = d.sort((a, b) => a - b)
  let amount = 0
  let i = 0

  while (amount < budget && i < sorted.length) {
    amount += sorted[i]
    i++
    if (amount > budget) {
      i--
    }
  }
  
  return i
}