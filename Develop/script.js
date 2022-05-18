// Assignment Code
var generateBtn = document.querySelector("#generate");

const key_strings = {
  lowercase : 'abcdefghijklmnopqrstuvwxyz',
  uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number : '1234567890',
  special : '!@#$%^&*',
};

// Write password to the #password input
function writePassword() {
  var passwordCharSet = ""
  var pswdLength = prompt("Please enter desired password length (8-128 Characters)");
  var lowerCase = confirm("Should the password contain lowercase characters?");
  if (lowerCase) {
    passwordCharSet += key_strings.lowercase;
  };
  var upperCase = confirm("Should the password contain upper case characters?");
  if (upperCase) {
    passwordCharSet += key_strings.uppercase;
  };
  var numberChar = confirm("Should the password contain numbers?")
  if (numberChar) {
    passwordCharSet += key_strings.number;
  };
  var specialChar = confirm("Should the password contain special characters?");
  if (specialChar) {
    passwordCharSet += key_strings.special
  };

  var passwordReq = ""
  for (let i = 0; i < pswdLength; i++) {
    passwordReq += passwordCharSet[Math.floor(Math.random()*passwordCharSet.length)]
  }
  
  console.log(passwordReq);
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;

  return passwordReq;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


