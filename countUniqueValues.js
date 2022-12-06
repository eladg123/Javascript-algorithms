// Implement a function called countUniqeValues, which accepts a sorted array, and counts the
// unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//  יישם פונקציה שמקבלת מערך מסודר, וסופרת את הערכים היוניקים, זאת אומרת מספר ערכים במערך ללא כפולות
// במערך יכול להיות מספרים שליליים, אבל המערך תמיד מסודר בסדר עולה.
// דוגמה למערך [1,1,1,1,1,2,2] יחזור התשובה 2 כי הערכים שיש במערך הם 1 ו2 אז יש שני סוגי ערכים במערך.

function countUniqueValues(arr) {
  let firstPointer = 0
  if (arr.length == 0) {
    return 0
  }
  for (let secondPointer = 1; secondPointer < arr.length; secondPointer++) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      firstPointer++
      arr[firstPointer] = arr[secondPointer]
    }
  }
  return firstPointer + 1
}

console.log(countUniqueValues([-11, -3, -3, -3, 0, 1, 2, 2, 3, 3])) //expected output 6
