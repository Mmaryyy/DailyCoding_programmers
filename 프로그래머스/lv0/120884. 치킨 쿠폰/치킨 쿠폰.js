function solution(chicken) {
    let sum = 0
    let coupon = chicken

    const getChicken = (coupon) => {
        // 현재 가지고 있는 쿠폰으로 서비스 주문 후, 남는 쿠폰의 갯수
        if (coupon < 10) return 0
        return parseInt(coupon / 10) + coupon % 10
    }
    
    while (getChicken(coupon) > 0) {
        sum += parseInt(coupon / 10)
        coupon = getChicken(coupon)
    }

    return sum
}