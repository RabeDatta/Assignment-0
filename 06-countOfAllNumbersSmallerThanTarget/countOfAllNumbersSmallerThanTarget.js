function countOfAllNumbersSmallerThanTarget(nums, target)
{
  let value= 0; 
    for(let i=0; i < nums.length;i++)
    {
        if(nums[i] < target)
        {
          value++; 
        }
    }
    return value; 
}



// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;


console.log(countOfAllNumbersSmallerThanTarget([1,2,3,4,5], 9))    //sample test 