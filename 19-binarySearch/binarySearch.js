class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) 
  {
    let begin = 0;
    let end = nums.length - 1;  

    while(begin <= end)
    {
    
    let middle = Math.floor((begin + end) / 2);

    if(target === nums[middle]) 
    {
      return true;
    }
    
    else if(target < nums[middle])
    {
      end = middle - 1;
    }
    
    else if(target > nums[middle]) 
    {
      begin = middle + 1;
    }
    
  }

  return false;

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

//let studentSolution = new MySolution();
//console.log( studentSolution.binarySearch([1,2,3,4,5], 3));