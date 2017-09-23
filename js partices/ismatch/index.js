'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
 




    const object1 = {name: 'moe', age: 50, userid: 'moe1'};
    a.innerText = JSON.stringify(object1);
    
    const obj = _.isMatch(object1, {age: 50});
     
    c.innerText = JSON.stringify(obj);


function check(a) {
        if (a.age === 50) {
            return true;
        } else {
            return false;
        }
    }

    const object =check(object1);
    b.innerText = JSON.stringify(object);




}())