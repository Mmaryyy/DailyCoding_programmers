function solution(keyinput, board) {
    const point = {
        x: 0,
        y: 0,
        moveX: function (max, input) {
            if (input === 'up' || input === 'down') return 
            const move = input === 'right' ? 1 : -1
            
            if (Math.abs(this.x + move) > max) return 
            this.x = this.x + move
        },
        moveY: function (max, input) {
            if (input === 'left' || input === 'right') return
            const move = input === 'up' ? 1 : -1
            
            if (Math.abs(this.y + move) > max) return
            this.y = this.y + move
        }
    }
    const [xRange, yRange] = board
    let xMax = parseInt(xRange / 2)
    let yMax = parseInt(yRange / 2)
    
    for (let input of keyinput) {
        point.moveX(xMax, input)
        point.moveY(yMax, input)
    }
    
    return [point.x, point.y]
}