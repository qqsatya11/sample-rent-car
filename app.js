/* Cabin Trans · company profile + reservasi · bilingual ID / EN */
var ADMIN_WA = '6281110028375';
var DRIVER_FEE = 0; /* harga unit sudah all-in termasuk chauffeur */
var LANG = 'id';

/* ================= TEKS (ID / EN) =================
   EN ditulis ulang per kalimat agar alami, bukan terjemahan kata per kata. */
var EN = {
  'lps.e1':'01 · Golf','lps.e2':'02 · Tours','lps.e3':'03 · Car Rental','lps.h1':'From Your Door<br>to the Tee','lps.h2':'Your Journey,<br>Our Fleet','lps.h3':'Every Detail<br>Attended To','lps.p1':'Tee time, green fee, caddie, and premium transport in a single booking.','lps.p2':'Private trips, corporate outings, and MICE, planned around you with our own fleet and chauffeurs.','lps.p3':'From Alphard to Hiace Premio Luxury, with professional chauffeurs who are punctual and experienced.',
  'nav.home':'Home','nav.tour':'Tours','nav.tourFull':'Tours &amp; Travel','nav.about':'About','nav.services':'Services','nav.fleet':'Fleet','nav.why':'Why Us','nav.contact':'Contact',
  'nav.book':'Book Now','nav.bookOnline':'Book Online',
  'hero.desc':'Luxury car rental and city tours, delivered with precise, professional, premium service. For VIP guests, executives, business travel, and city sightseeing.',
  'hero.cta':'Book Now','hero.fleet':'View Our Fleet',
  'hero.t1':'Uniformed chauffeurs','hero.t2':'Sanitized cabins','hero.t3':'24/7 support',
  'hero.badge':'Your time<br>is an asset.','hero.badgeSub':'We protect every minute of your journey.',
  'q.svc':'Service','q.car':'Vehicle','q.date':'Date','q.time':'Pickup time','q.dur':'Duration','q.btn':'Check &amp; Book',
  'about.kick':'01 · About Us',
  'about.h2':'A luxury fleet with <span class="hl">first-class service</span>',
  'about.p1':'Cabin Trans is a luxury car rental and city tour company that pairs a meticulously maintained fleet with premium service standards. Drawing on years of experience in hospitality and transport, we bring a level of discipline, attention to detail, and courtesy modelled on hospitality industry standards to every journey, for <b>VIP guests, executives, and city tours</b>.',
  'about.p2':'Your time is an asset. That is why we deliver precise, punctual service at a price that stays competitive.',
  'about.f1':'Late-model luxury vehicles, meticulously maintained and spotless.',
  'about.f2':'Calm, safe travel that respects your privacy and your time.',
  'about.f3':'Elegant city tours for VIP guests, executives, and official visits.',
  'svc.kick':'02 · Our Services',
  'svc.h2':'Three services, <span class="hl">one uncompromising standard</span>',
  'svc.p':'From VIP airport pickups and private city tours to dedicated vehicles for senior executives, every journey is handled with the same discipline and courtesy.',
  'tour.h2':'Curated trips, <span class="hl">on our own fleet</span>',
  'tour.p':'From golf days and deep-sea fishing to corporate outings and study tours, every package runs on Cabin Trans vehicles and chauffeurs, with pickup from the airport, the Whoosh station, or your hotel.',
  'fleet.kick':'03 · Our Fleet',
  'fleet.h2':'Arrive in style, <span class="hl">travel in comfort</span>',
  'fleet.p':'Five well-kept, late-model vehicles. Choose the one that suits your group and your trip, then book it online in minutes.',
  'fleet.note':'Prices include a professional chauffeur. The final price is confirmed by our team based on your schedule and route.',
  'pil.kick':'04 · Why Cabin Trans',
  'pil.h2':'Five pillars of <span class="hl">the Cabin Trans standard</span>',
  'pil.p':'A comfortable vehicle is only the starting point. What sets us apart is operational discipline, rigorous safety standards, and world-class hospitality.',
  'pil.a':'Premium Service Standards',
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
  'flow.kick':'05 · How It Works',
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
  'bk.h3':'Choose your service','bk.sub3':'Your type of trip. Every vehicle comes with a professional chauffeur.','bk.svc':'Service type',
  'bk.drvT':'With Chauffeur','bk.drvP':'A uniformed, courteous chauffeur who knows every route. Simply sit back and relax.','bk.drvPr':'Included in the price',
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
  'ft.p':'Luxury Fleet, Exceptional Service. Golf, tours, and premium car rental in Bandung, delivered to premium, professional standards.',
  'ft.explore':'Explore','ft.courses':'Golf Courses',
  'nav.rental':'Car Rental','nav.tourGolf':'Tours &amp; Golf','nav.aboutUs':'About Us','nav.bookGolf':'Book Golf',
  'promo.kick':'Golf','promo.h2':'Premium golf, <span class="hl">we will do the driving</span>',
  'promo.p':'Golf packages and tee times at selected courses, complete with premium Cabin Trans transport from the airport, the station, or your hotel.','promo.btn':'Explore Golf',
  'lp.eyebrow':'Cabin Trans · Bandung','lp.sub':'Golf tours and premium chauffeured car rental in Bandung, delivered with precise, professional service.',
  'lp.ctaRental':'Car Rental','lp.ctaTour':'Tours &amp; Golf',
  'lp.p1kick':'Premium Car Rental','lp.p1h':'A premium fleet, professional chauffeurs','lp.p1p':'Alphard, Innova Zenix, and Hiace Premio Luxury for airport transfers, city tours, and business travel.','lp.explore':'Explore',
  'lp.p2kick':'Tours &amp; Golf','lp.p2h':'Golf in the Bandung highlands','lp.p2p':'Golf packages and tee times at selected courses, with premium door-to-door transport.',
  'lp.stKick':'About Cabin Trans','lp.stH':'Every journey, <span class="hl">handled to the highest standard</span>',
  'lp.stP':'Drawing on years of experience in hospitality and transport, we bring discipline, attention to detail, and courtesy modelled on hospitality industry standards. For VIP guests, executives, families, and golfers.',
  'lp.f1b':'Professional chauffeurs','lp.f1s':'Well-groomed, courteous, and expert on every route','lp.f2b':'Well-kept fleet','lp.f2s':'Clean, late-model, and checked before every trip','lp.f3b':'Always on time','lp.f3s':'Real-time coordination with a standby vehicle',
  'lp.gKick':'Partner Courses','lp.gH':'Selected courses, <span class="hl">tee times sorted</span>','lp.gBtn':'See all courses',
  'lp.fKick':'Our Fleet','lp.fH':'Arrive in style, <span class="hl">travel in comfort</span>','lp.fBtn':'View fleet &amp; rates',
  'tr.eyebrow':'Golf · Cabin Trans','tr.h1':'Premium golf, <em>from your door to the tee box</em>','tr.lead':'Your tee time, sorted. All you do is play.',
  'tr.desc':'Enjoy hassle-free golf at selected courses in Bandung and Jakarta. Choose a complete golf package or a tee time only, with premium transport, green fees, and caddies arranged in a single booking.',
  'tr.cta1':'Book a Tee Time','tr.cta2':'View Courses','tr.t1':'6 selected courses','tr.t2':'Premium transport','tr.t3':'Tee times or packages',
  'tr.badge':'Golf<br>Experience','tr.badgeSub':'From pickup to the final hole.',
  'gx.kick':'01 · Golf Experience','gx.h2':'Everything for your round, <span class="hl">in a single booking</span>',
  'gx.p':'Surrounded by cool mountain air all year round, Bandung is home to a line of fine highland courses. We get you there in comfort, so you can focus on your tee time and your best swing.',
  'gx.a':'Selected tee times','gx.ap':'We secure playing slots at our partner courses in advance, so you never have to chase a booking.',
  'gx.b':'Door-to-door transport','gx.bp':'An Alphard or Hiace Premio Luxury with plenty of room for golf bags, driven by an experienced chauffeur.',
  'gx.c':'Green fees &amp; caddies arranged','gx.cp':'Golf packages cover green fees, caddies, and meals. Simply show up and play.',
  'gx.d':'Airport &amp; Whoosh pickup','gx.dp':'For guests from Jakarta, Malaysia, and Singapore, we pick you up at Soekarno-Hatta, Kertajati, or the Whoosh station.',
  'cr.kick':'02 · Partner Courses','cr.h2':'Selected courses in <span class="hl">Bandung &amp; Jakarta</span>',
  'cr.p':'From classic highland character to championship golf by the lake. Pick a course, set your tee time, or take the full package.',
  'pk.kick':'03 · Golf Packages','pk.h2':'Golf made easy, <span class="hl">just pick one</span>',
  'pk.p':'From one-day golf to a golf getaway over several days. Every package can be tailored to your choice of course, number of players, and schedule.',
  'pk.note':'Prices depend on the course, day of play, and number of golfers. Our team sends a full quote via WhatsApp.',
  'gb.kick':'04 · Tee Times &amp; Booking','gb.h2':'Just need a tee time? <span class="hl">Book a flight directly</span>',
  'gb.p':'One flight takes up to four golfers on the same tee time. Choose your course, date, and session, then add Cabin Trans transport as you need it.',
  'gb.l1':'1 flight = up to 4 golfers','gb.l2':'Tee times at 6 selected courses','gb.l3':'Premium transport as an optional add-on','gb.l4':'Slot and price confirmed via WhatsApp',
  'gb.tFlight':'Tee Time Only','gb.tPkg':'Golf Package','gb.pkg':'Package','gb.course':'Course','gb.date':'Date of play','gb.session':'Tee time session',
  'gs.1':'Morning','gs.2':'Midday','gs.3':'Flexible','gb.golfers':'Number of golfers','gb.from':'Guests from','gf.other':'Other',
  'gb.transport':'Add Cabin Trans transport','gb.car':'Vehicle','gb.namePh':'As shown on your ID','gb.notePh':'e.g. club rental needed, average handicap, hotel pickup',
  'gb.submit':'Send via WhatsApp','gb.submitNote':'Our team will confirm slot availability and pricing on WhatsApp.',
  'gb.okH':'Request sent','gb.okP':'Your booking details are ready in WhatsApp. If it did not open, use the button below.','gb.again':'Book again',
  'to.kick':'05 · More Tours','to.h2':'Private tours <span class="hl">with an exclusive fleet</span>',
  'to.p':'Plan family holidays, company outings, and school visits beyond golf. With clean Cabin Trans vehicles and experienced chauffeurs, every destination is a chance to be inspired and come back refreshed for the daily routine and pressures of work.',
  'to.note':'Only need an airport transfer or a city tour?','to.noteLink':'See rental services',
  'hw.kick':'06 · How to Book','hw.h2':'Four steps <span class="hl">to the tee box</span>',
  'hw.p':'A clear booking process from the start. You always know your slot status and full costs before you pay.',
  'hw.s1':'Choose a course','hw.s1p':'Pick your course, date, session, and group size via the form or WhatsApp.',
  'hw.s2':'Slot confirmed','hw.s2p':'Our team checks tee time availability and sends you the price details.',
  'hw.s3':'Lock it in','hw.s3p':'A down payment secures your slot, followed by written confirmation.',
  'hw.s4':'Play golf','hw.s4p':'Your chauffeur arrives on time. You focus on your game, we handle the rest.',
  'fq.kick':'FAQ','fq.h2':'Before you <span class="hl">tee off</span>','fq.p':'Can\'t find what you need? Ask our team directly on WhatsApp.',
  'fq.q1':'What does one flight mean?','fq.a1':'A flight is one playing group of up to four golfers sharing a tee time. For larger groups, you can book several flights at once.',
  'fq.q2':'What is the difference between a tee time and a golf package?','fq.a2':'A tee time booking only secures your slot on the course. A golf package also covers transport, green fees, caddies, and meals, plus a hotel on overnight packages.',
  'fq.q3':'Can you pick us up from the airport or the Whoosh station?','fq.a3':'Yes. Pickups from Soekarno-Hatta, Kertajati, or the Whoosh station are included in golf packages and available as an add-on for tee time bookings.',
  'fq.q4':'What if it rains or our plans change?','fq.a4':'Rescheduling follows each course\'s own policy. We will share the details when we confirm your booking.',
  'fq.q5':'Do you welcome international guests?','fq.a5':'Yes. We host guests from Malaysia, Singapore, and beyond, with communication in English.',
  'nav.contactUs':'Contact Us','nav.golf':'Golf','nav.tour2':'Tours','nav.seeTours':'View Packages',
  'to.note2':'Looking for golf packages?','to.noteLink2':'Visit the Golf page',
  'tv.eyebrow':'Tours &amp; Travel · Bandung','tv.h1':'Discover <em>every corner of West Java</em>','tv.lead':'We handle the logistics and the itinerary on a comfortable fleet, so you can focus on the best moments.',
  'tv.desc':'Tailor your family holiday, company gathering, school study tour, or community trip. Every journey is run with our fleet and professional chauffeurs, with flexible pickup from the airport, Whoosh station, or your hotel.',
  'tv.cta1':'View Tour Packages','tv.cta2':'Plan a Route','tv.t1':'Our own fleet','tv.t2':'Itineraries built around you','tv.t3':'Airport &amp; Whoosh pickup',
  'tv.badge':'Private<br>&amp; Group','tv.badgeSub':'For families, offices, and schools.',
  'tw.kick':'02 · How to Book','tw.h2':'Four steps <span class="hl">to your journey</span>','tw.p':'Tell us your plans and we will put together the route and details. You always know the cost before you pay.',
  'tw.s1':'Share your plans','tw.s1p':'Dates, destination, and group size, via WhatsApp.','tw.s2':'Get a quote','tw.s2p':'A clear itinerary and cost breakdown, adjustable to your needs.',
  'tw.s3':'Lock it in','tw.s3p':'A down payment secures your vehicle and dates.','tw.s4':'Set off','tw.s4p':'Your chauffeur arrives on time. We handle the rest.',
  'lpm.h1':'Arrive<br>Exceptionally','lpm.h1b':'Arrive Exceptionally','lpm.tGolf':'Tee times at selected Bandung courses','lpm.tTour':'Private and group journeys','lpm.tRent':'A premium fleet with chauffeurs',
  'lpm.cGolf':'Golf in the Bandung highlands','lpm.cTour':'Journeys designed around you','lpm.cRent':'A premium fleet, professional chauffeurs','lpm.discover':'Discover',
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
    crAll:'Semua', holes:'hole', par:'par', since:'sejak', opened:'dibuka', bookTee:'Pesan Tee Time', askBtn:'Tanya', pkgSig:'Paling diminati', pkgBook:'Pesan paket', pkgAsk:'Tanya harga', anyCourse:'Belum tahu, minta rekomendasi', soon:'Segera hadir', viewCourse:'Lihat lapangan', fromP:'Mulai dari',
    golfer:'golfer', golfers:'golfer', flight:'flight', flights:'flight', group:'rombongan', gNeed:'Lengkapi tanggal main, nama, dan nomor WhatsApp yang valid.',
    waGolfHi:'Halo Cabin Trans, saya mau pesan golf:', gTFlight:'Tiket flight', gTPkg:'Paket golf', wType:'Jenis', wPkg:'Paket', wCourse:'Lapangan', wDate:'Tanggal main', wSession:'Sesi', wGolfers:'Jumlah golfer', wFrom:'Asal', wTransport:'Transport', wNo:'Tidak perlu', wNote:'Catatan',
    waAskCourse:'Halo Cabin Trans, saya ingin tanya tee time di {c}.', waAskPkg:'Halo Cabin Trans, saya ingin tanya harga paket {p}.',
    locale:'id-ID', title:'Cabin Trans · Luxury Fleet, Exceptional Service',
    desc:'Cabin Trans (PT. Cakra Bintang Transindo): rental mobil mewah dan city tour Bandung dengan pelayanan premium dan profesional. Alphard, Innova Zenix, Hiace Premio.'
  },
  en:{
    all:'All', anyCar:'Any vehicle', seats:'seats', pass:'passengers', day:'day', days:'days', from:'From', perDay:'/ day', book:'Book',
    cap:'Capacity', ciri:'Highlights', fit:'Ideal for', bookSvc:'Book this service', incl:'Included', sig:'Signature Trip', ask:'Ask about this trip', waTour:'Hello Cabin Trans, I am interested in the {p} package. Could you share more details?',
    tPick:'Please choose a vehicle first.', tDates:'Please fill in both the pickup and end dates.', tOrder:'The end date must be after the pickup date.', tName:'Please enter your name and a valid WhatsApp number.', copied:'Copied', copiedBtn:'Copied',
    dur:'Duration', sSvc:'Service', sUse:'Usage', withDrv:'With chauffeur', selfDrv:'Self-drive', sStart:'Pickup', sEnd:'Ends', sLoc:'Pickup point', sBy:'Booked by', sPax:'Guests', sNote:'Notes', sUnit:'Vehicle', sDrv:'Chauffeur', total:'Estimated total',
    waHi:'Hello Cabin Trans, I would like to confirm my booking:', waCode:'Code', waCar:'Vehicle', waName:'Name', waGeneral:'Hello Cabin Trans, I would like some help planning a trip.',
    crAll:'All', holes:'holes', par:'par', since:'since', opened:'opened', bookTee:'Book Tee Time', askBtn:'Ask', pkgSig:'Most popular', pkgBook:'Book package', pkgAsk:'Ask for price', anyCourse:'Not sure yet, recommend one', soon:'Coming soon', viewCourse:'View course', fromP:'From',
    golfer:'golfer', golfers:'golfers', flight:'flight', flights:'flights', group:'group', gNeed:'Please fill in the date of play, your name, and a valid WhatsApp number.',
    waGolfHi:'Hello Cabin Trans, I would like to book golf:', gTFlight:'Tee time only', gTPkg:'Golf package', wType:'Type', wPkg:'Package', wCourse:'Course', wDate:'Date of play', wSession:'Session', wGolfers:'Golfers', wFrom:'From', wTransport:'Transport', wNo:'Not needed', wNote:'Notes',
    waAskCourse:'Hello Cabin Trans, I would like to ask about tee times at {c}.', waAskPkg:'Hello Cabin Trans, I would like a price for the {p} package.',
    locale:'en-GB', title:'Cabin Trans · Luxury Fleet, Exceptional Service',
    desc:'Cabin Trans (PT. Cakra Bintang Transindo): luxury car rental and city tours in Bandung with premium, professional service. Alphard, Innova Zenix, Hiace Premio.'
  }
};
function t(k){var v=T[LANG][k];return v===undefined?T.id[k]:v;}
function L(o){return (o && typeof o==='object') ? (o[LANG]||o.id) : o;}

/* ================= DATA ================= */
var CARS = [
  {id:'alphard', name:'Toyota Alphard', cat:'Premium', seat:'7', price:5500000, img:'assets/alphard.webp',
   kelas:{id:'Kelas Eksekutif',en:'Executive Class'}, ciri:{id:'Captain seat, kabin senyap',en:'Captain seats, whisper-quiet cabin'}, cocok:{id:'Tamu VIP, direksi',en:'VIP guests, senior executives'}},
  {id:'zenix', name:'Toyota Innova Zenix', cat:'MPV', seat:'7', price:1000000, img:'assets/zenix.webp',
   kelas:{id:'Premium Keluarga',en:'Premium Family'}, ciri:{id:'Modern dan irit',en:'Modern and fuel-efficient'}, cocok:{id:'Keluarga, wisata kota',en:'Families, city tours'}},
  {id:'premio', name:'Toyota Hiace Premio Luxury', cat:'Van', seat:'9-10', price:1500000, img:'assets/premio.webp',
   kelas:{id:'Eksekutif & Grup',en:'Executive & Group'}, ciri:{id:'Van premium, kabin luas dan tenang',en:'Premium van with a spacious, quiet cabin'}, cocok:{id:'Rombongan, korporat, tur',en:'Groups, corporate travel, tours'}},
  {id:'innova', name:'Toyota Innova Reborn', cat:'MPV', seat:'7', price:950000, img:'assets/innova.webp',
   kelas:{id:'Keluarga & Dinas',en:'Family & Business'}, ciri:{id:'Tangguh dan lega',en:'Rugged and roomy'}, cocok:{id:'Keluarga, dinas, luar kota',en:'Families, business trips, out-of-town travel'}},
  {id:'hiace', name:'Toyota Hiace Commuter', cat:'Van', seat:'9-10', price:1400000, img:'assets/hiace.webp',
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
  {id:'fishing', feat:true, soon:true, fit:{id:'Komunitas mancing dan grup hingga 6 orang',en:'Fishing communities and groups of up to six'}, name:'Fishing Trip', ic:'fish', img:'assets/tour-fishing.jpg',
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
/* ================= GOLF ================= */
var REGIONS = [
  {id:'all', label:{id:'Semua',en:'All'}},
  {id:'utara', label:{id:'Bandung Utara',en:'North Bandung'}},
  {id:'barat', label:{id:'Bandung Barat',en:'West Bandung'}},
  {id:'timur', label:{id:'Bandung Timur',en:'East Bandung'}},
  {id:'jakarta', label:{id:'Jakarta',en:'Jakarta'}}
];
var COURSES = [
  {id:'parahyangan', name:'Parahyangan Golf', short:'PG', region:'barat', holes:18, par:72, year:2018, yk:'opened',
   area:{id:'Padalarang, Bandung Barat',en:'Padalarang, West Bandung'},
   dist:{id:'± 40 menit dari pusat Bandung',en:'About 40 minutes from central Bandung'},
   desc:{id:'Lapangan championship karya Bob Moore (JMP Golf Design) yang dibuka pada 2018. Membentang dari lembah hingga perbukitan di tepi Danau Saguling, dengan tujuh jembatan yang melintasi teluk danau.',
         en:'A championship course by Bob Moore of JMP Golf Design, opened in 2018. It runs from valley to hillside along the shores of Lake Saguling, with seven bridges spanning the lake\'s bays.'},
   hl:{id:['Panjang 7.298 yard','Pemandangan Danau Saguling','Clubhouse luas, restoran & spa'],en:['7,298 yards','Lake Saguling views','Spacious clubhouse, dining & spa']}},
  {id:'dago-heritage', name:'Dago Heritage 1917', short:'DH', region:'utara', holes:18, par:70, year:1917, yk:'since',
   area:{id:'Dago, Bandung Utara',en:'Dago, North Bandung'},
   dist:{id:'± 20 menit dari pusat kota',en:'About 20 minutes from the city centre'},
   desc:{id:'Lapangan ikonik sejak 1917 di Dago Atas (18 hole, par 70, ±5.677 yard). Menyuguhkan hawa pegunungan (950–1.065 mdpl), rimbunan pinus, dan kontur berbukit yang menguji ketepatan pukulan.',
         en:'An iconic course in upper Dago since 1917 (18 holes, par 70, about 5,677 yards), with cool mountain air at 950–1,065 metres, stands of pine, and hilly terrain that tests every shot.'},
   hl:{id:['±5.677 yard','Ketinggian 950–1.065 mdpl','Rimbunan pinus, kontur berbukit'],en:['About 5,677 yards','950–1,065 m above sea level','Pine-lined, hilly terrain']}},
  {id:'mountain-view', name:'Mountain View Golf Club', short:'MV', region:'utara', holes:18, par:72, year:2001, yk:'opened',
   area:{id:'Dago Pakar, Bandung Utara',en:'Dago Pakar, North Bandung'},
   dist:{id:'± 20 menit dari pusat kota',en:'About 20 minutes from the city centre'},
   desc:{id:'Dirancang Peter Thomson dan Ross Perrett, lapangan perbukitan ini mengutamakan akurasi dibanding jarak. Sebagian besar par 4 berbentuk dogleg, dengan latar pegunungan di sekelilingnya.',
         en:'Designed by Peter Thomson and Ross Perrett, this hillside course rewards accuracy over distance. Most of the par 4s are doglegs, set against the surrounding mountains.'},
   hl:{id:['Desain Peter Thomson','Tantangan risk and reward','Driving range'],en:['Peter Thomson design','Risk-and-reward layout','Driving range']}},
  {id:'poltak', name:'Poltak Golf', short:'PL', region:'utara', holes:null, par:null, year:null,
   area:{id:'Lembang, Bandung Barat',en:'Lembang, West Bandung'},
   dist:{id:'Kawasan dataran tinggi Lembang',en:'In the Lembang highlands'},
   desc:{id:'Lapangan di dataran tinggi Lembang dengan udara sejuk dan suasana hijau khas Bandung utara. Pilihan yang tenang untuk sesi golf santai, dekat dengan destinasi wisata Lembang.',
         en:'A course in the cool Lembang highlands, wrapped in the greenery of north Bandung. A quiet choice for a relaxed round, close to Lembang\'s popular attractions.'},
   hl:{id:['Udara sejuk dataran tinggi','Dekat wisata Lembang','Suasana tenang'],en:['Cool highland air','Close to Lembang attractions','Quiet setting']}},
  {id:'giri-gahana', name:'Bandung Giri Gahana', short:'GG', region:'timur', holes:18, par:72, year:1989, yk:'opened',
   area:{id:'Jatinangor, Sumedang',en:'Jatinangor, Sumedang'},
   dist:{id:'± 45 menit via Tol Padaleunyi',en:'About 45 minutes via the Padaleunyi toll road'},
   desc:{id:'Karya Michael Coates & Associates di ketinggian sekitar 900 mdpl. Terdiri dari dua sembilan hole: Giri yang rindang dengan fairway lebar, dan Gahana dengan kontur naik turun yang dramatis. Fairway dan green memakai rumput bent.',
         en:'A Michael Coates & Associates design at around 900 metres above sea level, with two nines: the tree-lined Giri with generous fairways, and the Gahana with dramatic elevation changes. Fairways and greens are bent grass.'},
   hl:{id:['7.176 yard dari tee championship','Rumput bent','Resort di puncak bukit'],en:['7,176 yards from the back tees','Bent grass','Hilltop resort']}},
  {id:'the-manor', name:'The Manor Golf & Estate', short:'TM', region:'jakarta', holes:18, par:72, year:1999, yk:'opened',
   area:{id:'Soewarna, Soekarno-Hatta',en:'Soewarna, Soekarno-Hatta'},
   dist:{id:'± 15 menit dari Bandara Soekarno-Hatta',en:'About 15 minutes from Soekarno-Hatta Airport'},
   desc:{id:'Pilihan ideal bagi tamu yang baru mendarat atau akan terbang. Lapangan ini pernah menjadi tuan rumah Indonesia Open (European Tour) pada 2005 dan 2008. Hole andalannya, par 4 nomor 4, dimainkan melintasi laguna menuju green di semenanjung sempit.',
         en:'Ideal for guests who have just landed or are about to fly out. The course hosted the European Tour\'s Indonesian Open in 2005 and 2008. Its signature par-4 4th is played across a lagoon to a narrow peninsula green.'},
   hl:{id:['Tuan rumah Indonesia Open','Dekat Bandara Soekarno-Hatta','Driving range & golf academy'],en:['Former Indonesian Open host','Near Soekarno-Hatta Airport','Driving range & golf academy']}}
];
var PKGS = [
  {id:'daytrip', sig:true, name:'Golf Day Trip', dur:{id:'1 hari',en:'1 day'},
   desc:{id:'Main sehari di lapangan pilihan Anda, berangkat dan pulang dengan nyaman.',en:'A full day at the course of your choice, with a comfortable ride there and back.'},
   incl:{id:['Transport pulang-pergi dengan chauffeur','Green fee dan caddie','Makan siang','Untuk 1 flight (maksimal 4 golfer)'],en:['Return transport with chauffeur','Green fee and caddie','Lunch','For one flight of up to four golfers']}},
  {id:'weekend', name:'Golf Weekend', dur:{id:'2 hari 1 malam',en:'2 days, 1 night'},
   desc:{id:'Dua lapangan berbeda dalam satu akhir pekan, dengan malam santai di Bandung.',en:'Two different courses in one weekend, with a relaxed evening in Bandung.'},
   incl:{id:['2 lapangan pilihan','Hotel 1 malam','Transport selama trip','Green fee, caddie, dan makan'],en:['2 courses of your choice','1 hotel night','Transport throughout','Green fees, caddies, and meals']}},
  {id:'getaway', name:'Golf Getaway', dur:{id:'3 hari 2 malam',en:'3 days, 2 nights'},
   desc:{id:'Paket liburan golf lengkap dari bandara sampai ke fairway, khusus untuk tamu luar kota.',en:'A complete golf holiday from the airport to the fairway, designed for out-of-town guests.'},
   incl:{id:['Jemput di bandara atau stasiun Whoosh','3 lapangan pilihan','Hotel 2 malam','Sore bebas untuk kuliner dan belanja'],en:['Pickup at the airport or Whoosh station','3 courses of your choice','2 hotel nights','Free afternoons for dining and shopping']}},
  {id:'corporate', name:'Corporate Golf Day', dur:{id:'Sesuai kebutuhan',en:'Tailored'},
   desc:{id:'Hari bermain golf atau mini turnamen eksklusif yang dirancang khusus untuk perusahaan, klien, dan relasi bisnis dalam suasana yang santai namun tetap profesional.',en:'An exclusive golf day or mini tournament designed for companies, clients, and business partners, relaxed yet professional.'},
   incl:{id:['Koordinasi lapangan dan tee time','Transport rombongan Hiace Premio Luxury','Beberapa flight sekaligus','Disusun per proposal'],en:['Course and tee time coordination','Group transport by Hiace Premio Luxury','Multiple flights at once','Tailored in a proposal']}}
];
var GOLFERS = [['1','1'],['2','2'],['3','3'],['4','4'],['5-8','5–8'],['9-12','9–12'],['13+','13+']];
var GT = 'flight', crRegion = 'all';
var PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
function courseById(id){return COURSES.filter(function(c){return c.id===id;})[0]||null;}
function regionLabel(id){var r=REGIONS.filter(function(x){return x.id===id;})[0];return r?L(r.label):'';}
function crStats(c){
  if(!c.holes) return '';
  return '<ul class="crs-stats"><li><b>'+c.holes+'</b><span>'+t('holes')+'</span></li><li><b>'+c.par+'</b><span>'+t('par')+'</span></li><li><b>'+c.year+'</b><span>'+t(c.yk)+'</span></li></ul>';
}
function crMedia(c,cls){
  return '<div class="'+cls+'"><div class="crs-ph" aria-hidden="true"><span>'+c.short+'</span></div>'+(c.nophoto?'':'<img src="assets/golf/'+c.id+'.jpg" alt="'+c.name+'" loading="lazy" onerror="this.remove()">')+'</div>';
}
function renderCrFilters(){
  var el=$('crFilters'); if(!el) return;
  el.innerHTML = REGIONS.map(function(r){return '<button class="chip'+(r.id===crRegion?' on':'')+'" onclick="setCrRegion(\''+r.id+'\')">'+L(r.label)+'</button>';}).join('');
}
function setCrRegion(r){crRegion=r;renderCrFilters();renderCourses();}
function renderCourses(){
  var el=$('courseGrid'); if(!el) return;
  var list = crRegion==='all' ? COURSES : COURSES.filter(function(c){return c.region===crRegion;});
  el.innerHTML = list.map(function(c){
    return '<article class="crs" id="crs-'+c.id+'">'+
      crMedia(c,'crs-media')+
      '<div class="crs-body">'+
        '<span class="crs-region">'+regionLabel(c.region)+'</span>'+
        '<h3>'+c.name+'</h3>'+
        '<p class="crs-area">'+PIN+'<span>'+L(c.area)+' · '+L(c.dist)+'</span></p>'+
        crStats(c)+
        '<ul class="crs-hl">'+L(c.hl).map(function(h){return '<li>'+h+'</li>';}).join('')+'</ul>'+
        '<div class="crs-foot"><button class="btn btn-primary btn-sm" onclick="golfPick(\''+c.id+'\')">'+t('bookTee')+'</button><button class="btn btn-out btn-sm" onclick="golfAsk(\''+c.id+'\')">'+t('askBtn')+'</button></div>'+
      '</div></article>';
  }).join('');
}
function renderPackages(){
  var el=$('pkgGrid'); if(!el) return;
  el.innerHTML = PKGS.map(function(p){
    return '<article class="gpk'+(p.sig?' pk-sig':'')+'">'+
      '<div class="pk-top"><span class="pk-dur">'+L(p.dur)+'</span>'+(p.sig?'<span class="pk-badge">'+t('pkgSig')+'</span>':'')+'</div>'+
      '<h3>'+p.name+'</h3><p class="pk-desc">'+L(p.desc)+'</p>'+
      '<ul class="pk-incl">'+L(p.incl).map(function(i){return '<li>'+I.check+i+'</li>';}).join('')+'</ul>'+
      '<div class="pk-foot"><button class="btn '+(p.sig?'btn-light':'btn-primary')+' btn-sm" onclick="golfPkg(\''+p.id+'\')">'+t('pkgBook')+'</button><button class="btn btn-sm '+(p.sig?'btn-ghost':'btn-out')+'" onclick="pkgAsk(\''+p.id+'\')">'+t('pkgAsk')+'</button></div>'+
    '</article>';
  }).join('');
}
function golferLabel(v){
  if(v==='13+') return '13+ '+t('golfers')+' ('+t('group')+')';
  if(v.indexOf('-')>-1){var f=v==='5-8'?2:3;return v.replace('-','–')+' '+t('golfers')+' ('+f+' '+t('flights')+')';}
  return v+' '+(v==='1'?t('golfer'):t('golfers'));
}
function fillGolf(){
  if(!$('gForm')) return;
  var pk=$('gPkg').value, cr=$('gCourse').value, gg=$('gGolfers').value||'4', car=$('gCar').value||'alphard';
  $('gPkg').innerHTML = PKGS.map(function(p){return opt(p.id,p.name+' · '+L(p.dur),p.id===pk);}).join('');
  $('gCourse').innerHTML = opt('',t('anyCourse'),!cr) + COURSES.map(function(c){return opt(c.id,c.name+' · '+L(c.area),c.id===cr);}).join('');
  $('gGolfers').innerHTML = GOLFERS.map(function(g){return opt(g[0],golferLabel(g[0]),g[0]===gg);}).join('');
  $('gCar').innerHTML = CARS.map(function(c){return opt(c.id,c.name+' ('+c.seat+' '+t('seats')+')',c.id===car);}).join('');
}
function setGType(tp){
  GT=tp;
  document.querySelectorAll('#gForm .seg button').forEach(function(b){var on=b.getAttribute('data-gtype')===tp;b.classList.toggle('on',on);b.setAttribute('aria-checked',on);});
  $('gPkgWrap').hidden = tp!=='package';
}
function toggleGTransport(){$('gCarWrap').hidden=!$('gTransport').checked;}
function golfPick(id){if(!$('gForm'))return;setGType('flight');$('gCourse').value=id;golfReset();nav('pesan-golf');}
function golfPkg(id){if(!$('gForm'))return;setGType('package');$('gPkg').value=id;golfReset();nav('pesan-golf');}
function golfAsk(id){var c=courseById(id);if(!c)return false;window.open('https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent(t('waAskCourse').replace('{c}',c.name)),'_blank','noopener');return false;}
function pkgAsk(id){var p=PKGS.filter(function(x){return x.id===id;})[0];if(!p)return false;window.open('https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent(t('waAskPkg').replace('{p}',p.name)),'_blank','noopener');return false;}
function selText(id){var s=$(id);return s.options[s.selectedIndex]?s.options[s.selectedIndex].text:'';}
function golfSubmit(ev){
  ev.preventDefault();
  var d=$('gDate'), n=$('gName'), p=$('gPhone');
  var okp=p.value.replace(/[^0-9]/g,'').length>=9;
  d.parentNode.classList.toggle('err',!d.value); n.parentNode.classList.toggle('err',!n.value.trim()); p.parentNode.classList.toggle('err',!okp);
  if(!d.value||!n.value.trim()||!okp){toast(t('gNeed'));return;}
  var M=[t('waGolfHi'),'','*'+t('wType')+':* '+(GT==='package'?t('gTPkg'):t('gTFlight'))];
  if(GT==='package') M.push('*'+t('wPkg')+':* '+selText('gPkg'));
  M.push('*'+t('wCourse')+':* '+selText('gCourse'),'*'+t('wDate')+':* '+fmtDate(d.value),'*'+t('wSession')+':* '+selText('gSession'),'*'+t('wGolfers')+':* '+selText('gGolfers'),'*'+t('wFrom')+':* '+selText('gFrom'),
    '*'+t('wTransport')+':* '+($('gTransport').checked?selText('gCar'):t('wNo')));
  var note=$('gNote').value.trim(); if(note) M.push('*'+t('wNote')+':* '+note);
  M.push('','*'+t('waName')+':* '+n.value.trim(),'*WhatsApp:* '+p.value.trim());
  var url='https://wa.me/'+ADMIN_WA+'?text='+encodeURIComponent(M.join('\n'));
  $('gWaLink').href=url; $('gOk').hidden=false; $('gOk').scrollIntoView({behavior:'smooth',block:'center'});
  ctTrack('Lead',{content_name:'Golf Form',content_category:'golf'});
  try{window.open(url,'_blank','noopener');}catch(e){}
}
function golfReset(){var o=$('gOk');if(o)o.hidden=true;}
function fmtDate(v){try{return new Date(v+'T00:00').toLocaleDateString(t('locale'),{weekday:'long',day:'numeric',month:'long',year:'numeric'});}catch(e){return v;}}

/* landing strips */
function renderLanding(){
  var a=$('lpCourses'), b=$('lpFleet');
  if(a) a.innerHTML = '<div class="hs-track">'+COURSES.map(function(c){
    return '<a class="hc" href="golf.html#crs-'+c.id+'">'+crMedia(c,'hc-media')+
      '<div class="hc-tx"><span class="crs-region">'+regionLabel(c.region)+'</span><h3>'+c.name+'</h3><p>'+L(c.area)+'</p>'+
      (c.holes?'<span class="hc-meta">'+c.holes+' '+t('holes')+' · '+t('par')+' '+c.par+'</span>':'')+'</div></a>';
  }).join('')+'</div>';
  if(b) b.innerHTML = '<div class="hs-track">'+CARS.map(function(c){
    return '<a class="hf" href="rental.html#armada"><div class="hf-img"><img src="'+c.img+'" alt="'+c.name+'" loading="lazy"></div>'+
      '<div class="hf-tx"><span class="crs-region">'+L(c.kelas)+'</span><h3>'+c.name+'</h3><p>'+t('fromP')+' <b class="tnum">'+rupiah(c.price)+'</b></p></div></a>';
  }).join('')+'</div>';
}

function renderTours(){
  var g=$('tourGrid'); if(!g) return;
  g.innerHTML = TOURS.filter(function(x){return x.id!=='golf';}).map(function(x){
    return '<article class="tc'+(x.soon?' tc-soon':'')+'">'+
      '<div class="tc-head"><span class="tc-ic">'+svg(IC[x.ic])+'</span>'+(x.soon?'<span class="tc-badge">'+t('soon')+'</span>':'')+'</div>'+
      '<h3>'+x.name+'</h3><p class="tc-desc">'+L(x.desc)+'</p>'+
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
var PAGE = document.body.getAttribute('data-page') || 'rental';
var PAGE_META = {
  landing:{id:['Cabin Trans · Golf, Tour & Rental Mobil Premium','Cabin Trans (PT. Cakra Bintang Transindo) melayani paket golf dan tee time, tour, serta rental mobil premium dengan chauffeur profesional. Alphard, Hiace Premio Luxury, Innova Zenix.'],
           en:['Cabin Trans · Golf, Tours & Premium Car Rental','Cabin Trans (PT. Cakra Bintang Transindo) offers golf packages and tee times, tours, and premium car rental with professional chauffeurs. Alphard, Hiace Premio Luxury, Innova Zenix.']},
  golf:{id:['Paket Golf & Tee Time dengan Transport Premium · Cabin Trans','Paket golf dan tiket flight di lapangan pilihan Bandung dan Jakarta: Parahyangan, Dago Heritage 1917, Mountain View, Poltak, Bandung Giri Gahana, The Manor. Lengkap dengan transport premium Cabin Trans.'],
        en:['Golf Packages & Tee Times with Premium Transport · Cabin Trans','Golf packages and tee times at selected courses in Bandung and Jakarta: Parahyangan, Dago Heritage 1917, Mountain View, Poltak, Bandung Giri Gahana, The Manor. Complete with premium Cabin Trans transport.']},
  tour:{id:['Paket Tour, Corporate Outing & MICE · Cabin Trans','Paket tour dan perjalanan dengan armada dan chauffeur Cabin Trans: private & family trip, open trip, corporate outing, study tour, MICE, dan fishing trip.'],
        en:['Tour Packages, Corporate Outings & MICE · Cabin Trans','Tours and trips with the Cabin Trans fleet and chauffeurs: private & family trips, open trips, corporate outings, study tours, MICE, and fishing trips.']},
  rental:{id:['Rental Alphard & Mobil Premium dengan Chauffeur · Cabin Trans','Rental mobil premium dengan chauffeur profesional: Alphard, Hiace Premio Luxury, Hiace Commuter, Innova Zenix, Innova Reborn. Airport transfer, city tour, dan mobilitas korporat. Reservasi online.'],
          en:['Alphard & Premium Car Rental with Chauffeur · Cabin Trans','Premium car rental with professional chauffeurs: Alphard, Hiace Premio Luxury, Hiace Commuter, Innova Zenix, Innova Reborn. Airport transfers, city tours, and corporate mobility. Book online.']}
};
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
  var pm=(PAGE_META[PAGE]||PAGE_META.rental)[LANG];
  document.title = pm[0];
  var md=document.querySelector('meta[name=description]'); if(md) md.setAttribute('content',pm[1]);
  document.documentElement.lang=LANG;
  document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed', b.getAttribute('data-lang')===LANG);});
  applyStatic();
  if($('svcGrid')) renderServices();
  renderTours(); renderCrFilters(); renderCourses(); renderPackages(); fillGolf(); renderLanding();
  if($('cars')){ renderFilters(); renderCars(); }
  if($('qSvc')) fillSelects();
  if($('chooseCars')) renderChoose();
  if($('bStart') && step===2) updateDurNote();
  if($('summary') && step===5) renderSummary();
  if(booking.name && $('sucName')) $('sucName').textContent = booking.name;
  if(!silent){try{localStorage.setItem('ct-lang',LANG);}catch(e){}}
}

/* ================= NAVIGASI ================= */
var SECTIONS = Array.prototype.map.call(document.querySelectorAll('main section[id]'),function(s){return s.id;});
function showView(v){document.querySelectorAll('.view').forEach(function(el){el.classList.toggle('active', el.id==='view-'+v);});}
function nav(target){
  closeMenu();
  if(target==='reservasi'){
    if(!$('view-booking')){ location.href='rental.html#reservasi'; return false; }
    showView('booking'); window.scrollTo({top:0,behavior:'smooth'}); setActive('');
    try{history.replaceState(null,'','#reservasi');}catch(e){}
    return false;
  }
  var home=$('view-home'), wasHidden = home ? !home.classList.contains('active') : false;
  if(home) showView('home');
  var el = $(target);
  if(!el){ if(['tentang','layanan','armada','keunggulan','alur'].indexOf(target)>-1) location.href='rental.html#'+target; return false; }
  if(target==='beranda') window.scrollTo({top:0,behavior: wasHidden?'auto':'smooth'});
  else el.scrollIntoView({behavior: wasHidden?'auto':'smooth', block:'start'});
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
      if(e.isIntersecting && (!$('view-home') || $('view-home').classList.contains('active'))) setActive(e.target.id);
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
  ctTrack('Lead',{content_name:'Rental Booking',content_category:'rental'});
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
if($('qDate')){$('qDate').value=today();$('qDate').min=today();}
if($('gDate')){$('gDate').min=today();}
if($('bStart')){$('bStart').addEventListener('change',updateDurNote);$('bEnd').addEventListener('change',updateDurNote);}
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.getAttribute&&e.target.getAttribute('role')==='button'){e.preventDefault();e.target.click();}});
watchSections();
(function(){var h=(location.hash||'').replace('#','');if(!h)return;
  if(h==='reservasi'||SECTIONS.indexOf(h)>-1){setTimeout(function(){nav(h);},60);return;}
  var el=$(h); if(el) setTimeout(function(){el.scrollIntoView({block:'start'});},120);})();
/* header: transparan di atas hero landing, solid saat scroll */
(function(){var hd=$('siteHeader'); if(!hd||PAGE!=='landing') return;
  var f=function(){hd.classList.toggle('scrolled', window.scrollY>40 || $('mobileMenu').classList.contains('open'));};
  window.addEventListener('scroll',f,{passive:true}); document.addEventListener('click',function(){setTimeout(f,0);}); f();})();
/* landing: slideshow lambat, sinkron dengan pintu Golf / Tour / Rental */
(function(){if(PAGE!=='landing')return;var box=$('lpSlides');if(!box)return;
  var sl=box.querySelectorAll('.lp-slide'),doors=document.querySelectorAll('.lpa-door'),nav_=document.querySelector('.lpa-doors');
  var DUR=5500,cur=0,t=null,paused=false,
      still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(nav_)nav_.style.setProperty('--lp-dur',DUR+'ms');
  function show(i){if(i===cur)return;var old=sl[cur];
    old.classList.remove('is-on');old.classList.add('leaving');setTimeout(function(){old.classList.remove('leaving');},1500);
    sl[i].classList.add('is-on');
    for(var k=0;k<doors.length;k++)doors[k].classList.toggle('on',k===i);
    document.querySelectorAll('.lp-rot').forEach(function(r){var it=r.querySelectorAll('.lp-ri');
      for(var k=0;k<it.length;k++){it[k].classList.toggle('is-on',k===i);if(r.tagName==='H1'){if(k===i)it[k].removeAttribute('aria-hidden');else it[k].setAttribute('aria-hidden','true');}}});
    cur=i;}
  function restartBar(){var d=doors[cur];if(!d)return;d.classList.remove('on');void d.offsetWidth;d.classList.add('on');}
  function tick(){clearTimeout(t);if(still||paused||document.hidden)return;
    t=setTimeout(function(){show((cur+1)%sl.length);tick();},DUR);}
  for(var k=0;k<doors.length;k++)(function(i){var d=doors[i];
    d.addEventListener('mouseenter',function(){paused=true;nav_.classList.add('paused');clearTimeout(t);show(i);});
    d.addEventListener('focus',function(){paused=true;nav_.classList.add('paused');clearTimeout(t);show(i);});
  })(k);
  if(nav_){nav_.addEventListener('mouseleave',function(){paused=false;nav_.classList.remove('paused');restartBar();tick();});}
  document.addEventListener('visibilitychange',function(){if(!document.hidden){restartBar();tick();}else clearTimeout(t);});
  if(still&&nav_)nav_.classList.add('paused');
  tick();})();

/* Tracking: Meta Pixel (Lead = form golf/booking rental, Contact = klik WhatsApp lain) */
var __ctLeadAt=0;
function ctTrack(ev,p){try{if(ev==='Lead')__ctLeadAt=Date.now();if(window.fbq)fbq('track',ev,p||{});if(window.dataLayer)dataLayer.push({event:'ct_'+ev.toLowerCase(),ct_params:p||{}});}catch(e){}}
(function(){var o=window.open;window.open=function(u){try{if(typeof u==='string'&&u.indexOf('wa.me/')>-1&&Date.now()-__ctLeadAt>1500)ctTrack('Contact',{content_name:'WhatsApp',page:PAGE});}catch(e){}return o.apply(window,arguments);};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me/"]');if(a)ctTrack('Contact',{content_name:'WhatsApp',page:PAGE});},true);})();
