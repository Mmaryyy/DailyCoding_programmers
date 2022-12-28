function solution(numlist, n) {
    // 절대값으로 비교하고
    // 분기 -> 절대값이 큰 걸 뒤로 보내기
    // 분기2 -> 절대값이 같으면 두 숫자의 크고 작음을 비교해서 순서 세우기
    
        const compare = (num1, num2) => {
        if (Math.abs(num1-n) === Math.abs(num2-n)) return num2 - num1
        return Math.abs(num1-n) - Math.abs(num2-n)
    }

    return numlist.sort(compare)
}

// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }