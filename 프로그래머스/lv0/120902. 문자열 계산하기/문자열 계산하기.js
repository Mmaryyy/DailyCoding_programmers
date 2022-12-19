function solution(my_string) {
    const calculate = my_string.split(' ')
    let result = calculate[0]
    
    for (let i = 1; i < calculate.length; i++) {
        if (calculate[i] === '+') {
            result = parseInt(result) + parseInt(calculate[i + 1])
        }
        if (calculate[i] === '-') {
            result = parseInt(result) - parseInt(calculate[i + 1])
        }
    }
    return result
}