// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive() 
// Five! Five! Five!
function tripleFive() {
    for (var i = 1; i <= 3; i++) {
        return ("Five! ")
      
    }
}
    tripleFive()


// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
var lastLetter = function(word) {
    return (word.charAt(word.length-1));
}
    lastLetter("hello")
    
// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25

var square = function (x) {
    return x*x
}

square(3)

// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8
var negate = function(x) {
    return x*-1
}
negate(5)

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]

var toArray = function(a,b,c) {
    var myArray = [a,b,c]
    return myArray
}
toArray(1,2,3)


// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false

var startsWithA = function(x){
    if (x.charAt(0) == "A"){
        return true
    } else {
        return false
    }
}
startsWithA("Abrar")

// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'

var excite = function(x){
    return x+'!!!'
}

excite('hello')

// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false

var sun = function(y) {
    var n = y.indexOf('sun')
    if (n >= 0) {
        return true
    } else {
        return false
    }
}

sun('sunday')


// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false

var tiny = function (z){
    if (z>0 && z<1){
        return true
    } else {
        return false
    }
}
tiny(.5)    

// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625
//parseInt
//subString
var getSeconds = function(time){
    return (parseInt(time.substring(0,2))*60) + parseInt(time.substring(3,5))
}
getSeconds('01:30')