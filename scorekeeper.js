var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var numInput = document.querySelector("input");
var numDisplay = document.querySelector("#numdisplay");
var winningScore = 5;
var reset = document.querySelector("#reset");

numInput.addEventListener("change", function(){
    numDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetar();
})

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if (p1Score === winningScore){
        gameOver = true;
       p1Display.style.color = "green"; 
    } 
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if (p2Score === winningScore){
        gameOver = true;
        p2Display.style.color = "green"; 
    } 
    p2Display.textContent = p2Score;
    }
});

reset.addEventListener("click", function(){
    resetar();
});

function resetar(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    gameOver = false;
};