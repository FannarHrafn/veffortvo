"use strict";
//Fannar Hrafn Haraldsson
//23.2.18
//verkefni 7
/*
spurning 1

  callback er þegar function notar annað function sem argument
  function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

spurning 2
 
 Event loop er um að bíða og fylgjast með ef það koma einhver events og
 síðan ákveða hvað á að nota þær í

spurning 3
það eina sem ég sé er að kannski ætti maður að taka e inn sem parameter
  function checkUsername() {
  var target = e.target;
  }
  var el = document.getElementById('username');
  el.addEventListener('blur', checkUsername, false);

spurning 4

Þetta tengist hvernig javascript  safnar events og vinnur úr þeim,
ef þú setur true þá mun það fyrst sjá um það event síðan halda áfram dýpra
ef  þú setur false þá mun það fyrst sjá um börnin og síðan fara upp og sjá um þetta event
 

 spurning 5
a) ef þú klikkar á element inní öðru element sem bæði hafa listeners sem kalla á functions
þá getur notað .stopPropagation til að bara listener á innra elementinu geri sitt og stoppar eventið
frá því að fara upp DOM tréið og kveikja á foreldra element listener
b)preventDefault er notað svo að ef event var ekki séð um nákvæmlega eins og var ætlað
að þá reyni ekki  eitthvað default process að sjá um það

*/

//gerði frekar grænt á réttu heldur en rautt á öllu eins og í verkefninu

function itemDone(e) {                           // Declare function
  // Remove item from the list
  var target, elParent, elGrandparent;           // Declare variables
  target = e.target;
  if(target=== svar4node){
    target.style.background='green';
    if(teljari<1){
    teljari+=1;
    setTimeout(skrifahtml,1500);
    }
  }
}

var el = document.getElementById('quiz');         
  el.addEventListener('click', function(e) {     
    itemDone(e);                                 
  }, false);
  //bæti líka við touch listener
  el.addEventListener('touch', function(e) {     
    itemDone(e);                                 
  }, false);                                       




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

/* gamalt feedback sem ég hafði
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
*/
//leika mér með css
spurnode.style.border = "1px solid #0000FF";
spurnode.style.padding = "1em 1em 1em 1em";
for(let i = 0;i<4;i++){
  svarlisti[i].style.margin="1em 1em 1em 1em";
	svarlisti[i].border="solid";
}
bodynode.style.margin = "2em 40em 0 40em";
skrifahtml();
