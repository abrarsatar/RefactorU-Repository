var express = require('express');


var app = express();

console.log('server running');


app.get('/', function(req, res){
    res.send('<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"> </form>')
})

app.post('/formsubmit', function(req, res){
       res.redirect('/success')
 
})


app.get('/success', function(req, res){
    res.send('success')
})

app.listen(process.env.PORT || 9001)

