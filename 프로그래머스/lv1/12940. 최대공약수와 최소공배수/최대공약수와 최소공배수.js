function solution(n, m) {
    const getGCD = (num1, num2) => {
        // 최대공약수를 구하는 함수
        // 유클리드 호제법 -> num1를 num2로 나눈 나머지를 r이라고 했을 때,
        // GCD(num1, num2) = GCD(num2, r)
        while (num2 > 0) {
            let r = num1 % num2
            num1 = num2
            num2 = r
        }
        return num1
    }
    
    const getLCM = (num1, num2) => {
        return num1 * num2 / getGCD(num1, num2)
    }
    
    return [getGCD(n, m), getLCM(n, m)]
}