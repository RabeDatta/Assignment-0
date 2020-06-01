function countOfAllBooleans(arr)
{
  let value = 0; 
    for(let i=0; i < arr.length;i++)
    {
        if(typeof(arr[i]) === "boolean")
           {
              value += 1; 
           }

    }
    return value; 
}

// Do not edit this line;
module.exports = countOfAllBooleans;

console.log(countOfAllBooleans([true, false, true, false, true, 7]));   //test samples