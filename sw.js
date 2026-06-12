// sw.js — kumaki rate-limit service worker
// Intercepts navigation requests before they reach Netlify.
// If the _bu cookie (blocked-until timestamp in ms) is set and unexpired,
// returns an inline blocked page without touching the network.

self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', function(e){
  if(e.request.mode !== 'navigate') return; // only intercept page loads

  var cookie = e.request.headers.get('cookie') || '';
  var m = cookie.match(/_bu=(\d+)/);
  if(!m) return; // no block cookie → pass through

  var until = parseInt(m[1], 10);
  if(isNaN(until) || until <= 1 || Date.now() >= until) return; // expired → pass through

  e.respondWith(new Response(blockedPage(until), {
    headers:{ 'content-type':'text/html; charset=utf-8', 'cache-control':'no-store' }
  }));
});

function blockedPage(until){
  // Inline all assets — this page is served without a network request.
  // Floating style (no card) matching the access-denied screen.
  return '<!DOCTYPE html>\
<html lang="en">\
<head>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width,initial-scale=1">\
<title>くまキィ · Please wait</title>\
<style>\
@font-face{font-family:"Chihaya";src:url("/fonts/Chihaya.ttf") format("truetype")}\
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\
html,body{height:100%;overflow:hidden}\
body{min-height:100vh;display:flex;align-items:center;justify-content:center;\
background:linear-gradient(150deg,#fff9f8 0%,#fdf0ef 55%,#fae6e4 100%);\
font-family:Arial,sans-serif;color:#3d2c28;position:relative}\
.kana-bg{position:fixed;inset:0;pointer-events:none;overflow:hidden}\
.kana{position:absolute;font-family:"Chihaya","Hiragino Sans","Yu Gothic",sans-serif;\
color:#d17d6e;opacity:0;animation:kana-rise var(--dur) var(--delay) ease-in infinite;user-select:none}\
@keyframes kana-rise{\
0%{opacity:0;transform:translateY(0) rotate(0deg)}\
12%{opacity:var(--op)}\
80%{opacity:var(--op)}\
100%{opacity:0;transform:translateY(-130px) rotate(var(--rot))}}\
.dot-ring{position:fixed;border-radius:50%;\
border:1px solid rgba(209,125,110,.1);\
animation:pulse-ring 6s ease-in-out infinite;\
pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%)}\
.dot-ring:nth-child(1){width:420px;height:420px;animation-delay:0s}\
.dot-ring:nth-child(2){width:650px;height:650px;animation-delay:1.8s}\
.dot-ring:nth-child(3){width:880px;height:880px;animation-delay:3.6s}\
@keyframes pulse-ring{\
0%,100%{opacity:.7;transform:translate(-50%,-50%) scale(1)}\
50%{opacity:.15;transform:translate(-50%,-50%) scale(1.03)}}\
@keyframes fade-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}\
.screen{position:relative;z-index:10;display:flex;flex-direction:column;align-items:center;text-align:center}\
.bear-wrap{position:relative;display:inline-block;margin-bottom:22px;\
opacity:0;animation:fade-up .4s ease both;animation-fill-mode:forwards}\
.bear-img{width:96px;height:96px;object-fit:contain;\
filter:drop-shadow(0 6px 20px rgba(209,125,110,.28));\
animation:na-shake 1.1s cubic-bezier(.36,.07,.19,.97) both,bear-float 3.4s 1.1s ease-in-out infinite}\
@keyframes na-shake{\
0%,100%{transform:rotate(0) translateY(0)}\
12%{transform:rotate(-10deg) translateY(-5px)}\
25%{transform:rotate(10deg) translateY(-5px)}\
37%{transform:rotate(-8deg) translateY(-3px)}\
50%{transform:rotate(8deg) translateY(-3px)}\
62%{transform:rotate(-5deg) translateY(-1px)}\
75%{transform:rotate(5deg) translateY(-1px)}\
87%{transform:rotate(-2deg)}}\
@keyframes bear-float{0%,100%{transform:translateY(0) rotate(-.5deg)}50%{transform:translateY(-7px) rotate(.5deg)}}\
.bear-speech{position:absolute;top:-4px;left:calc(100% - 24px);\
background:rgba(255,255,255,.88);border:1.5px solid #e8d8d4;\
border-radius:12px 12px 12px 3px;\
padding:5px 11px;font-size:12.5px;white-space:nowrap;color:#9c7b76;\
font-family:"Chihaya","Hiragino Sans",sans-serif;\
box-shadow:0 2px 10px rgba(167,139,137,.14);\
animation:speech-reveal 1.1s ease both,speech-float 3.2s ease-in-out 1.1s infinite}\
@keyframes speech-reveal{0%,50%{opacity:0;transform:scale(.7) translateY(4px)}100%{opacity:1;transform:scale(1) translateY(0)}}\
@keyframes speech-float{0%,100%{transform:translateY(0) rotate(-.4deg)}50%{transform:translateY(-5px) rotate(.4deg)}}\
.badge{display:inline-flex;align-items:center;gap:6px;\
background:rgba(255,255,255,.72);border:1px solid #e8d8d4;border-radius:20px;\
padding:4px 13px;font-size:10px;font-weight:700;letter-spacing:.09em;\
color:#af6e6a;text-transform:uppercase;margin-bottom:12px;\
animation:fade-up .4s .6s ease both;opacity:0;animation-fill-mode:forwards}\
.na-title{font-family:"Chihaya","Noto Serif JP",serif;\
font-size:30px;color:#e0675c;margin-bottom:8px;\
animation:fade-up .4s .72s ease both;opacity:0;animation-fill-mode:forwards}\
.na-msg{font-size:13px;color:#9c7b76;line-height:1.7;margin-bottom:22px;\
animation:fade-up .4s .84s ease both;opacity:0;animation-fill-mode:forwards}\
.timer-box{display:inline-flex;flex-direction:column;align-items:center;\
background:rgba(255,255,255,.6);border:1px solid #edd8d4;border-radius:50px;\
padding:10px 32px;margin-bottom:18px;\
animation:fade-up .4s .92s ease both;opacity:0;animation-fill-mode:forwards}\
.timer-label{font-size:10px;letter-spacing:.08em;color:#c4a9a5;text-transform:uppercase;margin-bottom:2px}\
.timer-value{font-family:"Chihaya",monospace;font-size:36px;color:#d17d6e;letter-spacing:.02em;line-height:1}\
.na-sub{font-size:11px;color:#c4a9a5;line-height:1.6;\
animation:fade-up .4s 1s ease both;opacity:0;animation-fill-mode:forwards}\
</style>\
</head>\
<body>\
<div class="dot-ring"></div>\
<div class="dot-ring"></div>\
<div class="dot-ring"></div>\
<div class="kana-bg" id="kana-bg"></div>\
<div class="screen">\
  <div class="bear-wrap">\
    <img class="bear-img" src="/images/logo.png" alt="Kumaki">\
    <div class="bear-speech">ちょっと待って！</div>\
  </div>\
  <div class="badge">\
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>\
    Too Many Refreshes\
  </div>\
  <div class="na-title">慌てないで</div>\
  <div class="na-msg">You refreshed too quickly!<br>Please wait before returning.</div>\
  <div class="timer-box">\
    <div class="timer-label">come back in</div>\
    <div class="timer-value" id="timer">25:00</div>\
  </div>\
  <div class="na-sub">This keeps くまキィ available for everyone. ʕ•ᴥ•ʔ</div>\
</div>\
<script>\
(function(){\
var until='+until+';\
var kana="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";\
var bg=document.getElementById("kana-bg");\
for(var i=0;i<22;i++){\
var el=document.createElement("span");\
el.className="kana";\
el.textContent=kana[Math.floor(Math.random()*kana.length)];\
el.style.cssText="left:"+Math.random()*100+"%;top:"+(60+Math.random()*40)+"%;font-size:"+(14+Math.random()*22)+"px;--dur:"+(5+Math.random()*8)+"s;--delay:"+Math.random()*6+"s;--op:"+(0.05+Math.random()*0.12)+";--rot:"+(Math.random()*30-15)+"deg";\
bg.appendChild(el);\
}\
function tick(){\
var rem=Math.max(0,until-Date.now());\
var min=Math.floor(rem/60000);\
var sec=Math.floor((rem%60000)/1000);\
var el=document.getElementById("timer");\
if(el)el.textContent=min+":"+(sec<10?"0":"")+sec;\
if(rem<=0){\
document.cookie="_bu=0;path=/;max-age=0;SameSite=Lax";\
try{localStorage.removeItem("_krs");localStorage.removeItem("_rlChecked");}catch(e){}\
location.reload();\
}\
}\
setInterval(tick,1000);\
tick();\
})();\
<\/script>\
</body>\
</html>';
}
