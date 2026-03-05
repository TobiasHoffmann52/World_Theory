let map;
let rsmiley;
let ysmiley;
let gsmiley;

function preload() {
  map = loadImage('/assets/map.png');
  rsmiley = loadImage('/assets/rsmiley.png');
  ysmiley = loadImage('/assets/ysmiley.png');
  gsmiley = loadImage('/assets/gsmiley.png');
}

function setup() {
  createCanvas(1200, 800);
  noStroke();
}


function draw() {
  clear();
  background(120);
  startGame();
  renderStat();
}
