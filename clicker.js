let score = 0;
let cookie = document.getElementById("cookie");
let scoreDisplay = document.getElementById('score');

function addScore(){
     score++;
     scoreDisplay.innerText = score;
}

cookie.addEventListener("click", addScore)