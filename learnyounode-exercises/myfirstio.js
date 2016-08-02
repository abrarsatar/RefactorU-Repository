var fs = require('fs');
 

var buffer = fs.readFileSync(process.argv[2])
buffer = buffer.toString()

var splitArray = buffer.split("\n")
    
    console.log(splitArray.length-1)