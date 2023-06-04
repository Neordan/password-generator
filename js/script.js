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

// Function to generate password
function generatePassword() {
    let data = [];
    let password = "";

    // Check if lowercase letters should be included
    if (document.getElementById('lowercase').checked) {
        data.push(...dataLowercase);
    }
    // Check if uppercase letters should be included
    if (document.getElementById('uppercase').checked) {
        data.push(...dataUppercase);
    }
    // Check if numbers should be included
    if (document.getElementById('numbers').checked) {
        data.push(...dataNumbers);
    }
    // Check if symbols should be included
    if (document.getElementById('symbols').checked) {
        data.push(...dataSymbols);
    }

    // Generate password

    if (data.length === 0) {
        // Check if no criteria are selected
        alert("Please select criteria"); // Display an alert message
        return; // Exit the function
    }

        for (let i = 0; i < rangeValue.value; i++) {
            password += data[Math.floor(Math.random() * data.length)];
        }

    console.log(password);
}

