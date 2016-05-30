
exports.verifyPalindrome = function (input) {
    if(typeof palindrome(input) !== 'function') {
        return palindrome(input);
    }
}

function palindrome(input){
    input = input.replace(' ', '');

    var lengChar = input.length,
        lastChar = lengChar - 1;

    if(lengChar == 0 || lengChar == 1) {
        return true;
    }

    if(input[0] == input[lastChar]) {
        input = input.substr(0, lastChar).substr(1);
        return palindrome(input);
    }

    return false;
}
