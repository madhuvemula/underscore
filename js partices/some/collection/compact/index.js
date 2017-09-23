'use strict';
( function() {
	const a= document.querySelector('#iobj');
    const b = document.querySelector('#_ujs');
    const c = document.querySelector('#n-js');

      

       function stringify(data) {
    try {
        data = JSON.stringify(data);
    } catch(e){
         console.log(e)
    }
    return data;
   }


    const falsyValues = [0, 1, false, 2, '', 3];
    a.innerText = JSON.stringify(falsyValues);



    const result_U = _.compact(falsyValues);
    b.innerText =JSON.stringify(result_U);

    

      function filterer(arr) {
     return arr > 0|| isNaN(arr) === true;
  }
    const result_N = falsyValues.filter(filterer)
    c.innerText =JSON.stringify(result_N);
} ());