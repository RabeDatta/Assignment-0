function setUnionOfAnyAmountOfSets(...args)
{
  
   var concat_array = args[0].concat(args[1]).concat(args[2]).concat(args[3]) ;

   var set_ob = new Set(concat_array);

   var array_union = [];

   for(var element of set_ob)
    {    
    array_union.push(element); 
    }

    return array_union;
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

//console.log(setUnionOfAnyAmountOfSets([1,2,3,],[4,5,6],[7,8,9],[10,11,3]));