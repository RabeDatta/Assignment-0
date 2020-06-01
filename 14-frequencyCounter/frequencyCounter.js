function frequencyCounter(word)
 {
  
  var count = {};
  word.split('').forEach((s) =>
  {
     if(count[s])
     {
       count[s]++ 
     }
     else 
     {
        count[s] = 1;
     }

  });

  return count;

}


// Do not edit this line;
module.exports = frequencyCounter;

//console.log(frequencyCounter("computer"));          // test samples  