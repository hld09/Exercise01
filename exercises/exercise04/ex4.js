var normal;  // Declare variable 'img'.
var mini;  // Declare variable 'img'.
var little;  // Declare variable 'img'.
var big;  // Declare variable 'img'.
var humongo;  // Declare variable 'img'.

var allTheElmos = [];
var elmos = [];
var count=0;

var x=0;
var y=160;

function setup() {
  createCanvas(1300, 800);
  background("#ffffff");
  textSize(32);
  text("Click me and hold my hand :)", 800, 600);

  mini = loadImage("./elmo.jpg");  // Load the image
  little = loadImage("./elmo.jpg");  // Load the image
  normal = loadImage("./elmo.jpg");  // Load the image
  big = loadImage("./elmo.jpg");  // Load the image
  humongo = loadImage("./elmo.jpg");  // Load the image

  // allTheElmos.push(little, normal, mini, big, humongo);
  // Create 200 particles and store them in a list
  // for (var i = 0; i < 1; i++) {
   for (var i = 0; i < 1; i++) {
    var o = new Elmo("./elmo.jpg", (0, 20), (0, 10));
    var p = new Elmo("./elmo.jpg", (0, 150), (0, 10));
    var i = new Elmo("./elmo.jpg", (0, 340), (0, 10));
    elmos.push(p, i);
  }
}

function draw() {

  // Displays the image at point (0, height/2) at half size
  //image(mini, 20,10, normal.width/7, normal.height/7);
  //image(normal, 340,10, normal.width/3, normal.height/3);
  //image(big, 570,10, normal.width/1.8, normal.height/1.8);
  //image(humongo, 880,20, normal.width/1.6, normal.height/1.6);

  if (count == 30){
    clear(mini);
    count=0;
  }
  for (var i = 0; i < elmos.length; i++) {
    elmos[i].drawTheElmo();
  }

}
function Elmo(imgPath, x, y) {
  this.elmoImg1 = loadImage(imgPath);
  this.elmoImg2 = loadImage(imgPath);
  this.mini = loadImage(imgPath);

  this.x = x;
  this.y = y;

  this.velX = random(-2, 2);
  this.velY = random(-2, 2);

  this.gravity = 0.1;

  this.shouldMove = false;

  // The function updates the position, and draws the ellipse using p5
  this.drawTheElmo = function() {
      var distance = dist(this.x, this.y, mouseX, mouseY);
      if (distance < 50) {
          this.shouldMove = true;
      }

      if (this.shouldMove) {
        //Apply gravity (which is the rate of change of the Y velocity)
        this.velY += this.gravity;

        // Apply velocity to the position

        // this.x += this.velX;
        this.y += this.velY;


        // If we have moved off the screen, reverse the veloctity
        if (this.x > width || this.x < 0) {
          this.velX *= -1;
        }
        if (this.y > height || this.y < 0) {
          this.velY *= -1;
        }
    }

    image(this.elmoImg1, this.x, this.y, normal.width/4, normal.height/4);
    image(this.elmoImg2, 540, this.y, normal.width/3, normal.height/3);
    image(this.mini, 20, this.y, normal.width/7, normal.height/7);



  }
}

    function mousePressed() {
        count=count+1;

        translate(980, 320);
        rotate(radians(frameCount));
        image(mini, 20,10, normal.width/7, normal.height/7);
        redraw();

    }
