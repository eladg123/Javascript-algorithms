// Write a recursive function called fib which accepts a number and returns the n th number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and where every number thereafter 
// is equal to the sum of the previous two numbers.
// כתוב פונקציה שמקבלת מספר ומחזירה את איבר הסדרה (פיבונאצ'י) במיקום המספר 

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
