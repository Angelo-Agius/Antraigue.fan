const img = document.querySelector('.rotate-img');

let rtdeg = 0;

setInterval(() => {

    rtdeg++;

    if (rtdeg === 360) {
        rtdeg = 0;
    }

    img.style.transform = `rotate(${rtdeg}deg)`;

}, 100)

let play = document.getElementById("play");
function playMusic() {
    let audio = new Audio("../assets/audios/01.mp3");
    audio.play()
    console.log("play")
}
play.addEventListener("click", playMusic);