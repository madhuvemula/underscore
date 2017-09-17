'use strict';

( function() {

	const a = document.querySelector('#demo')
	const b = document.querySelector('#N_js')
	const c = document.querySelector('#_Ujs')


	let number = [1, 2, 3, 10, 20, 30];
	// let num = number.join()
	// console.log(num)
	a.innerText = JSON.stringify(number);


	let list = Math.min(...number);
	b.innerText = JSON.stringify(list);

	let result = _.min(number);
	c.innerText = JSON.stringify(result);




} ())