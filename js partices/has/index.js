'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');






    const object1 ={ a: 1, b: 2, c: 3 };
    a.innerText = JSON.stringify(object1);

    const obj = _.has(object1, "b");
    c.innerText = JSON.stringify(obj);


    const object = object1.hasOwnProperty("b");
    b.innerText = JSON.stringify(object);




}())