//Write a function that takes an array of numbers as input and returns the sum of all the numbers
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const myArray = [10, 20, 30, 40, 50];
console.log(sumArray(myArray));


//Write a function that takes two numbers as input and returns true if their sum is greater than 100,
//And false otherwise

function sumMoreThan100(num1, num2) {
  const sum = num1 + num2;
  return sum > 100;
}
console.log(sumMoreThan100(50, 60)); 
console.log(sumMoreThan100(30, 40)); 


//Write a function that takes a string as input and returns the number of vowels in the string
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  const myString = "Stephanie";
  const vowelCount = countVowels(myString);
  console.log(vowelCount);


  //Write a function that takes in a array of numbers as a parameter and returns 
  //the second largest number in the array
  function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  
  const myArry = [1, 2, 3, 4, 5];
  const secondLargest = findSecondLargest(myArry);
  console.log(secondLargest);
  


  //Write a function that takes a string as a parameter and returns true if the string is a palindrome
  // and false otherwise
  function isPalindrome(str) {
   
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   
    return str === str.split('').reverse().join('');
  }
  const myStrg = "A man, a plan, a canal, Panama!";
const isPal = isPalindrome(myString);
console.log(isPal)



  
  
  
  
  
  
  
  


  
