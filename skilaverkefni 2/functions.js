//Function declaration
var x = add(1, 2);
// x = 3

function add(a, b) {
    return a + b;
}
//Function exspression
var add = function add(a, b) {
    return a + b;
};
//Arrow function
var add = (a, b) => a + b;
//9.
x();
function x() {
	console.log('x');
}