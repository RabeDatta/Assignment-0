class MySolution {
  countDownSum(num) 
  {
    if( num != 1)
    {
      return (num + this.countDownSum(num - 1));
    }
    else 
    {
      return num; 
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;


//let studentSolution = new MySolution();
//console.log(studentSolution.countDownSum(5)); 


