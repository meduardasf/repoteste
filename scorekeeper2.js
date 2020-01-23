var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if (p1Score === winningScore){
        gameOver = true;
       p1display.style.color = "green"; 
    } 
    p1display.textContent = p1Score;
    }
});

p2.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if (p2Score === winningScore){
        gameOver = true;
        p2display.style.color = "green"; 
    } 
    p2display.textContent = p2Score;
    }
});

reset.addEventListener("click", function(){
    console.log("reset");
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.style.color = "black";
    p2display.style.color = "black";
    gameOver = false;
});