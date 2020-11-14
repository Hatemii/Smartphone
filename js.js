
// variables
var circle = document.getElementById("circle");
var upButton = document.getElementById("upBtn");
var downButton = document.getElementById("downBtn");

var rotateValues = circle.style.transform;
var rotateSum;

// up Button
upBtn.onclick = function(){
  rotateSum = rotateValues + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValues = rotateSum;
}

// down upButton
downBtn.onclick = function(){
  rotateSum = rotateValues + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValues = rotateSum;
}
