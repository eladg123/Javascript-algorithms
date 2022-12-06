// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks
// whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter
// pattern OR the multiple pointers pattern.
//   בנה פונקציה שמקבלת מספר נעלמים, ובודקת האם יש כפילויות בערכים שניתנו כנעלמים.
// ניתן לפתור זאת בעזרת שיטת ספירת התדירות או בשיטת הפוינטרים.

// frequency solution
function areThereDuplicates() {
  console.log(arguments)
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }

  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3, 3))

// multiple pointers solution
function areThereDuplicates2(...args) {
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates2(1, 2, 3, 4, 4))

// one liner solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates3(1, 2, 3, 3, 33))
