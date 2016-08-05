
var input = 'Hello Squirrell how are you?';

var longestWord = function (input){
    
    var myArray = input.split(' ');
    var elemLength = []; 

    for (i = 0; i < myArray.length; i++){
    elemLength.push(myArray[i].length);

    }

    var longest = Math.max.apply(Math, elemLength);
    
    longest = elemLength.indexOf(longest)

     console.log(myArray[longest])
   
}

longestWord(input);