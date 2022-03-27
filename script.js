var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "<", ">", "?", ",", "."];

function generatePassword() {
  var passwordLength = prompt("Choose a password length betwewen 8 and 128.");
  if (passwordLength <= 8 || passwordLength >= 128) {
    alert("Please select between 8 and 128 characters");
  }
  else {
    alert("Your password has an acceptable amount of characters");
  }
  var hasNumbers = confirm("Include Numbers?");
  var hasLowerCase = confirm("Include Lower Case Letters?");
  var hasUpperCase = confirm("Include Upper Case Letters?");
  var hasSpecChars = confirm("Include Special Characters?");

  var passwordFeatures = {
    passwordLength: passwordLength,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChars: hasSpecChars,
  }
var inputPassword = qualifiers(passwordFeatures)
return inputPassword 
}

var result = []
var requiredCharacters = []
var charsArray = []

function selectRandomChars(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function qualifiers(passwordFeatures) {
  if (passwordFeatures.hasNumbers) {
    result.push(selectRandomChars(numbers));
    requiredCharacters = requiredCharacters.concat(numbers);
    console.log("hasNumbers hit "+ result)
  }

  if (passwordFeatures.hasLowerCase) {
    result.push(selectRandomChars(lowerCase));
    requiredCharacters = requiredCharacters.concat(lowerCase);
    console.log("hasLowerCase hit "+ result)
  }

  if (passwordFeatures.hasUpperCase) {
    result.push(selectRandomChars(upperCase));
    requiredCharacters = requiredCharacters.concat(upperCase)
    console.log("hasUpperCase hit "+ result)
  }

  if (passwordFeatures.hasSpecChars) {
    result.push(selectRandomChars(specChars));
    requiredCharacters = requiredCharacters.concat(specChars);
    console.log("hasLowerCase hit "+ result)
  }

  var currentPasswordLength = result.length;

  for (var i = 0; i < (passwordFeatures.passwordLength - currentPasswordLength); i++) {
    var random = selectRandomChars(requiredCharacters);
    result.push(random)
    console.log("foreach " + i + result)
  }
  var finalPassword = result.join("");
  console.log(finalPassword)
  return finalPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);