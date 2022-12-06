// Given a sorted array of integers, write a function called search, that accepts a value,
// and returns the index where the value passed to the function is located. If the value,
// is not found, return -1.
// נתון מערך מסודר של מספרים שלמים, כתוב פונקציה שמקבלת מערך מספרים שלמים ומספר ומחזירה את האינדקס
// שבו מופיע המספר לראשונה

function search(arr, number) {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]

    if (arr[middle] < number) {
      min = middle + 1
    } else if (arr[middle] > number) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))
