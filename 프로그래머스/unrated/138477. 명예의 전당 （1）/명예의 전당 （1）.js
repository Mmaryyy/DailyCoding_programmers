function solution(k, score) {

  let hallOfFame = [score[0]]
  const result = []

  for(let i = 1; i <= score.length; i++) {
    const min = Math.min(...hallOfFame)
    result.push(min)

    hallOfFame.push(score[i])
    if (hallOfFame.length <= k) continue
    hallOfFame = hallOfFame.sort((a, b) => b - a)
    hallOfFame.pop()
  }

  return result
}