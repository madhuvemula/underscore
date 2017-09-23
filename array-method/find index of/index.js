'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [0,1, 2, 3,4,5,6,7,8,9];
    a.innerText = JSON.stringify(number);


    const no = _.findIndex(number,4);
    c.innerText = JSON.stringify(no);


   // const num = number.copyWithin();
   const num = number.indexOf(4);
    b.innerText = JSON.stringify(num);




}())