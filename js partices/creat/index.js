'use strict;'
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');

   


    const object = {};
    a.innerText = JSON.stringify(object);

    const obj =_.create(object.prototype, {name: "madhu"});
    c.innerText = JSON.stringify(obj);


    const keys = new Object({name: "madhu"});   
    b.innerText = JSON.stringify(keys);


    

}())