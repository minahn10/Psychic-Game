var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
// Guesses that you are trying out --> forms an array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
// Computer will auto generate a new letter from this array

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    // To track each of your guesses
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); 
    // Pushes all of your guesses to the list
    
    if (userGuess == computerGuess) {
        wins++;
        alert("You Won! Abra, Kadabra, Alakazam. You\'ve psychic AF!");
        guessesLeft = 9; 
        //reseting the guesses left back to 9
        guessesSoFar.length = 0; 
        // Resets your past guesses that were in the array
    }
    else if (guessesLeft == 0){
        losses++;
        alert("You lost. You kind of suck at this...try again");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
        //Keeps on minusing the number of guesses left by 1
    }  
    
 
    var html = 
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guesses so far: " + guessesSoFar + "</p>";

    document.querySelector('#game').innerHTML = html;
}