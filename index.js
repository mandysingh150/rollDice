var randomNumber1;
var randomNumber2;

function generate() {
    // for dice 1
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
    
    // for dice 2
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    
    // for changing the heading
    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Draw🚩";
    }
    else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    }
}
