function solution(arr) {
    return arr.filter((el, idx) => {
        return el !== arr[idx + 1]
    })
}