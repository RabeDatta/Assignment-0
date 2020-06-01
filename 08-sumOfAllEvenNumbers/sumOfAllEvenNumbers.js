function sumOfAllEvenNumbers(nums)
{
  let sum =0; 
    for(let i=0; i < nums.length;i++)
    {
        if(nums[i] % 2 === 0)
        {
          sum += nums[i]; 
        }
    }
    return sum; 
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;

//console.log(sumOfAllEvenNumbers([2,4,6,7,8,9,10])); 