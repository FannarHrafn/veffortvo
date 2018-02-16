"use strict";
//Fannar Hrafn Haraldsson
//16.2.18
//verkefni 6
  var spurnode = document.getElementById("spur");
  var svar1node = document.getElementById("svar1");
  var svar2node = document.getElementById("svar2");
  var svar3node = document.getElementById("svar3");
  var svar4node = document.getElementById("svar4");
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
var sida2 = new Question("Hvenær varð Gunnar Nelson landsliðsmaður í karate",
						["17",
						"20",
						"18"],
						"16");

//geymi sidu objects í array til að geta verið dynamic
var sidur=[sida1,sida2];
//mun nota þennan teljara til að skipta um sidu
var teljari = 0;
//function fyrir að búa til strenginn fyrir html
var svarlisti=[svar1node,svar2node,svar3node,svar4node]
function skrifahtml(){
	//til að hreinsa bakgrunnslitinn frá síðustu spurningu
	if(teljari==1){
		for(let i = 0;i<4;i++){
			svarlisti[i].style.background="white";
		}
	}
    spurnode.innerText=sidur[teljari].spur;
    svar1node.innerText=sidur[teljari].mogu[0];
    svar2node.innerText=sidur[teljari].mogu[1];
    svar3node.innerText=sidur[teljari].mogu[2];
	svar4node.innerText=sidur[teljari].svar;
}
//feedback fyrir rétt svar og færi á nýja síðu
function Clicker(){
    svar4node.style.background="green"
	if(teljari<1){
		teljari+=1;
	}
	setTimeout(skrifahtml,1500);
}
//feedback fyrir svör
svar1node.addEventListener('click',function(){svar1node.style.background="red";},false);
svar2node.addEventListener('click',function(){svar2node.style.background="red";},false);
svar3node.addEventListener('click',function(){svar3node.style.background="red";},false);
svar4node.addEventListener('click',Clicker,false);
//leika mér með css
spurnode.style.border = "1px solid #0000FF";
spurnode.style.padding = "1em 1em 1em 1em";
for(let i = 0;i<4;i++){
	svarlisti[i].style.padding="1em 1em 1em 1em";
	svarlisti[i].border="solid";
}
bodynode.style.margin = "2em 40em 0 40em";
skrifahtml();