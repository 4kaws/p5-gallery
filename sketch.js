let camShader;
let cam;

function preload() {
  camShader = loadShader("colorwave.vert", "colorwave.frag");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(400, 400);
  cam.hide();
  
}

function draw() {
  shader(camShader);
  camShader.setUniform("tex0", cam);
  const mx = map(mouseX, 0, width, -0.5, 0.5);
  const my = map(mouseY, 0, height, -0.5, 0.5);
  camShader.setUniform("u_mouse", [mx, my]);
  camShader.setUniform("u_resolution", [width, height]);
  camShader.setUniform("u_time", millis() / 10000);
  //rect(0, 0, width, height);
  //ellipse(260, 260, 200, 200, 100);
  sphere(10,100,100);
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("myCanvas", "jpg");
  } else if (key == "g") {
    saveGif("mySketch", 15);
  }
}

