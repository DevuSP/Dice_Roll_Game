// if (window.performance.navigation.type === 1) {  // This doesn't let game start on opening when site is open first time.
    // rollDice();
//   }

// Funtion 1 for random number.

function  rollDice(){
let number1 = Math.random();
number1 = Math.floor((number1 * 6) + 1);
document.querySelector("img.img1").setAttribute("src", "./images/dice"+ number1 +".png")

let number2 = Math.random();
number2 = Math.floor((number2 * 6) + 1);
document.querySelector("img.img2").setAttribute("src", "./images/dice" + number2 + ".png")

changeTitle(number1, number2);
}

// Function 2 to declare winner and winning line.
function changeTitle(number1, number2){
if (number1 > number2) {
    document.querySelector("h1").innerHTML = "Player1 Wins🏁"
}

else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player2 Wins🏁"
}

else if (number1 == number2) {
    document.querySelector("h1").innerHTML = "Its a Draw"
}
}

