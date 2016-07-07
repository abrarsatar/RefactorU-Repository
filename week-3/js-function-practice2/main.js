// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var argument = {name: 'Luisa', age:25}

var getName = function(argument) {
    
    return console.log(argument.name)
}


// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

var totalLetters = function (array){
    var length = 0
    for (i=0; i<array.length; i++){
        length = length + array[i].length
    }
        return length
}


// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}
var keyValue = function (a,b){
    var object = { }
    object[a] = b
    
    return object
}


// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
var negativeIndex = function (array, number){
     return array[array.length + number]
    
}

// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'
//set function

var removeM = function (word) {
    
    for (i = 0; i < word.length; i++){
        if (word.charAt(i) == "m") {
            word = word.replace(word.charAt(i),"")
        }
    } return word
}


// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print: a is 10 b is 20 c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print: firstName is pork lastName is chops



var printObject = function(object){
    
    //set an array that stores keys into different elements
    var keysarray = Object.keys(object)
   
    var valuesarray = []
    
    //for loop over keys array
    for (i = 0; i < keysarray.length; i++){
        
        //set a var that takes the ith array of keys array
        var key = keysarray[i];
        //set value 
        var value = object[key];
        
        valuesarray.push(value)
    }         
    

    
    var finalarray = []
    for (i = 0; i < valuesarray.length; i++){
        finalarray.push(keysarray[i] + " is " + valuesarray[i])
        
    }
    return finalarray.join(", ")
}


printObject({ name: "joe", height: 30, size: "large" })



// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

var vowels = function(word){
    var finalarray = []
    for (i = 0; i < word.length; i++){
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u" || word.charAt(i) == "y" ) {
           finalarray.push(word.charAt(i))
            }
    } return finalarray
}

vowels("howdy neighbor")



// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false

var twins = function (myarray){
    var checkarray = [] 
    
    for (i = 0; i < myarray.length;){
        if (myarray[i] != myarray[i+1]){
        return false
        } i=i+2;
    }return true
    
}
twins(['a', 'a', 'b', 'b', 'c', 'c'])
    

// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. 
// If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

var or = function(myarray){
    if(myarray.length > 0){
        
        for(i = 0; i < myarray.length; i++){
            if (myarray[i] != false){
                return true
            } 
        } 
    } return false
    
}

or([false, false, true, false])


// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']
var myarray
var unique = function(myarray){
    
    var finalarray = []
    for (i = 0; i < myarray.length; i++){
            
            if (myarray.indexOf(myarray[i]) == i){
                finalarray.push(myarray[i])
            }
            
    }  return finalarray
  

    
}
unique(['todd', 'avery', 'maria', 'avery']) 