"use strict";

let canvas;
let cxt;

window.onload = init;

function init() {
    canvas = document.getElementById('canvas');
    cxt = canvas.getContext('2d');
    //Dessine le monde a l'état initial
    let worldData = generateWorld()
}

// const red = data[i];
// const green = data[i + 1];
// const blue = data[i + 2];
// const alpha = data[i + 3];

function pixelOn(pixels, i) {

    pixels[i] = 255
    pixels[i + 1] = 255
    pixels[i + 2] = 255
    //S'assurer que les pixels ne sont pas transparents
    pixels[i + 3] = 255
}

function pixelOff(pixels, i) {

    pixels[i] = 0
    pixels[i + 1] = 0
    pixels[i + 2] = 0
    //S'assurer que les pixels ne sont pas transparents
    pixels[i + 3] = 255
}


function myRand(){

}


function generateWorld() {

    const start = Date.now();
    //Do generation ...
    
    //Iterate sur tous les pixels
    const imageData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    //Chaque pixel est stocké dans 4 éléments (rgba) consécutifs du tableau
    for (let i = 0; i < data.length; i += 4) {

        //Est ce que chaque pixel est une étoile ? Si oui on l'allume, sinon on l'éteind
        const isStar = Math.random() * 256  < 32

        isStar ? pixelOn(data, i) : pixelOff(data, i)

    }

    const end = Date.now()
    const elapsedTimeInMs = end - start

    //Update les pixels du canvas
    cxt.putImageData(imageData, 0, 0)
    // drawText(0, 0, 'Elapsed time for world generation (ms) : ' + elapsedTimeInMs)
    drawTextBG(cxt, 'Time(ms) : ' + elapsedTimeInMs, '24px Arial', 0 , 0)

    return {
        elapsedTimeInMs: elapsedTimeInMs
    }
}

function resetPosition() {
    console.log('reset Position')
}


function drawCircle(x, y, r) {
    cxt.fillStyle = '#ff8080'
    cxt.strokeStyle = 'white'
    cxt.beginPath()
    cxt.arc(x, y, r, 0, 2 * Math.PI, )
    cxt.closePath()
    cxt.fill()
}


function drawText(x, y, text) {
    cxt.fillStyle = 'red'
    cxt.strokeStyle = 'black'
    cxt.font = '24px Arial'
    cxt.textBaseline = 'top'
    cxt.beginPath()
    cxt.fillText(text, x, y)
}

function drawTextBG(ctx, txt, font, x, y) {

    /// lets save current state as we make a lot of changes        
    ctx.save();

    /// set font
    ctx.font = font;

    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'top';

    /// color for background
    ctx.fillStyle = '#f50';
    
    /// get width of text
    var width = ctx.measureText(txt).width;

    /// draw background rect assuming height of font
    ctx.fillRect(x, y, width, parseInt(font, 10));
    
    /// text color
    ctx.fillStyle = '#000';

    /// draw text on top
    ctx.fillText(txt, x, y);
    
    /// restore original state
    ctx.restore();
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }

    switch (event.key) {
        case " ":
            generateWorld()
            // Faire quelque chose pour la touche "flèche vers le bas" pressée.
            break;
        case "r":
            resetPosition()

        default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
    }

    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
}, true);