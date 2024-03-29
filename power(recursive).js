// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
// כתוב פונקציה שנקראת כוח שמקבלת מספר בסיס וחזקה. הפונקציה צריכה להחזיר את החזקה של מספר הבסיס במספר חזקה.
// פונקציה זו אמורה לחקות את הפונקציונליות של הפונקציה math.pow.
// לא צריך להתחשב במספרים שליליים

function power(base,exponent){
  if(exponent === 0) return 1;
    return base * power(base,exponent-1);
 
}
