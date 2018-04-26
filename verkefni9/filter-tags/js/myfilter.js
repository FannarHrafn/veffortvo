"use strict";
var data = [["p1.jpg","animators","illustrators"],["p2.jpg","photographers, filmmakers"],
			["p3.jpg","photographers, filmmakers"],["p4.jpg","designers"],
			["p5.jpg","photographers, filmmakers"],["p6.jpg","designers","illustrators"],
			["p7.jpg","photographers"],["p8.jpg","designers"],["p9.jpg","animators","illustrators"]];
var tags = [];
for (var x = 0; x < data.length; x++){
	for (var y = 1; y < data[x].length; y++){
		if (!(tags.includes(data[x][y]))){
			tags.push(data[x][y]);
		}
	}
}
for (var i = 0; i < tags.length; i++){
	var node = document.createElement("button");              
	var textnode = document.createTextNode(tags[i]);        
	node.appendChild(textnode); 
	document.getElementById("buttons").appendChild(node);
}