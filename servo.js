/**
  Usando Arduino UNO mueve un servo segun la cantidad luz captada por una fotocelda.
**/
var jf = require("johnny-five"); // Library johnny-five nodejs
var board = new jf.Board();
var led, servo, cell;
var turn = 0;

board.on("ready", init);

function init() {
    var config = { // Json cell configuration
      pin:"A0",
      freq: 50
    };
    cell = new jf.Sensor(config); // Photoresistor - Analog In: A0

    led = new jf.Led(13); // Led - Digital Pin: 13
    led.on();

    servo = new jf.Servo(9); // Servo - Digital Pin: 9
    servo.to(90);

    move();
}
// Function to move a servo according to the amount of light.
function move() {
  console.log("light: " + cell.value);
  var light = cell.value; // Light capture value
  // 600 (custom) - Minumum of light to move the servo (max: 1024)
  if (light > 600) {
    if (turn) {
      turn = 0;
      servo.to(70);
    }else {
      turn = 1;
      servo.to(110);
    }
  }else {
    servo.to(39);
  }

  setTimeout(move, 1000); // move() recusive per second
}
