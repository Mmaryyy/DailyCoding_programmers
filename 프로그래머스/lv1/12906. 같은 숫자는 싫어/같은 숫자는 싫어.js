function solution(arr) {
    let result = [arr[0]]
    let pre = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (pre !== arr[i]) {
            result.push(arr[i])
            pre = arr[i]
        }
    }
    
    return result
}