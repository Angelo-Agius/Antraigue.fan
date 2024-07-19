const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    playerContainer = document.getElementById('player-container');

const prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    closeBtn = document.getElementById('close');

const music = new Audio();

const Songs = [
    {
        path: '../assets/audios/les_main_d_or.mp3',
        displayName: "Les main d'or",
        cover: '../assets/imgs/les_main_d_or.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/des_bisous.mp3',
        displayName: "Des bisous",
        cover: '../assets/imgs/des_bisous.jpg',
        artist: 'Hervé Antraique',
    }, {
        path: '../assets/audios/souk_hallydien.mp3',
        displayName: "Souk Hallydien",
        cover: '../assets/imgs/souk_hallydien.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/bonheur_dans_le_the.mp3',
        displayName: "Bonheur dans le thé",
        cover: '../assets/imgs/bonheur_dans_le_the.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/sos.mp3',
        displayName: "SOS",
        cover: '../assets/imgs/sos.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/sur_les_quais.mp3',
        displayName: "Sur les quais",
        cover: '../assets/imgs/sur_les_quais.jpg',
        artist: 'Hervé Antraique',
    }, {
        path: '../assets/audios/ma.mp3',
        displayName: "Ma",
        cover: '../assets/imgs/ma.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/je_me_suis_fait_tout_petit.mp3',
        displayName: "Je m'suis fait tout petit",
        cover: '../assets/imgs/je_me_suis_fait_tout_petit.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/il_est_ou_l_amour.mp3',
        displayName: "Il est où l'amour",
        cover: '../assets/imgs/il_est_ou_l_amour.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/ai-covers/herve.mp3',
        displayName: "Hervé",
        cover: '../assets/imgs/ai-covers/herve.jpg',
        artist: 'Hervé Antraique',
    },
    {
        path: '../assets/audios/ai-covers/rap_d_herve.mp3',
        displayName: "Rap d'Hervé",
        cover: '../assets/imgs/ai-covers/rap_d_herve.jpg',
        artist: 'Hervé Antraique',
    },
];


let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + Songs.length) % Songs.length;
    loadMusic(Songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

document.addEventListener('click', (event) => {


    if (event.target.classList.contains('song')) {

        const songId = event.target.id
        const title = event.target.children[1].innerText
        const image = event.target.children[0].src

        console.log(
            `id: ${songId}\ntitle: ${title}\nimg_source: ${image}`
        )


        const elementHide = document.querySelector('custom-header')

        elementHide.style.display = 'none'


        const elementShow = document.getElementById('player-container')

        elementShow.style.display = 'flex'


        document.querySelector("html").style.overflowY = "none";

        const song = Object.values(Songs).find(song => song.displayName === title);

        if (song) {
            loadMusic(song);
            playMusic();
        } else {
            console.error("Chanson non trouvée dans Songs !");
        }
    }
})

closeBtn.addEventListener('click', () => {
    const elementHide = document.getElementById('player-container')

    elementHide.style.display = 'none'


    const elementShow = document.querySelector('custom-header')

    elementShow.style.display = 'block'

    document.querySelector("html").style.overflowY = "visible";
    music.pause();
})

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(Songs[musicIndex]);