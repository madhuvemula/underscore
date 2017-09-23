'use strict';
(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');
    const d = document.querySelector('#obj1')





    var stooge = {name: 'prakash', luckyNumbers: [13, 27, 34]};
    var clone  = {name: 'prakash', luckyNumbers: [13, 27, 34]};

    a.innerText = JSON.stringify(stooge);
    d.innerText =JSON.stringify(clone);

    const obj = _.isEqual(stooge, clone);
    c.innerText = JSON.stringify(obj);


    const object = (stooge != clone);

    b.innerText = JSON.stringify(object);




}())