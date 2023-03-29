function solution(arr) {
    const exceptMin = arr.filter(el => el !== Math.min(...arr))
    return exceptMin.length === 0 ? [-1] : exceptMin
}