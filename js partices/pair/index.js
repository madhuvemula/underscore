'use strict;'
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');

    const object = {one: 1, two: 2, three: 3};
    a.innerText = JSON.stringify(object);




    const obj =_.pairs(object);
    c.innerText = JSON.stringify(obj);


    const key1=  Object.values(object);
    const key2 = Object.keys(object);
    const keys = [];
    for (let i=0; i<key1.length; i++) {
    	let key = [key2[i], key1[i]];
    	console.log(key) ;
    	keys.push(key)
    }
    b.innerText = JSON.stringify(keys);


    

}())