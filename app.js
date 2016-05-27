var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('Welcome to Palindrome Validate API');
});


app.get('/api/validate', function (req, res) {

    res.contentType('application/json');

    var palin  = req.params.palindrome;
    var charac = palin.replace(' ', '');


    if(palindrome(charac)) {
        res.render('200', {
            message: '"'+palin+'" is a Palindrome!'
        });
    }else{
        res.render('400', {
            message: '"'+palin+'" is not a Palindrome!'
        });
    }

});


function palindrome(charac){
    var lengChar = charac.length,
        lastChar = lengChar - 1;

    if(lengChar == 0 || lengChar == 1) {
        return true;
    }

    if(charac[0] == charac[lastChar]) {
        charac = charac.substr(0, lastChar).substr(1);
        return palindrome(charac);
    }

    return false;
}

var server = app.listen(7000, function() {
    console.log('Palindrome Validate Api is listening on port 7000');
});
