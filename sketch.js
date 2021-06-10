var database,form;

function preload() {

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
form =new Form();
  
}

function draw() {
  background(255);  

  form.display();
  drawSprites();
}

