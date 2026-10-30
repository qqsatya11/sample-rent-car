var IMGS={"innova":"assets/innova.webp","zenix":"assets/zenix.webp","hiace":"assets/hiace.webp","premio":"assets/premio.webp","alphard":"assets/alphard.webp"};
var CARS=[
  {id:'innova',name:'Innova Reborn',cat:'MPV',price:500000,seat:7,hot:true},
  {id:'zenix',name:'Innova Zenix',cat:'MPV',price:600000,seat:7,hot:true},
  {id:'hiace',name:'Toyota HiAce',cat:'Van',price:1000000,seat:14,hot:false},
  {id:'premio',name:'HiAce Premio',cat:'Van',price:1200000,seat:15,hot:false},
  {id:'alphard',name:'Toyota Alphard',cat:'Premium',price:2500000,seat:6,hot:true}
];
var CATS=['Semua','MPV','Van','Premium'];
var HERO_SOPIR='assets/hero-sopir.jpg';var HERO_LEPAS='assets/hero-lepas.jpg';
var CATEGORIES=[
  {cat:'MPV',img:'zenix',desc:'Keluarga & harian'},
  {cat:'Van',img:'hiace',desc:'Rombongan & wisata'},
  {cat:'Premium',img:'alphard',desc:'VIP & acara spesial'}
];

function img(id){return IMGS[id]||'';}
function rupiah(n){return 'Rp'+n.toLocaleString('id-ID');}
function chk(t){return '<span class="it"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'+t+'</span>';}
function ex(t){return '<span class="it"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'+t+'</span>';}

function carCard(c){
  return '<article class="car">'+
    '<div class="car-img">'+(c.hot?'<span class="promo">PROMO</span>':'')+'<span class="car-badge">'+c.cat+'</span>'+
      '<img src="'+img(c.id)+'" alt="'+c.name+'" loading="lazy"></div>'+
    '<div class="car-body">'+
      '<div class="car-name">'+c.name+'</div>'+
      '<span class="cap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M21 20v-2a4 4 0 0 0-3-3.9"/></svg>'+c.seat+' Orang</span>'+
      '<div><div class="ie-lab">INCLUDE</div><div class="ie-items inc">'+chk('Mobil')+chk('Sopir')+chk('BBM')+'</div></div>'+
      '<div><div class="ie-lab">EXCLUDE</div><div class="ie-items exc">'+ex('Parkir')+ex('Tiket Wisata')+ex('Makan Sopir')+ex('Tip Sopir')+'</div></div>'+
      '<div class="car-foot"><div class="car-price"><div class="fd">FullDay</div><div class="amt tnum">'+rupiah(c.price)+'</div></div>'+
      '<button class="btn btn-primary" onclick="bookCar(\''+c.id+'\')">Pesan</button></div>'+
    '</div></article>';
}
var curFilter='Semua';
function renderCars(){
  var list=curFilter==='Semua'?CARS:CARS.filter(function(c){return c.cat===curFilter;});
  var html=list.map(carCard).join('');
  document.getElementById('allCars').innerHTML=html;document.getElementById('allCars2').innerHTML=html;
}
function renderFilters(){
  var h=CATS.map(function(c){return '<button class="chip'+(c===curFilter?' on':'')+'" onclick="setFilter(\''+c+'\')">'+c+'</button>';}).join('');
  document.getElementById('filters').innerHTML=h;document.getElementById('filters2').innerHTML=h;
}
function setFilter(c){curFilter=c;renderFilters();renderCars();}
function filterTo(c){curFilter=c;renderFilters();renderCars();go('mobil');}
function renderCatCards(){document.getElementById('catCards').innerHTML=CATEGORIES.map(function(t){
  return '<div class="catc" onclick="filterTo(\''+t.cat+'\')"><div class="ph"><img src="'+img(t.img)+'" alt="'+t.cat+'" loading="lazy"></div>'+
    '<div class="bd"><div><div class="cn">'+t.cat+'</div><div class="cc">'+t.desc+'</div></div><span class="cnt">'+CARS.filter(function(c){return c.cat===t.cat;}).length+' unit</span></div></div>';
}).join('');}

function go(view){
  document.querySelectorAll('.view').forEach(function(v){v.classList.remove('active');});
  document.getElementById('view-'+view).classList.add('active');
  document.querySelectorAll('[data-nav]').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-nav')===view);});
  document.getElementById('mobileMenu').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});try{location.hash=view;}catch(e){}
}
function toggleTheme(){var root=document.documentElement,cur=root.getAttribute('data-theme');if(!cur)cur=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';var next=cur==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('ct-theme',next);}catch(e){}setThemeIcon(next);}
function setThemeIcon(t){var el=document.getElementById('themeIcon');if(!el)return;if(t==='dark')el.innerHTML='<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';else el.innerHTML='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';}
(function(){try{var t=localStorage.getItem('ct-theme');if(t)document.documentElement.setAttribute('data-theme',t);setThemeIcon(t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));}catch(e){}})();

/* booking */
var booking={car:null,start:'',end:'',loc:'',driver:'self',note:'',name:'',phone:'',email:'',pax:'',city:''};
var step=1;var ADMIN_WA='6281327440711';
function renderChoose(){document.getElementById('chooseCars').innerHTML=CARS.map(function(c){
  return '<div class="pk'+(booking.car===c.id?' sel':'')+'" onclick="pickCar(\''+c.id+'\')"><div class="ph"><img src="'+img(c.id)+'" alt="'+c.name+'"></div>'+
    '<div><div class="nm">'+c.name+'</div><div class="mt">'+c.cat+' · '+c.seat+' kursi</div><div class="pr">'+rupiah(c.price)+' / hari</div></div></div>';}).join('');}
function pickCar(id){booking.car=id;renderChoose();}
function bookCar(id){booking.car=id;setDriver(booking.driver||'self');go('booking');goStep(1);renderChoose();}
function setDriver(d){booking.driver=d;document.querySelectorAll('#driverOpts .opt').forEach(function(o){o.classList.toggle('sel',o.getAttribute('data-driver')===d);});}
function diffDays(){if(!booking.start||!booking.end)return 1;var a=new Date(booking.start),b=new Date(booking.end),d=Math.ceil((b-a)/864e5);return d>0?d:1;}
function locFee(){var l=booking.loc||'';if(l.indexOf('Bandara')>-1)return 75000;if(l.indexOf('Antar')>-1||l.indexOf('Stasiun')>-1)return 50000;return 0;}
function calcTotal(){var car=CARS.find(function(c){return c.id===booking.car;});if(!car)return{days:0,sub:0,driver:0,loc:0,total:0,car:null};var days=diffDays(),sub=car.price*days,drv=booking.driver==='driver'?150000*days:0,loc=locFee();return{days:days,sub:sub,driver:drv,loc:loc,total:sub+drv+loc,car:car};}
function goStep(n){step=n;document.querySelectorAll('.pane').forEach(function(p){p.classList.toggle('on',+p.getAttribute('data-step')===n);});
  document.querySelectorAll('#stepsBar .sb').forEach(function(s,i){s.classList.toggle('done',i<n-1);s.classList.toggle('cur',i===n-1);});
  if(n===2){var bs=document.getElementById('bStart'),be=document.getElementById('bEnd');if(booking.start&&!bs.value)bs.value=booking.start;if(booking.end&&!be.value)be.value=booking.end;updateDurNote();}
  if(n===5)renderSummary();var b=document.querySelector('.book');if(b)b.scrollIntoView({behavior:'smooth',block:'start'});}
function updateDurNote(){document.getElementById('durNote').textContent=(booking.start&&booking.end)?('Durasi sewa: '+diffDays()+' hari.'):'';}
function validStep(){
  if(step===1){if(!booking.car){toast('Pilih dulu satu mobil.');return false;}}
  if(step===2){var s=document.getElementById('bStart'),e=document.getElementById('bEnd');booking.start=s.value;booking.end=e.value;booking.loc=document.getElementById('bLoc').value;
    s.parentNode.classList.toggle('err',!s.value);e.parentNode.classList.toggle('err',!e.value);
    if(!s.value||!e.value){toast('Lengkapi tanggal ambil & kembali.');return false;}
    if(new Date(e.value)<=new Date(s.value)){e.parentNode.classList.add('err');toast('Tanggal kembali harus setelah tanggal ambil.');return false;}}
  if(step===3){booking.note=document.getElementById('bNote').value;}
  if(step===4){var n=document.getElementById('cName'),p=document.getElementById('cPhone');booking.name=n.value.trim();booking.phone=p.value.trim();booking.email=document.getElementById('cEmail').value.trim();booking.pax=document.getElementById('cPax').value;
    n.parentNode.classList.toggle('err',!booking.name);var okp=booking.phone.replace(/[^0-9]/g,'').length>=9;p.parentNode.classList.toggle('err',!okp);
    if(!booking.name||!okp){toast('Lengkapi nama & nomor WhatsApp yang valid.');return false;}}
  return true;}
function nextStep(){if(!validStep())return;if(step<5)goStep(step+1);}
function prevStep(){if(step>1)goStep(step-1);}
function renderSummary(){var t=calcTotal();if(!t.car)return;var c=t.car;
  var fmt=function(v){try{return new Date(v).toLocaleString('id-ID',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});}catch(e){return v;}};
  var h='<div class="scar"><div class="ph"><img src="'+img(c.id)+'" alt="'+c.name+'"></div><div><div style="font-weight:700;font-size:17px">'+c.name+'</div><div style="color:var(--tx-dim);font-size:13px">'+c.cat+' · '+rupiah(c.price)+' / hari</div></div></div>';
  if(booking.city)h+=line('Kota',booking.city);h+=line('Pengambilan',fmt(booking.start));h+=line('Pengembalian',fmt(booking.end));h+=line('Lokasi',booking.loc);h+=line('Layanan',booking.driver==='driver'?'Dengan sopir':'Lepas kunci (setir sendiri)');h+=line('Durasi',t.days+' hari');h+=line('Penyewa',booking.name+' · '+booking.phone);h+=line('Penumpang',booking.pax);if(booking.note)h+=line('Catatan',booking.note);
  h+='<div style="height:8px"></div>'+line('Biaya sewa ('+t.days+' hari)',rupiah(t.sub));if(t.driver)h+=line('Sopir ('+t.days+' hari)',rupiah(t.driver));if(t.loc)h+=line('Antar / lokasi',rupiah(t.loc));
  h+='<div class="stot"><span class="k">Total estimasi</span><span class="v tnum">'+rupiah(t.total)+'</span></div>';
  document.getElementById('summary').innerHTML=h;}
function line(k,v){return '<div class="sline"><span class="k">'+k+'</span><span class="v">'+(v||'-')+'</span></div>';}
function bookingCode(){return 'CT-'+Date.now().toString(36).toUpperCase().slice(-6);}
function buildMsg(t,c,code){return 'Halo Cabin Trans, saya mau konfirmasi booking:%0A%0A*Kode:* '+code+'%0A*Mobil:* '+c.name+' ('+c.cat+')%0A*Ambil:* '+booking.start+'%0A*Kembali:* '+booking.end+'%0A*Lokasi:* '+booking.loc+'%0A*Layanan:* '+(booking.driver==='driver'?'Dengan sopir':'Lepas kunci')+'%0A*Durasi:* '+t.days+' hari%0A'+(booking.note?('*Catatan:* '+booking.note+'%0A'):'')+'%0A*Nama:* '+booking.name+'%0A*WA:* '+booking.phone+'%0A'+(booking.email?('*Email:* '+booking.email+'%0A'):'')+'*Penumpang:* '+booking.pax+'%0A%0A*Total estimasi:* '+rupiah(t.total);}
function confirmBooking(){var t=calcTotal(),c=t.car,code=bookingCode();document.getElementById('waLink').href='https://wa.me/'+ADMIN_WA+'?text='+buildMsg(t,c,code);document.getElementById('sucName').textContent=booking.name;document.getElementById('sucCode').textContent=code;document.getElementById('summaryWrap').hidden=true;document.getElementById('successBox').hidden=false;document.querySelector('.book').scrollIntoView({behavior:'smooth',block:'start'});try{window.open(document.getElementById('waLink').href,'_blank');}catch(e){}}
function resetBooking(){booking={car:null,start:'',end:'',loc:'',driver:'self',note:'',name:'',phone:'',email:'',pax:'',city:''};['bStart','bEnd','cName','cPhone','cEmail','bNote'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});document.getElementById('successBox').hidden=true;document.getElementById('summaryWrap').hidden=false;setDriver('self');renderChoose();goStep(1);}
function waGeneral(){window.open('https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent('Halo Cabin Trans, saya mau tanya soal sewa mobil.'),'_blank');}

function copyText(txt,btn){var done=function(){if(btn){var o=btn.textContent;btn.textContent='Tersalin';setTimeout(function(){btn.textContent=o;},1400);}else toast('Disalin: '+txt);};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done).catch(function(){fbcopy(txt,done);});else fbcopy(txt,done);}
function fbcopy(txt,done){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
var toastEl;function toast(msg){if(!toastEl){toastEl=document.createElement('div');toastEl.style.cssText='position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--blk);color:var(--on-blk);padding:13px 22px;border-radius:10px;font-weight:500;font-size:14px;z-index:999;box-shadow:var(--shadow);max-width:90%;text-align:center;transition:opacity .4s';document.body.appendChild(toastEl);}toastEl.textContent=msg;toastEl.style.opacity='1';clearTimeout(toastEl._t);toastEl._t=setTimeout(function(){toastEl.style.opacity='0';},2600);}

/* ===== RESERVATION WIDGET ===== */
var W={driver:'driver',sched:'scheduled',unit:'hari',pack:'1',startD:null,endD:null};
var PACKS={jam:{label:'Paket jam',opts:[['4','4 jam'],['6','6 jam'],['12','12 jam']]},
  hari:{label:'Durasi sewa',opts:[['1','1 hari'],['2','2 hari'],['3','3 hari'],['5','5 hari'],['7','7 hari'],['14','14 hari']]},
  bulan:{label:'Durasi sewa',opts:[['1','1 bulan'],['2','2 bulan'],['3','3 bulan'],['6','6 bulan'],['12','12 bulan']]}};
function pad2(n){return (n<10?'0':'')+n;}
function toLocal(d){return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+'T'+pad2(d.getHours())+':'+pad2(d.getMinutes());}
function humanDT(d){try{return d.toLocaleString('id-ID',{weekday:'short',day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}catch(e){return ''+d;}}
function setHero(d){var hEl=document.querySelector('.hero');if(!hEl)return;hEl.classList.add('has-photo');hEl.style.backgroundImage='url('+(d==='self'?HERO_LEPAS:HERO_SOPIR)+')';}
function bkDriver(d){W.driver=d;document.querySelectorAll('.bk-drv .bt').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-drv')===d);});setHero(d);}
function bkSched(s){W.sched=s;document.querySelectorAll('#segSched button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-sch')===s);});
  var now=s==='now',dt=document.getElementById('wDate'),tm=document.getElementById('wTime');
  if(now){var d=new Date();dt.value=d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());tm.value=pad2(d.getHours())+':'+pad2(d.getMinutes());}
  dt.disabled=now;tm.disabled=now;bkCompute();}
function bkUnit(u){W.unit=u;document.querySelectorAll('#segUnit button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-unit')===u);});bkRenderPack();}
function bkRenderPack(){var p=PACKS[W.unit];document.getElementById('wPackLabel').textContent=p.label;
  document.getElementById('wPack').innerHTML=p.opts.map(function(o){return '<option value="'+o[0]+'">'+o[1]+'</option>';}).join('');W.pack=p.opts[0][0];bkCompute();}
function bkPackChange(){W.pack=document.getElementById('wPack').value;bkCompute();}
function bkStart(){var d=document.getElementById('wDate').value,t=document.getElementById('wTime').value||'09:00';if(!d){var n=new Date();d=n.getFullYear()+'-'+pad2(n.getMonth()+1)+'-'+pad2(n.getDate());}return new Date(d+'T'+t);}
function bkEnd(s){var e=new Date(s.getTime()),n=parseInt(W.pack,10)||1;if(W.unit==='jam')e.setHours(e.getHours()+n);else if(W.unit==='hari')e.setDate(e.getDate()+n);else e.setMonth(e.getMonth()+n);return e;}
function bkCompute(){var s=bkStart(),e=bkEnd(s);W.startD=s;W.endD=e;document.getElementById('wEnd').innerHTML='Tanggal selesai: <b>'+humanDT(e)+'</b>';}
function bkSearch(){bkCompute();booking.driver=W.driver;booking.start=toLocal(W.startD);booking.end=toLocal(W.endD);booking.city=document.getElementById('wCity').value;go('mobil');toast('Armada tersedia di '+booking.city);}
function bkInit(){var n=new Date();document.getElementById('wDate').value=n.getFullYear()+'-'+pad2(n.getMonth()+1)+'-'+pad2(n.getDate());document.getElementById('wTime').value='09:00';bkRenderPack();}

/* init */
setHero(W.driver);
renderCatCards();renderFilters();renderCars();renderChoose();bkInit();
(function(){try{var h=(location.hash||'').replace('#','');if(['home','mobil','booking','tentang'].indexOf(h)>-1)go(h);}catch(e){}})();
