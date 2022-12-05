// Write a function called sumZero whice accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array that
// includes both values that sum to zero or undefined if a pair does not exist.
// כתוב פונקציה שמקבלת מערך מסודר של מספרים שלמים. הפונקציה צריכה למצוא את הזוג הראשון
// שסכומם הוא 0. הפונקציה תחזיר מערך שכולל את זוגות המספרים שסכומם הוא אפס ואם אין זוג מספרים תחזיר אנדיפיינד.

function sumZero(arr) {
  let leftPointer = 0
  let rightPointer = arr.length - 1
  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer]
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]]
    } else if (sum > 0) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
}

console.log(sumZero([-13, -2, -1, 0, 1, 2, 3]))
