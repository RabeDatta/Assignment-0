function fizzBuzz(start, end) 
{
  let num = []; 
  for(let i = start; i <= end; i++)
  {
        if(i % 3 == 0)
        {
          num.push("Fizz")
        }
        else if(i % 5 === 0 )
        {
          num.push("Bizz")
        }
        else
        {
          num.push(i)
        }

  }
  return num; 
}

// Do not edit this line;
module.exports = fizzBuzz;

//console.log(fizzBuzz(1, 20));    // test samples 