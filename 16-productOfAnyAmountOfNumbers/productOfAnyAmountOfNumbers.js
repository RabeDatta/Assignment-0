function productOfAnyAmountOfNumbers(...args)
{
  let sum= 1; 
  for(let i=0; i < args.length; i++)
  {
      sum *= args[i]; 
  }

  return sum; 
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;


//console.log(productOfAnyAmountOfNumbers(3,4,5));     //test samples 