"use strict";
//Fannar Hrafn Haraldsson
//9.2.18
//verkefni 5 
  var spurnode = document.getElementById("quiz").firstChild;
  var svarnode = document.getElementById("quiz").lastChild;
  var bodynode = document.body;
 
function Question(spur,mogu,svar){
  this.spur=spur;
  this.mogu=mogu;
  this.svar=svar;
}
//bý til sidu objects
var sida1 = new Question("Hvað hét kona Gunnars á Hlíðarenda?",
                        ["Ásgerður",
                        "Guðrún",
                        "Bera"] ,
                        "Hallgerður");
//geymi sidu objects í array til að geta verið dynamic
var sidur=[sida1];
//mun nota þennan teljara til að skipta um sidu
var teljari = 0;
//function fyrir að búa til strenginn fyrir html
function skrifahtml(){
  //bý til spurningu streng
  var spurning = sidur[teljari].spur;
  //bý til svarmöguleika streng
  var svarm="";
  for(let i=0; i <3;i++){
    svarm+= sidur[teljari].mogu[i]+ " ";
  } 
  //bæti rétta svarinu við möguleika
  svarm+=sidur[teljari].svar;
  //skrifa í html
  spurnode.innerText=spurning;
  svarnode.innerText=svarm;
}
//leika mér með css
spurnode.style.border = "1px solid #0000FF";
spurnode.style.padding = "1em 1em 1em 1em";
spurnode.style.width = "16em";
svarnode.style.border = "1px solid #0de23f";
svarnode.style.margin = "10px 0 0 10px";
svarnode.style.padding = "1em 1em 1em 1em";
svarnode.style.width = "16em";
bodynode.style.margin = "2em 40em 0 40em";
skrifahtml();