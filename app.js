// The originals remain on Rays Fotografie's existing image CDN during the
// handover. They are also archived in assets/img for a future host migration.
const A = name => `https://static.wixstatic.com/media/${name}/v1/fit/w_2000,h_2000,q_85/${name}`;
const galleries = {
  reizen: {
    title: 'Reizen', cover: 'c23d13_d9da1a2fe6a143f0976b9b4ea1678bbe~mv2_d_5408_3600_s_4_2.jpg',
    titleEn: 'Travel',
    captions: [
      ['Timor-Leste','Timor-Leste'],['Indonesië','Indonesia'],['Manchester/Liverpool','Manchester/Liverpool'],
      ['Londen','London'],['Tanzania','Tanzania'],['Porto/Lissabon','Porto/Lisbon'],
      ['Oostenrijk','Austria'],['Benin','Benin'],['Litouwen','Lithuania']
    ],
    photos: ['c23d13_27f7c4d833194cd0962180476507e69f~mv2_d_5408_3600_s_4_2.jpg','c23d13_bd50aa17c9a34d38ad5e559ce7155b04~mv2_d_3600_5408_s_4_2.jpg','c23d13_639e45e685964f6db5ed0a892fde740c~mv2_d_5504_8256_s_4_2.jpg','c23d13_a4b97f363f6d415fb1c507cbc71239aa~mv2_d_5504_8256_s_4_2.jpg','c23d13_8f5c7691e14f4f4aa43bcd94dcf8d451~mv2.jpg','c23d13_268d05fb3c554215b26414122c795410~mv2.jpg','c23d13_f1c4f39153954df989e7b21ec5899a48~mv2.jpg','c23d13_18c398ca99d645e799bd578d4fbdd6dc~mv2.jpg','c23d13_16dd2a172111457f82a54f684c41d429~mv2.jpg']
  },
  dans: {
    title: 'Dans', cover: 'c23d13_d9da1a2fe6a143f0976b9b4ea1678bbe~mv2_d_5408_3600_s_4_2.jpg',
    titleEn: 'Dance',
    photos: ['c23d13_d9da1a2fe6a143f0976b9b4ea1678bbe~mv2_d_5408_3600_s_4_2.jpg','c23d13_000b8ca3944d413fbafe15cf940e21a4~mv2_d_5504_8256_s_4_2.jpg','c23d13_075fe2f701e44534a747c958a2520cfc~mv2_d_5504_8256_s_4_2.jpg','c23d13_191f803476114e4697465a2185ff93dd~mv2_d_5120_7680_s_4_2.jpg','c23d13_1f618faa4930417691731d5c1721bd21~mv2_d_8256_5504_s_4_2.jpg','c23d13_20ee1c6cc6ab4f3b877297b54d04e2b0~mv2_d_5809_3872_s_4_2.jpg','c23d13_3792d5e70b0e42099f20c5b03ecfb691~mv2_d_5504_8256_s_4_2.jpg','c23d13_450bfd8d78d6421bb6619a65cbcff722~mv2_d_5008_3338_s_4_2.jpg','c23d13_454febb6e2ba4040b3b781381b9b0770~mv2_d_3019_1999_s_2.jpg','c23d13_602eaf91d67f4a319005560e56feb848~mv2_d_8256_5504_s_4_2.jpg','c23d13_6460a81cf26d415dbe49c03b8e11927d~mv2_d_5409_8114_s_4_2.jpg','c23d13_70f70badac994b6394e87b2259badc18~mv2_d_8256_5504_s_4_2.jpg','c23d13_845d142318d24e41b536b27324c304bb~mv2_d_4381_2902_s_4_2.jpg','c23d13_86bf12ccb5c844029b9341171ce0dc38~mv2_d_8256_5504_s_4_2.jpg','c23d13_8f3c508674684ac0803b5d72fcf0cc7a~mv2_d_8256_5504_s_4_2.jpg','c23d13_8fef355d4dce4ef4b974789bb5b14170~mv2_d_5504_8256_s_4_2.jpg','c23d13_920f9fa911104bbea3ea8965bea359c9~mv2_d_8256_5504_s_4_2.jpg','c23d13_a2c44465ca334da68eca67fd0bf00baa~mv2_d_6771_4513_s_4_2.jpg','c23d13_a881ea58e4e84798b913a115dfde0258~mv2_d_6221_4147_s_4_2.jpg','c23d13_afa9cd00b9324a8dacdab34c0d8bc2e2~mv2_d_7139_4759_s_4_2.jpg','c23d13_b735e89f844347489b068b10282f5fe9~mv2_d_3468_5166_s_4_2.jpg','c23d13_b7a7cb1f07f94ed286d3c0c1a832d0b0~mv2_d_5504_8256_s_4_2.jpg','c23d13_c76191d184654859a7ec6f90e0ad284d~mv2_d_4126_6190_s_4_2.jpg','c23d13_f7b23247747a425d897c67f1d2554d98~mv2_d_5504_8256_s_4_2.jpg','c23d13_f97fd24c519345fbb688ee9cdd0ecf02~mv2_d_2515_5342_s_4_2.jpg']
  },
  portret: {
    title: 'Portret', cover: 'c23d13_569a23a13c624e5abdf3f36def6f1eab~mv2_d_3348_5029_s_4_2.jpeg',
    titleEn: 'Portrait',
    photos: ['c23d13_0652b8c4c65541fa92375fddf2f03857~mv2_d_5246_7869_s_4_2.jpg','c23d13_15d07762dd8d4997aa3a6cf34be05bbd~mv2.jpg','c23d13_1caa2be0358547c692d2667c60f94fcc~mv2.jpg','c23d13_2c3fe7853ecd4b5aad9e3b459b1ffc34~mv2_d_3600_5408_s_4_2.jpeg','c23d13_3cbdcd9f50c2409197108df2991489f5~mv2.jpg','c23d13_569a23a13c624e5abdf3f36def6f1eab~mv2_d_3348_5029_s_4_2.jpeg','c23d13_689d735dae07451f8f78cb25cb43394d~mv2_d_4000_6000_s_4_2.jpg','c23d13_879ee3a3fb7c404c932fff8aadda055c~mv2_d_1847_2774_s_2.jpeg','c23d13_9205123bf7354048b65d55f636835ed1~mv2_d_4000_6000_s_4_2.jpg','c23d13_ab729ebe96934e02b398749d5bf30df5~mv2_d_3284_4927_s_4_2.jpg','c23d13_bdf4666a75ab4f8f85a00acaa756f6a2~mv2_d_1873_2813_s_2.jpeg','c23d13_f47f02e3f7684b8c858aaf66d266c0d5~mv2_d_3279_4925_s_4_2.jpeg']
  },
  evenementen: {
    title: 'Evenementen', cover: 'c23d13_c9ec405078e3407dbd8f43aab8d79d3f~mv2_d_8256_5504_s_4_2.jpg',
    titleEn: 'Events',
    photos: ['c23d13_414060d94dc74e66850c9258f6908450~mv2_d_3376_6000_s_4_2.jpg','c23d13_46dab1e572c64a7eaf2646f869ad8597~mv2_d_3523_5284_s_4_2.jpg','c23d13_63cae0930ba647af828dcffd1042295b~mv2_d_8256_5504_s_4_2.jpg','c23d13_895abf2914154d089a5b36f1a8003f99~mv2_d_8256_5504_s_4_2.jpg','c23d13_bdf2000327cc4e58b3a3d436b0bf7787~mv2_d_5504_8256_s_4_2.jpg','c23d13_be090abf074d4f68a581d6785aa36e8b~mv2_d_8256_5504_s_4_2.jpg','c23d13_c94f68f798014994acb35c9e75c7e01b~mv2_d_8256_5504_s_4_2.jpg','c23d13_c9ec405078e3407dbd8f43aab8d79d3f~mv2_d_8256_5504_s_4_2.jpg','c23d13_da767fb78eef4ea1a8642566850f4e0e~mv2_d_8256_5504_s_4_2.jpg','c23d13_ea2ac5497ead415b8e5890d0499cf861~mv2_d_8256_5504_s_4_2.jpg','c23d13_ea4af479ee674f84933c6a2a89cde168~mv2_d_8256_5504_s_4_2.jpg','c23d13_f3449f802d14463cbf8e54386383c2ed~mv2_d_8256_5504_s_4_2.jpg']
  }
};

const translations = {
  nl: {navAbout:'Over',heroEyebrow:'Fotografie door Rayline Spoorenberg',heroTitle:'Beelden met<br>een verhaal.',viewPortfolio:'Bekijk portfolio',welcome:'Welkom',aboutTitle:'Wat leuk dat je<br>een kijkje neemt.',about1:'Mijn naam is <strong>Rayline Spoorenberg</strong>. Ik ben afgestudeerd aan de Fotovakschool, onderdeel van de Nederlandse Academie voor Beeldcreatie. Van kinds af aan heb ik een passie voor fotografie.',about2:'Mijn voorkeur gaat uit naar het fotograferen van dansers en evenementen. Daarnaast leg ik graag cultuur en portretten vast.',about3:'Staat er iets tussen wat je aanspreekt? Stuur gerust een bericht, dan kijken we samen naar de mogelijkheden voor een mooi, persoonlijk beeld.',contactUs:'Neem contact op',portfolioTitle:'Een selectie van<br>mijn werk.',portfolioIntro:'Kies een serie en bekijk de fotografie op groot formaat.',allSeries:'Alle series ×',contactTitle:'Een idee voor<br>een fotoshoot?',contactIntro:'Vertel iets over je plannen. Ik denk graag met je mee over de mogelijkheden.',name:'Naam',email:'E-mailadres',message:'Bericht',send:'Verstuur bericht',mailNote:'Je e-mailprogramma wordt geopend om het bericht veilig te versturen.',series:'serie'},
  en: {navAbout:'About',heroEyebrow:'Photography by Rayline Spoorenberg',heroTitle:'Images with<br>a story.',viewPortfolio:'View portfolio',welcome:'Welcome',aboutTitle:'Lovely to have you<br>take a look.',about1:'My name is <strong>Rayline Spoorenberg</strong>. I graduated from the Fotovakschool, part of the Dutch Academy for Image Creation. Photography has been my passion since childhood.',about2:'I especially enjoy photographing dancers and events. I also love capturing cultures and portraits.',about3:'See something that speaks to you? Send me a message and we can explore the possibilities for creating a beautiful, personal image together.',contactUs:'Get in touch',portfolioTitle:'A selection of<br>my work.',portfolioIntro:'Choose a series and view the photography at full size.',allSeries:'All series ×',contactTitle:'An idea for<br>a photoshoot?',contactIntro:'Tell me about your plans. I would be happy to think along with you.',name:'Name',email:'Email address',message:'Message',send:'Send message',mailNote:'Your email application will open so you can send the message securely.',series:'series'}
};
let currentLang = localStorage.getItem('rays-language') || 'nl';

const heroPhotos = ['c23d13_7bd8a6d4ecf04fbe9bb548ee42678787~mv2_d_6000_4000_s_4_2.jpg','c23d13_110f41fc5a1a47cfbc693ca12030cf11~mv2.jpg','c23d13_e14a6457ca194948b82e9abe953588dc~mv2.jpg'];
const hero = document.querySelector('.hero-slides');
hero.innerHTML = heroPhotos.map((p,i)=>`<div class="hero-slide${i===0?' active':''}" style="background-image:url('${A(p)}')"></div>`).join('');
document.querySelector('#slide-total').textContent = String(heroPhotos.length).padStart(2,'0');
let slide = 0;
setInterval(()=>{const slides=[...document.querySelectorAll('.hero-slide')];slides[slide].classList.remove('active');slide=(slide+1)%slides.length;slides[slide].classList.add('active');document.querySelector('#slide-current').textContent=String(slide+1).padStart(2,'0')},5500);

const categoryGrid = document.querySelector('#category-grid');
const galleryView=document.querySelector('#gallery'), photoGrid=document.querySelector('#photo-grid'), lightbox=document.querySelector('#lightbox');
let activePhotos=[], activeIndex=0;
let activeGalleryKey='';
function translatedTitle(g){return currentLang==='en'?(g.titleEn||g.title):g.title}
function renderCategories(){categoryGrid.innerHTML=Object.entries(galleries).map(([key,g],i)=>`<button class="category-card" data-gallery="${key}"><img src="${A(g.cover)}" alt="${translatedTitle(g)}" loading="lazy"><div><span>0${i+1} — ${translations[currentLang].series}</span><h3>${translatedTitle(g)}</h3></div></button>`).join('')}
function showGallery(key,scroll=true){const g=galleries[key];activeGalleryKey=key;activePhotos=g.photos;document.querySelector('#gallery-title').textContent=translatedTitle(g);photoGrid.innerHTML=g.photos.map((p,i)=>{const caption=g.captions?.[i]?.[currentLang==='en'?1:0];return `<div class="gallery-photo"><button data-index="${i}" aria-label="Open foto ${i+1}"><img src="${A(p)}" alt="${caption||translatedTitle(g)}" loading="lazy"></button>${caption?`<span class="gallery-caption">${caption}</span>`:''}</div>`}).join('');galleryView.hidden=false;if(scroll)galleryView.scrollIntoView({behavior:'smooth'});history.replaceState(null,'',`#${key}`)}
function closeGallery(){galleryView.hidden=true;document.querySelector('#portfolio').scrollIntoView({behavior:'smooth'});history.replaceState(null,'','#portfolio')}
function openLightbox(index){activeIndex=index;updateLightbox();lightbox.showModal();document.body.style.overflow='hidden'}
function updateLightbox(){lightbox.querySelector('img').src=A(activePhotos[activeIndex]);lightbox.querySelector('img').alt=`Foto ${activeIndex+1}`;lightbox.querySelector('.lightbox-count').textContent=`${activeIndex+1} / ${activePhotos.length}`}
function moveLightbox(direction){activeIndex=(activeIndex+direction+activePhotos.length)%activePhotos.length;updateLightbox()}
function setLanguage(lang){currentLang=lang;localStorage.setItem('rays-language',lang);document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value!==undefined)el.innerHTML=value});document.querySelectorAll('[data-lang]').forEach(button=>button.classList.toggle('active',button.dataset.lang===lang));renderCategories();if(activeGalleryKey&&!galleryView.hidden)showGallery(activeGalleryKey,false)}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
setLanguage(currentLang);
categoryGrid.addEventListener('click',e=>{const card=e.target.closest('[data-gallery]');if(card)showGallery(card.dataset.gallery)});
photoGrid.addEventListener('click',e=>{const button=e.target.closest('[data-index]');if(button)openLightbox(Number(button.dataset.index))});
document.querySelector('.close-gallery').addEventListener('click',closeGallery);
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click',()=>moveLightbox(-1));document.querySelector('.lightbox-next').addEventListener('click',()=>moveLightbox(1));
lightbox.addEventListener('close',()=>document.body.style.overflow='');lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
document.addEventListener('keydown',e=>{if(!lightbox.open)return;if(e.key==='ArrowLeft')moveLightbox(-1);if(e.key==='ArrowRight')moveLightbox(1)});
const menu=document.querySelector('.main-nav'),menuButton=document.querySelector('.menu-button');menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});menu.addEventListener('click',()=>menu.classList.remove('open'));
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget),subject=encodeURIComponent(`Fotografie aanvraag van ${d.get('name')}`),body=encodeURIComponent(`Naam: ${d.get('name')}\nE-mail: ${d.get('email')}\n\n${d.get('message')}`);window.location.href=`mailto:raylinespoorenberg@gmail.com?subject=${subject}&body=${body}`});
document.querySelector('#year').textContent=new Date().getFullYear();
const initial=location.hash.slice(1);if(galleries[initial])setTimeout(()=>showGallery(initial),250);
