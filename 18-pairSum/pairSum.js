function pairSum(nums, target)
{
  let value = 0; 
  if (nums.length >= 2)
  {
    for(let i in nums )
    {
        value += nums[i]
    }
      return value === target; 
  }
  else
  {
    throw "The number has to be greater than 2."; 
  }
    
}

  
// Do not edit this line;
module.exports = pairSum;

//console.log(pairSum([1,2,3,1,1], 8)); 