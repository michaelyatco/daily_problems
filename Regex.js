function reverseString(str) {
    return str.split("").reverse().join("");
}

function isMatchNoStar(text, pattern) {
  if (text.length != pattern.length) {
    return false;
  } else {
    for (let i = 0; i < text.length; i++) {
      if (text[i] != pattern[i] && pattern[i] != '.') {
        return false;
      }
    }
  }
  return true;
}

function isMatch(text, pattern) {
  // your code goes here
  
  let partials = pattern.split('*');
  
  if (partials.length == 1) {
    return isMatchNoStar(text, pattern);
  }
  
  let p1 = partials[0];
  let p2 = partials[partials.length - 1];

  if (
    p1 != '' && !isMatchNoStar(text.substring(0, p1.length), p1) ||
    p2 != '' && !isMatchNoStar(reverseString(text).substring(0, p2.length), reverseString(p2))
  ) {
    return false;
  }
  
  let k = p1.length;
  let upperBound = text.length - p2.length;
  for (let i = 1; i < partials.length - 1; i++) {
    let p = partials[i];
    if (p == "") continue;
    let j = k;
    while (!isMatchNoStar(text.substring(k, j), p) && j < upperBound) j++;
    k = j + 1;
    if (k > upperBound + 1) {
      return false;
    }
  }
  
  return true;
  // check the portion before .*
  // case pattern[0] == .
  // case pattern[0] == *
  // 
}

console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "aa"))
console.log(isMatch("abc", "a.c"))
console.log(isMatch("abbb", "ab*"))
//isMatch("asdfadsfadscaxsdasdasdassyassadasd", "x*y*") == false