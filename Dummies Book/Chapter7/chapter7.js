document.getElementById("rightarm").style.backgroundColor="purple";
document.getElementById("lefteye").style.backgroundColor="pink";

document.getElementById("head").style.transform="rotate(15deg)";
document.getElementById("body").style.backgroundColor="green";
document.getElementById("body").style.border="3px black solid";

document.getElementById("righteye").style.border="4px white dotted";
document.getElementById("head").style.backgroundColor="black";

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
function moveUpDown(e) {
 let robotPart = e.target;
 let top = 0;
 let id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.top = top + '%';
 top++;
 if (top === 20){
 clearInterval(id);
 }
 }
}
let leftArm= document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70){
    clearInterval(id);
    }
    }
   }
