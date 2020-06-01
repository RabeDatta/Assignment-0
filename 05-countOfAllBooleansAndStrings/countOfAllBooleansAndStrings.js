function countOfAllBooleansAndStrings(arr) 
{
  let value = 0; 
    for(let i=0; i < arr.length;i++)
    {
        if(typeof(arr[i]) === "boolean" || typeof(arr[i]) === "string" )
           {
              value += 1; 
           }

    }
    return value; 
}


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;


console.log(countOfAllBooleansAndStrings([true, "true", false, "false", 9]));     // test sample