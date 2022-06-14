// Assignment code here

// CHARACTER LIST ARRAYS
const characters = [...Array(95).keys()].map(i => String.fromCharCode(i+32))

// USER PROMPT ARRAY
var userAlertArray = ["lowercase", "uppercase", "numeric", "special characters"]

// CHARATER TYPE
var charTypeArray = [
    [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
        'y', 'z' 
    ], 
    [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z' 
    ], 
    [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ],
    [characters]
];

// PASSWORD CHOICES
var passowrdCriteria = [] 

// Create a charater type object then convert it into an Array: START
// Object------
var charTypeObj = {
  lowercase: "Would you like to include lowercase characters?",
  uppercase: "Would you like to include uppercase characters?",
  numeric: "Would you like to include numeric characters?",
  special: "Would you like to include special characters?"
}
console.log(charTypeObj);

// Array------
var charTypePrompt = Object.values(charTypeObj)
// END

// DEFINE generatePassword
function generatePassword() {
  // ask for character length
  passwordLength();
  debugger;
   
  // ask for character length  
  characterType();
}

// PASSOWRD LENGTH PROMPT
var passwordLength = function() {
    charLength = "";
    while (charLength === "" || charLength === null) {
        charLength = prompt("How many characters will your password be? Enter a number between 8 and 128.");
    }
    // User must enter an number btween 8-128 or they're looped back to request how many characters are in the password
    if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        alert("Please choose a number between 8 and 128");
        return passwordLength();
    }
    console.log("Your password will have " + charLength);
    // here we push() the user's entry into our passwordCriteria Array for recall later
    passowrdCriteria.push(charLength);
    console.log(passowrdCriteria);
    return charLength;
}

// CHARACTER TYPE PROMPT
var characterType = function() {
  for (var i = 0; i < charTypePrompt.length; i++) {
        function confirmAction() {
        var confirmAction = confirm(charTypePrompt[i]);
        
        if (confirmAction) {
            console.log(charTypeArray[i])
            passowrdCriteria.push(charTypeArray[i]);
            console.log(passowrdCriteria);
            alert("Your password will include " + userAlertArray[i] + " characters") 
        } else {
            return[];
        }  
        } confirmAction()
    }
}

// VALIDATE USER INPUT
// var userInput = function() {
//     for (var i = 0; i < userAlertArray.length; i++) {
//         alert("Your password will include " + userAlertArray[i] + " characters")
        
//     }
// }

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
