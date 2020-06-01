function countOfAllIndexMatchingNumbers(nums)
{
    let value =0; 
    for(let i=0; i < nums.length;i++)
    {
        if(nums[i] === nums.indexOf(nums[i]))
        {
          value++; 
        }
    }
    return value; 

}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;

//console.log(countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77])); 