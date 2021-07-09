if (untangleGame === undefined) {
    var untangleGame = {}
}

untangleGame.drawCircle = function (x, y, radius) {
    var ctx = untangleGame.ctx
    ctx.fillStyle = 'Gold'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
}

untangleGame.drawLine = function (x1, y1, x2, y2, thickness) {
    var ctx = untangleGame.ctx
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = thickness
    ctx.strokeStyle = "#cfc"
    ctx.closePath()
    ctx.stroke()
}

untangleGame.drawAllCircles = function () {
    untangleGame.circles.forEach(circle => untangleGame.drawCircle(circle.x, circle.y, circle.radius))
}

untangleGame.drawAllLines = function () {
    untangleGame.lines.forEach(line => untangleGame.drawLine(line.startPoint.x, line.startPoint.y, line.endPoint.x, line.endPoint.y, 1))
}

untangleGame.clear = function () {
    var ctx = untangleGame.ctx
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}