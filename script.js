/* ==========================================
   SCRIPT.JS
========================================== */

const pages = document.querySelectorAll(".page");

const openBtn = document.getElementById("openBtn");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const restartBtn = document.getElementById("restartBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let currentPage = 0;
let playing = false;

/* ==========================
   PAGE CHANGE
========================== */

function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));

    if (pages[index]) {
        pages[index].classList.add("active");
        currentPage = index;
    }
}

/* ==========================
   MUSIC
========================== */

function playMusic() {

    music.volume = 0.7;

    music.play().then(() => {

        playing = true;
        musicBtn.innerHTML = "🔊";
        musicBtn.classList.add("active");

    }).catch(error => {

        console.log("Audio Error:", error);

    });

}

function pauseMusic() {

    music.pause();

    playing = false;

    musicBtn.innerHTML = "🔇";
    musicBtn.classList.remove("active");

}

musicBtn.addEventListener("click", () => {

    if (playing) {
        pauseMusic();
    } else {
        playMusic();
    }

});

/* ==========================
   BUTTON EVENTS
========================== */

openBtn.addEventListener("click", () => {

    playMusic();
    showPage(1);

});

next1.addEventListener("click", () => showPage(2));
next2.addEventListener("click", () => showPage(3));
next3.addEventListener("click", () => showPage(4));

next4.addEventListener("click", () => {

    showPage(5);
    launchConfetti();

});

restartBtn.addEventListener("click", () => {

    showPage(0);

});

/* ==========================
   HEART EFFECT
========================== */

setInterval(() => {

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.bottom = "110vh";
        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 6200);

}, 700);

/* ==========================
   CONFETTI
========================== */

function launchConfetti() {

    const box = document.getElementById("confetti");

    box.innerHTML = "";

    const colors = [
        "#ff4d88",
        "#ffd93d",
        "#7b68ee",
        "#00e5ff",
        "#ffffff",
        "#ff8fab"
    ];

    for (let i = 0; i < 150; i++) {

        const piece = document.createElement("div");

        piece.style.position = "absolute";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "-20px";
        piece.style.width = "8px";
        piece.style.height = "15px";
        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.style.transition = "5s linear";

        box.appendChild(piece);

        setTimeout(() => {

            piece.style.top = "110%";
            piece.style.left =
                (Math.random() * 100) + "%";
            piece.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 100);

        setTimeout(() => {

            piece.remove();

        }, 5200);

    }

}

/* ==========================
   GALLERY ZOOM
========================== */

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

/* ==========================
   START
========================== */

showPage(0);
