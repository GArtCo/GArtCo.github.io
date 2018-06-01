//Show Description
var d = function (id1, id2, id3) {
  if(window.fullscreen != 1 && window.fullscreen2 != 1){
  var TitleD = document.getElementById(id2);
  var Art = document.getElementById(id1);
  var TextD = document.getElementById(id3);
  if (Art.height < 300){
  TitleD.style.position="absolute";
  TitleD.style.top=Art.getBoundingClientRect().top;
  TitleD.style.left=Art.getBoundingClientRect().left+(Art.width/4);
  Art.style.filter="blur(2px)";
  TitleD.style.display="inline-block";
  TextD.style.position="absolute";
  TextD.style.top=Art.getBoundingClientRect().top;
  TextD.style.left=Art.getBoundingClientRect().left;
  TextD.style.display="inline-block";
  TextD.style.maxWidth=Art.width-5;
}
}
}

//Hide description
var hd = function(id1, id2, id3){
  if(window.fullscreen != 1 && window.fullscreen2 != 1){
  var TitleD = document.getElementById(id2);
  var Art = document.getElementById(id1);
  var TextD = document.getElementById(id3);
  TitleD.style.display="none";
  TextD.style.display="none";
  Art.style.filter="blur(0)";
}
}

//Fullscreen
//Portrait
var full = function(id1, id2, id3){
  var TitleD = document.getElementById(id2);
  var Art = document.getElementById(id1);
  var TextD = document.getElementById(id3);
  if(window.fullscreen != 1 && window.fullscreen2 != 1 || Art.height > 200){
  if (typeof window.fullscreen == 'undefined') {
  window.fullscreen = 1;
  TitleD.style.display="none";
  TextD.style.display="none";
  Art.style.filter="blur(0)";
  Art.style.height="100%";
  Art.style.width=Art.height*.75;
  Art.style.position="absolute";
  Art.style.top="0px";
  Art.style.display="block";
  Art.style.margin="auto";
  Art.style.left=(screen.width/2)-parseInt(Art.style.width, 10)/2;
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
  Art.mouseup.waituntil();
  document.body.addEventListener("click", displayDate);

  function displayDate() {
    console.log("in displayDate");
    if(window.fullscreen==1){
      console.log("in ==1");
      fulld();
    }
  }
}
else if (window.fullscreen == 0) {
  window.fullscreen = 1;
  TitleD.style.display="none";
  TextD.style.display="none";
  Art.style.filter="blur(0)";
  Art.style.height="100%";
  Art.style.width=Art.height*.75;
  Art.style.position="absolute";
  Art.style.top="0px";
  Art.style.left=(screen.width/2)-parseInt(Art.style.width, 10)/2;
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
  Art.mouseup.waituntil();
  document.body.addEventListener("click", displayDate);

  function displayDate() {
    console.log("in displayDate");
    if(window.fullscreen==1){
      console.log("in ==1");
      fulld();
    }
  }
}
else{
  window.fullscreen = 0;
  TitleD.style.display="none";
  TextD.style.display="none";
  document.body.style.filter="blur(0)";
  Art.style.filter="blur(0)";
  Art.style.height="200px";
  Art.style.width="150px";
  Art.style.position="inherit";
  Art.style.display="inline";
  document.getElementById('art').style.paddingLeft="10px";
  document.body.style.overflowY="scroll";
  document.getElementById('nav').style.display="inherit";

  document.body.removeEventListener("click", displayDate);
}
}
}

//Landscape
var fulll = function(id1, id2, id3){
  var TitleD = document.getElementById(id2);
  var Art = document.getElementById(id1);
  var TextD = document.getElementById(id3);
  if(window.fullscreen != 1 && window.fullscreen2 != 1 || Art.width > 500){
  if (typeof window.fullscreen2 == 'undefined') {
  window.fullscreen2 = 1;
  TitleD.style.display="none";
  TextD.style.display="none";
  Art.style.filter="blur(0)";
  Art.style.height="100%";
  Art.style.width="100%";
  Art.style.position="fixed";
  Art.style.top="0px";
  Art.style.left="0px";
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
}
else if (window.fullscreen2 == 0) {
  window.fullscreen2 = 1;
  TitleD.style.display="none";
  TextD.style.display="none";
  Art.style.filter="blur(0)";
  Art.style.height="100%";
  Art.style.width="100%";
  Art.style.position="fixed";
  Art.style.top="0px";
  Art.style.left="0px";
  document.getElementById('art').style.padding="0px";
  document.body.style.overflowY="hidden";
  document.getElementById('nav').style.display="none";
}
else{
  window.fullscreen2 = 0;
  TitleD.style.display="none";
  TextD.style.display="none";
  document.body.style.filter="blur(0)";
  Art.style.filter="blur(0)";
  Art.style.height="150px";
  Art.style.width="200px";
  Art.style.position="inherit";
  Art.style.display="inline";
  document.getElementById('art').style.paddingLeft="10px";
  document.body.style.overflowY="scroll";
  document.getElementById('nav').style.display="inherit";
}
}
}
