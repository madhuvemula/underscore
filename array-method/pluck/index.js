'use strict';
(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    const employeesTCS = [{ name: 'prakash', age: 40 }, { name: 'naresh', age: 30 }];
    a.innerText = JSON.stringify(employeesTCS);

    // Using JS Pluck Methods JS
    let list = Object.values(employeesTCS);
        b.innerText = JSON.stringify(employeesTCS);

    // Using UnderScore Pluck Methods

    let result = _.pluck(employeesTCS, 'name');
    c.innerText = JSON.stringify(result);





}())