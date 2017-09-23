'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');




    const name = {name: "Moses", Larry: "Louis", Curly: "Jerome"};
    a.innerText = JSON.stringify(name);




    const obj =_.allKeys(name);
    c.innerText = JSON.stringify(obj);


    const keys=  Object.keys(name);

    b.innerText = JSON.stringify(keys);

}())