//---Dots---
//Show Description
var DotsD = document.getElementById('DotsD');
var dots = document.getElementById('dots');
var dOtsD = document.getElementById('dOtsD');
var dd = function(){
  if (dots.height < 300){
  DotsD.style.position="absolute";
  DotsD.style.top=dots.getBoundingClientRect().top;
  DotsD.style.left=dots.getBoundingClientRect().left+(dots.width/4);
  dots.style.filter="blur(2px)";
  DotsD.style.display="inline-block";
  dOtsD.style.position="absolute";
  dOtsD.style.top=dots.getBoundingClientRect().top;
  dOtsD.style.left=dots.getBoundingClientRect().left;
  dOtsD.style.display="inline-block";
  dOtsD.style.maxWidth=dots.width-5;
}
}
//Hide description
var hdd = function(){
  DotsD.style.display="none";
  dOtsD.style.display="none";
  dots.style.filter="blur(0)";
}
//Dots Fullscreen
var dots = document.getElementById('dots');
var fulld = function(){
  if (typeof window.fullscreen2 == 'undefined') {
  window.fullscreen2 = 1;
  DotsD.style.display="none";
  dOtsD.style.display="none";
  document.body.style.filter="blur(2)";
  dots.style.filter="blur(0)";
  dots.style.height="100%";
  dots.style.width=dots.height*.75;
  dots.style.position="absolute";
  dots.style.top="0px";
  dots.style.display="block";
  dots.style.margin="auto";
  dots.style.left=(screen.width/2)-parseInt(dots.style.width, 10)/2;
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
  dots.mouseup.waituntil();
  document.body.addEventListener("click", displayDate);

  function displayDate() {
    console.log("in displayDate");
    if(window.fullscreen2==1){
      console.log("in ==1");
      fulld();
    }
  }
}
else if (window.fullscreen2 == 0) {
  window.fullscreen2 = 1;
  DotsD.style.display="none";
  dOtsD.style.display="none";
  document.body.style.filter="blur(2)";
  dots.style.filter="blur(0)";
  dots.style.height="100%";
  dots.style.width=dots.height*.75;
  dots.style.position="absolute";
  dots.style.top="0px";
  dots.style.left=(screen.width/2)-parseInt(dots.style.width, 10)/2;
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
  dots.mouseup.waituntil();
  document.body.addEventListener("click", displayDate);

  function displayDate() {
    console.log("in displayDate");
    if(window.fullscreen2==1){
      console.log("in ==1");
      fulld();
    }
  }
}
else{
  window.fullscreen2 = 0;
  DotsD.style.display="none";
  dOtsD.style.display="none";
  document.body.style.filter="blur(0)";
  dots.style.filter="blur(0)";
  dots.style.height="200px";
  dots.style.width="150px";
  dots.style.position="inherit";
  dots.style.display="inline";
  document.getElementById('art').style.paddingLeft="10px";
  document.body.style.overflowY="scroll";
  document.getElementById('nav').style.display="inherit";

  document.body.removeEventListener("click", displayDate);
}
}

//---Bee---
//Show Description
var BeeD = document.getElementById('BeeD');
var bee = document.getElementById('bee');
var bEeD = document.getElementById('bEeD');
var bd = function(){
  if (bee.width < 500){
  BeeD.style.position="absolute";
  BeeD.style.top=bee.getBoundingClientRect().top;
  BeeD.style.left=bee.getBoundingClientRect().left+(bee.width/4);
  bee.style.filter="blur(2px)";
  BeeD.style.display="inline-block";
  bEeD.style.position="absolute";
  bEeD.style.top=bee.getBoundingClientRect().top;
  bEeD.style.left=bee.getBoundingClientRect().left;
  bEeD.style.display="inline-block";
  bEeD.style.maxWidth=bee.width-5;
}
}
//Hide Description
var hbd = function(){
  BeeD.style.display="none";
  bEeD.style.display="none";
  bee.style.filter="blur(0)";
}
//Bee Fullscreen
var bee = document.getElementById('bee');
var fullb = function(){
  if (typeof window.fullscreen == 'undefined') {
  window.fullscreen = 1;
  BeeD.style.display="none";
  bEeD.style.display="none";
  bee.style.filter="blur(0)";
  bee.style.height="100%";
  bee.style.width="100%";
  bee.style.position="fixed";
  bee.style.top="0px";
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
}
else if (window.fullscreen == 0) {
  window.fullscreen = 1;
  BeeD.style.display="none";
  bEeD.style.display="none";
  bee.style.filter="blur(0)";
  bee.style.height="100%";
  bee.style.width="100%";
  bee.style.position="fixed";
  bee.style.top="0px";
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
}
else{
  window.fullscreen = 0;
  BeeD.style.display="none";
  bEeD.style.display="none";
  bee.style.filter="blur(0)";
  bee.style.height="150px";
  bee.style.width="200px";
  bee.style.position="inherit";
  document.getElementById('art').style.paddingLeft="10px";
  document.body.style.overflowY="scroll";
}
}

//---Volcano---
//Show Description
var VolD = document.getElementById('VolD');
var vol = document.getElementById('vol');
var vOlD = document.getElementById('vOlD');
var vd = function(){
  if (vol.width < 500){
  VolD.style.position="absolute";
  VolD.style.top=vol.getBoundingClientRect().top;
  VolD.style.left=vol.getBoundingClientRect().left+(vol.width/4);
  vol.style.filter="blur(2px)";
  VolD.style.display="inline-block";
  vOlD.style.position="absolute";
  vOlD.style.top=vol.getBoundingClientRect().top;
  vOlD.style.left=vol.getBoundingClientRect().left;
  vOlD.style.display="inline-block";
  vOlD.style.maxWidth=vol.width-5;
}
}
//Hide Description
var hvd = function(){
  VolD.style.display="none";
  vOlD.style.display="none";
  vol.style.filter="blur(0)";
}
//Volcano Fullscreen
var vol = document.getElementById('vol');
var fullv = function(){
  if (typeof window.fullscreen3 == 'undefined') {
  window.fullscreen3 = 1;
  VolD.style.display="none";
  vOlD.style.display="none";
  vol.style.filter="blur(0)";
  vol.style.height="100%";
  vol.style.width="100%";
  vol.style.position="fixed";
  vol.style.top="0px";
  vol.style.left='0px';
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
}
else if (window.fullscreen3 == 0) {
  window.fullscreen3 = 1;
  VolD.style.display="none";
  vOlD.style.display="none";
  vol.style.filter="blur(0)";
  vol.style.height="100%";
  vol.style.width="100%";
  vol.style.position="fixed";
  vol.style.top="0px";
  vol.style.left='0px';
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
}
else{
  window.fullscreen3 = 0;
  VolD.style.display="none";
  vOlD.style.display="none";
  vol.style.filter="blur(0)";
  vol.style.height="150px";
  vol.style.width="200px";
  vol.style.position="inherit";
  document.getElementById('art').style.paddingLeft="10px";
  document.body.style.overflowY="scroll";
}
}
