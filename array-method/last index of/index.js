'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [1, 2, 1, 4, 2, 1, 3];
    a.innerText = JSON.stringify(number);


    const no = _.lastIndexOf(number, 2);
    c.innerText = JSON.stringify(no);


    const num = number.lastIndexOf(2);
    b.innerText = JSON.stringify(num);




}())