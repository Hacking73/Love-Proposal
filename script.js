/* ==========================================
   SCRIPT.JS
   COMPLETE VERSION
========================================== */

// Pages
const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Buttons
const openBtn = document.getElementById("openBtn");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const restartBtn = document.getElementById("restartBtn");

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// ==========================
// SHOW PAGE
// ==========================

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");
    currentPage=index;

}

// ==========================
// PLAY MUSIC
// ==========================

function playMusic(){

    music.play().then(()=>{

        isPlaying=true;

        musicBtn.innerHTML="🔊";
        musicBtn.classList.add("active");

    }).catch(err=>{

        console.log(err);

    });

}

// ==========================
// PAUSE MUSIC
// ==========================

function pauseMusic(){

    music.pause();

    isPlaying=false;

    musicBtn.innerHTML="🔇";

    musicBtn.classList.remove("active");

}

// ==========================
// MUSIC BUTTON
// ==========================

musicBtn.addEventListener("click",()=>{

    if(isPlaying){

        pauseMusic();

    }else{

        playMusic();

    }

});

// ==========================
// BUTTON EVENTS
// ==========================

openBtn.addEventListener("click",()=>{

    playMusic();
    showPage(1);

});

next1.addEventListener("click",()=>{

    showPage(2);

});

next2.addEventListener("click",()=>{

    showPage(3);

});

next3.addEventListener("click",()=>{

    showPage(4);
    launchConfetti();

});

restartBtn.addEventListener("click",()=>{

    showPage(0);

});

// ==========================
// CONFETTI
// ==========================

function launchConfetti(){

    const box=document.getElementById("confetti");

    box.innerHTML="";

    const colors=[
        "#ff4081",
        "#ffd54f",
        "#ffffff",
        "#00e5ff",
        "#7c4dff"
    ];

    for(let i=0;i<150;i++){

        const piece=document.createElement("div");

        piece.style.position="absolute";
        piece.style.width="8px";
        piece.style.height="14px";

        piece.style.left=Math.random()*100+"%";
        piece.style.top="-20px";

        piece.style.background=colors[Math.floor(Math.random()*colors.length)];

        piece.style.transform=`rotate(${Math.random()*360}deg)`;

        piece.style.transition="5s linear";

        box.appendChild(piece);

        setTimeout(()=>{

            piece.style.top="110%";
            piece.style.left=(Math.random()*100)+"%";
            piece.style.transform="rotate(720deg)";

        },100);

        setTimeout(()=>{

            piece.remove();

        },5200);

    }

}

// ==========================
// FLOATING HEARTS
// ==========================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.transition="6s linear";

    heart.style.zIndex="1";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-100px";
        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6200);

},700);

// ==========================
// START
// ==========================

showPage(0);
