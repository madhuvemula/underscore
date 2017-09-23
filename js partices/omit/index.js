'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
 




    const object1 = {name: 'moe', age: 50, userid: 'moe1'};
    a.innerText = JSON.stringify(object1);
    
    const obj = _.omit(object1, 'userid');
     console.log(obj)
    c.innerText = JSON.stringify(obj);


    const object = new Object(object1);
    const object2 = delete object.userid;

    b.innerText = JSON.stringify(object);




}())