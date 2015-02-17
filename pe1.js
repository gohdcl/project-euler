function pe1 () {
  var total = 0;
  for(var i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0) {
      total += i;
    } // end if
  } // end for
return total;
} // end pe1

pe1();
