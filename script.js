/* ==========================================
   SCRIPT.JS
========================================== */

// Pages
const pages = document.querySelectorAll(".page");

// Buttons
const openBtn = document.getElementById("openBtn");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const restartBtn = document.getElementById("restartBtn");

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let currentPage = 0;
let musicPlaying = false;

// =======================
// Show Page
// =======================

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    currentPage = index;

}

// =======================
// Play Music
// =======================

function playMusic(){

    music.play().then(()=>{

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

        musicBtn.classList.add("active");

    }).catch(error=>{

        console.log(error);

    });

}

// =======================
// Pause Music
// =======================

function pauseMusic(){

    music.pause();

    musicPlaying = false;

    musicBtn.innerHTML = "🔇";

    musicBtn.classList.remove("active");

}

// =======================
// Music Button
// =======================

musicBtn.onclick = ()=>{

    if(musicPlaying){

        pauseMusic();

    }else{

        playMusic();

    }

};

// =======================
// Navigation
// =======================

openBtn.onclick = ()=>{

    playMusic();

    showPage(1);

};

next1.onclick = ()=>{

    showPage(2);

};

next2.onclick = ()=>{

    showPage(3);

};

next3.onclick = ()=>{

    showPage(4);

    confetti();

};

restartBtn.onclick = ()=>{

    showPage(0);

};

// =======================
// Confetti
// =======================

function confetti(){

    const box = document.getElementById("confetti");

    box.innerHTML = "";

    const colors = [
        "#ff4081",
        "#ffd54f",
        "#ffffff",
        "#00e5ff",
        "#7c4dff"
    ];

    for(let i=0;i<120;i++){

        const c = document.createElement("div");

        c.style.position="absolute";
        c.style.width="8px";
        c.style.height="14px";

        c.style.left=Math.random()*100+"%";
        c.style.top="-20px";

        c.style.background=colors[Math.floor(Math.random()*colors.length)];

        c.style.transform=`rotate(${Math.random()*360}deg)`;

        c.style.transition="4s linear";

        box.appendChild(c);

        setTimeout(()=>{

            c.style.top="110%";
            c.style.left=Math.random()*100+"%";
            c.style.transform="rotate(720deg)";

        },50);

        setTimeout(()=>{

            c.remove();

        },4200);

    }

}

// =======================
// Floating Hearts
// =======================

setInterval(()=>{

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.transition="6s linear";

    heart.style.zIndex="0";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-100px";
        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6200);

},800);

// Start

showPage(0);
