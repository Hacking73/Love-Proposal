/* ==========================================
   SCRIPT.JS
   LOVE PROPOSAL WEBSITE
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

/* ==========================
   PAGE CHANGE
========================== */

function showPage(index){

    pages.forEach(page=>page.classList.remove("active"));

    pages[index].classList.add("active");

    currentPage=index;

}

/* ==========================
   MUSIC
========================== */

let playing=false;

function playMusic(){

    music.play();

    playing=true;

    musicBtn.innerHTML="🔊";

    musicBtn.classList.add("active");

}

function pauseMusic(){

    music.pause();

    playing=false;

    musicBtn.innerHTML="🔇";

    musicBtn.classList.remove("active");

}

musicBtn.onclick=()=>{

    if(playing){

        pauseMusic();

    }else{

        playMusic();

    }

};

/* ==========================
   BUTTON EVENTS
========================== */

openBtn.onclick=()=>{

    showPage(1);

    playMusic();

};

next1.onclick=()=>{

    showPage(2);

};

next2.onclick=()=>{

    showPage(3);

};

next3.onclick=()=>{

    showPage(4);

};

next4.onclick=()=>{

    showPage(5);

    launchConfetti();

};

restartBtn.onclick=()=>{

    showPage(0);

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ==========================
   HEARTS
========================== */

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="all 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-100px";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6200);

},600);

/* ==========================
   CONFETTI
========================== */

function launchConfetti(){

    const box=document.getElementById("confetti");

    box.innerHTML="";

    const colors=[
        "#ff4d88",
        "#ffd93d",
        "#ffffff",
        "#00e5ff",
        "#ff8fab",
        "#7b68ee"
    ];

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.style.position="absolute";

        piece.style.width="8px";

        piece.style.height="14px";

        piece.style.left=Math.random()*100+"%";

        piece.style.top="-20px";

        piece.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        piece.style.opacity=".9";

        piece.style.transform=

        "rotate("+Math.random()*360+"deg)";

        piece.style.transition=

        "transform 5s linear, top 5s linear";

        box.appendChild(piece);

        setTimeout(()=>{

            piece.style.top="110%";

            piece.style.transform=

            "translateX("+

            (Math.random()*250-125)

            +"px) rotate(720deg)";

        },100);

        setTimeout(()=>{

            piece.remove();

        },5200);

    }

}

/* ==========================
   IMAGE ZOOM
========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        if(img.style.transform==="scale(1.5)"){

            img.style.transform="scale(1)";

            img.style.zIndex="1";

        }else{

            img.style.transform="scale(1.5)";

            img.style.zIndex="999";

        }

    });

});

/* ==========================
   KEYBOARD SUPPORT
========================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage<pages.length-1){

            showPage(currentPage+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>0){

            showPage(currentPage-1);

        }

    }

});

/* ==========================
   START
========================== */

showPage(0);
