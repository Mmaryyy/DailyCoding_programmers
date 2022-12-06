function solution(num_list, n) {
    let resultArr = []
    let ele = []
    
    while (num_list.length > 0) {
      ele = []
      for (let i = 0; i < n; i++) {
        ele.push(num_list.shift())
      }
    resultArr.push(ele)
    }
    
    return resultArr
}