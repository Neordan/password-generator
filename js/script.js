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
const passwordOutput = document.getElementById("password-output");

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

    passwordOutput.value = password;

}


//Adding an event for the function generatePassword to be executed on click
generateButton.addEventListener("click", generatePassword);

//Adding an event for the function copyPassword to be executed on click

// Function to copy the password to clipboard
function copyPassword() {
    const passwordOutput = document.getElementById('password-output');
    const password = passwordOutput.value;
    
    navigator.clipboard.writeText(password)
        .catch(function(error) {
            console.error('An error occurred while copying the password:', error);
            // You can handle errors or display an appropriate error message here
        });

        copyButton.textContent = "Copied!";

        // Set a timeout to revert the button text after 2 seconds
        setTimeout(() => {
            copyButton.textContent = "Copy the password";
        }, 2000);
        
}


const copyButton = document.getElementById('copy-button');
//Adding an event for the function copyPassword to be executed on click
copyButton.addEventListener('click', copyPassword);
