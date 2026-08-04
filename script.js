/* ==========================================
   STYLE.CSS - PART 1
   RESET + BODY + PAGES + BUTTONS
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{

    min-height:100vh;
    overflow:hidden;

    display:flex;
    justify-content:center;
    align-items:center;

    color:#fff;

    background:linear-gradient(-45deg,#ff9ecf,#d7b8ff,#ffc8dd,#b8c0ff);
    background-size:400% 400%;

    animation:bgMove 15s ease infinite;

}

@keyframes bgMove{

0%{
background-position:0% 50%;
}

50%{
background-position:100% 50%;
}

100%{
background-position:0% 50%;
}

}

/* ==========================
   PAGE
========================== */

.page{

position:absolute;

top:0;
left:0;

width:100%;
height:100vh;

display:flex;

justify-content:center;
align-items:center;

padding:25px;

opacity:0;

visibility:hidden;

transform:translateY(40px);

transition:.6s;

}

.page.active{

opacity:1;

visibility:visible;

transform:translateY(0);

}

/* ==========================
   GLASS CARD
========================== */

.glass{

width:100%;

max-width:760px;

padding:45px;

border-radius:25px;

text-align:center;

background:rgba(255,255,255,.15);

backdrop-filter:blur(15px);

-webkit-backdrop-filter:blur(15px);

border:1px solid rgba(255,255,255,.25);

box-shadow:0 10px 35px rgba(0,0,0,.2);

animation:cardShow .8s ease;

}

@keyframes cardShow{

from{

opacity:0;

transform:translateY(40px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/* ==========================
   TEXT
========================== */

h1{

font-size:52px;

font-family:'Great Vibes',cursive;

margin-bottom:20px;

}

h2{

font-size:34px;

margin-bottom:20px;

}

h3{

font-size:24px;

margin-bottom:15px;

}

p{

font-size:18px;

line-height:1.9;

margin-top:15px;

}

.letter{

white-space:pre-line;

}

.proposal-text{

white-space:pre-line;

}

/* ==========================
   BUTTONS
========================== */

.mainBtn,
.proposalBtn{

display:inline-block;

margin-top:30px;

padding:16px 42px;

border:none;

border-radius:50px;

background:linear-gradient(90deg,#ff4081,#ff6ea8);

color:#fff;

font-size:18px;

font-weight:600;

text-decoration:none;

cursor:pointer;

transition:.3s;

box-shadow:0 8px 20px rgba(255,64,129,.35);

}

.mainBtn:hover,
.proposalBtn:hover{

transform:translateY(-5px);

box-shadow:0 15px 30px rgba(255,64,129,.45);

}

/* ==========================
   MUSIC BUTTON
========================== */

#musicBtn{

position:fixed;

top:20px;
right:20px;

width:60px;
height:60px;

border:none;

border-radius:50%;

background:#ff4081;

color:#fff;

font-size:24px;

cursor:pointer;

display:flex;

justify-content:center;
align-items:center;

z-index:999;

transition:.3s;

box-shadow:0 8px 20px rgba(0,0,0,.25);

}

#musicBtn:hover{

transform:scale(1.1);

}

#musicBtn.active{

background:#00c853;

}
