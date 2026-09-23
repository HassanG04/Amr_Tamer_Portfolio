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
    linkedin:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z',
    moon:'M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10z',
    sun:'M12 3V1m0 22v-2M3 12H1m22 0h-2M5 5 3 3m18 18-2-2M5 19l-2 2M21 3l-2 2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
    menu:'M4 6h16M4 12h16M4 18h16', close:'m6 6 12 12M6 18 12-12',
    download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
    expand:'M4 9V4h5m6 0h5v5M4 15v5h5m6 0h5v-5'
  };
  const icon = name => '<svg class="icon'+(name==='linkedin'?' icon-linkedin':'')+'" viewBox="0 0 24 24" aria-hidden="true"><path d="' + (paths[name] || paths.arrow) + '"/></svg>';
  function mountIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML=icon(el.dataset.icon); }); }
  const tags = values => '<div class="tags">' + values.map(t => '<span data-tech="'+escape(t.toLowerCase().replace(/\s+/g,'-'))+'">'+escape(t)+'</span>').join('') + '</div>';
  $('#servicesGrid').innerHTML = data.services.map(s => '<article class="service-card surface interactive-card reveal"><div class="service-top">'+icon(s.icon)+'<span>'+s.number+'</span></div><h3>'+escape(s.title)+'</h3><p>'+escape(s.text)+'</p><div class="service-deliverable">'+escape(s.deliverable)+'</div>'+tags(s.tags)+'</article>').join('');
  $('#experienceList').innerHTML = data.experience.map(e => '<article class="experience-row reveal"><span>'+escape(e.period)+'</span><div><h4>'+escape(e.title)+'</h4><small>'+escape(e.company)+'</small></div><p>'+escape(e.description)+'</p></article>').join('');
  const externalLink=(label,url,className='text-button')=>'<a class="'+className+'" href="'+escape(url)+'" target="_blank" rel="noopener noreferrer">'+escape(label)+' '+icon('external')+'</a>';
  function projectTeam(p) {
    const people=p.team.map(person=>'<a class="team-id" href="'+escape(person.url)+'" target="_blank" rel="noopener noreferrer" aria-label="View '+escape(person.name)+' on LinkedIn"><span class="team-id-photo">'+icon('linkedin')+'</span><strong class="team-id-name">'+escape(person.name)+'</strong><span class="team-id-label">LinkedIn</span><span class="team-id-description">Collaborator on the '+escape(p.title)+' project.</span><span class="team-id-open">Open profile '+icon('external')+'</span></a>').join('');
    return '<div class="project-flip-back" inert aria-hidden="true"><div class="team-back-content"><div class="team-back-heading"><span class="eyebrow">'+escape(p.number)+' / THE PEOPLE BEHIND THE WORK</span><h3>'+escape(p.title)+'</h3><p>Good research is a team effort. Meet the collaborators behind this project.</p></div><div class="team-ids">'+people+'</div>'+(p.thanks?'<p class="team-thanks">'+escape(p.thanks)+'</p>':'')+'<div class="team-back-actions">'+externalLink('View Presentation',p.presentation)+'<button class="flip-control" type="button" data-flip-project aria-label="Return to '+escape(p.title)+' project details">'+icon('left')+' Return to project</button></div></div></div>';
  }
  $('#projectsGrid').innerHTML=data.projects.map(p=>'<article class="project-card surface interactive-card reveal" data-project="'+escape(p.id)+'" tabindex="0" aria-label="'+escape(p.title)+' project card. Click to meet the team."><div class="project-flip-inner"><div class="project-flip-front" aria-hidden="false"><div class="project-media"><img src="'+escape(p.image)+'" alt="Cover of the '+escape(p.title)+' research presentation" loading="lazy" decoding="async"><span class="project-media-label">'+escape(p.number)+' / SELECTED RESEARCH</span><span class="flip-hint" aria-hidden="true">Click me</span></div><div class="project-content"><span class="eyebrow">'+escape(p.number)+' / '+escape(p.category)+'</span><h3>'+escape(p.title)+'</h3><p>'+escape(p.context)+'</p><dl><dt>THE APPROACH</dt><dd>'+escape(p.approach)+'</dd><dt>THE DELIVERABLE</dt><dd>'+escape(p.outcome)+'</dd></dl>'+tags(p.tags)+'<div class="project-footer"><small>'+escape(p.credit)+'</small>'+externalLink('View Presentation',p.presentation)+'</div><button class="flip-control" type="button" data-flip-project aria-label="Meet the '+escape(p.title)+' project team">'+icon('linkedin')+' Meet the team '+icon('arrow')+'</button></div></div>'+projectTeam(p)+'</div></article>').join('');
  function certificateImage(c) { return '<button class="certificate-image" type="button" data-certificate="'+c.id+'" aria-label="Inspect '+escape(c.title)+' certificate"><img src="'+c.image+'" alt="'+escape(c.title)+' certificate awarded to Amr Tamer" width="'+c.width+'" height="'+c.height+'" loading="lazy" decoding="async"><span class="preview-badge">'+icon('expand')+' Inspect certificate</span></button>'; }
  function certificateCopy(c) { return '<div class="certificate-copy"><span class="eyebrow">LEARNING INTO PRACTICE</span><h4>'+escape(c.title)+'</h4><p>'+escape(c.description)+'</p>'+tags(c.tags)+'</div>'; }
  $('#certificateTrack').innerHTML=data.certificates.slice(0,2).map((c,i)=>'<article class="certificate-slide'+(i?'':' is-active')+'" role="group" aria-roledescription="slide" aria-label="'+(i+1)+' of 2: '+escape(c.title)+'"'+(i?' inert aria-hidden="true"':' aria-hidden="false"')+'>'+certificateImage(c)+certificateCopy(c)+'</article>').join('');
  $('#learningCards').innerHTML=data.certificates.slice(2).map((c,i)=>'<section class="learning-group" aria-labelledby="'+c.id+'Heading"><div class="journey-label reveal"><span>0'+(i+2)+'</span><div><h3 id="'+c.id+'Heading">'+escape(c.issuer)+'</h3><p>'+escape(c.subtitle)+'</p></div></div><article class="learning-card surface interactive-card reveal">'+certificateImage(c)+certificateCopy(c)+'</article></section>').join('');
  mountIcons();
  $('#year').textContent=new Date().getFullYear();

  const storage = {
    get(key) { try {return localStorage.getItem('amr-'+key);} catch {return null;} },
    set(key,value) { try {localStorage.setItem('amr-'+key,value);} catch {} }
  };
  const systemTheme=matchMedia('(prefers-color-scheme: dark)');
  const listenMedia=(query,handler)=>{if(query.addEventListener)query.addEventListener('change',handler);else if(query.addListener)query.addListener(handler);};
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
  listenMedia(systemTheme,e=>{if(!storage.get('theme'))setTheme(e.matches?'dark':'light');});

  // Keep interaction cues active without a separate sound control.
  const sounds=new Map();
  const soundVolumes={cursor:.09,select:.18,select2:.18,left:.18,right:.18,front:.08,back:.08};
  Object.keys(soundVolumes).forEach(name=>{const a=new Audio('sounds/'+name+'.mp3');a.preload='none';sounds.set(name,a);});
  function playSound(name) {
    const audio=sounds.get(name);if(!audio)return;
    audio.volume=soundVolumes[name];audio.currentTime=0;
    const promise=audio.play();if(promise)promise.catch(()=>{});
  }
  function muteSounds(){sounds.forEach(a=>{a.pause();a.currentTime=0;});}
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
    if(control.matches('#themeToggle,#menuToggle,#certPrev,#certNext,[data-slide],[data-certificate],#closeCertificate,[data-flip-project]'))return;
    playSound('select');
  });
  function flipProject(card) {
    const flipped=card.classList.toggle('is-flipped');
    const front=card.querySelector('.project-flip-front'),back=card.querySelector('.project-flip-back');
    front.inert=flipped;back.inert=!flipped;
    front.setAttribute('aria-hidden',String(flipped));back.setAttribute('aria-hidden',String(!flipped));
    card.setAttribute('aria-label',flipped?'Team behind '+card.querySelector('.project-content h3').textContent+'. Click to return to project details.':card.querySelector('.project-content h3').textContent+' project card. Click to meet the team.');
    playSound(flipped?'left':'right');
    if(matchMedia('(max-width:620px)').matches)card.scrollIntoView({behavior:'smooth',block:'start'});
  }
  $('#projectsGrid').addEventListener('click',e=>{
    const card=e.target.closest('.project-card');
    if(!card||e.target.closest('a'))return;
    flipProject(card);
  });
  $('#projectsGrid').addEventListener('keydown',e=>{
    const card=e.target.closest('.project-card');
    if(!card||e.target!==card||!['Enter',' '].includes(e.key))return;
    e.preventDefault();flipProject(card);
  });
  const projectsGrid=$('#projectsGrid');
  if('IntersectionObserver' in window){
    const hintObserver=new IntersectionObserver(entries=>{
      if(!entries.some(entry=>entry.isIntersecting))return;
      projectsGrid.classList.add('show-flip-hint');
      setTimeout(()=>projectsGrid.classList.remove('show-flip-hint'),5000);
      hintObserver.disconnect();
    },{threshold:.1});
    hintObserver.observe(projectsGrid);
  }

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
  listenMedia(matchMedia('(min-width:851px)'),e=>{if(e.matches)closeMenu();});

  // Both slides share the same intrinsic height, so navigation never jumps.
  const track=$('#certificateTrack'), slides=$$('.certificate-slide');
  let activeSlide=0;
  function showSlide(index) {
    const next=(index+slides.length)%slides.length;if(next===activeSlide)return;
    playSound(next>activeSlide?'right':'left');playSound(next>activeSlide?'front':'back');
    activeSlide=next;track.style.transform='translate3d('+(-next*100)+'%,0,0)';
    slides.forEach((slide,i)=>{slide.inert=i!==next;slide.setAttribute('aria-hidden',String(i!==next));slide.classList.toggle('is-active',i===next);});
    $$('[data-slide]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.slide)===next)));
    $('#slideAnnouncement').textContent='Certificate '+(next+1)+' of 2: '+data.certificates[next].title;
  }
  $('#certPrev').addEventListener('click',()=>showSlide(activeSlide-1));$('#certNext').addEventListener('click',()=>showSlide(activeSlide+1));
  $$('[data-slide]').forEach(b=>b.addEventListener('click',()=>showSlide(Number(b.dataset.slide))));
  $('.certificate-carousel').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showSlide(activeSlide+(e.key==='ArrowRight'?1:-1));}});
  let touchX=0,touchY=0,swipedAt=-1000;
  $('.carousel-viewport').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;touchY=e.changedTouches[0].clientY;},{passive:true});
  $('.carousel-viewport').addEventListener('touchend',e=>{const x=e.changedTouches[0].clientX-touchX,y=e.changedTouches[0].clientY-touchY;if(Math.abs(x)>45&&Math.abs(x)>Math.abs(y)*1.3){swipedAt=performance.now();showSlide(activeSlide+(x<0?1:-1));}},{passive:true});

  // Only the certificate images explicitly approved by the owner are displayed publicly.
  const certificateDialog=$('#certificateDialog');
  let certificateTrigger=null;
  document.addEventListener('click',e=>{
    const trigger=e.target.closest('[data-certificate]');
    if(!trigger||performance.now()-swipedAt<400)return;
    const certificate=data.certificates.find(c=>c.id===trigger.dataset.certificate);
    if(!certificate)return;
    $('#certificateTitle').textContent=certificate.title;
    $('#certificateFullImage').src=certificate.image;
    $('#certificateFullImage').alt=certificate.title+' — awarded to Amr Tamer';
    certificateTrigger=trigger;
    certificateDialog.showModal();document.body.classList.add('viewer-open');
    $('#closeCertificate').focus();playSound('select2');
  });
  $('#closeCertificate').addEventListener('click',()=>certificateDialog.close());
  certificateDialog.addEventListener('click',e=>{
    if(e.target!==certificateDialog)return;
    const bounds=certificateDialog.getBoundingClientRect();
    if(e.clientX<bounds.left||e.clientX>bounds.right||e.clientY<bounds.top||e.clientY>bounds.bottom)certificateDialog.close();
  });
  certificateDialog.addEventListener('close',()=>{
    document.body.classList.remove('viewer-open');
    certificateTrigger?.focus({preventScroll:true});playSound('select');
  });

  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  // Independent translate animation keeps the idle drift separate from hover tilt.
  const idleCards=$$('.surface,.portrait-note');
  idleCards.forEach((card,i)=>{card.classList.add('idle-card');card.style.setProperty('--idle-delay',(-i*1.4)+'s');});
  if('IntersectionObserver' in window){
    const idleObserver=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('motion-in-view',e.isIntersecting)),{rootMargin:'40px'});
    idleCards.forEach(card=>idleObserver.observe(card));
  }else idleCards.forEach(card=>card.classList.add('motion-in-view'));
  function syncMotionVisibility(){document.documentElement.classList.toggle('motion-paused',document.hidden);}
  document.addEventListener('visibilitychange',syncMotionVisibility);syncMotionVisibility();
  if('IntersectionObserver' in window){
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
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    $$('.interactive-card').forEach(card=>{
      let frame=0;
      card.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{const b=card.getBoundingClientRect(),x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;card.style.setProperty('--rx',((.5-y)*3).toFixed(2)+'deg');card.style.setProperty('--ry',((x-.5)*3).toFixed(2)+'deg');card.style.setProperty('--mx',(x*100)+'%');card.style.setProperty('--my',(y*100)+'%');frame=0;});});
      card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);frame=0;card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');});
    });
  }
})();
