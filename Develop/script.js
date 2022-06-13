// Assignment code here

// DEFINE generatePassword
function generatePassword() {
  // ask for character length
  var charLength = passwordLength();
  debugger;
   
  // ask for character length
  var charType = prompt("Enter a character type: lowercase, uppercase, numeric, and/or special characters");
  console.log(charLength);
  console.log(charType);
}
function passwordLength() {
  var charLength = prompt("How many characters will your password be? Enter a number between 8 and 128");
  
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("Please choose a number between 8 and 128");
    return passwordLength();
  }
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);



// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
