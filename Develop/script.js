const rSC = ["!", "#", "$", "%", "&", "(", ")", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "]", "{", "}", "~", "^", ";"] // rSC = random special characters
const rN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // rN = random numbers
const rLL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // rLL = random lowercase letters
const rUL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // rUL = random uppercase letters

// Assignment Code

function passwordPrompt() {
  let passwordLength = prompt("Choose a password length between 8 and 128 characters!");

  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password length is invalid.");
    passwordPrompt();
  } else {
    var numberQ = confirm("Would you like to use numbers?");
    var lowerQ = confirm("Would you like to use lowercase letters?");
    var upperQ = confirm("Would you like to use uppercase letters?");
    var specialQ = confirm("Would you like to use special characters?");

    if (numberQ || lowerQ || upperQ || specialQ) {
      let randomPassChar = [];
      randomPassChar = numberQ ? randomPassChar.concat(rN): randomPassChar.concat([]);
      randomPassChar = lowerQ ? randomPassChar.concat(rLL): randomPassChar.concat([]);
      randomPassChar = upperQ ? randomPassChar.concat(rUL): randomPassChar.concat([]);
      randomPassChar = specialQ ? randomPassChar.concat(rSC): randomPassChar.concat([]);

      let randomPassword = "";
      
      for (var i =0; i < passwordLength; i++) {
        randomPassword += randomPassChar[Math.floor(Math.random() * randomPassChar.length)]
      }

      document.getElementById("password").value = randomPassword;

    } else {
      alert ("You need to select at least one character type for your password.");
      return;
    }
  }
};
