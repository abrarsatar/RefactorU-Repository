// First prompt the user to ask how many disaster victims they wish to enter.

var numpeople = prompt("How many victims?")
numpeople = parseInt(numpeople);

// For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. 

var nameArray = [ ]
var phoneArray = [ ]
var streetArray = [ ]

for  (var n = 1; n <= numpeople; n++ ) {

    var name = prompt ('What is the name for victim ' + n + '?')
    nameArray.push(name)
    
    var phone = prompt('What is the phone number for ' + name + '?')
    phoneArray.push(phone)
    
    var street = prompt('What is their street address?')    
    streetArray.push(street)
}

// Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays. 
var numVolunteers = prompt("How many volunteers?")
numVolunteers = parseInt(numVolunteers);

var volNameArray = [ ]
var volPhoneArray = [ ]
var volStreetArray = [ ]

for  (var n = 1; n <= numVolunteers; n++ ) {

    var name = prompt ('What is the name for volunteer ' + n + '?')
    volNameArray.push(name)
    
    var phone = prompt('What is the phone number for ' + name + '?')
    volPhoneArray.push(phone)
    
    var street = prompt('What is their street address?')    
    volStreetArray.push(street)
}

// At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.
alert("There are " + numpeople + ' victims and ' + numVolunteers + ' volunteers. The victim\'s names are ' + nameArray + ' and volunteer\'s names are ' + volNameArray )


