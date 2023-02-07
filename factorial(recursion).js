// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product on an integer and all the integers bellow it. factorial four (4!) is equal to 24, because 4*2*3 equals 24.
// factorial zero (0!) is always 1.

function factorial(num){
   if(num === 0) return 1
   return num * factorial(num-1)
}
