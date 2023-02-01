function solution(my_string) {
    let result = 0
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let char of my_string) {
        if (number.includes(char)) {
            result += parseInt(char)
        }
    }
    return result
}