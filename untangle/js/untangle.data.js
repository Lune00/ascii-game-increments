if (untangleGame === undefined) {
    var untangleGame = {};
}

untangleGame.circles = Array()
untangleGame.lines = Array()

untangleGame.Circle = function (x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
}

untangleGame.Line = function(startPoint, endPoint, thickness){
    this.startPoint = startPoint
    this.endPoint = endPoint
    this.thickness = thickness
}

untangleGame.createRandomCircles = function (width, height) {
    // randomly draw 5 circles
    var circlesCount = 5;
    for (var i = 0; i < circlesCount; i++) {
        var x = Math.random() * width;
        var y = Math.random() * height;
        var radius = 10
        untangleGame.circles.push(new untangleGame.Circle(x, y, radius))
    }
};

untangleGame.connectCircles = function () {
    for (let i = 0; i !== untangleGame.circles.length; i++) {
        for (let j = i + 1; j < untangleGame.circles.length; j++) {
            const startPoint = untangleGame.circles[i]
            const endPoint = untangleGame.circles[j]
            untangleGame.lines.push(
                new untangleGame.Line(startPoint, endPoint)
            )
        }
    }
}



