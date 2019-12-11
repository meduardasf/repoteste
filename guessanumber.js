var number = 4;

var guess = prompt("guess a number!");

if(Number(guess) === number) {
    alert("you got it right!!!!")
}

else if(Number(guess) > number) {
    alert("too high. try again")
}

else {
    alert("too low. try again")
}

