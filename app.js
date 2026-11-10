/* Cabin Trans · company profile + reservasi */
var ADMIN_WA = '6287783377646';
var DRIVER_FEE = 150000;

var CARS = [
  {id:'alphard', name:'Toyota Alphard', cat:'Premium', kelas:'Kelas Eksekutif', seat:'7', ciri:'Captain seat, kabin senyap', cocok:'Tamu VIP, direksi', price:2500000, img:'assets/alphard.webp'},
  {id:'zenix', name:'Toyota Innova Zenix', cat:'MPV', kelas:'Premium Keluarga', seat:'7', ciri:'Modern dan irit', cocok:'Keluarga, wisata kota', price:600000, img:'assets/zenix.webp'},
  {id:'premio', name:'Toyota Hiace Premio', cat:'Van', kelas:'Eksekutif & Grup', seat:'14-15', ciri:'Van premium, kabin luas dan tenang', cocok:'Rombongan, korporat, tur', price:1200000, img:'assets/premio.webp'},
  {id:'innova', name:'Toyota Innova Reborn', cat:'MPV', kelas:'Keluarga & Dinas', seat:'7', ciri:'Tangguh dan lega', cocok:'Keluarga, dinas, luar kota', price:500000, img:'assets/innova.webp'},
  {id:'hiace', name:'Toyota Hiace', cat:'Van', kelas:'Rombongan', seat:'14', ciri:'Kabin luas, bagasi lega', cocok:'Rombongan, wisata', price:1000000, img:'assets/hiace.webp'}
];
var CATS = ['Semua','Premium','MPV','Van'];

var SERVICES = [
  {id:'airport', no:'01', title:'Executive Airport Transfer', tag:'VVIP Arrival & Departure', img:'assets/svc-airport.jpg',
   desc:'Penjemputan dan pengantaran VIP di bandara, tepat waktu, lengkap dengan penanganan bagasi.',
   scope:['Penjemputan dengan name board','Armada Alphard atau Innova Zenix','Penanganan bagasi','Chauffeur berseragam'],
   benefit:'Pemantauan jadwal penerbangan dan refreshment di kabin. Tamu tiba dalam kondisi prima.'},
  {id:'citytour', no:'02', title:'Luxury City Tour', tag:'Personalized Itinerary', img:'assets/svc-citytour.jpg',
   desc:'Wisata kota dengan rute pribadi, chauffeur terlatih, dan kabin yang selalu steril.',
   scope:['Rute sesuai permintaan','Chauffeur terlatih','Sterilisasi kabin','Pendampingan concierge'],
   benefit:'Paket harian 12 atau 18 jam. Itinerary efisien, wisata kota nyaman tanpa repot.'},
  {id:'corporate', no:'03', title:'Corporate Executive Mobility', tag:'Daily & Project Rent', img:'assets/svc-corporate.jpg',
   desc:'Armada dedicated untuk mobilitas direksi dan tim, secara harian maupun per proyek.',
   scope:['Armada dedicated','Pengemudi terikat NDA','Unit cadangan siaga','Penagihan bulanan transparan'],
   benefit:'Dukungan siaga dan laporan perjalanan (trip log). Biaya terukur dan transparan.'}
];
var SVC_OPTIONS = SERVICES.map(function(s){return s.title;}).concat(['Sewa Harian']);

var I = {
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

function $(id){return document.getElementById(id);}
function rupiah(n){return 'Rp'+n.toLocaleString('id-ID');}
function carById(id){return CARS.filter(function(c){return c.id===id;})[0]||null;}
function opt(v,t,sel){return '<option value="'+v+'"'+(sel?' selected':'')+'>'+t+'</option>';}

/* ---------- render ---------- */
function renderServices(){
  $('svcGrid').innerHTML = SERVICES.map(function(s){
    return '<article class="svc">'+
      '<div class="svc-img"><img src="'+s.img+'" alt="'+s.title+'" loading="lazy"><span class="svc-no">'+s.no+'</span></div>'+
      '<div class="svc-body">'+
        '<span class="svc-tag">'+s.tag+'</span>'+
        '<h3>'+s.title+'</h3>'+
        '<p class="svc-desc">'+s.desc+'</p>'+
        '<ul class="svc-scope">'+s.scope.map(function(x){return '<li>'+I.check+x+'</li>';}).join('')+'</ul>'+
        '<p class="svc-benefit">'+s.benefit+'</p>'+
        '<button class="btn btn-out btn-sm" onclick="bookService(\''+s.title+'\')">Pesan layanan ini'+I.arrow+'</button>'+
      '</div></article>';
  }).join('');
}

var curFilter = 'Semua';
function carCard(c){
  return '<article class="car">'+
    '<div class="car-img"><span class="car-badge">'+c.kelas+'</span><img src="'+c.img+'" alt="'+c.name+'" loading="lazy"></div>'+
    '<div class="car-body">'+
      '<h3 class="car-name">'+c.name+'</h3>'+
      '<dl class="spec">'+
        '<div><dt>Kapasitas</dt><dd>'+c.seat+' penumpang</dd></div>'+
        '<div><dt>Ciri</dt><dd>'+c.ciri+'</dd></div>'+
        '<div><dt>Cocok untuk</dt><dd>'+c.cocok+'</dd></div>'+
      '</dl>'+
      '<div class="car-foot"><div class="car-price"><span>Mulai dari</span><b class="tnum">'+rupiah(c.price)+'</b><span>/ hari</span></div>'+
      '<button class="btn btn-primary btn-sm" onclick="bookCar(\''+c.id+'\')">Pesan</button></div>'+
    '</div></article>';
}
function renderCars(){
  var list = curFilter==='Semua' ? CARS : CARS.filter(function(c){return c.cat===curFilter;});
  $('cars').innerHTML = list.map(carCard).join('');
}
function renderFilters(){
  $('filters').innerHTML = CATS.map(function(c){
    var n = c==='Semua' ? CARS.length : CARS.filter(function(x){return x.cat===c;}).length;
    return '<button class="chip'+(c===curFilter?' on':'')+'" onclick="setFilter(\''+c+'\')">'+c+' <span>'+n+'</span></button>';
  }).join('');
}
function setFilter(c){curFilter=c;renderFilters();renderCars();}

function fillSelects(){
  $('qSvc').innerHTML = SVC_OPTIONS.map(function(s,i){return opt(s,s,i===0);}).join('');
  $('bSvc').innerHTML = SVC_OPTIONS.map(function(s){return opt(s,s,false);}).join('');
  $('qCar').innerHTML = opt('','Semua armada',true) + CARS.map(function(c){return opt(c.id,c.name+' ('+c.seat+' org)');}).join('');
}

/* ---------- navigasi ---------- */
var SECTIONS = ['beranda','tentang','layanan','armada','keunggulan','alur','kontak'];
function showView(v){
  document.querySelectorAll('.view').forEach(function(el){el.classList.toggle('active', el.id==='view-'+v);});
}
function nav(target){
  closeMenu();
  if(target==='reservasi'){
    showView('booking');
    window.scrollTo({top:0,behavior:'smooth'});
    setActive('');
    try{history.replaceState(null,'','#reservasi');}catch(e){}
    return false;
  }
  var wasHidden = !$('view-home').classList.contains('active');
  showView('home');
  var el = $(target);
  if(el){
    if(target==='beranda') window.scrollTo({top:0,behavior: wasHidden?'auto':'smooth'});
    else el.scrollIntoView({behavior: wasHidden?'auto':'smooth', block:'start'});
  }
  setActive(target);
  try{history.replaceState(null,'','#'+target);}catch(e){}
  return false;
}
function setActive(id){
  document.querySelectorAll('[data-nav]').forEach(function(a){a.classList.toggle('active', a.getAttribute('data-nav')===id);});
}
function toggleMenu(){var m=$('mobileMenu'),o=!m.classList.contains('open');m.classList.toggle('open',o);$('burger').setAttribute('aria-expanded',o);}
function closeMenu(){$('mobileMenu').classList.remove('open');$('burger').setAttribute('aria-expanded','false');}
function watchSections(){
  if(!('IntersectionObserver' in window))return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && $('view-home').classList.contains('active')){
        var id = e.target.id==='alur' ? 'keunggulan' : e.target.id;
        setActive(id);
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  SECTIONS.forEach(function(id){var el=$(id);if(el)io.observe(el);});
}

/* ---------- tema ---------- */
function toggleTheme(){var r=document.documentElement,cur=r.getAttribute('data-theme')||'light',next=cur==='dark'?'light':'dark';r.setAttribute('data-theme',next);try{localStorage.setItem('ct-theme',next);}catch(e){}setThemeIcon(next);}
function setThemeIcon(t){var el=$('themeIcon');if(!el)return;el.innerHTML = t==='dark' ? '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>' : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';}
(function(){var t=null;try{t=localStorage.getItem('ct-theme');}catch(e){}if(t)document.documentElement.setAttribute('data-theme',t);setThemeIcon(t||'light');})();

/* ---------- booking ---------- */
var booking, step=1;
function blank(){return {car:null,svc:SVC_OPTIONS[0],start:'',end:'',loc:'',driver:'driver',note:'',name:'',phone:'',email:'',pax:''};}
booking = blank();

function pad2(n){return (n<10?'0':'')+n;}
function toLocal(d){return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+'T'+pad2(d.getHours())+':'+pad2(d.getMinutes());}
function today(){var n=new Date();return n.getFullYear()+'-'+pad2(n.getMonth()+1)+'-'+pad2(n.getDate());}

function qbSubmit(ev){
  ev.preventDefault();
  var d=$('qDate').value||today(), t=$('qTime').value||'09:00', days=parseInt($('qDur').value,10)||1;
  var s=new Date(d+'T'+t), e=new Date(s.getTime()); e.setDate(e.getDate()+days);
  booking.svc=$('qSvc').value; booking.start=toLocal(s); booking.end=toLocal(e);
  booking.car=$('qCar').value||booking.car;
  $('bStart').value=booking.start; $('bEnd').value=booking.end; $('bSvc').value=booking.svc;
  nav('reservasi'); goStep(booking.car?2:1); renderChoose();
}
function bookCar(id){booking.car=id;nav('reservasi');goStep(1);renderChoose();}
function bookService(title){booking.svc=title;$('bSvc').value=title;nav('reservasi');goStep(1);renderChoose();}

function renderChoose(){
  $('chooseCars').innerHTML = CARS.map(function(c){
    return '<div class="pk'+(booking.car===c.id?' sel':'')+'" onclick="pickCar(\''+c.id+'\')" role="button" tabindex="0"><div class="ph"><img src="'+c.img+'" alt="'+c.name+'"></div>'+
      '<div><div class="nm">'+c.name+'</div><div class="mt">'+c.kelas+' · '+c.seat+' penumpang</div><div class="pr">'+rupiah(c.price)+' / hari</div></div></div>';
  }).join('');
}
function pickCar(id){booking.car=id;renderChoose();}
function setDriver(d){booking.driver=d;document.querySelectorAll('#driverOpts .opt').forEach(function(o){o.classList.toggle('sel',o.getAttribute('data-driver')===d);});}
function diffDays(){if(!booking.start||!booking.end)return 1;var d=Math.ceil((new Date(booking.end)-new Date(booking.start))/864e5);return d>0?d:1;}
function calcTotal(){var car=carById(booking.car);if(!car)return null;var days=diffDays(),sub=car.price*days,drv=booking.driver==='driver'?DRIVER_FEE*days:0;return {car:car,days:days,sub:sub,driver:drv,total:sub+drv};}

function goStep(n){
  step=n;
  document.querySelectorAll('.pane').forEach(function(p){p.classList.toggle('on',+p.getAttribute('data-step')===n);});
  document.querySelectorAll('#stepsBar .sb').forEach(function(s,i){s.classList.toggle('done',i<n-1);s.classList.toggle('cur',i===n-1);});
  if(n===2){if(booking.start&&!$('bStart').value)$('bStart').value=booking.start;if(booking.end&&!$('bEnd').value)$('bEnd').value=booking.end;updateDurNote();}
  if(n===3){$('bSvc').value=booking.svc;setDriver(booking.driver);}
  if(n===5)renderSummary();
}
function updateDurNote(){var s=$('bStart').value,e=$('bEnd').value;if(s&&e&&new Date(e)>new Date(s)){booking.start=s;booking.end=e;$('durNote').textContent='Durasi: '+diffDays()+' hari.';}else $('durNote').textContent='';}
function validStep(){
  if(step===1&&!booking.car){toast('Pilih dulu satu armada.');return false;}
  if(step===2){var s=$('bStart'),e=$('bEnd');booking.start=s.value;booking.end=e.value;booking.loc=$('bLoc').value;
    s.parentNode.classList.toggle('err',!s.value);e.parentNode.classList.toggle('err',!e.value);
    if(!s.value||!e.value){toast('Lengkapi tanggal jemput dan selesai.');return false;}
    if(new Date(e.value)<=new Date(s.value)){e.parentNode.classList.add('err');toast('Tanggal selesai harus setelah tanggal jemput.');return false;}}
  if(step===3){booking.svc=$('bSvc').value;booking.note=$('bNote').value.trim();}
  if(step===4){var n=$('cName'),p=$('cPhone');booking.name=n.value.trim();booking.phone=p.value.trim();booking.email=$('cEmail').value.trim();booking.pax=$('cPax').value;
    var okp=booking.phone.replace(/[^0-9]/g,'').length>=9;
    n.parentNode.classList.toggle('err',!booking.name);p.parentNode.classList.toggle('err',!okp);
    if(!booking.name||!okp){toast('Lengkapi nama dan nomor WhatsApp yang valid.');return false;}}
  return true;
}
function nextStep(){if(!validStep())return;if(step<5){goStep(step+1);scrollBook();}}
function prevStep(){if(step>1){goStep(step-1);scrollBook();}}
function scrollBook(){var b=document.querySelector('.steps-bar');if(b&&b.getBoundingClientRect().top<70)b.scrollIntoView({behavior:'smooth',block:'center'});}

function fmt(v){try{return new Date(v).toLocaleString('id-ID',{weekday:'short',day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});}catch(e){return v;}}
function line(k,v){return '<div class="sline"><span class="k">'+k+'</span><span class="v">'+(v||'-')+'</span></div>';}
function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function renderSummary(){
  var t=calcTotal();if(!t)return;var c=t.car;
  var h='<div class="scar"><div class="ph"><img src="'+c.img+'" alt="'+c.name+'"></div><div><div class="sn2">'+c.name+'</div><div class="sm2">'+c.kelas+' · '+rupiah(c.price)+' / hari</div></div></div>';
  h+=line('Layanan',esc(booking.svc))+line('Penggunaan',booking.driver==='driver'?'Dengan chauffeur':'Lepas kunci')+line('Jemput',fmt(booking.start))+line('Selesai',fmt(booking.end))+line('Titik jemput',esc(booking.loc))+line('Durasi',t.days+' hari')+line('Pemesan',esc(booking.name)+' · '+esc(booking.phone))+line('Jumlah tamu',esc(booking.pax));
  if(booking.note)h+=line('Catatan',esc(booking.note));
  h+='<div class="sgap"></div>'+line('Unit ('+t.days+' hari)',rupiah(t.sub));
  if(t.driver)h+=line('Chauffeur ('+t.days+' hari)',rupiah(t.driver));
  h+='<div class="stot"><span class="k">Total estimasi</span><span class="v tnum">'+rupiah(t.total)+'</span></div>';
  $('summary').innerHTML=h;
}
function bookingCode(){return 'CT-'+Date.now().toString(36).toUpperCase().slice(-6);}
function buildMsg(t,code){
  var L=['Halo Cabin Trans, saya mau konfirmasi reservasi:','',
    '*Kode:* '+code,'*Layanan:* '+booking.svc,'*Armada:* '+t.car.name,
    '*Penggunaan:* '+(booking.driver==='driver'?'Dengan chauffeur':'Lepas kunci'),
    '*Jemput:* '+fmt(booking.start),'*Selesai:* '+fmt(booking.end),'*Titik jemput:* '+booking.loc,'*Durasi:* '+t.days+' hari'];
  if(booking.note)L.push('*Catatan:* '+booking.note);
  L.push('','*Nama:* '+booking.name,'*WA:* '+booking.phone);
  if(booking.email)L.push('*Email:* '+booking.email);
  L.push('*Jumlah tamu:* '+booking.pax,'','*Total estimasi:* '+rupiah(t.total));
  return encodeURIComponent(L.join('\n'));
}
function confirmBooking(){
  var t=calcTotal();if(!t)return;var code=bookingCode(),url='https://wa.me/'+ADMIN_WA+'?text='+buildMsg(t,code);
  $('waLink').href=url;$('sucName').textContent=booking.name;$('sucCode').textContent=code;
  $('summaryWrap').hidden=true;$('successBox').hidden=false;
  try{window.open(url,'_blank','noopener');}catch(e){}
}
function resetBooking(){
  booking=blank();
  ['bStart','bEnd','cName','cPhone','cEmail','bNote'].forEach(function(id){$(id).value='';});
  $('successBox').hidden=true;$('summaryWrap').hidden=false;setDriver('driver');renderChoose();goStep(1);
}

/* ---------- util ---------- */
function copyText(txt,btn){var done=function(){if(btn){var o=btn.textContent;btn.textContent='Tersalin';setTimeout(function(){btn.textContent=o;},1400);}else toast('Disalin: '+txt);};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done).catch(function(){fb(txt,done);});else fb(txt,done);}
function fb(txt,done){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
var toastEl;function toast(msg){if(!toastEl){toastEl=document.createElement('div');toastEl.className='toast';toastEl.setAttribute('role','status');document.body.appendChild(toastEl);}toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastEl._t);toastEl._t=setTimeout(function(){toastEl.classList.remove('show');},2600);}

/* ---------- init ---------- */
renderServices();renderFilters();renderCars();fillSelects();renderChoose();
$('qDate').value=today();$('qDate').min=today();
$('bStart').addEventListener('change',updateDurNote);$('bEnd').addEventListener('change',updateDurNote);
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.getAttribute&&e.target.getAttribute('role')==='button'){e.preventDefault();e.target.click();}});
watchSections();
(function(){var h=(location.hash||'').replace('#','');if(h==='reservasi'||SECTIONS.indexOf(h)>-1)setTimeout(function(){nav(h);},60);})();
