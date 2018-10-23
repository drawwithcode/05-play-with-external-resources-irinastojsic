var myImage;
var mySong;
var w;

function preload(){
  myImage = loadImage ('./assets/elephant.gif');

  mySong = loadSound('./assets/elephant never forgets.mp3');

}

function setup() {
  createCanvas (windowWidth,windowHeight);
  mySong.play();
  fft = new p5.FFT (0.7,512);
  w = width / 150;

}

function draw() {
background(0);

image (myImage, 600, 180, myImage.width+50, myImage.height+50);

var spectrum = fft.analyze();
noStroke();

for (var i = 0; i < 250; i++){
  var amp = spectrum[i];
  var y = map(amp,0,width,height,0);
  fill(i,255,255);

  rect(i*w, y, w - 2, height - y);
  rect(i*w, height - y, w - 2, y - height);
}

}
