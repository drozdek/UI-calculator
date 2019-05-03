$(function () {
  var $calc = $('.calculator');
  var arr = [];
  $calc.on('click', '.item', (e) => {
    debugger;
    let patt = /dig-/g;
    let result = $(e.target).attr('id').replace(patt, '');
    arr.push( result );
    newarr = arr.join('');
    console.log(newarr);
     
  });

  

})