// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// כתוב פונקציה שמקבלת מערך מספרים ומחזירה את הסכום ההכפלה של כולם ביחד


function productOfArray(arrayOfNums){
if(arrayOfNums.length === 0) return 1;
return arrayOfNums[0] * productOfArray(arrayOfNums.slice(1));  
}
