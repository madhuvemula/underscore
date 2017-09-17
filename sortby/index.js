'use strict';

( function() {

	const a = document.querySelector('#demo')
	const b = document.querySelector('#js')
	const c = document.querySelector('#_U')


	let number = [1, 2, 3, 8, 5, 9];
	// let num = number.join()
	// console.log(num)
	a.innerText = JSON.stringify(number);


	let list = number.sort();
	b.innerText = JSON.stringify(list);

	let result = _.sortBy(number);
	c.innerText = JSON.stringify(result);




} ())