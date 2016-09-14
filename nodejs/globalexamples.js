'use strict';

console.log(__dirname);
console.log(__filename);

var buff = new Buffer('Hello world');

console.log(buff.toString());

// setTimeout(function(){
// 	console.log('hello, async function');
// }, 1000);

const time = setInterval(() => console.log('hello async'), 1000);

setTimeout(() => {
	clearInterval(time);
}, 2000)