var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


var palindrome = require('./palindrome');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.post('/api/palindrome', function(req, res) {
    console.log(req.body)
    var result = palindrome.verifyPalindrome(req.body.value);
    if(result){
        res.status(200).send({input:req.body.value, message:'IS A PALINDROME'});
    }else{
        res.status(400).send({input:req.body.value, message:'IS NOT A PALINDROME'});
    }
});

var server = app.listen(7000, function() {
    console.log('Palindrome Validate Api is listening on port 7000, please access: http://localhost:7000');
});
