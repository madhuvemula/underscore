'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
    const d =document.querySelector('#obj1')



const iceCream = {flavor: "chocolate"};
const  object1 = {flavor: "vanilla", sprinkles: "lots"};
    a.innerText = JSON.stringify(iceCream);
    d.innerText =JSON.stringify(object1);

     const obj =_.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
    c.innerText = JSON.stringify(obj);


    const object = new Object(iceCream,object1);
    b.innerText = JSON.stringify(object);




}())