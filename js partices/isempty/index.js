'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
 




    const object1 = {name: 'moe', age: 50, userid: 'moe1'};
    a.innerText = JSON.stringify(object1);
    
    const obj = _.isEmpty(object1);
     
    c.innerText = JSON.stringify(obj);


    const object = object1.hasOwnProperty();

    b.innerText = JSON.stringify(object);




}())