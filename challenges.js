// Challenge 0

// You probably know the “like” system from Facebook and other pages.
// People can “like” blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array,
// containing the names of people who like an item. It must return the return the display text as shown in the examles:

// likes [] must be "no one likes this"
// likes ["Peter"] must be "Peter likes this"
// likes ["Jacob", "Alex"] must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] must be "Alex, Jacob and 2 others like this"

// -------------------------------------------------------
// Solution goes here:

function likes (names) {
  let names = []
  // let names = ["Peter"]
  // let names = ["Peter","John"]
  // let names = ["Peter","John","Jacob"]
  // let names = ["Peter", "John", "Jacob", "James"]
  if (names.length === 0) {
    return 'No one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Challenge 1: 
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Solution goes here: 

function isSquare(n) {
  return Number.isInteger(Math.sqrt(n))
}