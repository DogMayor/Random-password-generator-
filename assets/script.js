function generatePassword() {
  // variable strings
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let password = "";

  // length prompt
  let length = prompt(
    "How long do you want your password to be? (8-128 characters)"
  );

  // validate password length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("length must be between 8 and 128 characters.");
    return "";
  }

  // Character prompt

  let includeLowercase = confirm("Do you want lowercase letters?");

  let includeUppercase = confirm("Do you want uppercase letters?");

  let includeNumbers = confirm("Do you want numerical characters");

  let includeSpecial = confirm("Do you want special characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert("No characters selected.");
    return "";
  }

  let choices = "";
   if (includeLowercase) {
    choices += lowercase;
  }

  if (includeUppercase) {
    choices += uppercase;
  }
  if (includeNumbers) {
    choices += numbers;
  }
  if (includeSpecial) {
    choices += special;
  }

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * choices.length);
    password += choices[index];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
   let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
let generateBtn = document.querySelector("#generate");
 generateBtn.addEventListener("click", writePassword);
