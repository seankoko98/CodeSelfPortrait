//Self Portrait
//   by Sean Ko 

// Overview - this is a project on creating my self portrait using p5.js

// Notes - I am pretty satisfied with my outcome, I'm just glad it resembles me! 


// Global
var gDebugMode = false;

// Setup code goes here
function setup() {
  createCanvas(900, 900);
  print("Sean is awesome");
}

function draw() {
  background(208,221,255);
  //Circles
  rainbowCircles();

//Face 
  	face();

//Ears
 	ears();

//Nose
  	nose();
  
//Hair
  	hair();

//Shirt
 	shirt();

//Neck
   	neck();

//Eyes
	eyes ();

//Eyebrows 
	eyeBrow ();

//Mouth
  	mouth ();

//glasses
	glasses ();

//debug
    if( gDebugMode == true ) {
  	drawDebugInfo();
  }
}

//Functions

function face(){
	noStroke()
  	fill(260, 221, 155);
  	ellipse(450, 350, 200, 260);
}

function ears(){
	ellipse(350, 350, 50, 60);
  	ellipse(550, 350, 50, 60);
}

function nose(){
	fill(232, 220, 116);
  	triangle(450, 350, 436, 380, 460, 382);
  	fill(32,19,19);
  	ellipse(455, 377, 5, 5);
  	ellipse(440, 377, 5, 5);
}

function hair(){
	fill(32, 19, 19);
  	arc(500, 250, 150, 100, 0, PI + QUARTER_PI, CHORD);
  	arc(380, 220, 140, 148, 0, 0.75 * Math.PI);
  	triangle(531, 296, 545, 318, 543, 289);
  	triangle(363, 293, 353, 317, 355, 270);
}

function shirt(){
	fill(0);
  	quad(356, 505, 561, 505, 603, 709, 307, 709);
}

function neck(){
	fill(260, 221, 155)
  	rect(425, 460, 50, 55, 20);
}

function eyes(){
	strokeWeight(1)
  	fill(32, 19, 19);
  	ellipse(485, 345, 35, 20);
  	ellipse(410, 345, 35, 20);
  	noStroke()
  	fill(255)
  	ellipse(485, 340, 8, 8);
  	ellipse(410, 340, 8, 8);

}

function eyeBrow() {
  	noStroke()
  	fill(32, 19, 19);
  	triangle(470, 319, 470, 334, 510, 325);
  	triangle(422, 319, 423, 334, 385, 324);
}

function mouth(){
  	fill(255, 102, 102);
  	arc(450, 410, 49, 35, 0, PI);
}

function glasses(){
	noFill();
  	strokeWeight(3);
 	stroke(100);
  	rect(386, 329, 45, 30);
  	rect(463, 329, 45, 30);
  	line(431, 342, 463, 342);
  	line(386, 344, 353, 320);
  	line(508, 343, 545, 321);
}

  //debug function
function drawDebugInfo() {
	fill(0);
  	text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

// keyTyped gets triggered 
function keyTyped() {
  if (key === ' ') {
    gDebugMode = !gDebugMode;
	}
}

// background
function rainbowCircles(){
	for(let i = 0; i < 50; i++){
	  	color1 = random(0, 255); 
	  	color2 = random(0, 255); 
	  	color3 = random(0, 255); 
	  	fill(color1, color2, color3); 
	  	let x_r = random(0, windowWidth); 
	  	let y_r = random(0, windowHeight); 
	  	circle(x_r, y_r,30); 
  }
}