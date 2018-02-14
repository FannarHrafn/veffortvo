"use strict";

//document.getElementsByTagName("div")[0].setAttribute("class", "active");
//document.getElementsByTagName("div")[2].remove();
var body = document.getElementsByTagName('body')[0];
var quizdiv = document.createElement('div');
var spurdiv = document.createElement('div');
var spurning = document.createTextNode('Spurning 1');
var svarmogu1 = document.createElement('div');
var svarmogu2 = document.createElement('div');
var mogutexti1 = document.createTextNode('möguleiki 1');
var mogutexti2 = document.createTextNode('möguleiki 2');
var svor = document.createElement('div');

quizdiv.setAttribute("id","quiz");
spurdiv.setAttribute("id","question");
svor.setAttribute("id","answers");
svarmogu1.setAttribute("class","answer");
svarmogu1.setAttribute("data-active","answer");
svarmogu2.setAttribute("class","answer");
svarmogu2.setAttribute("data-active","answer");



body.appendChild(quizdiv);
svarmogu1.appendChild(mogutexti1);
svarmogu2.appendChild(mogutexti2);
quizdiv.appendChild(spurdiv);
spurdiv.appendChild(spurning);
svor.appendChild(svarmogu1);
svor.appendChild(svarmogu2);
spurdiv.appendChild(svor);