// Assignment Code
var generateBtn = document.querySelector("#generate"); 

function criteria() {
  var length = prompt("How many characters would you like your password to be? Your password lenght should be 8-128 characters.");

  console.log(length, "length" );

  // if your length is less than 8 or greater than 128, then runs this if statement
  if (length < 8 || length > 128) {
    // run the alert if length is not acceptable
    alert("Your password lenght should be 8-128 characters.");
    // run this whole function again  
    criteria();
    } 
    
    // else statement
    
    var lowercase = confirm("Would you like to use lowercase letters?");
    var uppercase = confirm("Would you like to use uppercase letters?");
    var numbers = confirm("would you like to use numbers?");
    var symbols = confirm("would you like to use special characters?");


  if (!(lowercase || uppercase || numbers || symbols)) {
    window.alert("You should select at least one character type! ");
    var lowercase = confirm("Would you like to use lowercase letters?");
    var uppercase = confirm("Would you like to use uppercase letters?");
    var numbers = confirm("would you like to use numbers?");
    var symbols = confirm("would you like to use special characters?");
  }

  generatePassword(lowercase, uppercase, numbers, symbols, length);
  
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
  const typesArr = [
    { lower },
    { upper },
    { number },
    { symbol }
  ].filter(item => Object.values(item)[0]);
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


function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  criteria();
});


