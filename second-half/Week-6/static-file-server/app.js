// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs')

var fileContents = fs.readFile('data.txt', function (err, data){
    if (err)
      throw err;
      
    content = data;
    
})


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html')
  res.send(content)
});

// Creating Server and Listening for Connections \\
app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port ' + process.env.PORT);

})