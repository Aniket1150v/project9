var btn_red;
var btn_green;

var r =250;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mousePressed(red_bg);

btn_green = createButton("Green");
btn_green.position(100,50);
btn_green.mousePressed(green_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
}

