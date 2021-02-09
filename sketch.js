// Global
var gDebugMode = false;

// Setup code goes here
function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(208,221,255);
  //Circles
  rainbowCircles();

  //Face 
  noStroke()
  fill(260, 221, 155);
  ellipse(450, 350, 200, 260);

  //Ears
  ellipse(350, 350, 50, 60);
  ellipse(550, 350, 50, 60);

  //Nose
  fill(232, 220, 116);
  triangle(450, 350, 436, 380, 460, 382);

  //Nostrils
  fill(32,19,19);
  ellipse(455, 377, 5, 5);
  ellipse(440, 377, 5, 5);

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(500, 250, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(380, 220, 140, 148, 0, 0.75 * Math.PI);

   //Neck
  fill(260, 221, 155)
  rect(425, 460, 50, 55, 20);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(485, 345, 35, 20);
  ellipse(410, 345, 35, 20);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(485, 340, 8, 8);
  ellipse(410, 340, 8, 8);

  //Eyebrows 
  noStroke()
  fill(32, 19, 19);
  triangle(470, 319, 470, 334, 498, 325);

  //debug
    if( gDebugMode == true ) {
  	drawDebugInfo();
  }
 	
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