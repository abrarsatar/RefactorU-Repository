var express = require('express');
var path = require('path');

var app = express();
console.log('path is:', path)


app.use(express.static(path.resolve( __dirname , './location')))

app.get('/', function(req, res){
    res.sendFile('/seville.html', { root : './location'})
    
})

app.get('/next', function(req, res) {
    
    res.json(req.query);
    
})

app.get('*', function(req, res){
    res.sendFile('/lost.html' , {root : './location'})
})




app.listen(process.env.PORT || 9001)

