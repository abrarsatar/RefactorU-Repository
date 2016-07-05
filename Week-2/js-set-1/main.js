// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
// You can assume that words in the input string will be separated by only one space.

// Bonus:
// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. 
// You can assume that words in the input string will be separated by only one space.
// var letterCapitalize = function(word) {
// for (var i = 0; i<=word.length; i++) {




// var word = "hello world hi there sdf df sdf dsf df dsf sdf  df df"
//     //capitalize first letter
//     word = word.replace(word.charAt(0)  ,(word.charAt(0)).toUpperCase())
//     var space = word.indexOf(" ")
//     var firstNum = space + 1
//     var firstLetter= word.charAt(firstNum)
//     var firstCap = firstLetter.toUpperCase()
//     word = word.replace(firstLetter, firstCap)

var letterCapitalize = function (userInput){

    var array = userInput.split(" ")

    for (var i = 0; i <= array.length; i++){
    array[i] = array[i].replace(array[i].charAt(0), (array[i].charAt(0)).toUpperCase() )
    }
    var final
    return final = array.join(' ')

}