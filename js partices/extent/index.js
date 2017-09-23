'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
    const d = document.querySelector('#obj1');




    const object1 = { name: "madhu" };
    const object2 = { age: 20 };
    a.innerText = JSON.stringify(object1);
    d.innerText = JSON.stringify(object2)

    const obj = _.extend(object1, object2);
    c.innerText = JSON.stringify(obj);


    const object = new Object(object1, object2);
    b.innerText = JSON.stringify(object);




}())