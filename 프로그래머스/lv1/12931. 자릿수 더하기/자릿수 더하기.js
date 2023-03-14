function solution(n)
{
    let array = String(n).split('')
    return array.reduce((acc, cur) => acc + parseInt(cur), 0)
}