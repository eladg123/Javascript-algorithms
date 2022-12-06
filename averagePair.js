// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there
// is a pair of values in the array where the average of the pair equals the target average. There may be more
// than one pair that matches the average target.
// בנה פונקציה שמקבלת מערך מסודר של מספרים שלמים וממוצע כמטרה. קבע האם יש זוג אלמנטים במערך שהממוצע שלהם שווה לממוצע המטרה.
// יכול להיות יותר מזוג אחד שהממוצע שלו שווה לממוצע המטרה.

function averagePair(arr, average) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === average) return true
    else if (avg < average) {
      start++
    } else {
      end--
    }
  }
  return false
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8], 3))
