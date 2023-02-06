function solution(order) {
    const clap = ['3', '6', '9']
    return [...String(order)].filter(el => clap.includes(el)).length
}