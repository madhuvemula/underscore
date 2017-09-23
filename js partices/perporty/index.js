'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');






    var object1 = {name: 'moe'};

    a.innerText = JSON.stringify(object1);

    const obj = ('moe' === _.property('name')(object1));
    c.innerText = JSON.stringify(obj);


    const object = object1.hasOwnProperty('name');
    b.innerText = JSON.stringify(object);




}())