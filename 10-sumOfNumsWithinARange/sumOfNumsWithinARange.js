var sumOfNumsWithinARange = (nums, start, end) => 
{
  let value =0; 
  for(let i=0; i < nums.length;i++)
  {
      (nums[i] >= start && nums[i] <= end) ? value++ : value; 
  }
  return value; 
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

//console.log(sumOfNumsWithinARange([2,4,5,6,23],2,23)); 