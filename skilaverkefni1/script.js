var x = document.getElementById("1");
x.textContent = "Hallo heimur";
x.style.color = "#ff0000";

var cart = ['Coke','kjuklingur','BBQ','Kex','Bananar'];
var vorur = document.getElementById("cart");
var carttext = ""
for (var i=0; i < cart.length; i++) {
	carttext+= cart[i]+" ";
} 

vorur.innerHTML=carttext;