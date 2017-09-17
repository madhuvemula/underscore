'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [0, 1, false, 2, '', 3];
    a.innerText = JSON.stringify(number);


    const no = _.compact(number);
    c.innerText = JSON.stringify(no);


    const num = number.filter(Number);
    b.innerText = JSON.stringify(num);





}())