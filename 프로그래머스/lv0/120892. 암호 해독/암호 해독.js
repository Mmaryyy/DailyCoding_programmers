function solution(cipher, code) {
    let result = ''
    for (let i = 1; i * code <= cipher.length; i++) {
        console.log(i*code)
        result += cipher[i*code - 1]
    }
    return result
}