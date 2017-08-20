/**
  Ref: http://johnny-five.io/
  Install: $ npm install johnny-five
**/
var five = require("johnny-five"); // Library jhonny-five nodejs
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var ledGreen = new five.Led(9);
  led.blink(200);
  ledGreen.blink(700)
});
