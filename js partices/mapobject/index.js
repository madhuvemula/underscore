(function() {
    const a = document.querySelector('#obj');
    const b = document.querySelector('#N-js');
    const c = document.querySelector('#_ujs');







    const obj1 = {start: 5, end: 12};
    a.innerText = JSON.stringify(obj1);




    const obj =_.mapObject({start: 5, end: 12}, function(val, key) {
  return val + 5;
});
    
    c.innerText = JSON.stringify(obj);


     const keys = Object.keys(obj1);
    const values = Object.values(obj1);
    const key = { };
    for (let i=0; i<= keys.length-1; i++) {
        key [keys[i]] = values[i] + 5;
    }
    

    b.innerText = JSON.stringify(key);

}())