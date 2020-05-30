// Assignment Code
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var passwordText = document.querySelector("password");
    passwordText.Value = password
    for (var x = 0; x < chars.length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    console.log(writePassword);
    console.log(chars);
    return password;
}


writePassword