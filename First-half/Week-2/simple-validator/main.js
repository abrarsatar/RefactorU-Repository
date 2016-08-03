// ? Tip: While the built-in isNaN method works in most cases to test if a value is a number, it fails on some simple inputs like whitespace. 
// The following function is a more robust implementation for checking if a string contains a valid number: var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };

// Bonus
// Find someone else who has completed this exercise and try to "break" each other's code. 
// Clone the solution from their github repo and run their application locally. 
// Without looking at their code, try entering incorrect values and getting their program to report that they are valid (or inversely, try entering correct values and getting their program to report that they are invalid). 
// If you find a bug, add an issue to the issue tracker on their github repo. (Every github repo has its own issue tracker, e.g. github.com/refactoru/student-sample-code/issues.)

var phone = prompt("Enter phone number with dashes. Don't worry we won't spam you.")

if (phone.charAt(3) !== "-" || phone.charAt(7) !== "-" || phone.length != 12) {
    
    alert("Please refresh the page and try again.")
} else {
    alert("Thank you for your phone number.")
}



var birthday = prompt("Enter your birthday in xx/xx/xx format.")

if (birthday.charAt(2) !== "/" || birthday.charAt(5) !== "-" || birthday.length != 8) {
    
    alert("Please refresh the page and try again.")
} else {
    alert("Thank you for your birthday.")
}



// postal code
// must follow the format xxxxx OR xxxxx-xxxx

var zip = prompt("Enter your 5-digit zipcode in.")

if (zip.length != 5) {
    
    alert("Please refresh the page and try again.")
} else {
    alert("Thank you.")
}

// state abbreviation
// must be two characters
// must be all caps

var state = prompt("Enter your state 2 letter abbreviation in capital letters.")

if (state.length != 2 || state !== state.toUpperCase()) {
    
    alert("Please refresh the page and try again.")
} else {
    alert("Thank you.")
}

// married
// must be yes or no
// may be any capitalization: YES, Yes, yes


var married = prompt("Are you married?")

if (married !== "no" || married !=="yes" || married.toLowerCase() !== "no" || married.toLowerCase() !=="yes" || married.toUpperCase() !== "YES" || married.toUpperCase() !=="YES"){
    alert("Please refresh the page and try again.")
} else {
    alert("Thank you.")
}