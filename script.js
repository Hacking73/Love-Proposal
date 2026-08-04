// ===== Love Proposal Script =====

// Pages
const pages = document.querySelectorAll(".page");

function showPage(pageNo) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById("page" + (pageNo + 1)).classList.add("active");
}

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

function playMusic() {
    music.play().then(() => {
        playing = true;
        musicBtn.textContent = "🔊";
        musicBtn.classList.add("active");
    }).catch(err => {
        console.log("Music Error:", err);
    });
}

function pauseMusic() {
    music.pause();
    playing = false;
    musicBtn.textContent = "🔇";
    musicBtn.classList.remove("active");
}

musicBtn.addEventListener("click", () => {
    if (playing) {
        pauseMusic();
    } else {
        playMusic();
    }
});

// Page Buttons
document.getElementById("openBtn").addEventListener("click", () => {
    playMusic();
    showPage(1);
});

document.getElementById("next1").addEventListener("click", () => {
    showPage(2);
});

document.getElementById("next2").addEventListener("click", () => {
    showPage(3);
});

document.getElementById("next3").addEventListener("click", () => {
    showPage(4);
    confetti();
});

document.getElementById("restartBtn").addEventListener("click", () => {
    showPage(0);
});

// Confetti
function confetti() {

    const box = document.getElementById("confetti");
    box.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const d = document.createElement("div");

        d.style.position = "absolute";
        d.style.width = "8px";
        d.style.height = "14px";

        d.style.left = Math.random() * 100 + "%";
        d.style.top = "-20px";

        d.style.background =
            ["#ff4081", "#ffd54f", "#ffffff", "#00e5ff", "#7c4dff"][Math.floor(Math.random() * 5)];

        d.style.transition = "4s linear";

        box.appendChild(d);

        setTimeout(() => {
            d.style.top = "110%";
            d.style.transform = "rotate(720deg)";
        }, 50);

        setTimeout(() => {
            d.remove();
        }, 4000);
    }
}

// First Page
showPage(0);
