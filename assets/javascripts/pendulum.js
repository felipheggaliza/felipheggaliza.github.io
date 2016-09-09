var g      = 9.8;
var time   = 0.05;

var canvas  = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var init    = {};

function run(){
  var myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
  var myLine2 = {x0: 0, y0: 0, x: 0, y: 0};
  var myCircle1 = {x: X0+l1*Math.sin(Phi1), y: Y0+l1*Math.cos(Phi1), mass: m1};
  var myCircle2 = {x: X0+l1*Math.sin(Phi1)+l2*Math.sin(Phi2), y: Y0+l1*Math.cos(Phi1)+l2*Math.cos(Phi2), mass: m2};

  clearInterval(init);
  context.clearRect(0, 0, canvas.width, canvas.height);
  init = setInterval(function(){
    animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context);
  }, 5);

}
