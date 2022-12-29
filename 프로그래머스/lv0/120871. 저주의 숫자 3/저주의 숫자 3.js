function solution(n) {
    const noThree = []
    let num = 1
    
    while (noThree.length < n) {
        if (num % 3 !== 0) {
            if (!String(num).includes('3')) noThree.push(num)
        }
        num++
    }
    
    return noThree[n-1]
  }