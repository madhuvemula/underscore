'use strict';
(function() {
    const a = document.querySelector('#obj')
    const b = document.querySelector('#N_js')
    const c = document.querySelector('#_Ujs')


    let number = [1, 2, 1, 4, 1, 3];
    a.innerText = JSON.stringify(number);


    const no = _.uniq(number);
    c.innerText = JSON.stringify(no);


    const num = number.filter(function(item){
      let no = 1;
      return item !== no;
    })
    const num1= num.unshift(1);
    
    b.innerText = JSON.stringify(num);




}())