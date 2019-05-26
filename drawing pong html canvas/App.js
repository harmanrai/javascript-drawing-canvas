// selecting our canvas from html
var canvas = document.getElementById("pong");
// get context of our canvas so we can draw on it
var ctx = canvas.getContext("2d");
// adding a background image to our canvas
var image = new Image();

image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Adirondacks_in_May_2008.jpg/1024px-Adirondacks_in_May_2008.jpg";

// next we can add our ball to the screen

function balldraw() {
ctx.arc(400, 200, 30,0,Math.PI*2,false);
ctx.stroke();
  
}

function drawLine() {

ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(400, 50);
ctx.stroke();
}

function drawLine2() {

ctx.beginPath();
ctx.moveTo(400, 60);
ctx.lineTo(400, 110);
ctx.stroke();
}

function drawLine3() {

ctx.beginPath();
ctx.moveTo(400, 120);
ctx.lineTo(400, 170);
ctx.stroke();
}

function drawLine4() {

ctx.beginPath();
ctx.moveTo(400, 180);
ctx.lineTo(400, 230);
ctx.stroke();
}

function drawLine5() {

ctx.beginPath();
ctx.moveTo(400, 240);
ctx.lineTo(400, 290);
ctx.stroke();
}

function drawLine6() {

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(400, 350);
ctx.stroke();
}

function drawLine7() {

ctx.beginPath();
ctx.moveTo(400, 360);
ctx.lineTo(400, 410);
ctx.stroke();
}

function drawPaddle1() {
ctx.rect(0, 150, 50, 100);
ctx.stroke();
}

function drawPaddle2() {
ctx.rect(750, 150, 50, 100);
ctx.stroke();
}


window.onload = function(){
ctx.drawImage(image,0,0);
balldraw();
drawLine();
drawLine2();
drawLine3();
drawLine4();
drawLine5();
drawLine6();
drawPaddle1();
drawPaddle2();
drawLine7();
}














