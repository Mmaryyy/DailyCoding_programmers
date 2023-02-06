function solution(food) {
    let result = ''
    console.log(food.length)
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < parseInt(food[i]/2); j++) {
            result += i
        }
    }
    return result + 0 + result.split('').reverse().join('')
}