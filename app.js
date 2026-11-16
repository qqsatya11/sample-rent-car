/* Cabin Trans · company profile + reservasi · bilingual ID / EN */
var ADMIN_WA = '6287783377646';
var DRIVER_FEE = 150000;
var LANG = 'id';

/* ================= TEKS (ID / EN) =================
   EN ditulis ulang per kalimat agar alami, bukan terjemahan kata per kata. */
var EN = {
  'nav.home':'Home','nav.tour':'Tours','nav.tourFull':'Tours &amp; Travel','nav.about':'About','nav.services':'Services','nav.fleet':'Fleet','nav.why':'Why Us','nav.contact':'Contact',
  'nav.book':'Book Now','nav.bookOnline':'Book Online',
  'hero.desc':'Luxury car rental and city tours, delivered with the care and precision of airline cabin service. For VIP guests, executives, business travel, and city sightseeing.',
  'hero.cta':'Book Now','hero.fleet':'View Our Fleet',
  'hero.t1':'Uniformed chauffeurs','hero.t2':'Sanitized cabins','hero.t3':'24/7 support',
  'hero.badge':'Your time<br>is an asset.','hero.badgeSub':'We protect every minute of your journey.',
  'q.svc':'Service','q.car':'Vehicle','q.date':'Date','q.time':'Pickup time','q.dur':'Duration','q.btn':'Check &amp; Book',
  'about.kick':'01 · About Us',
  'about.h2':'A luxury fleet with <span class="hl">airline-grade service</span>',
  'about.p1':'Cabin Trans is a luxury car rental and city tour company that pairs a meticulously maintained fleet with the service standards of an aircraft cabin. Drawing on years of experience in hospitality and transport, we bring the discipline, attention to detail, and courtesy of airline cabin service to every journey on the ground, for <b>VIP guests, executives, and city tours</b>.',
  'about.p2':'Your time is an asset. That is why we deliver precise, punctual service at a price that stays competitive.',
  'about.f1':'Late-model luxury vehicles, meticulously maintained and spotless.',
  'about.f2':'Calm, safe travel that respects your privacy and your time.',
  'about.f3':'Elegant city tours for VIP guests, executives, and official visits.',
  'svc.kick':'02 · Our Services',
  'svc.h2':'Three services, <span class="hl">one uncompromising standard</span>',
  'svc.p':'From VIP airport pickups and private city tours to dedicated vehicles for senior executives, every journey carries the discipline and courtesy of an airline cabin.',
  'tour.h2':'Curated trips, <span class="hl">on our own fleet</span>',
  'tour.p':'From golf days and deep-sea fishing to corporate outings and study tours, every package runs on Cabin Trans vehicles and chauffeurs, with pickup from the airport, the Whoosh station, or your hotel.',
  'fleet.kick':'04 · Our Fleet',
  'fleet.h2':'Arrive in style, <span class="hl">travel in comfort</span>',
  'fleet.p':'Five well-kept, late-model vehicles. Choose the one that suits your group and your trip, then book it online in minutes.',
  'fleet.note':'Rates cover the vehicle only and exclude the chauffeur. Final pricing is confirmed by our team based on your schedule and route.',
  'pil.kick':'05 · Why Cabin Trans',
  'pil.h2':'Five pillars of <span class="hl">the Cabin Trans standard</span>',
  'pil.p':'A comfortable vehicle is only the starting point. What sets us apart is operational discipline, rigorous safety standards, and world-class hospitality.',
  'pil.a':'Airline-Grade Standards',
  'pil.a1':'Trained drivers who are disciplined, punctual, and versed in emergency procedures and travel risk management.',
  'pil.a2':'Sanitized cabins, with deep cleaning before and after every trip.',
  'pil.b':'Professional Chauffeurs',
  'pil.b1':'A personal concierge on the road: courteous, well-groomed, familiar with protocol, and at ease with VIP and international guests.',
  'pil.b2':'Expert route knowledge for a smooth, safe ride without unnecessary delays.',
  'pil.c':'Precision &amp; Punctuality',
  'pil.c1':'Structured scheduling with real-time coordination.',
  'pil.c2':'Always on time at pickup, with a standby vehicle ready if a technical issue arises.',
  'pil.d':'Modern Fleet &amp; Technology',
  'pil.d1':'Alphard, Innova Zenix, and Hiace Premio, all late-model and in prime condition.',
  'pil.d2':'Transparent booking, trip tracking, and secure digital payment.',
  'pil.e1':'Round-the-clock support for last-minute requests and itinerary changes.',
  'pil.e2':'Ongoing quality reviews at the end of every trip.',
  'flow.kick':'06 · How It Works',
  'flow.h2':'Five <span class="hl">simple steps</span>',
  'flow.p':'From first enquiry to final receipt, every stage is clear and well coordinated. All you need to tell us is when and where.',
  'flow.s1':'Consultation','flow.s1p':'Reach us on WhatsApp or book online. Let us know your dates, destination, and number of guests.',
  'flow.s2':'Quote &amp; Confirmation','flow.s2p':'A clear breakdown of services and costs. A down payment secures your booking.',
  'flow.s3':'Vehicle Preparation','flow.s3p':'We inspect the vehicle, sanitize the cabin, and assign one of our best chauffeurs.',
  'flow.s4':'On the Road','flow.s4p':'A punctual pickup and real-time coordination throughout your journey.',
  'flow.s5':'Wrap-Up','flow.s5p':'Vehicle handover, a quick service review, and an official receipt to close it all out.',
  'banner.b':'A sanitized cabin, every journey.','banner.s':'Deep cleaned before you step in and after you step out.','banner.btn':'Start Booking',
  'ct.kick':'Contact Us','ct.h2':'Ready to <span class="hl">travel with us?</span>',
  'ct.p':'Tell us your schedule, route, and group size. Our team will help you plan the right journey, from airport transfers to full-day city tours.',
  'ct.wa':'Chat on WhatsApp','ct.co':'Company','ct.copy':'Copy','ct.addr':'Address','ct.care':'Available 24/7',
  'bk.kick':'Online Booking','bk.h2':'Book <span class="hl">your journey</span>',
  'bk.p':'Five quick steps. Your booking details go straight to our team on WhatsApp for confirmation.',
  'bk.st1':'1 · Vehicle','bk.st2':'2 · Schedule','bk.st3':'3 · Service','bk.st4':'4 · Details','bk.st5':'5 · Summary',
  'bk.h1':'Choose a vehicle','bk.sub1':'Select a vehicle to continue.','bk.next':'Next','bk.back':'Back',
  'bk.h2s':'Trip schedule','bk.sub2':'Tell us when and where to pick you up.',
  'bk.start':'Pickup date &amp; time','bk.end':'End date &amp; time','bk.loc':'Pickup point',
  'loc.1':'Your address (Bandung)','loc.2':'Cabin Trans office, Jl. Pangkur No. 11, Bandung','loc.3':'Husein Sastranegara Airport','loc.4':'Kertajati Airport (BIJB)','loc.5':'Bandung Station','loc.6':'Other (add details in the notes)',
  'bk.h3':'Choose your service','bk.sub3':'Your type of trip and how you would like to use the vehicle.','bk.svc':'Service type',
  'bk.drvT':'With Chauffeur','bk.drvP':'A uniformed, courteous chauffeur who knows every route. Simply sit back and relax.','bk.drvPr':'+Rp150.000 / day',
  'bk.selfT':'Self-Drive','bk.selfP':'You do the driving. A valid driving licence and ID verification are required.','bk.selfPr':'No chauffeur fee',
  'bk.note':'Additional notes <span class="hint">(optional)</span>','bk.notePh':'e.g. flight number, city tour route, child seat required',
  'bk.h4':'Your details','bk.sub4':'We use these to confirm your booking.',
  'bk.name':'Full name','bk.namePh':'As shown on your ID','bk.phone':'WhatsApp number','bk.phonePh':'+62 8xx xxxx xxxx',
  'bk.email':'Email <span class="hint">(optional)</span>','bk.emailPh':'name@email.com','bk.pax':'Number of guests',
  'pax.1':'1–2 guests','pax.2':'3–4 guests','pax.3':'5–7 guests','pax.4':'8–15 guests',
  'bk.review':'Review booking',
  'bk.h5':'Booking summary','bk.sub5':'Please check everything before confirming.','bk.confirm':'Confirm via WhatsApp',
  'bk.confirmNote':'You will be taken to WhatsApp with your booking details already filled in. Final pricing is confirmed by our team.',
  'ok.h':'Booking received','ok.thanks':'Thank you,','ok.code':'Your booking code is:',
  'ok.p':'Your confirmation message is ready. If WhatsApp did not open automatically, use the button below.',
  'ok.open':'Open WhatsApp','ok.new':'Make another booking',
  'ft.p':'Luxury Fleet, Airline-Grade Service. Luxury car rental and city tours in Bandung, delivered to airline cabin standards.',
  'ft.about':'About Us','ft.book':'Book Online','ft.note':'Prices shown are indicative and confirmed by our team.'
};

/* teks yang dipakai JS */
var T = {
  id:{
    all:'Semua', anyCar:'Semua armada', seats:'org', pass:'penumpang', day:'hari', days:'hari', from:'Mulai dari', perDay:'/ hari', book:'Pesan',
    cap:'Kapasitas', ciri:'Ciri', fit:'Cocok untuk', bookSvc:'Pesan layanan ini', incl:'Termasuk', sig:'Paket Unggulan', ask:'Tanya paket ini', waTour:'Halo Cabin Trans, saya tertarik dengan paket {p}. Boleh minta info lebih lanjut?',
    tPick:'Pilih dulu satu armada.', tDates:'Lengkapi tanggal jemput dan selesai.', tOrder:'Tanggal selesai harus setelah tanggal jemput.', tName:'Lengkapi nama dan nomor WhatsApp yang valid.', copied:'Disalin', copiedBtn:'Tersalin',
    dur:'Durasi', sSvc:'Layanan', sUse:'Penggunaan', withDrv:'Dengan chauffeur', selfDrv:'Lepas kunci', sStart:'Jemput', sEnd:'Selesai', sLoc:'Titik jemput', sBy:'Pemesan', sPax:'Jumlah tamu', sNote:'Catatan', sUnit:'Unit', sDrv:'Chauffeur', total:'Total estimasi',
    waHi:'Halo Cabin Trans, saya mau konfirmasi reservasi:', waCode:'Kode', waCar:'Armada', waName:'Nama', waGeneral:'Halo Cabin Trans, saya mau konsultasi perjalanan.',
    locale:'id-ID', title:'Cabin Trans · Luxury Fleet, Airline-Grade Service',
    desc:'Cabin Trans (PT. Cakra Bintang Transindo): rental mobil mewah dan city tour Bandung dengan standar pelayanan kabin penerbangan. Alphard, Innova Zenix, Hiace Premio.'
  },
  en:{
    all:'All', anyCar:'Any vehicle', seats:'seats', pass:'passengers', day:'day', days:'days', from:'From', perDay:'/ day', book:'Book',
    cap:'Capacity', ciri:'Highlights', fit:'Ideal for', bookSvc:'Book this service', incl:'Included', sig:'Signature Trip', ask:'Ask about this trip', waTour:'Hello Cabin Trans, I am interested in the {p} package. Could you share more details?',
    tPick:'Please choose a vehicle first.', tDates:'Please fill in both the pickup and end dates.', tOrder:'The end date must be after the pickup date.', tName:'Please enter your name and a valid WhatsApp number.', copied:'Copied', copiedBtn:'Copied',
    dur:'Duration', sSvc:'Service', sUse:'Usage', withDrv:'With chauffeur', selfDrv:'Self-drive', sStart:'Pickup', sEnd:'Ends', sLoc:'Pickup point', sBy:'Booked by', sPax:'Guests', sNote:'Notes', sUnit:'Vehicle', sDrv:'Chauffeur', total:'Estimated total',
    waHi:'Hello Cabin Trans, I would like to confirm my booking:', waCode:'Code', waCar:'Vehicle', waName:'Name', waGeneral:'Hello Cabin Trans, I would like some help planning a trip.',
    locale:'en-GB', title:'Cabin Trans · Luxury Fleet, Airline-Grade Service',
    desc:'Cabin Trans (PT. Cakra Bintang Transindo): luxury car rental and city tours in Bandung with airline cabin service standards. Alphard, Innova Zenix, Hiace Premio.'
  }
};
function t(k){return T[LANG][k];}
function L(o){return (o && typeof o==='object') ? (o[LANG]||o.id) : o;}

/* ================= DATA ================= */
var CARS = [
  {id:'alphard', name:'Toyota Alphard', cat:'Premium', seat:'7', price:3500000, img:'assets/alphard.webp',
   kelas:{id:'Kelas Eksekutif',en:'Executive Class'}, ciri:{id:'Captain seat, kabin senyap',en:'Captain seats, whisper-quiet cabin'}, cocok:{id:'Tamu VIP, direksi',en:'VIP guests, senior executives'}},
  {id:'zenix', name:'Toyota Innova Zenix', cat:'MPV', seat:'7', price:1000000, img:'assets/zenix.webp',
   kelas:{id:'Premium Keluarga',en:'Premium Family'}, ciri:{id:'Modern dan irit',en:'Modern and fuel-efficient'}, cocok:{id:'Keluarga, wisata kota',en:'Families, city tours'}},
  {id:'premio', name:'Toyota Hiace Premio Luxury', cat:'Van', seat:'14-15', price:1300000, img:'assets/premio.webp',
   kelas:{id:'Eksekutif & Grup',en:'Executive & Group'}, ciri:{id:'Van premium, kabin luas dan tenang',en:'Premium van with a spacious, quiet cabin'}, cocok:{id:'Rombongan, korporat, tur',en:'Groups, corporate travel, tours'}},
  {id:'innova', name:'Toyota Innova Reborn', cat:'MPV', seat:'7', price:950000, img:'assets/innova.webp',
   kelas:{id:'Keluarga & Dinas',en:'Family & Business'}, ciri:{id:'Tangguh dan lega',en:'Rugged and roomy'}, cocok:{id:'Keluarga, dinas, luar kota',en:'Families, business trips, out-of-town travel'}},
  {id:'hiace', name:'Toyota Hiace Commuter', cat:'Van', seat:'14', price:1200000, img:'assets/hiace.webp',
   kelas:{id:'Rombongan',en:'Group Travel'}, ciri:{id:'Kabin luas, bagasi lega',en:'Spacious cabin, ample luggage room'}, cocok:{id:'Rombongan, wisata',en:'Groups, sightseeing'}}
];
var CATS = ['Semua','Premium','MPV','Van'];

var SERVICES = [
  {id:'airport', no:'01', title:'Executive Airport Transfer', tag:'VVIP Arrival & Departure', img:'assets/svc-airport.jpg',
   desc:{id:'Penjemputan dan pengantaran VIP di bandara, tepat waktu, lengkap dengan penanganan bagasi.',en:'VIP airport pickups and drop-offs, always on time and complete with luggage handling.'},
   scope:{id:['Penjemputan dengan name board','Armada Alphard atau Innova Zenix','Penanganan bagasi','Chauffeur berseragam'],en:['Meet-and-greet with a name board','Alphard or Innova Zenix','Luggage handling','Uniformed chauffeur']},
   benefit:{id:'Pemantauan jadwal penerbangan dan refreshment di kabin. Tamu tiba dalam kondisi prima.',en:'Live flight tracking and in-car refreshments, so your guests arrive relaxed and refreshed.'}},
  {id:'citytour', no:'02', title:'Luxury City Tour', tag:'Personalized Itinerary', img:'assets/svc-citytour.jpg',
   desc:{id:'Wisata kota dengan rute pribadi, chauffeur terlatih, dan kabin yang selalu steril.',en:'Explore the city on your own private route, with a trained chauffeur and a cabin that is always sanitized.'},
   scope:{id:['Rute sesuai permintaan','Chauffeur terlatih','Sterilisasi kabin','Pendampingan concierge'],en:['Itinerary built around you','Trained chauffeur','Cabin sanitization','Concierge assistance']},
   benefit:{id:'Paket harian 12 atau 18 jam. Itinerary efisien, wisata kota nyaman tanpa repot.',en:'Full-day packages of 12 or 18 hours. An efficient itinerary for a relaxed, hassle-free day out.'}},
  {id:'corporate', no:'03', title:'Corporate Executive Mobility', tag:'Daily & Project Rent', img:'assets/svc-corporate.jpg',
   desc:{id:'Armada dedicated untuk mobilitas direksi dan tim, secara harian maupun per proyek.',en:'Dedicated vehicles for executives and their teams, available daily or per project.'},
   scope:{id:['Armada dedicated','Pengemudi terikat NDA','Unit cadangan siaga','Penagihan bulanan transparan'],en:['Dedicated fleet','NDA-bound drivers','Standby backup vehicle','Transparent monthly billing']},
   benefit:{id:'Dukungan siaga dan laporan perjalanan (trip log). Biaya terukur dan transparan.',en:'On-call support and detailed trip logs, with costs that stay predictable and transparent.'}}
];
var IC = {
  golf:'<path d="M12 18V3l7 3.5-7 3.5"/><path d="M8 18.5c-2.4.4-4 1.2-4 2 0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5c0-.8-1.6-1.6-4-2"/>',
  fish:'<path d="M6.5 12c3-5 9-6.5 13.5 0-4.5 6.5-10.5 5-13.5 0Z"/><path d="M6.5 12 2 8.5v7Z"/><circle cx="16" cy="11" r=".8" fill="currentColor"/>',
  group:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  family:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/>',
  brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  grad:'<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6"/>',
  mic:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 9h6M7 12h10"/>'
};
var TOURS = [
  {id:'golf', feat:true, name:'Golf Trip', ic:'golf', img:'assets/tour-golf.jpg',
   lead:{id:'Tee time beres, tamu tinggal main.',en:'Your tee time is sorted. All you do is play.'},
   desc:{id:'Trip sehari ke lapangan golf pilihan di Bandung Raya, Jatinangor, Bogor dan Sentul, hingga Jakarta. Kami atur jadwal main, transportasi, dan makan, sehingga Anda bisa fokus di lapangan.',
         en:'A day out at selected courses across Greater Bandung, Jatinangor, Bogor and Sentul, and Jakarta. We arrange your tee time, transport, and meals so you can focus on your game.'},
   incl:{id:['Mobil dan chauffeur pulang-pergi','Green fee dan caddie','Makan selama trip','Untuk satu flight (4 golfer)'],en:['Return transport with chauffeur','Green fee and caddie','Meals during the trip','Sized for one flight of four golfers']},
   note:{id:'Belum termasuk tiket pesawat.',en:'Flights are not included.'}},
  {id:'fishing', feat:true, name:'Fishing Trip', ic:'fish', img:'assets/tour-fishing.jpg',
   lead:{id:'Mancing laut tanpa repot logistik.',en:'Deep-sea fishing, minus the logistics.'},
   desc:{id:'Berangkat ke spot mancing favorit di Pelabuhan Ratu, Ujung Genteng, atau Kepulauan Seribu. Kapal, kapten, dan umpan sudah kami siapkan, Anda cukup datang dan melempar kail.',
         en:'Head out to favourite fishing grounds at Pelabuhan Ratu, Ujung Genteng, or the Thousand Islands. The boat, captain, and bait are ready and waiting, so all you need to do is show up and cast.'},
   incl:{id:['Mobil dan chauffeur pulang-pergi','Kapal dan kapten berpengalaman','Umpan dan makan','Untuk grup hingga 6 orang'],en:['Return transport with chauffeur','Boat with an experienced captain','Bait and meals','For groups of up to six']},
   note:{id:'Jadwal menyesuaikan prakiraan cuaca laut.',en:'Departures follow the marine weather forecast.'}},
  {id:'opentrip', name:'Open Trip', ic:'group',
   desc:{id:'Bergabung dengan rombongan kecil ke destinasi wisata populer di Jawa Barat dengan jadwal keberangkatan tetap. Cara praktis berlibur tanpa harus mengumpulkan grup sendiri.',
         en:'Join a small group on a fixed-date trip to some of West Java\'s best-loved destinations. An easy way to travel without having to organise a group yourself.'},
   fit:{id:'Solo traveler, pasangan, dan rombongan kecil',en:'Solo travellers, couples, and small groups'}},
  {id:'private', name:'Private & Family Trip', ic:'family',
   desc:{id:'Perjalanan pribadi dengan itinerary yang disusun khusus untuk keluarga atau grup Anda. Waktu, rute, dan tempat makan mengikuti keinginan Anda, didampingi chauffeur yang paham rute.',
         en:'A private journey with an itinerary built around your family or group. You set the pace, the route, and the dining stops, with a chauffeur who knows the way.'},
   fit:{id:'Keluarga dan grup pribadi, termasuk tamu dari Malaysia dan Singapura',en:'Families and private groups, including guests from Malaysia and Singapore'}},
  {id:'outing', name:'Corporate Outing', ic:'brief',
   desc:{id:'Outing, gathering, dan team building kantor yang kami urus dari transportasi, venue, sampai rundown acara. Setiap program disusun dalam proposal sesuai jumlah peserta dan tujuan acara.',
         en:'Office outings, gatherings, and team-building days handled end to end, from transport and venue to the event rundown. Every programme is tailored in a proposal to your headcount and goals.'},
   fit:{id:'Perusahaan dan instansi',en:'Companies and institutions'}},
  {id:'study', name:'Study Tour', ic:'grad',
   desc:{id:'Kunjungan edukatif ke kampus, industri, museum, dan destinasi budaya, dengan armada yang aman dan pendamping selama perjalanan. Jadwal disesuaikan dengan kalender akademik.',
         en:'Educational visits to campuses, industries, museums, and cultural sites, with safe vehicles and an escort throughout. Scheduling works around your academic calendar.'},
   fit:{id:'Sekolah, kampus, dan lembaga pendidikan',en:'Schools, universities, and educational institutions'}},
  {id:'mice', name:'MICE', ic:'mic',
   desc:{id:'Dukungan transportasi dan perjalanan untuk meeting, insentif, konferensi, dan pameran. Antar-jemput peserta terjadwal, beberapa armada berjalan paralel, dan koordinasi real-time dengan panitia.',
         en:'Transport and travel support for meetings, incentives, conferences, and exhibitions, with scheduled delegate shuttles, multiple vehicles running in parallel, and real-time coordination with organisers.'},
   fit:{id:'Penyelenggara acara dan korporat',en:'Event organisers and corporates'}}
];
var SVC_OPTS = SERVICES.map(function(s){return {id:s.id,label:{id:s.title,en:s.title}};})
  .concat(TOURS.map(function(x){return {id:x.id,label:{id:x.name,en:x.name}};}))
  .concat([{id:'daily',label:{id:'Sewa Harian',en:'Daily Rental'}}]);
var DURS = [1,2,3,5,7];

var I = {
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

function $(id){return document.getElementById(id);}
function rupiah(n){return 'Rp'+n.toLocaleString('id-ID');}
function carById(id){return CARS.filter(function(c){return c.id===id;})[0]||null;}
function svcLabel(id){var s=SVC_OPTS.filter(function(x){return x.id===id;})[0];return s?L(s.label):'';}
function opt(v,txt,sel){return '<option value="'+v+'"'+(sel?' selected':'')+'>'+txt+'</option>';}
function nDays(n){return n+' '+(n===1?t('day'):t('days'));}

/* ================= RENDER ================= */
function renderServices(){
  $('svcGrid').innerHTML = SERVICES.map(function(s){
    return '<article class="svc">'+
      '<div class="svc-img"><img src="'+s.img+'" alt="'+s.title+'" loading="lazy"><span class="svc-no">'+s.no+'</span></div>'+
      '<div class="svc-body">'+
        '<span class="svc-tag">'+s.tag+'</span>'+
        '<h3>'+s.title+'</h3>'+
        '<p class="svc-desc">'+L(s.desc)+'</p>'+
        '<ul class="svc-scope">'+L(s.scope).map(function(x){return '<li>'+I.check+x+'</li>';}).join('')+'</ul>'+
        '<p class="svc-benefit">'+L(s.benefit)+'</p>'+
        '<button class="btn btn-out btn-sm" onclick="bookService(\''+s.id+'\')">'+t('bookSvc')+I.arrow+'</button>'+
      '</div></article>';
  }).join('');
}

function svg(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
function renderTours(){
  $('tourFeat').innerHTML = TOURS.filter(function(x){return x.feat;}).map(function(x){
    return '<article class="tf">'+
      '<div class="tf-img"><img src="'+x.img+'" alt="'+x.name+' Cabin Trans" loading="lazy" width="1600" height="1000"><span class="tf-tag">'+t('sig')+'</span></div>'+
      '<div class="tf-body"><div class="tf-top"><span class="tf-ic">'+svg(IC[x.ic])+'</span><h3>'+x.name+'</h3></div><p class="tf-lead">'+L(x.lead)+'</p><p class="tf-desc">'+L(x.desc)+'</p>'+
      '<span class="tf-lab">'+t('incl')+'</span><ul class="tf-incl">'+L(x.incl).map(function(i){return '<li>'+I.check+i+'</li>';}).join('')+'</ul>'+
      '<div class="tf-foot"><span class="tf-note">'+L(x.note)+'</span><button class="btn btn-light btn-sm" onclick="tourWA(\''+x.id+'\')">'+t('ask')+I.arrow+'</button></div></div>'+
    '</article>';
  }).join('');
  $('tourGrid').innerHTML = TOURS.filter(function(x){return !x.feat;}).map(function(x){
    return '<article class="tc">'+
      '<span class="tc-ic">'+svg(IC[x.ic])+'</span><h3>'+x.name+'</h3><p class="tc-desc">'+L(x.desc)+'</p>'+
      '<div class="tc-fit"><span>'+t('fit')+'</span>'+L(x.fit)+'</div>'+
      '<button class="btn btn-out btn-sm" onclick="tourWA(\''+x.id+'\')">'+t('ask')+I.arrow+'</button>'+
    '</article>';
  }).join('');
}
function tourWA(id){var x=TOURS.filter(function(k){return k.id===id;})[0];if(!x)return false;window.open('https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent(t('waTour').replace('{p}',x.name)),'_blank','noopener');return false;}

var curFilter = 'Semua';
function carCard(c){
  return '<article class="car">'+
    '<div class="car-img"><span class="car-badge">'+L(c.kelas)+'</span><img src="'+c.img+'" alt="'+c.name+'" loading="lazy"></div>'+
    '<div class="car-body">'+
      '<h3 class="car-name">'+c.name+'</h3>'+
      '<dl class="spec">'+
        '<div><dt>'+t('cap')+'</dt><dd>'+c.seat+' '+t('pass')+'</dd></div>'+
        '<div><dt>'+t('ciri')+'</dt><dd>'+L(c.ciri)+'</dd></div>'+
        '<div><dt>'+t('fit')+'</dt><dd>'+L(c.cocok)+'</dd></div>'+
      '</dl>'+
      '<div class="car-foot"><div class="car-price"><span>'+t('from')+'</span><b class="tnum">'+rupiah(c.price)+'</b></div>'+
      '<button class="btn btn-primary btn-sm" onclick="bookCar(\''+c.id+'\')">'+t('book')+'</button></div>'+
    '</div></article>';
}
function renderCars(){
  var list = curFilter==='Semua' ? CARS : CARS.filter(function(c){return c.cat===curFilter;});
  $('cars').innerHTML = list.map(carCard).join('');
}
function renderFilters(){
  $('filters').innerHTML = CATS.map(function(c){
    return '<button class="chip'+(c===curFilter?' on':'')+'" onclick="setFilter(\''+c+'\')">'+(c==='Semua'?t('all'):c)+'</button>';
  }).join('');
}
function setFilter(c){curFilter=c;renderFilters();renderCars();}

function fillSelects(){
  var qs=$('qSvc').value, bs=$('bSvc').value||booking.svc, qc=$('qCar').value, qd=$('qDur').value||'1';
  $('qSvc').innerHTML = SVC_OPTS.map(function(s){return opt(s.id,L(s.label),s.id===(qs||SVC_OPTS[0].id));}).join('');
  $('bSvc').innerHTML = SVC_OPTS.map(function(s){return opt(s.id,L(s.label),s.id===bs);}).join('');
  $('qCar').innerHTML = opt('',t('anyCar'),!qc) + CARS.map(function(c){return opt(c.id,c.name+' ('+c.seat+' '+t('seats')+')',c.id===qc);}).join('');
  $('qDur').innerHTML = DURS.map(function(n){return opt(n,nDays(n),String(n)===String(qd));}).join('');
}

/* ================= BAHASA ================= */
function applyStatic(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    if(el.__o===undefined) el.__o = el.innerHTML;
    var k=el.getAttribute('data-i18n');
    el.innerHTML = (LANG==='en' && EN[k]!=null) ? EN[k] : el.__o;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    if(el.__p===undefined) el.__p = el.getAttribute('placeholder')||'';
    var k=el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder', (LANG==='en' && EN[k]!=null) ? EN[k] : el.__p);
  });
}
function setLang(l, silent){
  LANG = l==='en' ? 'en' : 'id';
  document.documentElement.lang = LANG;
  document.title = t('title');
  var md=document.querySelector('meta[name=description]'); if(md) md.setAttribute('content',t('desc'));
  document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed', b.getAttribute('data-lang')===LANG);});
  applyStatic();
  renderServices(); renderTours(); renderFilters(); renderCars(); fillSelects(); renderChoose();
  if(step===2) updateDurNote();
  if(step===5) renderSummary();
  if(booking.name) $('sucName').textContent = booking.name;
  if(!silent){try{localStorage.setItem('ct-lang',LANG);}catch(e){}}
}

/* ================= NAVIGASI ================= */
var SECTIONS = ['beranda','tentang','layanan','tour','armada','keunggulan','alur','kontak'];
function showView(v){document.querySelectorAll('.view').forEach(function(el){el.classList.toggle('active', el.id==='view-'+v);});}
function nav(target){
  closeMenu();
  if(target==='reservasi'){
    showView('booking'); window.scrollTo({top:0,behavior:'smooth'}); setActive('');
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
function setActive(id){document.querySelectorAll('[data-nav]').forEach(function(a){a.classList.toggle('active', a.getAttribute('data-nav')===id);});}
function toggleMenu(){var m=$('mobileMenu'),o=!m.classList.contains('open');m.classList.toggle('open',o);$('burger').setAttribute('aria-expanded',o);}
function closeMenu(){$('mobileMenu').classList.remove('open');$('burger').setAttribute('aria-expanded','false');}
function watchSections(){
  if(!('IntersectionObserver' in window))return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && $('view-home').classList.contains('active')) setActive(e.target.id==='alur'?'keunggulan':e.target.id);
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  SECTIONS.forEach(function(id){var el=$(id);if(el)io.observe(el);});
}
function waGeneral(){window.open('https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent(t('waGeneral')),'_blank','noopener');return false;}

/* ================= TEMA ================= */
function toggleTheme(){var r=document.documentElement,cur=r.getAttribute('data-theme')||'light',next=cur==='dark'?'light':'dark';r.setAttribute('data-theme',next);try{localStorage.setItem('ct-theme',next);}catch(e){}setThemeIcon(next);}
function setThemeIcon(th){var el=$('themeIcon');if(!el)return;el.innerHTML = th==='dark' ? '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>' : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';}
(function(){var th=null;try{th=localStorage.getItem('ct-theme');}catch(e){}if(th)document.documentElement.setAttribute('data-theme',th);setThemeIcon(th||'light');})();

/* ================= BOOKING ================= */
var booking, step=1;
function blank(){return {car:null,svc:SVC_OPTS[0].id,start:'',end:'',loc:'',driver:'driver',note:'',name:'',phone:'',email:'',pax:''};}
booking = blank();

function pad2(n){return (n<10?'0':'')+n;}
function toLocal(d){return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+'T'+pad2(d.getHours())+':'+pad2(d.getMinutes());}
function today(){var n=new Date();return n.getFullYear()+'-'+pad2(n.getMonth()+1)+'-'+pad2(n.getDate());}

function qbSubmit(ev){
  ev.preventDefault();
  var d=$('qDate').value||today(), tm=$('qTime').value||'09:00', days=parseInt($('qDur').value,10)||1;
  var s=new Date(d+'T'+tm), e=new Date(s.getTime()); e.setDate(e.getDate()+days);
  booking.svc=$('qSvc').value; booking.start=toLocal(s); booking.end=toLocal(e);
  booking.car=$('qCar').value||booking.car;
  $('bStart').value=booking.start; $('bEnd').value=booking.end; $('bSvc').value=booking.svc;
  nav('reservasi'); goStep(booking.car?2:1); renderChoose();
}
function bookCar(id){booking.car=id;nav('reservasi');goStep(1);renderChoose();}
function bookService(id){booking.svc=id;$('bSvc').value=id;nav('reservasi');goStep(1);renderChoose();}

function renderChoose(){
  $('chooseCars').innerHTML = CARS.map(function(c){
    return '<div class="pk'+(booking.car===c.id?' sel':'')+'" onclick="pickCar(\''+c.id+'\')" role="button" tabindex="0"><div class="ph"><img src="'+c.img+'" alt="'+c.name+'"></div>'+
      '<div><div class="nm">'+c.name+'</div><div class="mt">'+L(c.kelas)+' · '+c.seat+' '+t('pass')+'</div><div class="pr">'+rupiah(c.price)+'</div></div></div>';
  }).join('');
}
function pickCar(id){booking.car=id;renderChoose();}
function setDriver(d){booking.driver=d;document.querySelectorAll('#driverOpts .opt').forEach(function(o){o.classList.toggle('sel',o.getAttribute('data-driver')===d);});}
function diffDays(){if(!booking.start||!booking.end)return 1;var d=Math.ceil((new Date(booking.end)-new Date(booking.start))/864e5);return d>0?d:1;}
function calcTotal(){var car=carById(booking.car);if(!car)return null;var days=diffDays(),sub=car.price*days,drv=booking.driver==='driver'?DRIVER_FEE*days:0;return {car:car,days:days,sub:sub,driver:drv,total:sub+drv};}
function locText(){var s=$('bLoc');return s.options[s.selectedIndex]?s.options[s.selectedIndex].text:'';}
function paxText(){var s=$('cPax');return s.options[s.selectedIndex]?s.options[s.selectedIndex].text:'';}

function goStep(n){
  step=n;
  document.querySelectorAll('.pane').forEach(function(p){p.classList.toggle('on',+p.getAttribute('data-step')===n);});
  document.querySelectorAll('#stepsBar .sb').forEach(function(s,i){s.classList.toggle('done',i<n-1);s.classList.toggle('cur',i===n-1);});
  if(n===2){if(booking.start&&!$('bStart').value)$('bStart').value=booking.start;if(booking.end&&!$('bEnd').value)$('bEnd').value=booking.end;updateDurNote();}
  if(n===3){$('bSvc').value=booking.svc;setDriver(booking.driver);}
  if(n===5)renderSummary();
}
function updateDurNote(){var s=$('bStart').value,e=$('bEnd').value;if(s&&e&&new Date(e)>new Date(s)){booking.start=s;booking.end=e;$('durNote').textContent=t('dur')+': '+nDays(diffDays())+'.';}else $('durNote').textContent='';}
function validStep(){
  if(step===1&&!booking.car){toast(t('tPick'));return false;}
  if(step===2){var s=$('bStart'),e=$('bEnd');booking.start=s.value;booking.end=e.value;
    s.parentNode.classList.toggle('err',!s.value);e.parentNode.classList.toggle('err',!e.value);
    if(!s.value||!e.value){toast(t('tDates'));return false;}
    if(new Date(e.value)<=new Date(s.value)){e.parentNode.classList.add('err');toast(t('tOrder'));return false;}}
  if(step===3){booking.svc=$('bSvc').value;booking.note=$('bNote').value.trim();}
  if(step===4){var n=$('cName'),p=$('cPhone');booking.name=n.value.trim();booking.phone=p.value.trim();booking.email=$('cEmail').value.trim();booking.pax=$('cPax').selectedIndex;
    var okp=booking.phone.replace(/[^0-9]/g,'').length>=9;
    n.parentNode.classList.toggle('err',!booking.name);p.parentNode.classList.toggle('err',!okp);
    if(!booking.name||!okp){toast(t('tName'));return false;}}
  return true;
}
function nextStep(){if(!validStep())return;if(step<5){goStep(step+1);scrollBook();}}
function prevStep(){if(step>1){goStep(step-1);scrollBook();}}
function scrollBook(){var b=document.querySelector('.steps-bar');if(b&&b.getBoundingClientRect().top<70)b.scrollIntoView({behavior:'smooth',block:'center'});}

function fmt(v){try{return new Date(v).toLocaleString(t('locale'),{weekday:'short',day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});}catch(e){return v;}}
function line(k,v){return '<div class="sline"><span class="k">'+k+'</span><span class="v">'+(v||'-')+'</span></div>';}
function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function renderSummary(){
  var r=calcTotal();if(!r)return;var c=r.car;
  var h='<div class="scar"><div class="ph"><img src="'+c.img+'" alt="'+c.name+'"></div><div><div class="sn2">'+c.name+'</div><div class="sm2">'+L(c.kelas)+' · '+rupiah(c.price)+'</div></div></div>';
  h+=line(t('sSvc'),esc(svcLabel(booking.svc)))+line(t('sUse'),booking.driver==='driver'?t('withDrv'):t('selfDrv'))+line(t('sStart'),fmt(booking.start))+line(t('sEnd'),fmt(booking.end))+line(t('sLoc'),esc(locText()))+line(t('dur'),nDays(r.days))+line(t('sBy'),esc(booking.name)+' · '+esc(booking.phone))+line(t('sPax'),esc(paxText()));
  if(booking.note)h+=line(t('sNote'),esc(booking.note));
  h+='<div class="sgap"></div>'+line(t('sUnit')+' ('+nDays(r.days)+')',rupiah(r.sub));
  if(r.driver)h+=line(t('sDrv')+' ('+nDays(r.days)+')',rupiah(r.driver));
  h+='<div class="stot"><span class="k">'+t('total')+'</span><span class="v tnum">'+rupiah(r.total)+'</span></div>';
  $('summary').innerHTML=h;
}
function bookingCode(){return 'CT-'+Date.now().toString(36).toUpperCase().slice(-6);}
function buildMsg(r,code){
  var M=[t('waHi'),'',
    '*'+t('waCode')+':* '+code,'*'+t('sSvc')+':* '+svcLabel(booking.svc),'*'+t('waCar')+':* '+r.car.name,
    '*'+t('sUse')+':* '+(booking.driver==='driver'?t('withDrv'):t('selfDrv')),
    '*'+t('sStart')+':* '+fmt(booking.start),'*'+t('sEnd')+':* '+fmt(booking.end),'*'+t('sLoc')+':* '+locText(),'*'+t('dur')+':* '+nDays(r.days)];
  if(booking.note)M.push('*'+t('sNote')+':* '+booking.note);
  M.push('','*'+t('waName')+':* '+booking.name,'*WhatsApp:* '+booking.phone);
  if(booking.email)M.push('*Email:* '+booking.email);
  M.push('*'+t('sPax')+':* '+paxText(),'','*'+t('total')+':* '+rupiah(r.total));
  return encodeURIComponent(M.join('\n'));
}
function confirmBooking(){
  var r=calcTotal();if(!r)return;var code=bookingCode(),url='https://wa.me/'+ADMIN_WA+'?text='+buildMsg(r,code);
  $('waLink').href=url;$('sucName').textContent=booking.name;$('sucCode').textContent=code;
  $('summaryWrap').hidden=true;$('successBox').hidden=false;
  try{window.open(url,'_blank','noopener');}catch(e){}
}
function resetBooking(){
  booking=blank();
  ['bStart','bEnd','cName','cPhone','cEmail','bNote'].forEach(function(id){$(id).value='';});
  $('successBox').hidden=true;$('summaryWrap').hidden=false;setDriver('driver');renderChoose();goStep(1);
}

/* ================= UTIL ================= */
function copyText(txt,btn){var done=function(){if(btn){var o=btn.innerHTML;btn.textContent=t('copiedBtn');setTimeout(function(){btn.innerHTML=o;},1400);}else toast(t('copied')+': '+txt);};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done).catch(function(){fb(txt,done);});else fb(txt,done);}
function fb(txt,done){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
var toastEl;function toast(msg){if(!toastEl){toastEl=document.createElement('div');toastEl.className='toast';toastEl.setAttribute('role','status');document.body.appendChild(toastEl);}toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastEl._t);toastEl._t=setTimeout(function(){toastEl.classList.remove('show');},2600);}

/* ================= INIT ================= */
(function(){var l='id';try{l=localStorage.getItem('ct-lang')||'id';}catch(e){}setLang(l,true);})();
$('qDate').value=today();$('qDate').min=today();
$('bStart').addEventListener('change',updateDurNote);$('bEnd').addEventListener('change',updateDurNote);
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.getAttribute&&e.target.getAttribute('role')==='button'){e.preventDefault();e.target.click();}});
watchSections();
(function(){var h=(location.hash||'').replace('#','');if(h==='reservasi'||SECTIONS.indexOf(h)>-1)setTimeout(function(){nav(h);},60);})();
