//User Inputs
var userCharCount = prompt("How many characters in your password? Pick a number between 8 and 128");
var userLower = confirm("Do you want lower case letters?");
var userUpper = confirm("Do you want upper case letters?");
var userSpecial = confirm("Do you want special characters?");
var userNumbers = confirm("Do you want numbers?");

        
//Variables
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var num = "0123456789";

var characters =''; //Holding place variable for characters to be added to 
var CharCount = parseInt(userCharCount); //Convert userCharCount input to number, Non numbers will return NAN
var yourPwd = document.getElementById('yourPass'); //Creating the variable to return pass to page



// On Click add characters, validate CharCount and kick off password function
submit.addEventListener("click",function(){
    if(userLower){
        characters += lowerLetter;
    } 
    if(userUpper){
        characters += upperLetter;
    } 
    if(userNumbers){
        characters += num;
    } 
    if(userSpecial){
        characters += sym;
    } 
    if(userLower  === false && userUpper === false && userNumbers === false && userSpecial === false){
        characters += lowerLetter;
    }

    // Another way to add the strings together. I'm leaving this in to remind myself for later
    // const characters = ''
    // + (userLower ? lowerLetter : '')
    // + (userUpper ? upperLetter : '')
    // + (userNumbers ? num : '')
    // + (userSpecial ? sym : '')
    // + (userLower  === false && userUpper === false && userNumbers === false && userSpecial === false ? lowerLetter : '' )

//Validation of the user input for character count
if (isNaN(CharCount) || (CharCount <= 8 || CharCount >= 128)) {
    alert("Your number entry was not valid. Please refresh the page and enter a number between 8 and 128.") 
} else {
    console.log(password(CharCount, characters));
    yourPwd.innerText = password(CharCount, characters);
}


});


//Function to create password randomly...Takes in users character count input and characters
function password(CharCount,characters){

var pwd = ''; //Create empty password variable

//For loop randomly selects character number(like index of array) and adds that character to password 
for(var i = 0; i<CharCount; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
}
return pwd;

}



//Copy to Clipboard
copyPass.addEventListener("click", function() {
    var text = document.getElementById('yourPass').textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Copying to clipboard was successful!');
      });
});