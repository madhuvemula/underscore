'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [5, 10, 3, 8, 8, 10, 4, 12];
    a.innerText = JSON.stringify(number);


    const no = _.without(number, 10,8);
    c.innerText = JSON.stringify(no);


    const num = number.filter(function(item){
        let  no = 10;
        
           return item !== no;
       });
           const num1 = num.filter(function(item){
        let  no = 8;
        
           return item !== no;
    });
    b.innerText = JSON.stringify(num1);




}())