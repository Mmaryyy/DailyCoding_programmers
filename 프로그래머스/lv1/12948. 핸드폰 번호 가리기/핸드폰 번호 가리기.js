function solution(phone_number) {
    let maskingNum = phone_number.slice(0, -4).replaceAll(/[0-9]/g, '*')
    return maskingNum + phone_number.slice(-4)
}