function solution(dots) {
    let [[x1, y1],[x2, y2],[x3, y3],[x4, y4]] = dots
    const getLength = (array) => {
        return Math.max(...array)-Math.min(...array)
    }
    return getLength([x1, x2, x3, x4]) * getLength([y1, y2, y3, y4])
}