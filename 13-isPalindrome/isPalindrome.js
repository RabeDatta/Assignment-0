function isPalindrome(word)
{
   var revString = "";
    for (var i = word.length - 1; i >= 0; i--) {
      revString += word[i];
    }
    return revString.toLowerCase() === word.toLowerCase();
}

// Do not edit this line;
module.exports = isPalindrome;

//console.log(isPalindrome("bob"));      // test samples 