// Entry point
$(document).ready(function () {

    //Init
    var canvas = document.getElementById("game");
    untangleGame.ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    untangleGame.createRandomCircles(width, height);
    untangleGame.connectCircles()

    //GameLoop
    setInterval(gameloop, 30);

    untangleGame.handleInput();

    function gameloop() {
        // clear the Canvas before re-drawing.
        untangleGame.clear();
        untangleGame.drawAllLines();
        untangleGame.drawAllCircles();
    }
});