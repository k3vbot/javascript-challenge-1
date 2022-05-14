// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pswdLength = prompt("Please enter desired password length (8-128 Characters)");
    alert (pswdLength);
  if (pswdLength <= 7){
    alert("Too Weak! Please enter a number between 8 and 128");
  }
  else if (pswdCaps)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


