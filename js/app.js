(function(){
  var ku=String.fromCharCode(12367),ma=String.fromCharCode(12414),ki=String.fromCharCode(12461),i=String.fromCharCode(12451),kuma=String.fromCharCode(29066);
  var kana=ku+ma+ki+i;
  // Get favicon src from <link rel="icon">
  var faviconSrc=(document.querySelector('link[rel="icon"]')||{}).href||'images/favicon.png';

  // Sync both logo images from the favicon link (runs once)
  var hl=document.getElementById('home-logo'); if(hl) hl.src=faviconSrc;
  var bf=document.getElementById('brand-favicon'); if(bf) bf.src=faviconSrc;

  // Freeze home-logo after hs-logo-pop completes so it never restarts
  // (restarting causes opacity:0 flash when .logo-shaking class is toggled)
  document.addEventListener('DOMContentLoaded', function(){
    var logo = document.getElementById('home-logo');
    if(!logo) return;
    logo.addEventListener('animationend', function freezePop(e){
      if(e.animationName === 'hs-logo-pop'){
        logo.removeEventListener('animationend', freezePop);
        // Lock img at final state; .logo-shaking !important will still override
        logo.style.opacity = '1';
        logo.style.transform = 'none';
        logo.style.animation = 'none';
      }
    });
  });

  function setNames(){
    var e=document.getElementById('empty-name');
    var ht=document.getElementById('home-title-text');
    var b=document.getElementById('brand-name');

    // brand-name: only the text (img is now in HTML, always visible)
    if(b && !b.dataset.built){
      b.dataset.built='1';
      b.innerHTML='<ruby>'+kuma+'<rt style="font-size:9px;letter-spacing:0;">'+ku+ma+'</rt></ruby>'+ki+i;
    }

    if(e && !e.dataset.built){
      e.dataset.built='1';
      e.textContent=kana;
    }

    // Home title: only build once so cf animations aren't restarted
    if(ht && !ht.dataset.built){
      ht.dataset.built='1';
      ht.innerHTML="<ruby><span class=\"cf0 cf\" style=\"animation:cf0 3.2s ease-in-out 1.4s infinite\">熊</span><rt><span class=\"cf1 cf\" style=\"animation:cf1 3.5s ease-in-out 0.3s infinite\">く</span><span class=\"cf2 cf\" style=\"animation:cf2 3.1s ease-in-out 1.2s infinite\">ま</span></rt></ruby><span class=\"cf3 cf\" style=\"animation:cf3 4.2s ease-in-out 0.2s infinite\">キ</span><span class=\"cf4 cf\" style=\"animation:cf4 3.1s ease-in-out 1.7s infinite\">ィ</span>";
    }

    document.title=kana;
  }

  document.addEventListener('DOMContentLoaded', setNames);
  if(document.readyState!=='loading') setNames();
})();
