function solution(polynomial) {
    const terms = polynomial.split(' + ')
    const sumOfX = (terms) => {
        const valueOfX = terms.filter((el => el.indexOf('x') > -1))
        let result = 0
        for (let x of valueOfX) {
            if (x.length === 1) {
                result += 1
                continue
            }
            result += parseInt(x)
        }
        if (result === 1) return ''
        return result
    }
    const sumOfNum = (terms) => {
        const valueOfNum = terms.filter((el => el.indexOf('x') === -1)).reduce((acc, cur) => acc + parseInt(cur),0)
        return valueOfNum
    }
    
    if (sumOfX(terms) === undefined || sumOfX(terms) === 0) return `${sumOfNum(terms)}`
    else if (!sumOfNum(terms)) return `${sumOfX(terms)}x`

    return `${sumOfX(terms)}x + ${sumOfNum(terms)}`
}