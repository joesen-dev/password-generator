// Assignment code here

// CHARACTER LIST ARRAYS
// const characters = [...Array(95).keys()].map(i => String.fromCharCode(i+32))

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh (65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh (97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh (48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh (33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)
// USER PROMPT ARRAY
var userAlertArray = ["lowercase", "uppercase", "numeric", "special characters"]

// // Password character criteria
// var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
// var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// CHARATER TYPE ARRAY
var charTypeArray = [
    {
        name: "lowerCase",
        value: arrayFromLowToHigh (65, 90)
    },
    {
        name: "upperCase",
        value: arrayFromLowToHigh (97, 122)
    },
    {
        name: "numeric",
        value: arrayFromLowToHigh (48, 57)
    },
    {
        name: "specialChar",
        value: arrayFromLowToHigh (33, 47).concat(
            arrayFromLowToHigh(58, 64)
        ).concat(
            arrayFromLowToHigh(91, 96)
        ).concat(
            arrayFromLowToHigh(123, 126)
        )
    }
    // [
    //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    //     'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
    //     'y', 'z' 
    // ], 
    // [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    //     'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    //     'Y', 'Z' 
    // ], 
    // [
    //     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    // ],
    // [characters]
];

// PASSWORD CHOICES STORAGE
var passowrdCriteriaArray = []
var characterAmount = passowrdCriteriaArray


// password criteria data
var passCrData1 = charTypeArray[0]
var passCrData2 = charTypeArray[1]
var passCrData3 = charTypeArray[2]
var passCrData4 = charTypeArray[3]

var includeLowerCase = passCrData1
var includeUpperCase = passCrData2
var includeNumbers = passCrData3
var includeSymbols = passCrData4

var characterAmountArray = []
// password length data
var passLengthData = characterAmountArray[0]

// createPassword(passLengthData, passCrData2, passCrData3, passCrData4)

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

// PASSOWRD LENGTH PROMPT
var passwordLength = function() {
    debugger;
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
    characterAmountArray.push(charLength);
    console.log(characterAmountArray);
    return charLength;
}

// CHARACTER TYPE PROMPT
var characterType = function() {
  for (var i = 0; i < charTypePrompt.length; i++) {
        function confirmAction() {
        var confirmAction = confirm(charTypePrompt[i]);
        
        if (confirmAction) {
            console.log(charTypeArray[i])
            passowrdCriteriaArray.push(charTypeArray[i]);
            console.log(passowrdCriteriaArray );
            // VALIDATE USER INPUT
            alert("Your password will include " + userAlertArray[i] + " characters") 
        } else {
            return[];
        }  
        } confirmAction()
        
    }
    // debugger;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {  
  var password = generatePassword()
  debugger;
  function generatePassword() {
    // ask for character length
    passwordLength();
    debugger;
     
    // ask for character length  
    characterType();
  
    createPassword(parseInt(characterAmountArray[0]), passCrData2, passCrData3, passCrData4)
  
    function createPassword(passLengthData, passCrData2, passCrData3, passCrData4) {   
        debugger;
  
      var charCodes = LOWERCASE_CHAR_CODES
      if (passCrData2) charCodes = charCodes.concat
      (UPPERCASE_CHAR_CODES)
      if (passCrData4) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
      if (passCrData3) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
      
      const password = []
      for (i = 0; i < passLengthData; i++) {
          const characterCode = charCodes[Math.floor(Math.random() * 
              charCodes.length)]
              password.push(String.fromCharCode(characterCode))
      }
      console.log(password)
      return password.join('')      
    }
    var passwordText = document.querySelector("#password");
    

    passwordText.value = password;
  }

  

  var passwordText = document.querySelector("#password");
    

  passwordText.value = password;
}



// LOW TO HIGH ARRAY
function arrayFromLowToHigh(low, high) {
    const array = []
    for(var i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
