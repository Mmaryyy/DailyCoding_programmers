function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        let result = a[n].localeCompare(b[n])
        if (result !== 0) return result
        return a.localeCompare(b)
    })
    return answer
}