function boxrow(boxes){
  const container=document.getElementsByClassName("container")[0];
  const  containerwidth=container.clientWidth;
  const r=Math.floor(containerwidth/(220));
  visibility();
  for(let i=r;i<10;i+=r){
      lineConnection(i);
  }
  
}
function lineConnection(box){
  const leftSide = document.getElementsByClassName("leftline")[box];
  const rightSide = document.getElementsByClassName("rightline")[box - 1];
  const line = document.getElementsByClassName("lineconnection")[box - 1];
  const adjacentLine = document.getElementsByClassName("adj-line")[box - 1];
  adjacentLine.style.visibility = 'hidden';
line.style.visibility = 'visible';
leftSide.style.visibility = 'visible';
rightSide.style.visibility = 'visible';


  switch (box) {
  case 1:
    line.style.width = "220px";
    break;
  case 2: 
    line.style.width = "440px";
    break;
  case 3: 
    line.style.width = "660px";
    break;
  case 5: 
    line.style.width = "1100px";
    break;
  case 6:
    line.style.width = "1320px";
    break;
  case 7: 
    line.style.width = "1540px"
    break;
  case 8: 
    line.style.width = "1760px";
    break;
      case 9:
          line.style.width = "1980px";
          break;
  
  default:
    line.style.width = "880px";

}
}

function visibility(){
  const adjacentLine =document.getElementsByClassName("adj-line");
  for(let element of adjacentLine){
      element.style.visibility = 'visible';
      
  }
  const left = document.getElementsByClassName('leftline');
for (let element of left) {
  element.style.visibility = 'hidden';
}
  const line = document.getElementsByClassName('lineconnection');
for (let element of line) {
  element.style.visibility = 'hidden';
}
  const right = document.getElementsByClassName('rightline');
for (let element of right) {
  element.style.visibility = 'hidden';
}

}
const boxes = document.querySelectorAll('.box');
window.addEventListener("resize", boxrow);
window.onresize = function () {
  location.reload();
};
boxrow(boxes);