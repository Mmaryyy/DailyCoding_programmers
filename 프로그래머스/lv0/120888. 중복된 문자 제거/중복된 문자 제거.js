function solution(my_string) {
    let result = []
    for (let i = 0; i < my_string.length; i++) {
        if (result.includes(my_string[i])) continue
        result.push(my_string[i])
    }
    return result.join('')
}