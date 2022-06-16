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
   
];
// PASSWORD CHOICES STORAGE
// var passowrdCriteriaArray = [passCrData1, passCrData2, passCrData3, passCrData4]
    // for (i = 0; i < passowrdCriteriaArray.length; i++) {
    //     function logChoices() {
    //         var logChoices = comfirm(passowrdCriteriaArray[i]);

    //         if (passowrdCriteriaArray[0] = {name: "lowerCase", value: Array(26)}) {                
    //             var passCrData1 = passowrdCriteriaArray[0];
    //             passCrData1.push(passowrdCriteriaArray[0]); 

    //         } if (passowrdCriteriaArray[1] = {name: "upperCase", value: Array(26)}) {
    //             var passCrData2 = passowrdCriteriaArray[1];
    //             passCrData2.push(passowrdCriteriaArray[1]);

    //         } if (passowrdCriteriaArray[2] = {name: "numeric", value: Array(10)}) {
    //             var passCrData3 = passowrdCriteriaArray[2];
    //             passCrData3.push(passowrdCriteriaArray[2]);

    //         } if (passowrdCriteriaArray[3] = {name: "specialChar", value: Array(32)}) {
    //             var passCrData4 = passowrdCriteriaArray[3];
    //             passCrData4.push(passowrdCriteriaArray[3]);

    //         } else if (passowrdCriteriaArray[i] = null) {
    //             characterType()
    //         } {
    //             (passowrdCriteriaArray[i])
    //             var passCrData1 = passowrdCriteriaArray[0];
    //             var passCrData2 = passowrdCriteriaArray[1];
    //             var passCrData3 = passowrdCriteriaArray[2];
    //             var passCrData4 = passowrdCriteriaArray[3];                
    //         } 
    //         console.log(logChoices)
    //         return logChoices
    //     }

    // }

// ------------------
// var passwordLength = function() {
//     // debugger;
//     charLength = "";
//     while (charLength === "" || charLength === null) {
//         charLength = prompt("How many characters will your password be? Enter a number between 8 and 128.");
//     }
//     // User must enter an number btween 8-128 or they're looped back to request how many characters are in the password
//     if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
//         alert("Please choose a number between 8 and 128");
//         return passwordLength();
//     } else { 
//         alert("Your password will have " + charLength + " characters");
//     }
//     console.log("Your password will have " + charLength + " characters");
//     // here we push() the user's entry into our passwordCriteria Array for recall later
//     characterAmountArray.push(charLength);
//     console.log(characterAmountArray);
//     return charLength;
// }
// ---------------------------
// var characterAmount = passowrdCriteriaArray

var characterAmountArray = []
// password length data
var passLengthData = characterAmountArray[0]


// password criteria data
// var passCrData1 = []
// var passCrData2 = []
// var passCrData3 = []
// var passCrData4 = []


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
    // debugger;
    charLength = "";
    while (charLength === "" || charLength === null) {
        charLength = prompt("How many characters will your password be? Enter a number between 8 and 128.");
    }
    // User must enter an number btween 8-128 or they're looped back to request how many characters are in the password
    if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        alert("Please choose a number between 8 and 128");
        return passwordLength();
    } else { 
        alert("Your password will have " + charLength + " characters");
    }
    console.log("Your password will have " + charLength + " characters");
    // here we push() the user's entry into our passwordCriteria Array for recall later
    characterAmountArray.push(charLength);
    console.log(characterAmountArray);
    return charLength;
}

// // CHARACTER TYPE PROMPT
// var characterType = function() {
//   for (var i = 0; i < charTypePrompt.length; i++) {
//         function confirmAction() {
//         var confirmAction = confirm(charTypePrompt[i]);
        
//         if (confirmAction) {
//             console.log(charTypeArray[i])
//             passowrdCriteriaArray.push(charTypeArray[i]);
//             console.log(passowrdCriteriaArray);
//             // VALIDATE USER INPUT
//             alert("Your password will include " + userAlertArray[i] + " characters") 
//         } else {
//             return[];
//         }  
//         } confirmAction()
        
//     }
//     // debugger;
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {  
  var password = generatePassword()
//   debugger;
  function generatePassword() {
    // ask for character length
    passwordLength();
    // debugger;
     
    // ask for character length  
    // characterType();
    // set variabls pasCrData1 - 4 to be the return of the 'confirm' for diiffernt charactr sets
    passCrData1 = confirm("Would you like to include lowercase characters?")
        if (passCrData1) {        
        alert("Your password will include " + userAlertArray[0] + " characters")
        passCrData1 = true
        } else passCrData1 = false
        console.log(passCrData1)
    passCrData2 = confirm("Would you like to include uppercase characters?")
        if (passCrData2) {        
        alert("Your password will include " + userAlertArray[1] + " characters")
        passCrData2 = true
        } else passCrData2 = false
        console.log(passCrData2)
    passCrData3 = confirm("Would you like to include numeric characters?")
        if (passCrData3) {        
        alert("Your password will include " + userAlertArray[2] + " characters")
        passCrData3 = true
        } else passCrData3 = false
        console.log(passCrData1)
    passCrData4 = confirm("Would you like to include special characters?")
        if (passCrData4) {        
        alert("Your password will include " + userAlertArray[3] + " characters")
        passCrData4 = true
        } else passCrData4 = false
        console.log(passCrData4)
    
    var passowrdCriteriaArray = [passCrData1, passCrData2, passCrData3, passCrData4]
    // passCrData2 = false;
  
    createPassword(parseInt(characterAmountArray[0]), passCrData1, passCrData2, passCrData3, passCrData4) 
  
    function createPassword(passLengthData, passCrData1, passCrData2, passCrData3, passCrData4) {   
        debugger;    
    
        var charCodes = passowrdCriteriaArray; // ((passowrdCriteriaArray[i]))
        // if (passCrData1) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES) 
        if (passCrData2) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES) 
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
            
        
      
    // function createPassword(passLengthData, passCrData2, passCrData3, passCrData4) {   
    //     debugger;

    //     var charCodes = LOWERCASE_CHAR_CODES // ((passowrdCriteriaArray[i]))      
    //     if (passCrData2) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES) 
    //     if (passCrData4) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
    //     if (passCrData3) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        
    //     const password = []
    //     for (i = 0; i < passLengthData; i++) {
    //         const characterCode = charCodes[Math.floor(Math.random() * 
    //             charCodes.length)]
    //             password.push(String.fromCharCode(characterCode))
    //     }
    //     console.log(password)
    //     return password.join('')      
    //   }
    //   var passwordText = document.querySelector("#password");
      
  
    //   passwordText.value = password;
  
    //   var charCodes = LOWERCASE_CHAR_CODES
    //   if (passCrData2) charCodes = charCodes.concat
    //   (UPPERCASE_CHAR_CODES)
    //   if (passCrData4) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
    //   if (passCrData3) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
      
    //   const password = []
    //   for (i = 0; i < passLengthData; i++) {
    //       const characterCode = charCodes[Math.floor(Math.random() * 
    //           charCodes.length)]
    //           password.push(String.fromCharCode(characterCode))
    //   }
    //   console.log(password)
    //   return password.join('')      
    // }
    // var passwordText = document.querySelector("#password");
    

    // passwordText.value = password;
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
