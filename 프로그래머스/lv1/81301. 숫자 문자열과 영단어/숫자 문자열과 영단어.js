function solution(s) {
    let copy = s.slice()
    const num = {
        zero: 0,
        one: 1, 
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    for (let i = 0; i < 10; i++) {
        let target = Object.keys(num)[i]
        if (copy.includes(target)) {
            copy = copy.replaceAll(target, num[target])
        }
    }
    return parseInt(copy)
}