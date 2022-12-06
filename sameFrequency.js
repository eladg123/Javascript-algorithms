// Write a function called sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits. Your solution must have the following complexities: O(N);
// כתוב פונקציה שמקבלת שני מספרים שלמים, ומצא אם בשני המספרים נמצאים מספרים באותה התדירות.
// example:   182,281 - true,   34,14 - false, 3589578,5879385 - true

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  let countNum1 = {}
  let countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    let letter = strNum1[i]
    countNum1[letter] = (countNum1[letter] || 0) + 1
  }
  for (let i = 0; i < strNum2.length; i++) {
    let letter = strNum2[i]
    countNum2[letter] = (countNum2[letter] || 0) + 1
  }
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false
  }
  return true
}

console.log(sameFrequency(11133342, 24333111))
