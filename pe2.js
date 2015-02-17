function evenFibonacci () {
  var total = 0; // initialize the total to 0
  var fibFirst = 0; // The first Fibonacci number, initialized to 0
  var fibSecond = 1; // The second Fibonnaci number, initialized to 1
  var tempNumber; // Declare a temporary holding variable for changing values

  while(fibSecond <= 4000000) {
      if (fibSecond % 2 === 0){ // if fibSecond is even
        total += fibSecond; // add fibSecond to total
      } // end if
    tempNumber = fibSecond;
    fibSecond += fibFirst;
    fibFirst = tempNumber;

  } // end while

  return total;
} // end evenFibonacci

evenFibonacci();
