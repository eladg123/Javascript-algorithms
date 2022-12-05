// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by rearranging
// the letters of another such as cinema formed from iceman.
// נתון שני מחרוזות, כתוב פונקציה שקובעת אם המחרוזת השנייה היא אנגראם של הראשונה.
//   אנאגרם היא מילה,משפט או שם שנוצר על ידי סידור מחדש של האותיות.

function validAnagram(firstSTR, secondSTR) {
  if (firstSTR.length !== secondSTR.length) {
    return false
  }
  const lookup = {}

  for (let i = 0; i < firstSTR.length; i++) {
    let letter = firstSTR[i]
    // if letter exists, increment the counter, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < secondSTR.length; i++) {
    let letter = secondSTR[i]
    // can't find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

const result = validAnagram('elad', 'dale')
console.log(result)
