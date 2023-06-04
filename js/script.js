// Add click event listener to generate button
generateButton.addEventListener("click", generatePassword);

// Get references to the password range input and display input
const passwordRange = document.getElementById('password-range');
const displayPasswordLength = document.getElementById('display-password-length');

// Add event listener for the input event on the password range input
passwordRange.addEventListener('input', function () {
    // Update the value of the display input with the range input value
    displayPasswordLength.value = this.value;
});

//-----------------------------------

// Define character sets for generating password
const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*ù%&é\"'(-è_çà)=^¨£¤*?:;,./§!<>|";
const rangeValue = document.getElementById("password-range");



