// Assignment Code
var generateBtn = document.querySelector("#generate"); 

function criteria() {
  var length = prompt("How many characters would you like your password to be?");
  console.log(length, "length" );

  // your length is less than 8 or greater than 128, then runs this statement
  while (length < 8 || length > 128) {

    // Run the prompt again if length is not acceptable
    length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    
  }
    var lowercase = confirm("Would you like to use lowercase letters?");
    var uppercase = confirm("Would you like to use uppercase letters?");
    var numbers = confirm("would you like to use numbers?");
    var symbols = confirm("would you like to use special characters?");


  //Run this loop if you didn't select any criteria 
  while (!(lowercase || uppercase || numbers || symbols)) {
    window.alert("You should select at least one character type! ");
    var lowercase = confirm("Would you like to use lowercase letters?");
    var uppercase = confirm("Would you like to use uppercase letters?");
    var numbers = confirm("would you like to use numbers?");
    var symbols = confirm("would you like to use special characters?");
  }

  // If the length equal or greater than 8 and equal or less than 128
  if (length >= 8 && length <= 128){
  //Run the generate password function 
  generatePassword(lowercase, uppercase, numbers, symbols, length);
  }
};

// Write password to the #password input
const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  // Array for generator functions
  const typesArr = [
    { lower 
    },{ upper
    },{ number 
    },{ symbol 
    }].filter(item => Object.values(item)[0]);//This function filter the selected criterias 
  console.log(lower, upper, number, symbol, length)
  
  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword);
  writePassword(finalPassword);
  
}

// Generator functions
//In the functions down below I used `String.fromCharCode` this method returns a string created from the specified sequence of UTF-16 code units.
//I used this `(Math.floor(Math.random())` function to generate random letters and numbers.
function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
//This function to put the password in the textarea
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  criteria();
});


