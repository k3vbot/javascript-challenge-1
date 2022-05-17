// Assignment Code
var generateBtn = document.querySelector("#generate");

const key_strings = {
  lowercase : 'abcdefghijklmnopqrstuvwxyz',
  uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number : '1234567890',
  specialchar : '!@#$%^&*',
}

// Write password to the #password input
function writePassword() {
  var pswdLength = prompt("Please enter desired password length (8-128 Characters)");
  if (pswdLength <= 7){
    alert("Too Weak! Please enter a number between 8 and 128");
  }
  else if (pswdLength > 128){
    alert("Too Long! Please enter a number between 8 and 128") 
  };

  var lowerCase = confirm("Should the password contain lowercase characters?");
  var upperCase = confirm("Should the password contain upper case characters?");
  var numberChar = confirm("Should the password contain numbers?")
  var specialChar = confirm("Should the password contain special characters?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


