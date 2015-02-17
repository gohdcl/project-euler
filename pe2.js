/*
The following problem is taken from Project Euler:

Problem 2
https://projecteuler.net/problem=2

Each new term in the Fibonacci sequence is generated by adding the previous two
terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed
four million, find the sum of the even-valued terms.
*/

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
