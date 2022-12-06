// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function should check whether the chracters in the first string appear somewhere
// in the second string, without their order changing.
// בנה פונקציה שמקבלת שתי סטרינגים ובודקת האם האותיות שבסטרינג הראשון מופיעות באותו סדר בסטרינג השני.

function isSubsequence(string1, string2) {
  var i = 0
  var j = 0
  if (!string1) return true
  while (j < string2.length) {
    if (string2[j] === string1[i]) {
      i++
    }
    if (i === string1.length) {
      return true
    }
    j++
  }
  return false
}
