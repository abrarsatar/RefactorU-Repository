// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
var firstReverse = function (words){
    var myarray = words.split(" ")
    var finalarray = []
    
    for (i = myarray.length; i > 0; i--){
        finalarray.push(myarray[i-1])    
    }
    
    return finalarray
    
    
}

firstReverse("hello world how are you")


// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". 
// Let numbers and symbols stay the way they are.
var swapCase = function (word){
    var array = word.split("");

    for (i  = 0; i < word.length; i++){
        if (array[i] == array[i].toUpperCase()) {

            array[i] = array[i].toLowerCase()

        } else {

            array[i] = array[i].toUpperCase()

        }
    }return array.join("")
   
      
    
}

swapCase("yo YOW aRe yoU rRr")

