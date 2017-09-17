'use strict';
(function(){
	const a = document.querySelector('#obj')
	const b = document.querySelector('#N_js')
	const c = document.querySelector('#_Ujs')


	let  number =[5,10,3,6,12];
	a.innerText = JSON.stringify(number);
	

	const no = _.first(number);
    c.innerText= JSON.stringify(no);


	const  num = number.shift();
	b.innerText =JSON.stringify(num);
 
    
} ())