document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");

    function showPage(index) {
        pages.forEach(page => page.classList.remove("active"));
        pages[index].classList.add("active");
    }

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    function playMusic() {
        music.play().then(() => {
            musicBtn.innerHTML = "🔊";
            musicBtn.classList.add("active");
        }).catch(error => console.log(error));
    }

    function pauseMusic() {
        music.pause();
        musicBtn.innerHTML = "🔇";
        musicBtn.classList.remove("active");
    }

    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    document.getElementById("openBtn").onclick = () => {
        playMusic();
        showPage(1);
    };

    document.getElementById("next1").onclick = () => {
        showPage(2);
    };

    document.getElementById("next2").onclick = () => {
        showPage(3);
    };

    document.getElementById("next3").onclick = () => {
        showPage(4);
    };

    document.getElementById("restartBtn").onclick = () => {
        showPage(0);
    };

});
