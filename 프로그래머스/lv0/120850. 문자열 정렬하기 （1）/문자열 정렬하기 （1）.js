function solution(my_string) {
    let number = Array.from(Array(10).keys())
    return [...my_string]
        .filter(el => number.includes(parseInt(el)))
        .map(el => Number(el))
        .sort((a, b) => a - b)
}