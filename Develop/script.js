// Assignment code here

// 

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
var charTypeArray = Object.values(charTypeObj)
console.log(charTypeArray);
// END

// DEFINE generatePassword
function generatePassword() {
  // ask for character length
  passwordLength();
  debugger;
   
  // ask for character length  
//   characterType();
}
//   (prompt
//     ("Enter a character type: lowercase, uppercase, numeric, and/or special characters")
//   );
// }

// PASSOWRD LENGTH PROMPT
var passwordLength = function() {
    charLength = "";
    while (charLength === "" || charLength === null) {
        charLength = prompt("How many characters will your password be? Enter a number between 8 and 128.");
    }
    if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        alert("Please choose a number between 8 and 128");
        return passwordLength();
    }
    console.log("Your password will have " + charLength);
    return charLength;
}
// function passwordLength() {
//   var charLength = prompt("How many characters will your password be? Enter a number between 8 and 128");
  
//   if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
//     alert("Please choose a number between 8 and 128");
//     return passwordLength();
//   }
// }

// // CHARACTER TYPE PROMPT
// var characterType = function () {
//   for (var i = 0; i < charTypeArray.length; i++) {
//     function confirmAction1() {
//       var confirmAction1 = confirm(charTypeArray[0]);
          
//       if (confirmAction1) {
//         console.log("Your password will include lowercase characters");
//       } else {
//         charTypeList();
//       }
//     }
//     confirmAction1()

//     function confirmAction2() {
//       var confirmAction2 = confirm(charTypeArray[1]);
          
//       if (confirmAction2) {
//         console.log("Your password will include uppercase characters");
//       } else {
//         charTypeList();
//       }
//     }
//     confirmAction2()

//     function confirmAction3() {
//       var confirmAction3 = confirm(charTypeArray[1]);
          
//       if (confirmAction3) {
//         console.log("Your password will include numeric characters");
//       } else {
//         charTypeList();
//       }
//     }
//     confirmAction3()

//     function confirmAction4() {
//       var confirmAction4 = confirm(charTypeArray[1]);
          
//       if (confirmAction4) {
//         console.log("Your password will include special characters");
//       } else {
//         charTypeList();
//       }
//     }
//     confirmAction4()
//     break;
//   }
// }
// While loop through CHARACTER TYPE PROMPT
// var charTypeList = function() {
//   var charType = characterType();
//   while (charType === false || charType === null) {
//     charType = prompt("Please choose you charater types.")
//   }
//   return charType;
// }



// function characterType() {
//   var characterType = 
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
