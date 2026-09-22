(() => {
  'use strict';
  const data = window.AMR_DATA;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const paths = {
    arrow:'M4 12h16m-6-6 6 6-6 6', left:'M20 12H4m6-6-6 6 6 6',
    down:'M12 4v16m-6-6 6 6 6-6', up:'M12 20V4m-6 6 6-6 6 6',
    external:'M14 4h6v6m0-6L10 14M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5',
    document:'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9l-6-6zm0 0v6h6M8 13h8m-8 4h6',
    chart:'M4 4v16h17M8 15l4-5 4 2 5-7M8 20v-3m4 3v-7m4 7v-5',
    database:'M20 5c0 2-4 3-8 3S4 7 4 5s4-3 8-3 8 1 8 3zm0 0v14c0 2-4 3-8 3s-8-1-8-3V5m0 7c0 2 4 3 8 3s8-1 8-3',
    graduate:'m2 9 10-5 10 5-10 5L2 9zm4 2v6c4 3 8 3 12 0v-6m4-2v8',
    mail:'M3 5h18v14H3V5zm0 0 9 8 9-8',
    phone:'M7 3H4a1 1 0 0 0-1 1c0 9 8 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3-1-6-4-7-7l2-2-2-5z',
    linkedin:'M4 9v11m0-16v.2M9 20V9h4v2c1-3 7-3 7 2v7m-7 0v-6',
    muted:'m11 5-5 4H3v6h3l5 4V5zm5 4 5 6m0-6-5 6',
    sound:'m11 5-5 4H3v6h3l5 4V5zm5 3c3 2 3 6 0 8m3-11c5 4 5 10 0 14',
    moon:'M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10z',
    sun:'M12 3V1m0 22v-2M3 12H1m22 0h-2M5 5 3 3m18 18-2-2M5 19l-2 2M21 3l-2 2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
    menu:'M4 6h16M4 12h16M4 18h16', close:'m6 6 12 12M6 18 12-12',
    download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
    expand:'M4 9V4h5m6 0h5v5M4 15v5h5m6 0h5v-5'
  };
  const icon = name => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + (paths[name] || paths.arrow) + '"/></svg>';
  function mountIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML=icon(el.dataset.icon); }); }
  const tags = values => '<div class="tags">' + values.map(t => '<span>'+escape(t)+'</span>').join('') + '</div>';
  $('#servicesGrid').innerHTML = data.services.map(s => '<article class="service-card surface interactive-card reveal"><div class="service-top">'+icon(s.icon)+'<span>'+s.number+'</span></div><h3>'+escape(s.title)+'</h3><p>'+escape(s.text)+'</p><div class="service-deliverable">'+escape(s.deliverable)+'</div>'+tags(s.tags)+'</article>').join('');
  $('#experienceList').innerHTML = data.experience.map(e => '<article class="experience-row reveal"><span>'+escape(e.period)+'</span><div><h4>'+escape(e.title)+'</h4><small>'+escape(e.company)+'</small></div><p>'+escape(e.description)+'</p></article>').join('');
  const linkedIn='https://www.linkedin.com/in/amr-tamer-ahmed/';
  const requestLink=label=>'<a class="text-button" href="'+linkedIn+'" target="_blank" rel="noopener noreferrer">'+label+' '+icon('external')+'</a>';
  $('#projectsGrid').innerHTML=data.projects.map(p=>'<article class="project-card surface interactive-card reveal"><div class="project-art art-'+p.id+'" aria-hidden="true"><span class="art-index">'+p.number+' / SELECTED RESEARCH</span><div class="art-lines"><i></i><i></i><i></i><i></i><i></i></div><strong>'+escape(p.title)+'</strong><span class="art-caption">Business context. Financial perspective.</span></div><div class="project-content"><span class="eyebrow">'+p.number+' / '+escape(p.category)+'</span><h3>'+escape(p.title)+'</h3><p>'+escape(p.context)+'</p><dl><dt>THE APPROACH</dt><dd>'+escape(p.approach)+'</dd><dt>THE DELIVERABLE</dt><dd>'+escape(p.outcome)+'</dd></dl>'+tags(p.tags)+'<div class="project-footer"><small>'+escape(p.credit)+'</small>'+requestLink('Request via LinkedIn')+'</div></div></article>').join('');
  function certificateImage(c) { return '<div class="credential-summary"><span class="credential-emblem" aria-hidden="true">'+(c.id==='modeling'||c.id==='dcf'?'365':c.id==='depi'?'DEPI':'Forward')+'</span><span class="eyebrow">'+escape(c.issuer)+'</span><strong>'+escape(c.title)+'</strong><span class="credential-status">'+icon('graduate')+' Completed · '+escape(c.date)+'</span><small>Qualification summary · Original available on request</small></div>'; }
  function certificateCopy(c) { return '<div class="certificate-copy"><span class="eyebrow">LEARNING INTO PRACTICE</span><h4>'+escape(c.title)+'</h4><p>'+escape(c.description)+'</p>'+tags(c.tags)+requestLink('Request via LinkedIn')+'</div>'; }
  $('#certificateTrack').innerHTML=data.certificates.slice(0,2).map((c,i)=>'<article class="certificate-slide" role="group" aria-roledescription="slide" aria-label="'+(i+1)+' of 2: '+escape(c.title)+'"'+(i?' inert aria-hidden="true"':' aria-hidden="false"')+'>'+certificateImage(c)+certificateCopy(c)+'</article>').join('');
  $('#learningCards').innerHTML=data.certificates.slice(2).map((c,i)=>'<section class="learning-group" aria-labelledby="'+c.id+'Heading"><div class="journey-label reveal"><span>0'+(i+2)+'</span><div><h3 id="'+c.id+'Heading">'+escape(c.issuer)+'</h3><p>'+(i?'Professional skills for a changing world.':'Turning data into a business perspective.')+'</p></div></div><article class="learning-card surface interactive-card reveal">'+certificateImage(c)+certificateCopy(c)+'</article></section>').join('');
  mountIcons();
  $('#year').textContent=new Date().getFullYear();

  const storage = {
    get(key) { try {return localStorage.getItem('amr-'+key);} catch {return null;} },
    set(key,value) { try {localStorage.setItem('amr-'+key,value);} catch {} }
  };
  const systemTheme=matchMedia('(prefers-color-scheme: dark)');
  function setTheme(theme,save=false) {
    document.documentElement.dataset.theme=theme;
    $('#themeToggle').innerHTML=icon(theme==='dark'?'sun':'moon');
    const label='Switch to '+(theme==='dark'?'light':'dark')+' mode';
    $('#themeToggle').setAttribute('aria-label',label);
    $('#themeToggle').title=label;
    $('meta[name="theme-color"]').content=theme==='dark'?'#10090d':'#fffafa';
    if(save)storage.set('theme',theme);
  }
  setTheme(storage.get('theme')||(systemTheme.matches?'dark':'light'));
  systemTheme.addEventListener('change',e=>{if(!storage.get('theme'))setTheme(e.matches?'dark':'light');});

  // One sound gate owns every cue. Muting pauses even sounds already playing.
  let soundEnabled=storage.get('sound')==='on', audioUnlocked=false;
  const sounds=new Map();
  const soundVolumes={cursor:.09,select:.18,select2:.18,left:.18,right:.18,front:.08,back:.08};
  Object.keys(soundVolumes).forEach(name=>{const a=new Audio('sounds/'+name+'.mp3');a.preload='none';sounds.set(name,a);});
  function playSound(name) {
    if(!soundEnabled||!audioUnlocked)return;
    const audio=sounds.get(name);if(!audio)return;
    audio.volume=soundVolumes[name];audio.currentTime=0;
    const promise=audio.play();if(promise)promise.catch(()=>{});
  }
  function syncSoundButton() {
    const b=$('#soundToggle'),label=(soundEnabled?'Mute':'Enable')+' all site sounds';
    b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(soundEnabled));b.innerHTML=icon(soundEnabled?'sound':'muted');
  }
  function muteSounds(){sounds.forEach(a=>{a.pause();a.currentTime=0;});}
  syncSoundButton();
  document.addEventListener('pointerdown',()=>{audioUnlocked=true;},{capture:true,once:true});
  document.addEventListener('keydown',()=>{audioUnlocked=true;},{capture:true,once:true});
  $('#soundToggle').addEventListener('click',()=>{
    soundEnabled=!soundEnabled;audioUnlocked=true;storage.set('sound',soundEnabled?'on':'off');syncSoundButton();
    if(!soundEnabled)muteSounds();else playSound('select');
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)muteSounds();});
  $('#themeToggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(next,true);playSound(next==='light'?'select2':'select');});
  let hoverAt=0;
  document.addEventListener('pointerover',e=>{
    if(e.pointerType==='touch')return;
    const target=e.target.closest('a,button,.interactive-card,.tags span');
    if(!target||target.contains(e.relatedTarget))return;
    const now=performance.now();if(now-hoverAt<85)return;hoverAt=now;playSound('cursor');
  });
  document.addEventListener('click',e=>{
    const control=e.target.closest('a,button');if(!control)return;
    if(control.matches('#soundToggle,#themeToggle,#menuToggle,#certPrev,#certNext,[data-slide]'))return;
    playSound('select');
  });

  const menu=$('#mainNav'),menuToggle=$('#menuToggle');
  function closeMenu(){menu.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');menuToggle.innerHTML=icon('menu');}
  menuToggle.addEventListener('click',()=>{
    playSound('select');
    const open=menuToggle.getAttribute('aria-expanded')!=='true';
    menu.classList.toggle('is-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuToggle.innerHTML=icon(open?'close':'menu');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!e.composedPath().includes($('.site-header')))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();menuToggle.focus();}});
  matchMedia('(min-width:851px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

  // Both slides share the same intrinsic height, so navigation never jumps.
  const track=$('#certificateTrack'), slides=$$('.certificate-slide');
  let activeSlide=0;
  function showSlide(index) {
    const next=(index+slides.length)%slides.length;if(next===activeSlide)return;
    playSound(next>activeSlide?'right':'left');playSound(next>activeSlide?'front':'back');
    activeSlide=next;track.style.transform='translate3d('+(-next*100)+'%,0,0)';
    slides.forEach((slide,i)=>{slide.inert=i!==next;slide.setAttribute('aria-hidden',String(i!==next));});
    $$('[data-slide]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.slide)===next)));
    $('#slideAnnouncement').textContent='Certificate '+(next+1)+' of 2: '+data.certificates[next].title;
  }
  $('#certPrev').addEventListener('click',()=>showSlide(activeSlide-1));$('#certNext').addEventListener('click',()=>showSlide(activeSlide+1));
  $$('[data-slide]').forEach(b=>b.addEventListener('click',()=>showSlide(Number(b.dataset.slide))));
  $('.certificate-carousel').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showSlide(activeSlide+(e.key==='ArrowRight'?1:-1));}});
  let touchX=0,touchY=0;
  $('.carousel-viewport').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;touchY=e.changedTouches[0].clientY;},{passive:true});
  $('.carousel-viewport').addEventListener('touchend',e=>{const x=e.changedTouches[0].clientX-touchX,y=e.changedTouches[0].clientY-touchY;if(Math.abs(x)>45&&Math.abs(x)>Math.abs(y)*1.3){showSlide(activeSlide+(x<0?1:-1));}},{passive:true});

  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  if('IntersectionObserver' in window&&!reducedMotion.matches){
    const reveals=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveals.unobserve(e.target);}});},{threshold:.08});
    document.documentElement.classList.add('motion-ready');$$('.reveal').forEach(el=>reveals.observe(el));
  }
  const sections=$$('main section[id]'),navLinks=$$('#mainNav a');
  let scrollFrame=0;
  function updateScroll(){
    scrollFrame=0;const height=document.documentElement.scrollHeight-innerHeight;
    $('.reading-progress span').style.transform='scaleX('+(height>0?Math.min(1,Math.max(0,scrollY/height)):0)+')';
    let current='home';for(const s of sections){if(s.getBoundingClientRect().top<innerHeight*.35)current=s.id;}
    navLinks.forEach(a=>{if(a.hash==='#'+current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  }
  addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll);},{passive:true});addEventListener('resize',updateScroll);updateScroll();
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reducedMotion.matches){
    $$('.interactive-card').forEach(card=>{
      let frame=0;
      card.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{const b=card.getBoundingClientRect(),x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;card.style.setProperty('--rx',((.5-y)*3).toFixed(2)+'deg');card.style.setProperty('--ry',((x-.5)*3).toFixed(2)+'deg');card.style.setProperty('--mx',(x*100)+'%');card.style.setProperty('--my',(y*100)+'%');frame=0;});});
      card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);frame=0;card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');});
    });
  }
})();
