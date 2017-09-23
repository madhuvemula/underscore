'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [0,1, 2, 3,4,5,6,7,8,9];
    a.innerText = JSON.stringify(number);


    const no = _.range(10);
    c.innerText = JSON.stringify(no);


   // const num = number.copyWithin();
   const num = [];
   for (var i = 0; i < 10;i++){
   	num.push(i);
   }
    b.innerText = JSON.stringify(num);




}())