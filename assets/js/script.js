//External Variables
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var num = "0123456789";

//Button Variables
var submit = document.querySelector("#submit");
var copyPass = document.querySelector("#copyPass");

// On Click, Prompt User Questions, Add characters to characters string, Validate inputs, and kick off password function
submit.addEventListener("click",function(){
    //User Inputs
    var userCharCount = prompt("How many characters in your password? Pick a number between 8 and 128");
    var userLower = confirm("Do you want lower case letters?");
    var userUpper = confirm("Do you want upper case letters?");
    var userSpecial = confirm("Do you want special characters?");
    var userNumbers = confirm("Do you want numbers?");

    //Other Variables
    var characters =''; //Holding place variable for characters to be added to 
    var yourPwd = document.getElementById('yourPass'); //Creating the variable to return pass to page   
    var charCount = parseInt(userCharCount); //Convert userharCount input to number, Non numbers will return NAN
    var guaranteedCharacters = ''; //Adds random characters from each true character set


    //Adding characters to string based on user inputs + guaranteed character
    if(userLower){
        characters += lowerLetter;
        guaranteedCharacters = lowerLetter.charAt(Math.floor(Math.random() * lowerLetter.length));
        console.log(guaranteedCharacters);
    } 
    if(userUpper){
        characters += upperLetter;
        guaranteedCharacters += upperLetter.charAt(Math.floor(Math.random() * upperLetter.length));
        console.log(guaranteedCharacters);
    } 
    if(userNumbers){
        characters += num;
        guaranteedCharacters += num.charAt(Math.floor(Math.random() * num.length));
        console.log(guaranteedCharacters);
    } 
    if(userSpecial){
        characters += sym;
        guaranteedCharacters += sym.charAt(Math.floor(Math.random() * sym.length));
        console.log(guaranteedCharacters);
    } 

    //Validation of the user input for character count
    if (isNaN(charCount) || (charCount < 8 || charCount > 128 || (userLower  === false && userUpper === false && userNumbers === false && userSpecial === false))) {
        alert("Your number entry was not valid. Please enter a number between 8 and 128 and at least one character set.") 
    } else {
        charCount = charCount - guaranteedCharacters.length;
        console.log(charCount);   
        console.log("Password(New For Validation): " + password(charCount, characters, guaranteedCharacters) + " Character Count:", charCount + guaranteedCharacters.length, " Lower Case?", userLower, " Upper Case? ", userUpper, " Special? ", userSpecial, " Numbers? ", userNumbers);
        yourPwd.innerText = password(charCount, characters, guaranteedCharacters);
    }


});



//Function to create password randomly...Takes in users character count input and characters
function password(charCount,characters,guaranteedCharacters){

    var pwd = ''; //Create empty password variable
    
    //For loop randomly selects character number(like index of array) and adds that character to password 
    for(var i = 0; i<charCount; i++){
            pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    pwd += guaranteedCharacters;
    return pwd;
    
    };
    


//Copy to Clipboard
copyPass.addEventListener("click", function() {
    var text = document.getElementById('yourPass').textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Copying to clipboard was successful!');
      });
});
