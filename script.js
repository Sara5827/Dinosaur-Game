const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const game_border = document.getElementsByClassName("game");
const cloud = document.getElementById("cloud");

function start() {
    cactus.classList.add("start");
    cloud.classList.add("cloud");
}

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function() {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
        start();
    }
}, 10);

document.addEventListener("keydown", function(event) {
    // Start Game
    if (event.code == "Space") {
        jump();
        start();
        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
})