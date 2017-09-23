'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');




    const object1 = { name: "madhu" , age: 20 };
    a.innerText = JSON.stringify(object1);
    
    const obj = _.clone(object1);
    c.innerText = JSON.stringify(obj);


    const object = new Object(object1);
    b.innerText = JSON.stringify(object);




}())