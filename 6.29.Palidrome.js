function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }
  
  //if the whole string has been compared without returning false, it's a palindrome!
  return true

}

console.log(palindrome("A man, a plan, a canal, Panama"));