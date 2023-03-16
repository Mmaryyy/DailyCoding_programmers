function solution(x) {
    //x의 자릿수의 합을 구하고
    //x가 그 합으로 나누어 떨어지면 true, 아니면 false를 리턴
    
    const sum = String(x).split('').map(el => parseInt(el)).reduce((acc, cur) => acc + cur, 0)
    return x % sum === 0
}