function solution(s) {
    const array = s.split(' ')
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Z') {
            result -= array[i-1]
            continue
        }
        result += parseInt(array[i])
    }

    return result
}