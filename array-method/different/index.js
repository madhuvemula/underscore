'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [1, 2, 3, 4, 5];
    a.innerText = JSON.stringify(number);


    const no = _.difference(number, [5, 2, 10]);

    c.innerText = JSON.stringify(no);


    const num = number.filter(function(item){
    	let no = 5;
    	
    	return item !== no;
    });
    const num2 = num.filter(function(item){
    	let no = 2;
    	
    	return item !== no;
    });
    b.innerText = JSON.stringify(num2);





}())