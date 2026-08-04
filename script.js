/* ==========================================
   SCRIPT.JS - PART 1
   PAGE NAVIGATION + MUSIC
========================================== */

// Pages

const pages = document.querySelectorAll(".page");

let currentPage = 0;

// Buttons

const openBtn = document.getElementById("openBtn");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const restartBtn = document.getElementById("restartBtn");

// Music

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

/* ==========================
   SHOW PAGE
========================== */

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

currentPage=index;

}

/* ==========================
   PLAY MUSIC
========================== */

function playMusic(){

music.volume=0.6;

music.play()

.then(()=>{

musicPlaying=true;

musicBtn.innerHTML="🔊";

musicBtn.classList.add("active");

})

.catch(error=>{

console.log(error);

});

}

/* ==========================
   PAUSE MUSIC
========================== */

function pauseMusic(){

music.pause();

musicPlaying=false;

musicBtn.innerHTML="🔇";

musicBtn.classList.remove("active");

}

/* ==========================
   MUSIC BUTTON
========================== */

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

pauseMusic();

}else{

playMusic();

}

});

/* ==========================
   PAGE BUTTONS
========================== */

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

});

next4.addEventListener("click",()=>{

showPage(5);

launchConfetti();

});

restartBtn.addEventListener("click",()=>{

showPage(0);

});

/* ==========================
   START
========================== */

showPage(0);
/* ==========================================
   SCRIPT.JS - PART 2
   HEARTS + CONFETTI + GALLERY
========================================== */

/* ==========================
   FLOATING HEARTS
========================== */

setInterval(() => {

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.top = "100vh";
heart.style.fontSize = (20 + Math.random() * 25) + "px";
heart.style.pointerEvents = "none";
heart.style.zIndex = "999";
heart.style.transition = "6s linear";
heart.style.opacity = "1";

document.body.appendChild(heart);

setTimeout(() => {

heart.style.top = "-100px";
heart.style.opacity = "0";

},100);

setTimeout(() => {

heart.remove();

},6200);

},700);

/* ==========================
   GALLERY ZOOM
========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

/* ==========================
   CONFETTI
========================== */

function launchConfetti(){

const box=document.getElementById("confetti");

box.innerHTML="";

const colors=[
"#ff4d88",
"#ffd93d",
"#00e5ff",
"#ffffff",
"#7b68ee",
"#ff8fab"
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
`rotate(${Math.random()*360}deg)`;

piece.style.transition=
"transform 5s linear, top 5s linear";

box.appendChild(piece);

setTimeout(()=>{

piece.style.top="110%";

piece.style.transform=
`translateX(${Math.random()*250-125}px)
rotate(720deg)`;

},100);

setTimeout(()=>{

piece.remove();

},5200);

}

}

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
