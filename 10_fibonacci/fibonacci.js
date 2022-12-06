const fibonacci = function(number) {
   if (number < 0) {
    return "OOPS"
   }
   else {
   let n1 = 0;
   let n2 = 1;
   let temp;
   let i = 0
   for (i = 0; i < number - 1; i++) {
    temp = n1 + n2
    n1 = n2
    n2 = temp
   }
   return n2
   }

};

// Do not edit below this line
module.exports = fibonacci;


//input number determines how many positions you move
//variable to hold previous number
//variable to hold new number to add
//variable to hold total
//starts at 1
//next position adds previous number 
//goes up input number of increments
