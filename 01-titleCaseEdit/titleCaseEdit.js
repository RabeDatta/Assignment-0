function titleCaseEdit(title) 
{
  title = title.toLowerCase().split(' ');             // convert it into lowercase then split it into array
  for (var i = 0; i < title.length; i++) 
  {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }                                                   //convert first letter to uppercase, then joins to rest of the word 
	return title.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;



console.log(titleCaseEdit("hey there"));            //test samples 