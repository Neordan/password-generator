// Get references to the password range input and display input
let passwordRange = document.getElementById('password-range');
let displayPasswordLength = document.getElementById('display-password-length');

// Add event listener for the input event on the password range input
passwordRange.addEventListener('input', function() {
    // Update the value of the display input with the range input value
    displayPasswordLength.value = this.value;
});
