function romanNumeral(number) {
  let convert = ["I","IV", "V", "IX", "X", "XL","L", "XC", "C", "CD", "D","CM","M"];
  let roman = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
   let result = [];
   for (let i = 0; i < convert.length; i++) {
   while (convert[i] >= number) {
    result += roman[i];
     number -= roman[i]; 
    
  
    }
   
   }
   return result.join('');
  }

  //for (i = convert.length - 1; number > 0 && <= 3999; i --) {
    //while (number >= roman[i]){
      //result.push (convert[i]);
      //number -= roman[i]);








// Describe: isLeapYear()
// Test: "It returns false for years that are not a leap year"
// Expect(isLeapYear(1)).toEqual(I);