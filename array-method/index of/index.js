'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [1, 2, 1, 4, 1, 3];
    a.innerText = JSON.stringify(number);


    const no = _.indexOf(number, 2);
    c.innerText = JSON.stringify(no);


    const num = number.indexOf(2);
    b.innerText = JSON.stringify(num);




}())