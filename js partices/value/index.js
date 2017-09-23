'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');

    const number = {one: 1, two: 2, three: 3};
    a.innerText = JSON.stringify(number);




    const obj =_.values(number);
    c.innerText = JSON.stringify(obj);


    const keys=  Object.values(number);

    b.innerText = JSON.stringify(keys);

}())