var a = 1;

function foo(){
	console.log('a: ' + a);
	var a = 2;
	console.log('b: ' + a);
}

foo();

console.log('c: ' + a);