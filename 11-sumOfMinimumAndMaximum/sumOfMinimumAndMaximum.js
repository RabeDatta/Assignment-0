function sumOfMinimumAndMaximum(nums) 
{
  let maxValue = nums[0]; 
  let miniValue = nums[0];
  for(let i=0; i < nums.length;i++)
  {
    if(nums[i] > maxValue )
    {
      maxValue = nums[i]; 
    }

    if(nums[i] > maxValue )
    {
      miniValue = nums[i]; 
    }
    
  }
  return maxValue + miniValue ; 
}
  

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;


//console.log(sumOfMinimumAndMaximum([2,4,5,6,23]));        // test samples 