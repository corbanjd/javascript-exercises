const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};



const sum = function (array){
  return array.reduce((total, current) => total + current, 0);
}

const multiply = function(array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;


};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(num) {
  var result = num;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  }
     
  // Step 3. Return the factorial of the provided integer
  return result;   
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
