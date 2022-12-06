// Write a function called maxSubarraySum which accepts an array of integers and a number
// called n. The function should calculate the maximum sum of n consecutive elements in the array.
// כתוב פונקציה שמקבלת מערך של מספרים שלמים ומספר ששמו אן.
// הפונקציה צריכה לחשב את הסכום המקסימלי של של אלמנטים עוקבים במערך על פי המספר אן.
// אם אן שווה ל2 אז לחפש את שני האלמנטים העוקבים במערך שסכומם הוא הכי גדול.

function maxSubarraySum(arr, n) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < n) return null
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
