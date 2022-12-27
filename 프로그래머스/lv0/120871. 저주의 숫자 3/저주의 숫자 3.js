function solution(n) {
  const noThree = []

  for (let i = 1; i < 3*n; i++) {
      if (i % 3 !== 0) {
        let char = String(i)
        if (!char.includes('3')) noThree.push(i)
    }
  }
  return noThree[n-1]
}