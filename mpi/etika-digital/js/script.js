/* ##############################################################
   #  BAGIAN A — KONFIGURASI (EDIT DI SINI SAJA)               #
   ############################################################## */

const CONFIG = {
  judul:    "Kesadaran dan Etika Digital",
  subJudul: "Informatika Fase D - Kelas VII",
  fase:     "Fase D • Kelas VII",
  mapel:    "Informatika",
  unit:     "Dampak Sosial Informatika",
  subUnit:  "Kesadaran dan Etika Digital",
  tp:       "Peserta didik mampu memahami dan menerapkan prinsip toleransi, empati, etika digital, dan netiket dalam berinteraksi di ruang digital serta mengambil keputusan bertanggung jawab.",
  logo:     "./asset/img/logo.png",
  bgJudul:  "./asset/img/bg_judul.jpg",
  profil: {
    nama:     "Alfathony",
    instansi: "SMPS Tunas Bangsa",
    jenis:    "Media Pembelajaran Interaktif (MPI)",
    foto:     "./asset/img/profil.png"
  }
};

const MATERI = [
  { judul:"Netiket (Etika Berinternet)", img:"./asset/img/materi_1.png",
    intro:"Sama seperti di dunia nyata, berinteraksi di ruang digital juga memerlukan tata krama.",
    isi:"<p>Netiket (Network Etiquette) adalah norma dan aturan dalam berkomunikasi di internet. Di balik layar gawai, kita tetap berhadapan dengan manusia sungguhan yang memiliki perasaan.</p><ul><li><b>Gunakan bahasa yang sopan:</b> Hindari kata-kata kasar atau menyinggung.</li><li><b>Jangan memakai huruf kapital semua:</b> Mengetik dengan huruf kapital sering dianggap sebagai bentuk teriakan atau marah.</li><li><b>Hargai privasi orang lain:</b> Jangan sembarangan menyebarkan foto atau data teman.</li></ul>",
    kuis:{ tanya:"Mengapa kita sebaiknya tidak mengetik menggunakan huruf kapital semua saat chatting?", o:["Dianggap sedang berteriak/marah","Agar tulisan lebih mudah dibaca"], j:0 } },

  { judul:"Toleransi dan Empati Digital", img:"./asset/img/materi_2.png",
    intro:"Dunia digital mempertemukan kita dengan miliaran orang dari latar belakang yang berbeda.",
    isi:"<p>Toleransi berarti kita menghargai perbedaan pendapat, budaya, dan keyakinan orang lain di internet. Sementara itu, empati adalah kemampuan untuk merasakan apa yang orang lain rasakan.</p><ul><li><b>Berpikir sebelum berkomentar:</b> Tanyakan pada diri sendiri, 'Apakah komentar ini akan menyakiti hatinya?'</li><li><b>Dukung hal positif:</b> Berikan apresiasi atau semangat pada karya orang lain, bukan malah menghujat.</li><li><b>Hindari debat kusir:</b> Jika ada perbedaan pendapat, berdiskusilah dengan kepala dingin.</li></ul>",
    kuis:{ tanya:"Contoh sikap empati saat melihat teman sedang bersedih di media sosial adalah...", o:["Meninggalkan komentar yang menyemangati","Mengabaikan dan menertawakannya"], j:0 } },

  { judul:"Cyberbullying & Jejak Digital", img:"./asset/img/materi_3.png",
    intro:"Apa yang kita lakukan di internet akan terekam dan sangat sulit dihilangkan.",
    isi:"<p><i>Cyberbullying</i> (perundungan siber) adalah tindakan menyakiti, mengejek, atau mengancam orang lain melalui media digital. Tindakan ini tidak hanya melukai mental korban, tapi juga merusak <b>Jejak Digital</b> pelaku.</p><ul><li>Jejak digital adalah rekam jejak aktivitas kita (komentar, foto, status) di internet.</li><li>Jejak digital yang buruk dapat merugikan masa depan kita, seperti kesulitan saat mendaftar sekolah atau pekerjaan.</li><li>Jika melihat perundungan, jangan ikut-ikutan. Laporkan atau blokir pelaku!</li></ul>",
    kuis:{ tanya:"Apakah jejak digital kita di internet bisa dihapus sepenuhnya dengan mudah?", o:["Tentu saja bisa dihapus kapan saja","Sangat sulit dan jejaknya akan menetap"], j:1 } },

  { judul:"Keputusan yang Bertanggung Jawab", img:"./asset/img/materi_4.png",
    intro:"Berpikir kritis adalah kunci agar kita aman dan nyaman di ruang digital.",
    isi:"<p>Setiap hari kita menerima banyak informasi, namun tidak semuanya benar. Kita harus bisa mengambil keputusan yang tepat saat menghadapi berbagai situasi komunikasi digital.</p><ul><li><b>Saring sebelum Sharing:</b> Jangan mudah menyebarkan berita yang belum jelas kebenarannya (Hoaks).</li><li><b>Lindungi data pribadimu:</b> Jangan pernah membagikan password, PIN, atau alamat rumah kepada orang yang tidak dikenal.</li><li><b>Berani berkata tidak:</b> Tolak ajakan dari teman online jika itu melanggar aturan atau membuatmu tidak nyaman.</li></ul>",
    kuis:{ tanya:"Apa yang harus kita lakukan jika mendapat pesan berisi informasi yang mengejutkan?", o:["Langsung disebarkan ke grup keluarga","Mengecek kebenaran sumbernya terlebih dahulu"], j:1 } }
];

const dataBermain = [
  { t:'jodoh', sub:'Menjodohkan Istilah', ins:'Jodohkan istilah etika digital dengan makna yang tepat!',
    pairs:[
      {n:1,teks:'Etika berinternet'},
      {n:2,teks:'Perundungan di dunia maya'},
      {n:3,teks:'Berita bohong / palsu'}
    ],
    imgs:[
      {n:1,i:'./asset/img/jodoh1_1.png',name:'Netiket'},
      {n:2,i:'./asset/img/jodoh1_2.png',name:'Cyberbullying'},
      {n:3,i:'./asset/img/jodoh1_3.png',name:'Hoaks'}
    ] },

  { t:'klik', sub:'Perilaku Digital', ins:'Pilih gambar yang mencerminkan perilaku positif di ruang digital!',
    opsi:[
      {imgPath:'./asset/img/klik1_1.png', t:'Diskusi Sopan', b:true,  msg:'Tepat sekali! Menghargai pendapat orang lain sangat penting.'},
      {imgPath:'./asset/img/klik1_2.png', t:'Menghujat', b:false, msg:'Menghujat adalah contoh perilaku tidak beretika.'},
      {imgPath:'./asset/img/klik1_3.png', t:'Menyebar Hoaks', b:false, msg:'Menyebarkan hoaks merugikan banyak orang.'},
      {imgPath:'./asset/img/klik1_4.png', t:'Mengejek Fisik', b:false, msg:'Ini termasuk cyberbullying!'}
    ] },

  { t:'urut', sub:'Menyikapi Hoaks', ins:'Urutkan langkah yang benar saat menerima berita mengejutkan!',
    urut:[
      'Membaca keseluruhan isi berita dengan tenang',
      'Mengecek keaslian sumber dan fakta berita',
      'Memutuskan informasi tersebut benar atau salah',
      'Menghapus pesan jika terbukti hoaks'
    ] },

  { t:'kumpul', sub:'Kumpulkan Hal Positif', ins:'Ketuk hanya kata yang MENCERMINKAN EMPATI! Hindari kata negatif.',
    benar:'./asset/img/kumpul1_benar.png',
    salah:[
      './asset/img/kumpul1_salah1.png',
      './asset/img/kumpul1_salah2.png'
    ] },

  { t:'sambung', sub:'Prinsip Bermedsos', ins:'Lengkapi pedoman membagikan informasi!',
    hasil:'SARING SEBELUM KAMU SHARING',
    steps:[
      { prev:'Saring ...', benar:'Sebelum', salah:['Sesudah','Sambil'] },
      { prev:'Saring Sebelum ...', benar:'Kamu', salah:['Mereka','Kita'] },
      { prev:'Saring Sebelum Kamu ...', benar:'Sharing', salah:['Marah','Makan'] }
    ] },

  { t:'jodoh', sub:'Sebab Akibat', ins:'Jodohkan tindakan dengan konsekuensinya!',
    pairs:[
      {n:1,teks:'Membagikan password sembarangan'},
      {n:2,teks:'Memposting komentar kasar'},
      {n:3,teks:'Membantu teman yang dibully online'}
    ],
    imgs:[
      {n:1,i:'./asset/img/jodoh2_1.png',name:'Akun Diretas'},
      {n:2,i:'./asset/img/jodoh2_2.png',name:'Jejak Digital Buruk'},
      {n:3,i:'./asset/img/jodoh2_3.png',name:'Membangun Empati'}
    ] },

  { t:'klik', sub:'Keputusan Aman', ins:'Mana data yang AMAN untuk dibagikan di profil publikmu?',
    opsi:[
      {imgPath:'./asset/img/klik2_1.png', t:'Hobi & Minat', b:true,  msg:'Benar! Hobi adalah informasi umum yang aman dibagikan.'},
      {imgPath:'./asset/img/klik2_2.png', t:'Alamat Rumah', b:false, msg:'Bahaya! Alamat rumah bisa mengundang kejahatan.'},
      {imgPath:'./asset/img/klik2_3.png', t:'Nomor Telepon', b:false, msg:'Bisa digunakan untuk penipuan.'},
      {imgPath:'./asset/img/klik2_4.png', t:'Nama Ibu Kandung', b:false, msg:'Data ini rahasia untuk keamanan perbankan.'}
    ] },

  { t:'urut', sub:'Jika Dibully', ins:'Urutkan langkah yang tepat jika kamu menjadi korban perundungan siber!',
    urut:[
      'Tetap tenang dan jangan membalas dengan emosi',
      'Simpan bukti berupa tangkapan layar (screenshot)',
      'Blokir akun yang melakukan perundungan',
      'Laporkan kepada orang tua atau guru'
    ] },

  { t:'kumpul', sub:'Jejak Digital Positif', ins:'Ketuk ikon yang membangun jejak digital POSITIF!',
    benar:'./asset/img/kumpul2_benar.png',
    salah:[
      './asset/img/kumpul2_salah1.png',
      './asset/img/kumpul2_salah2.png'
    ] },

  { t:'sambung', sub:'Toleransi Digital', ins:'Lengkapi kalimat tentang toleransi!',
    hasil:'BERBEDA PENDAPAT ITU WAJAR, TETAP HARGAI SESAMA',
    steps:[
      { prev:'Berbeda Pendapat Itu ...', benar:'Wajar', salah:['Salah','Aneh'] },
      { prev:'Berbeda Pendapat Itu Wajar, Tetap ...', benar:'Hargai', salah:['Benci','Maki'] },
      { prev:'Berbeda Pendapat Itu Wajar, Tetap Hargai ...', benar:'Sesama', salah:['Musuh','Robot'] }
    ] }
];

const dtLatih = [
  { t:'pg',
    stimulus:'<b>Studi Kasus:</b> Budi menerima pesan berantai di grup obrolan kelas yang menyebutkan bahwa besok sekolah diliburkan karena ada perbaikan gedung. Pesan tersebut tidak mencantumkan sumber resmi dari sekolah atau wali kelas.',
    soal:'Tindakan yang paling menunjukkan keputusan bertanggung jawab dari Budi adalah...',
    opsi:[
      'Langsung meneruskan pesan tersebut ke grup ekstrakurikuler.',
      'Mengabaikannya dan membiarkan teman lain kebingungan.',
      'Menanyakan kebenaran informasi tersebut langsung kepada wali kelas.',
      'Memarahi orang yang mengirim pesan di dalam grup tersebut.',
      'Menghapus aplikasi agar tidak mendapat berita palsu lagi.'
    ],
    j:2,
    msg:'Keputusan yang tepat saat menerima informasi yang diragukan adalah melakukan konfirmasi ke sumber yang berwenang (wali kelas).' },

  { t:'bs',
    soal:'Jejak digital (digital footprint) kita di internet, seperti foto memalukan atau komentar kasar, sangat mudah dihapus secara permanen sehingga tidak akan terlihat lagi oleh orang lain di masa depan.',
    j:false,
    msg:'Pernyataan tersebut <b>SALAH</b>. Jejak digital sangat sulit bahkan hampir mustahil dihapus sepenuhnya dari internet.' },

  { t:'drag_word',
    soal:'Kemampuan merasakan apa yang orang lain rasakan di dunia maya disebut <span class="blank-slot" data-id="1">___</span>, sedangkan menghargai perbedaan pandangan disebut <span class="blank-slot" data-id="2">___</span>.',
    w:['Empati','Toleransi','Netiket'],
    j:['Empati','Toleransi'],
    msg:'Empati adalah merasakan perasaan orang lain, dan Toleransi adalah menghargai perbedaan.' },

  { t:'pg_kompleks',
    img:'./asset/img/soal_4.png',
    soal:'Pilih tindakan mana saja yang termasuk dalam menerapkan <b>Netiket</b> (tata krama internet) yang baik! (Pilih 3)',
    opsi:[
      'Menggunakan huruf kapital semua saat marah di kolom komentar.',
      'Meminta izin sebelum menandai (tag) foto teman.',
      'Membaca syarat dan ketentuan sebelum bergabung di sebuah forum.',
      'Menyebarkan rahasia teman yang diceritakan lewat pesan pribadi.',
      'Menggunakan kata tolong dan terima kasih saat meminta bantuan online.'
    ],
    j:[1,2,4],
    msg:'Minta izin, patuh pada aturan forum, dan berbahasa sopan adalah bentuk penerapan Netiket.' },

  { t:'jodoh',
    soal:'Jodohkan istilah kejahatan digital dengan pengertiannya!',
    pairs:[
      {n:1,t:'Penipuan untuk mencuri password/data'},
      {n:2,t:'Pesan sampah yang dikirim terus menerus'}
    ],
    imgs:[
      {n:1,i:'./asset/img/latih_jodoh1_1.png',name:'Phishing'},
      {n:2,i:'./asset/img/latih_jodoh1_2.png',name:'Spam'}
    ] },

  { t:'pg',
    soal:'Mengetik kalimat menggunakan HURUF KAPITAL SEMUA dalam komunikasi tertulis di internet sebaiknya dihindari karena...',
    opsi:[
      'Membuat layar komputer cepat rusak.',
      'Sering diartikan sebagai bentuk teriakan atau kemarahan.',
      'Hanya boleh digunakan oleh admin grup.',
      'Memakan kuota internet lebih banyak.',
      'Lebih sulit diketik menggunakan keyboard.'
    ],
    j:1,
    msg:'Dalam Netiket, huruf kapital penuh dianggap sebagai intonasi suara keras atau berteriak.' },

  { t:'bs',
    soal:'Jika kita tidak setuju dengan komentar seseorang di media sosial, hal yang paling etis adalah membalasnya dengan kata-kata kasar agar dia sadar bahwa pendapatnya salah.',
    j:false,
    msg:'Pernyataan tersebut <b>SALAH</b>. Kita harus berdebat dengan sopan tanpa menyerang pribadi atau menggunakan kata kasar.' },

  { t:'pg_kompleks',
    soal:'Dari data-data di bawah ini, manakah yang <b>TIDAK BOLEH</b> kamu bagikan secara publik di media sosial demi keamanan pribadi? (Pilih 2)',
    opsi:[
      'Judul film favoritmu',
      'Nomor Induk Kependudukan (NIK)',
      'Kata sandi (Password) media sosialmu',
      'Ulasan mengenai buku yang kamu baca',
      'Foto pemandangan alam hasil jepretanmu'
    ],
    j:[1,2],
    msg:'Data kredensial (password) dan data pribadi sensitif (NIK) tidak boleh disebar.' },

  { t:'drag_word',
    soal:'Sebelum menyebarkan sebuah informasi, kita harus menerapkan prinsip <span class="blank-slot" data-id="1">___</span> sebelum <span class="blank-slot" data-id="2">___</span> agar tidak ikut menyebarkan hoaks.',
    w:['Saring','Sharing','Hapus'],
    j:['Saring','Sharing'],
    msg:'Prinsip "Saring sebelum Sharing" membantu meminimalisir penyebaran berita palsu.' },

  { t:'jodoh',
    soal:'Pasangkan situasi berikut dengan respons etis yang tepat!',
    pairs:[
      {n:1,t:'Melihat teman diejek di grup'},
      {n:2,t:'Mendapat link mencurigakan'}
    ],
    imgs:[
      {n:1,i:'./asset/img/latih_jodoh2_1.png',name:'Beri dukungan moral'},
      {n:2,i:'./asset/img/latih_jodoh2_2.png',name:'Abaikan dan jangan diklik'}
    ] }
];


/* ##############################################################
   #  BAGIAN B — MESIN APLIKASI (umumnya tidak perlu diubah)   #
   ############################################################## */

/* ---- Helper DOM ---- */

const $ = id => document.getElementById(id);
const $$ = (selector, root=document) => root.querySelectorAll(selector);

const setText = (id, value) => {
  const el=$(id);
  if(el) el.textContent=value;
};

const setSrc = (id, value) => {
  const el=$(id);
  if(el) el.src=value;
};

const setNext = (id, enabled) => {
  const el=$(id);
  if(el) el.disabled=!enabled;
};


/* ---- Placeholder gambar otomatis bila aset belum tersedia ---- */

function imgErr(el){
  el.onerror=null;

  const label=(el.alt||'gambar')
    .replace(/[<>&]/g,'')
    .slice(0,20);

  const svg=
    "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='160'>" +
    "<rect width='100%' height='100%' rx='14' fill='#F1F5F9' stroke='#CBD5E1' stroke-width='3' stroke-dasharray='9'/>" +
    "<text x='50%' y='44%' font-size='44' text-anchor='middle'>🖼️</text>" +
    "<text x='50%' y='74%' font-size='15' font-family='sans-serif' font-weight='bold' text-anchor='middle' fill='#64748B'>" +
    label +
    "</text></svg>";

  el.src="data:image/svg+xml;utf8,"+encodeURIComponent(svg);
}


/* ---- Terapkan CONFIG ke tampilan ---- */

function applyConfig(){
  const C=CONFIG;

  const texts={
    'cfg-fase':C.fase,
    'cfg-judul':C.judul,
    'cfg-subjudul':C.subJudul,
    'cfg-judul-menu':C.judul,
    'cfg-mapel':C.mapel,
    'cfg-unit':C.unit,
    'cfg-subunit':C.subUnit,
    'cfg-tp':C.tp,
    'cfg-nama':C.profil.nama,
    'cfg-nama2':C.profil.nama,
    'cfg-instansi':C.profil.instansi,
    'cfg-jenis':C.profil.jenis
  };

  Object.entries(texts)
    .forEach(([id,v])=>setText(id,v));

  setSrc('cfg-logo',C.logo);
  setSrc('cfg-bgjudul',C.bgJudul);
  setSrc('cfg-foto',C.profil.foto);

  document.title=`${C.judul} — MPI`;
}


/* ---- Scaling panggung 16:9 ---- */

const stage=$('stage');

function resizeStage(){
  const w=innerWidth;
  const h=innerHeight;
  const scale=Math.min(w/1280,h/720);

  stage.style.transform=`scale(${scale})`;
  stage.style.left=`${(w-1280*scale)/2}px`;
  stage.style.top=`${(h-720*scale)/2}px`;
}

addEventListener('resize',resizeStage);


/* ---- Audio ---- */

let soundOn=true;
let globalVolume=1;

const AUDIO={};

const AUDIO_FILES={
  bgm:'./asset/audio/bgm.mp3',
  klik:'./asset/audio/sfx_klik.mp3',
  benar:'./asset/audio/sfx_benar.mp3',
  salah:'./asset/audio/sfx_salah.mp3',
  transisi:'./asset/audio/sfx_transisi.mp3',
  bintang:'./asset/audio/sfx_bintang.mp3'
};

function loadAudio(key,src){
  try{
    const a=new Audio(src);

    a.preload='auto';
    AUDIO[key]=a;
  }catch{}
}

function eachAudio(fn){
  Object.entries(AUDIO)
    .forEach(([key,a])=>a&&fn(a,key));
}

Object.entries(AUDIO_FILES)
  .forEach(([key,src])=>loadAudio(key,src));

if(AUDIO.bgm){
  AUDIO.bgm.loop=true;
}

function play(key){
  if(
    !soundOn ||
    globalVolume===0 ||
    !AUDIO[key]
  ){
    return;
  }

  const a=AUDIO[key];

  try{
    a.volume=globalVolume;

    if(key!=='bgm'){
      a.currentTime=0;
    }

    a.play()?.catch(()=>{});
  }catch{}
}

function changeVolume(val){
  globalVolume=Number(val);
  soundOn=globalVolume>0;

  setText(
    'sound-toggle',
    !soundOn
      ? '🔇'
      : globalVolume<.5
        ? '🔉'
        : '🔊'
  );

  eachAudio(
    a=>a.volume=globalVolume
  );

  if(
    soundOn &&
    AUDIO.bgm?.paused
  ){
    play('bgm');
  }
}

function toggleSound(){
  const slider=$('volume-slider');

  if(soundOn){
    soundOn=false;
    slider.value=0;

    setText(
      'sound-toggle',
      '🔇'
    );

    eachAudio((a,key)=>{
      a.volume=0;

      if(key==='bgm'){
        a.pause();
      }
    });
  }else{
    soundOn=true;

    globalVolume=
      globalVolume||1;

    slider.value=globalVolume;

    setText(
      'sound-toggle',
      '🔊'
    );

    eachAudio(
      a=>a.volume=globalVolume
    );

    play('bgm');
  }
}

document.addEventListener(
  'click',
  e=>{
    const t=e.target.closest('[data-sfx]');

    if(
      t &&
      t.dataset.sfx!=='no'
    ){
      play('klik');
    }
  }
);


/* ---- Efek visual ---- */

function triggerSalah(){
  const el=$('efek-salah');

  if(el){
    el.classList.add('nyala');

    setTimeout(
      ()=>el.classList.remove('nyala'),
      50
    );
  }
}

function showConfetti(){
  const colors=[
    '#E63946',
    '#F4A261',
    '#2ECC71',
    '#E74C3C',
    '#ffffff'
  ];

  for(let i=0;i<60;i++){
    const conf=
      document.createElement('div');

    const angle=
      Math.random()*Math.PI*2;

    const velocity=
      100+Math.random()*400;

    conf.className='confetti';

    conf.style.left='50%';
    conf.style.top='50%';

    conf.style.backgroundColor=
      colors[
        Math.floor(
          Math.random()*colors.length
        )
      ];

    conf.style.setProperty(
      '--tx',
      `${Math.cos(angle)*velocity}px`
    );

    conf.style.setProperty(
      '--ty',
      `${Math.sin(angle)*velocity-200}px`
    );

    if(Math.random()>.5){
      conf.style.borderRadius='50%';
    }

    stage.appendChild(conf);

    setTimeout(
      ()=>conf.remove(),
      1500
    );
  }
}


/* ---- Identitas ---- */

let infoMurid={
  nama:'Murid Hebat',
  sekolah:'-'
};

function simpanIdentitas(){
  const nama=
    $('in-nama')
      .value
      .trim();

  const sekolah=
    $('in-sekolah')
      .value
      .trim();

  const pesan=
    $('login-pesan');

  if(!nama){
    pesan.classList.add(
      'is-visible'
    );

    return;
  }

  infoMurid={
    nama,
    sekolah:sekolah||'-'
  };

  pesan.classList.remove(
    'is-visible'
  );

  closeModal('modal-login');
  play('bgm');
  goMenu();
}


/* ---- Utilitas ---- */

function shuffle(arr){
  const a=[...arr];

  for(let i=a.length-1;i>0;i--){
    const j=
      Math.floor(
        Math.random()*(i+1)
      );

    [a[i],a[j]]=[
      a[j],
      a[i]
    ];
  }

  return a;
}

function getOffset(el,parent){
  let top=0;
  let left=0;

  while(
    el &&
    el!==parent
  ){
    top+=el.offsetTop;
    left+=el.offsetLeft;

    el=el.offsetParent;
  }

  return {
    top,
    left
  };
}

function drawLine(
  el1,
  el2,
  containerId
){
  const wrap=$(containerId);

  if(!wrap){
    return;
  }

  let svg=
    wrap.querySelector(
      '.jodoh-svg'
    );

  if(!svg){
    svg=
      document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );

    svg.classList.add(
      'jodoh-svg'
    );

    wrap.appendChild(svg);
  }

  const a=
    getOffset(el1,wrap);

  const b=
    getOffset(el2,wrap);

  const line=
    document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );

  const attrs={
    x1:a.left+el1.offsetWidth,
    y1:a.top+el1.offsetHeight/2,
    x2:b.left,
    y2:b.top+el2.offsetHeight/2,
    stroke:'#27AE60',
    'stroke-width':5,
    'stroke-linecap':'round',
    class:'jodoh-line'
  };

  Object.entries(attrs)
    .forEach(
      ([k,v])=>
        line.setAttribute(k,v)
    );

  svg.appendChild(line);
}

function setProgress(
  fillId,
  labelId,
  cur,
  total
){
  $(fillId).style.width=
    `${cur/total*100}%`;

  setText(
    labelId,
    `${cur}/${total}`
  );
}

function showFb(
  id,
  kind,
  msg
){
  const fb=$(id);

  if(fb){
    fb.className=
      `feedback show ${kind}`;

    fb.innerHTML=msg;
  }
}


/* ---- Router ---- */

function showScreen(id){
  clearKumpul();

  $$('.screen')
    .forEach(
      s=>s.classList.remove('active')
    );

  $(id)
    .classList
    .add('active');

  $('audio-widget')
    ?.classList
    .toggle(
      'is-visible',
      id!=='scr-judul'
    );

  if(id!=='scr-judul'){
    play('transisi');
  }

  resizeStage();
}

function goJudul(){
  showScreen('scr-judul');
}

function goMenu(){
  showScreen('scr-menu');
}


/* ============================================================
   BELAJAR
   ============================================================ */

const belajar={
  step:0
};

function startBelajar(){
  belajar.step=0;

  showScreen('scr-belajar');

  renderBelajar();
}

function renderBelajar(){
  const total=MATERI.length;
  const m=MATERI[belajar.step];

  setProgress(
    'belajar-pfill',
    'belajar-plabel',
    belajar.step+1,
    total
  );

  setText(
    'belajar-sub',
    m.judul
  );

  setText(
    'belajar-prev',
    belajar.step
      ? '◀ Sebelumnya'
      : '☰ Menu'
  );

  setText(
    'belajar-next',
    belajar.step===total-1
      ? 'Selesai ✔'
      : 'Selanjutnya ▶'
  );

  const kuis=
    m.kuis
      ? `
        <div class="belajar-kuis">
          <p class="bk-tanya">
            ✨ Ayo Tebak! &nbsp; ${m.kuis.tanya}
          </p>

          <div class="bk-opsi">
            ${
              m.kuis.o
                .map(
                  (o,i)=>`
                    <button
                      class="btn btn-kuning btn-kuis-mini"
                      onclick="cekKuisMini(this,${i===m.kuis.j})"
                    >
                      ${o}
                    </button>`
                )
                .join('')
            }
          </div>
        </div>`
      : '';

  $('belajar-content')
    .innerHTML=`
      <div class="belajar-frame">

        <div class="belajar-img-sisi">
          <img
            src="${m.img}"
            alt="${m.judul}"
            onerror="imgErr(this)"
          >
        </div>

        <div class="belajar-teks-sisi">
          <h2>${m.judul}</h2>

          <div class="belajar-intro">
            ${m.intro}
          </div>

          <div class="belajar-isi">
            ${m.isi}
          </div>

          ${kuis}
        </div>

      </div>`;
}

function cekKuisMini(
  btn,
  benar
){
  play('klik');

  $$(
    'button',
    btn.parentNode
  ).forEach(
    b=>b.disabled=true
  );

  btn.classList.add(
    benar
      ? 'kuis-benar'
      : 'kuis-salah'
  );

  btn.innerHTML+=
    benar
      ? ' ✔️'
      : ' ❌';

  play(
    benar
      ? 'benar'
      : 'salah'
  );

  benar
    ? showConfetti()
    : triggerSalah();
}

function belajarNext(){
  if(
    belajar.step<
    MATERI.length-1
  ){
    belajar.step++;
    renderBelajar();
  }else{
    goMenu();
  }
}

function belajarPrev(){
  if(belajar.step>0){
    belajar.step--;
    renderBelajar();
  }else{
    goMenu();
  }
}


/* ============================================================
   BERMAIN
   ============================================================ */

let skorBermain=0;

let main={
  step:0
};

let activeGame=null;

const gameRenderers={
  jodoh:initJodoh,
  klik:initKlik,
  urut:initUrut,
  kumpul:initKumpul,
  sambung:initSambung
};

function tambahSkor(n){
  skorBermain=
    Math.max(
      0,
      skorBermain+n
    );

  setText(
    'skor-bermain-angka',
    skorBermain
  );
}

function startBermain(){
  main.step=0;
  skorBermain=0;

  tambahSkor(0);

  showScreen(
    'scr-bermain'
  );

  renderBermain();
}

function bermainNext(){
  if(
    main.step<
    dataBermain.length-1
  ){
    main.step++;
    renderBermain();
  }else{
    clearKumpul();
    renderSkorBermain();
  }
}

function bermainPrev(){
  clearKumpul();

  setText(
    'bermain-next',
    'Selanjutnya ▶'
  );

  document
    .querySelector(
      '#scr-bermain .nav-back'
    )
    .textContent=
      '◀ Sebelumnya';

  if(main.step>0){
    main.step--;
    renderBermain();
  }else{
    goMenu();
  }
}

function renderBermain(){
  clearKumpul();

  const game=
    dataBermain[main.step];

  setProgress(
    'bermain-pfill',
    'bermain-plabel',
    main.step+1,
    dataBermain.length
  );

  setNext(
    'bermain-next',
    false
  );

  setText(
    'bermain-sub',
    `Permainan ${main.step+1}: ${game.sub}`
  );

  gameRenderers[game.t]
    ?.(game);
}


/* ---- Jodoh ---- */

function initJodoh(game){
  activeGame={
    s:null,
    c:0,
    total:game.pairs.length
  };

  const kiri=
    game.pairs
      .map(
        p=>`
          <div
            class="pair-item"
            data-side="kiri"
            data-n="${p.n}"
            onclick="handleJodoh(this)"
          >
            ${p.teks}
          </div>`
      )
      .join('');

  const kanan=
    shuffle(game.imgs)
      .map(
        p=>`
          <div
            class="pair-item"
            data-side="kanan"
            data-n="${p.n}"
            onclick="handleJodoh(this)"
          >
            <img
              src="${p.i}"
              class="img-pair"
              alt="${p.name}"
              onerror="imgErr(this)"
            >

            <span>
              ${p.name}
            </span>
          </div>`
      )
      .join('');

  $('bermain-content')
    .innerHTML=`
      <div class="center-col jodoh-layer">

        <p class="akt-instruksi">
          ${game.ins}
        </p>

        <div
          class="jodoh-wrap"
          id="jw-main"
        >
          <div class="jodoh-kol">
            ${kiri}
          </div>

          <div class="jodoh-kol">
            ${kanan}
          </div>
        </div>

        <div
          class="feedback"
          id="play-fb"
        ></div>

      </div>`;
}

function handleJodoh(el){
  if(
    el.classList.contains(
      'locked'
    )
  ){
    return;
  }

  if(
    el.dataset.side===
    'kiri'
  ){
    $$(
      '#bermain-content [data-side="kiri"]'
    ).forEach(
      x=>x.classList.remove('sel')
    );

    el.classList.add('sel');

    activeGame.s=el;

    play('klik');

    return;
  }

  if(!activeGame.s){
    showFb(
      'play-fb',
      'no',
      '❌ Pilih kotak di sebelah kiri dahulu.'
    );

    return;
  }

  if(
    el.dataset.n!==
    activeGame.s.dataset.n
  ){
    play('salah');
    tambahSkor(-5);
    triggerSalah();

    el.classList.add('salah');

    setTimeout(
      ()=>el.classList.remove('salah'),
      400
    );

    showFb(
      'play-fb',
      'no',
      '❌ <b>Belum tepat (-5 poin).</b>'
    );

    return;
  }

  play('benar');
  tambahSkor(10);
  showConfetti();

  el.classList.add('locked');

  activeGame.s
    .classList
    .add('locked');

  drawLine(
    activeGame.s,
    el,
    'jw-main'
  );

  activeGame.s
    .classList
    .remove('sel');

  activeGame.s=null;
  activeGame.c++;

  showFb(
    'play-fb',
    'ok',
    '✅ <b>Cocok! (+10 poin)</b>'
  );

  if(
    activeGame.c===
    activeGame.total
  ){
    setNext(
      'bermain-next',
      true
    );

    showFb(
      'play-fb',
      'ok',
      '🎉 <b>Hebat! Semua berhasil dicocokkan.</b>'
    );
  }
}


/* ---- Klik ---- */

function initKlik(game){
  const opsi=
    shuffle(game.opsi);

  activeGame={
    c:0,
    total:
      game.opsi
        .filter(o=>o.b)
        .length
  };

  const cards=
    opsi
      .map(
        (o,i)=>`
          <div
            class="obj-card"
            id="oc-${i}"
          >
            <img
              src="${o.imgPath}"
              class="img-obj"
              alt="${o.t}"
              onerror="imgErr(this)"
            >

            <span>
              ${o.t}
            </span>
          </div>`
      )
      .join('');

  $('bermain-content')
    .innerHTML=`
      <div class="center-col klik-game-wrap">

        <p class="akt-instruksi">
          ${game.ins}
        </p>

        <div class="scene-scroll-area">
          <div class="scene-grid">
            ${cards}
          </div>
        </div>

        <div
          class="feedback klik-feedback"
          id="play-fb"
        ></div>

      </div>`;

  opsi.forEach(
    (o,i)=>{
      $('oc-'+i).onclick=
        ()=>handleKlik(
          $('oc-'+i),
          o.b,
          o.msg
        );
    }
  );
}

function handleKlik(
  el,
  benar,
  msg
){
  if(
    el.classList.contains('benar') ||
    el.classList.contains('salah')
  ){
    return;
  }

  if(benar){
    play('benar');
    tambahSkor(20);
    showConfetti();

    el.classList.add('benar');

    showFb(
      'play-fb',
      'ok',
      `✅ <b>Tepat! (+20 poin)</b><br>${msg}`
    );

    if(
      ++activeGame.c===
      activeGame.total
    ){
      setNext(
        'bermain-next',
        true
      );
    }
  }else{
    play('salah');
    tambahSkor(-5);
    triggerSalah();

    el.classList.add('salah');

    showFb(
      'play-fb',
      'no',
      `❌ <b>Kurang tepat (-5 poin).</b><br>${msg}`
    );

    setTimeout(
      ()=>el.classList.remove('salah'),
      500
    );
  }
}


/* ---- Urut ---- */

function initUrut(game){
  activeGame={
    g:game
  };

  do{
    activeGame.now=
      shuffle(game.urut);
  }while(
    activeGame.now.join('|')===
    game.urut.join('|')
  );

  drawUrutUI();
}

function drawUrutUI(){
  const items=
    activeGame.now
      .map(
        (t,i)=>`
          <div class="urut-item">

            <span class="num">
              ${i+1}
            </span>

            <span>
              ${t}
            </span>

            <button
              class="btn btn-kuning"
              onclick="moveUrut(${i},-1)"
              ${i===0?'disabled':''}
            >
              ▲
            </button>

            <button
              class="btn btn-kuning"
              onclick="moveUrut(${i},1)"
              ${
                i===
                activeGame.now.length-1
                  ? 'disabled'
                  : ''
              }
            >
              ▼
            </button>

          </div>`
      )
      .join('');

  $('bermain-content')
    .innerHTML=`
      <div class="center-col urut-layout">

        <p class="akt-instruksi urut-instruksi">
          ${activeGame.g.ins}
        </p>

        <div class="urut-list">
          ${items}
        </div>

        <button
          class="btn btn-biru btn-cek-urutan"
          onclick="checkUrut()"
        >
          Periksa Urutan
        </button>

        <div
          class="feedback urutan-feedback"
          id="play-fb"
        ></div>

      </div>`;
}

function moveUrut(i,dir){
  const j=i+dir;

  play('klik');

  if(
    j<0 ||
    j>=activeGame.now.length
  ){
    return;
  }

  [
    activeGame.now[i],
    activeGame.now[j]
  ]=[
    activeGame.now[j],
    activeGame.now[i]
  ];

  drawUrutUI();
}

function checkUrut(){
  const benar=
    activeGame.now.join('|')===
    activeGame.g.urut.join('|');

  play(
    benar
      ? 'benar'
      : 'salah'
  );

  tambahSkor(
    benar
      ? 20
      : -5
  );

  benar
    ? showConfetti()
    : triggerSalah();

  showFb(
    'play-fb',
    benar
      ? 'ok'
      : 'no',
    benar
      ? '✅ <b>Urutan tepat! (+20 poin)</b>'
      : '❌ <b>Belum tepat (-5 poin).</b> Coba lagi!'
  );

  if(benar){
    setNext(
      'bermain-next',
      true
    );
  }
}


/* ---- Kumpul ---- */

let kumpulTimer=null;
let kumpulSpawn=null;
let kumpulCollected=0;
let kumpulTime=0;

let activeKumpul={
  benar:'',
  salah:[]
};

function clearKumpul(){
  [
    kumpulTimer,
    kumpulSpawn
  ].forEach(
    t=>t&&clearInterval(t)
  );

  kumpulTimer=
    kumpulSpawn=
      null;
}

function initKumpul(game){
  clearKumpul();

  kumpulCollected=0;
  kumpulTime=30;

  activeKumpul={
    benar:game.benar,
    salah:game.salah||[]
  };

  $('bermain-content')
    .innerHTML=`
      <div class="center-col kumpul-layout">

        <p class="akt-instruksi">
          ${game.ins}
        </p>

        <div class="kumpul-hud">

          <div class="hud-box hud-time">
            ⏱️
            <span id="kumpul-time">
              30
            </span>
            dtk
          </div>

          <div class="hud-box hud-coll">
            ⭐ Terkumpul:
            <span id="kumpul-coll">
              0
            </span>
          </div>

        </div>

        <div
          class="kumpul-area"
          id="kumpul-area"
        ></div>

        <div
          class="feedback"
          id="play-fb"
        ></div>

      </div>`;

  kumpulTimer=
    setInterval(
      ()=>{
        setText(
          'kumpul-time',
          --kumpulTime
        );

        if(kumpulTime<=0){
          endKumpul();
        }
      },
      1000
    );

  kumpulSpawn=
    setInterval(
      spawnFlag,
      650
    );

  for(let i=0;i<3;i++){
    spawnFlag();
  }
}

function spawnFlag(){
  const area=
    $('kumpul-area');

  if(!area){
    return;
  }

  const benar=
    Math.random()<.6;

  const f=
    document.createElement('div');

  f.className=
    'kumpul-flag';

  const img=
    benar
      ? activeKumpul.benar
      : activeKumpul.salah.length
        ? activeKumpul.salah[
            Math.floor(
              Math.random()*
              activeKumpul.salah.length
            )
          ]
        : activeKumpul.benar;

  f.innerHTML=`
    <img
      src="${img}"
      alt="objek"
      onerror="imgErr(this)"
    >`;

  f.style.left=
    `${
      Math.random()*
      Math.max(
        0,
        area.clientWidth-100
      )
    }px`;

  f.style.top=
    `${
      Math.random()*
      Math.max(
        0,
        area.clientHeight-110
      )
    }px`;

  f.onclick=
    ()=>tapFlag(
      f,
      benar
    );

  area.appendChild(f);

  setTimeout(
    ()=>{
      if(f.isConnected){
        f.remove();
      }
    },
    1700
  );
}

function tapFlag(
  f,
  benar
){
  if(!f.isConnected){
    return;
  }

  if(benar){
    play('benar');
    tambahSkor(5);

    setText(
      'kumpul-coll',
      ++kumpulCollected
    );

    f.remove();
  }else{
    play('salah');
    tambahSkor(-3);
    triggerSalah();

    f.classList.add(
      'salah'
    );

    setTimeout(
      ()=>{
        if(f.isConnected){
          f.remove();
        }
      },
      200
    );
  }
}

function endKumpul(){
  clearKumpul();

  const area=
    $('kumpul-area');

  if(area){
    area.innerHTML=`
      <div class="kumpul-end">

        <div class="kumpul-end-icon">
          🎉
        </div>

        <div class="kumpul-end-title">
          Waktu Habis!
        </div>

      </div>`;
  }

  showConfetti();
  play('bintang');

  showFb(
    'play-fb',
    'ok',
    `⭐ <b>Kamu mengumpulkan ${kumpulCollected} objek benar!</b> Tekan Selanjutnya ▶`
  );

  setNext(
    'bermain-next',
    true
  );
}


/* ---- Sambung ---- */

let sambungStep=0;
let activeSambung=null;

function initSambung(game){
  sambungStep=0;
  activeSambung=game;

  drawSambung();
}

function drawSambung(){
  const g=activeSambung;

  if(
    sambungStep>=
    g.steps.length
  ){
    $('bermain-content')
      .innerHTML=`
        <div class="center-col">

          <div class="akhir akhir-sambung">

            <div class="akhir-icon">
              🎯
            </div>

            <h2 class="akhir-sambung-title">
              Lengkap!
            </h2>

            <div class="sambung-lirik sambung-hasil">
              ${g.hasil}
            </div>

            <p class="akhir-hint">
              Hebat! Tekan
              <b>Selanjutnya ▶</b>
            </p>

          </div>

        </div>`;

    return;
  }

  const s=
    g.steps[sambungStep];

  const btns=
    shuffle([
      s.benar,
      ...s.salah
    ])
      .map(
        o=>`
          <button
            class="sambung-btn"
            onclick="cekSambung(this,${o===s.benar})"
          >
            ${o}
          </button>`
      )
      .join('');

  $('bermain-content')
    .innerHTML=`
      <div class="center-col">

        <p class="akt-instruksi">
          ${g.ins}
          (${sambungStep+1}/${g.steps.length})
        </p>

        <div class="sambung-lirik">
          ${s.prev}
        </div>

        <div class="sambung-opsi">
          ${btns}
        </div>

        <div
          class="feedback"
          id="play-fb"
        ></div>

      </div>`;
}

function cekSambung(
  btn,
  benar
){
  $$('.sambung-btn')
    .forEach(
      b=>b.style.pointerEvents='none'
    );

  btn.classList.add(
    benar
      ? 'benar'
      : 'salah'
  );

  play(
    benar
      ? 'benar'
      : 'salah'
  );

  tambahSkor(
    benar
      ? 10
      : -5
  );

  benar
    ? showConfetti()
    : triggerSalah();

  showFb(
    'play-fb',
    benar
      ? 'ok'
      : 'no',
    benar
      ? '✅ <b>Tepat! (+10 poin)</b>'
      : '❌ <b>Belum tepat (-5 poin).</b> Coba lagi!'
  );

  if(benar){
    sambungStep++;

    setTimeout(
      ()=>{
        if(
          sambungStep>=
          activeSambung.steps.length
        ){
          setNext(
            'bermain-next',
            true
          );
        }

        drawSambung();
      },
      900
    );
  }else{
    setTimeout(
      ()=>{
        $$('.sambung-btn')
          .forEach(
            b=>{
              b.style.pointerEvents='auto';

              b.classList.remove(
                'salah'
              );
            }
          );
      },
      800
    );
  }
}

function renderSkorBermain(){
  setText(
    'bermain-sub',
    'Selesai'
  );

  setNext(
    'bermain-next',
    false
  );

  play('bintang');

  $('bermain-content')
    .innerHTML=`
      <div class="akhir">

        <h2>
          🏆 Permainan Selesai!
        </h2>

        <div class="identitas">
          ${infoMurid.nama} •
          ${infoMurid.sekolah}
        </div>

        <p class="akhir-label">
          Total Skor Bermain Kamu:
        </p>

        <p class="skor-angka">
          ${skorBermain}
        </p>

        <div class="akhir-actions akhir-actions-main">

          <button
            class="btn btn-biru btn-akhir"
            onclick="startBermain()"
          >
            🔄 Main Lagi
          </button>

          <button
            class="btn btn-merah btn-akhir"
            onclick="goMenu()"
          >
            ☰ Menu Utama
          </button>

        </div>

      </div>`;
}


/* ============================================================
   BERLATIH
   ============================================================ */

let latih={
  step:0,
  skor:0,
  state:[]
};

const latihRenderers={
  pg:r_PG,
  bs:r_BS,
  pg_kompleks:r_PG_Komp,
  drag_word:r_Drag,
  jodoh:r_JodohLatih
};

function latihState(){
  return latih.state[
    latih.step
  ];
}

function startBerlatih(){
  latih={
    step:0,
    skor:0,
    state:
      dtLatih.map(
        ()=>({
          done:false,
          attempted:false
        })
      )
  };

  showScreen(
    'scr-berlatih'
  );

  renderBerlatih();
}

function berlatihNext(){
  if(
    latih.step<
    dtLatih.length
  ){
    latih.step++;
    renderBerlatih();
  }
}

function berlatihPrev(){
  document
    .querySelector(
      '#scr-berlatih .nav-back'
    )
    .textContent=
      '◀ Sebelumnya';

  setText(
    'berlatih-next',
    'Selanjutnya ▶'
  );

  if(latih.step>0){
    latih.step--;
    renderBerlatih();
  }else{
    goMenu();
  }
}

function lockLatih(){
  $$(
    '.opsi,' +
    '.bs-btn,' +
    '.opsi-kompleks,' +
    '.word-btn,' +
    '.pair-item,' +
    '#btn-cek'
  ).forEach(
    el=>
      el.style.pointerEvents=
        'none'
  );
}

function restoreFeedback(q){
  if(latihState().done){
    setTimeout(
      ()=>{
        showFb(
          'bl-fb',
          'ok',
          `✅ <b>Sudah dijawab benar!</b><br>${q.msg||''}`
        );

        lockLatih();
      },
      50
    );
  }
}

function renderBerlatih(){
  if(
    latih.step>=
    dtLatih.length
  ){
    renderSkorLatih();
    return;
  }

  const q=
    dtLatih[latih.step];

  setProgress(
    'berlatih-pfill',
    'berlatih-plabel',
    latih.step+1,
    dtLatih.length
  );

  setNext(
    'berlatih-next',
    latihState().done
  );

  latihRenderers[q.t]
    ?.(
      $('berlatih-content'),
      q
    );

  restoreFeedback(q);
}

function ulangiLatih(){
  play('klik');
  renderBerlatih();
}

function evLatih(benar){
  const q=
    dtLatih[latih.step];

  const st=
    latihState();

  if(benar){
    st.done=true;

    if(!st.attempted){
      latih.skor++;
    }

    play('benar');
    showConfetti();

    showFb(
      'bl-fb',
      'ok',
      `✅ <b>Benar!</b><br>${q.msg||''}`
    );

    setNext(
      'berlatih-next',
      true
    );
  }else{
    st.attempted=true;

    play('salah');
    triggerSalah();

    showFb(
      'bl-fb',
      'no',
      `❌ <b>Kurang tepat.</b><br>${q.msg||''}
       <div class="feedback-retry">
         <button
           class="btn btn-kuning btn-retry"
           onclick="ulangiLatih()"
         >
           🔄 Coba Lagi
         </button>
       </div>`
    );
  }

  lockLatih();
}

function soalKiri(q){
  const img=
    q.img
      ? `
        <img
          src="${q.img}"
          class="soal-img"
          alt="Ilustrasi soal"
          onerror="imgErr(this)"
        >`
      : '';

  const stim=
    q.stimulus
      ? `
        <div class="soal-stimulus">
          ${q.stimulus}
        </div>`
      : '';

  return `
    <div class="soal-kiri">

      <div class="soal-label">
        Pertanyaan
      </div>

      ${stim}

      <div class="soal-teks">
        ${q.soal}
      </div>

      ${img}

    </div>`;
}


/* ---- Pilihan Ganda ---- */

function r_PG(c,q){
  const opsi=
    q.opsi
      .map(
        (o,i)=>`
          <div
            class="opsi ${
              latihState().done &&
              i===q.j
                ? 'benar'
                : ''
            }"
            onclick="
              if(!latihState().done){
                play('klik');
                this.classList.add(
                  ${i===q.j}
                    ? 'benar'
                    : 'salah'
                );
                evLatih(${i===q.j})
              }
            "
          >
            <span class="bul">
              ${String.fromCharCode(65+i)}
            </span>

            ${o}
          </div>`
      )
      .join('');

  c.innerHTML=`
    <div class="soal-split">

      ${soalKiri(q)}

      <div class="opsi-kanan">

        <div class="opsi-list">
          ${opsi}
        </div>

        <div
          class="feedback"
          id="bl-fb"
        ></div>

      </div>

    </div>`;
}


/* ---- Benar / Salah ---- */

function r_BS(c,q){
  c.innerHTML=`
    <div class="center-col">

      <div class="soal">
        ${q.soal}
      </div>

      <div class="bs-grid">

        <button
          class="bs-btn bs-benar"
          onclick="
            if(!latihState().done){
              play('klik');
              evLatih(${q.j===true})
            }
          "
        >
          ✔ BENAR
        </button>

        <button
          class="bs-btn bs-salah"
          onclick="
            if(!latihState().done){
              play('klik');
              evLatih(${q.j===false})
            }
          "
        >
          ✘ SALAH
        </button>

      </div>

      <div
        class="feedback"
        id="bl-fb"
      ></div>

    </div>`;
}


/* ---- Pilihan Ganda Kompleks ---- */

function r_PG_Komp(c,q){
  latih.temp=[];

  const opsi=
    q.opsi
      .map(
        (o,i)=>`
          <div
            class="opsi opsi-kompleks"
            id="pk-${i}"
            onclick="toggleKomp(${i})"
          >
            <span class="bul">
              ${String.fromCharCode(65+i)}
            </span>

            ${o}
          </div>`
      )
      .join('');

  c.innerHTML=`
    <div class="soal-split">

      ${soalKiri(q)}

      <div class="opsi-kanan">

        <div class="opsi-list">
          ${opsi}
        </div>

        <button
          class="btn btn-biru"
          id="btn-cek"
          onclick="cekKomp()"
        >
          Periksa Jawaban
        </button>

        <div
          class="feedback"
          id="bl-fb"
        ></div>

      </div>

    </div>`;
}

function toggleKomp(i){
  if(latihState().done){
    return;
  }

  const el=
    $(`pk-${i}`);

  const idx=
    latih.temp.indexOf(i);

  play('klik');

  el.classList.toggle(
    'terpilih'
  );

  idx>-1
    ? latih.temp.splice(idx,1)
    : latih.temp.push(i);
}

function cekKomp(){
  const q=
    dtLatih[latih.step];

  const benar=
    latih.temp.length===
      q.j.length &&
    latih.temp.every(
      v=>q.j.includes(v)
    );

  if(benar){
    $$('.opsi-kompleks')
      .forEach(
        (el,i)=>
          q.j.includes(i) &&
          el.classList.add('benar')
      );
  }

  evLatih(benar);
}


/* ---- Drag Word ---- */

function r_Drag(c,q){
  const words=
    q.w
      .map(
        (w,i)=>`
          <button
            class="word-btn"
            id="wb-${i}"
            onclick="tapWord(this,'${w.replace(/'/g,"\\'")}')"
          >
            ${w}
          </button>`
      )
      .join('');

  c.innerHTML=`
    <div class="center-col">

      <div
        class="kalimat-drag"
        id="k-drag"
      >
        ${q.soal}
      </div>

      <div class="word-pool">
        ${words}
      </div>

      <button
        class="btn btn-biru btn-cek-drag"
        id="btn-cek"
        onclick="cekDrag()"
      >
        Periksa
      </button>

      <div
        class="feedback"
        id="bl-fb"
      ></div>

    </div>`;

  setTimeout(
    ()=>{
      $$('#k-drag .blank-slot')
        .forEach(
          b=>
            b.onclick=
              ()=>tapBlank(b)
        );
    },
    50
  );
}

function tapWord(btn,w){
  if(latihState().done){
    return;
  }

  const target=
    [
      ...$$(
        '#k-drag .blank-slot'
      )
    ].find(
      b=>
        !b.classList.contains(
          'terisi'
        )
    );

  if(!target){
    return;
  }

  play('klik');

  target.textContent=w;

  target.classList.add(
    'terisi'
  );

  target.dataset.wb=
    btn.id;

  btn.classList.add(
    'dipakai'
  );
}

function tapBlank(blank){
  if(
    latihState().done ||
    !blank.classList.contains('terisi')
  ){
    return;
  }

  play('klik');

  $(
    blank.dataset.wb
  )?.classList.remove(
    'dipakai'
  );

  blank.textContent='___';

  blank.classList.remove(
    'terisi'
  );

  delete blank.dataset.wb;
}

function cekDrag(){
  const q=
    dtLatih[latih.step];

  const ans=
    [
      ...$$(
        '#k-drag .blank-slot'
      )
    ].map(
      b=>b.textContent.trim()
    );

  evLatih(
    ans.join('|')===
    q.j.join('|')
  );
}


/* ---- Jodoh Latihan ---- */

function r_JodohLatih(c,q){
  activeGame={
    s:null,
    c:0,
    t:q.pairs.length
  };

  const kiri=
    shuffle(q.pairs)
      .map(
        p=>`
          <div
            class="pair-item"
            data-side="kiri"
            data-n="${p.n}"
            onclick="latJodohLatih(this)"
          >
            <span>
              ${p.t}
            </span>
          </div>`
      )
      .join('');

  const kanan=
    shuffle(q.imgs)
      .map(
        p=>`
          <div
            class="pair-item"
            data-side="kanan"
            data-n="${p.n}"
            onclick="latJodohLatih(this)"
          >
            <img
              src="${p.i}"
              class="img-pair"
              alt="${p.name}"
              onerror="imgErr(this)"
            >

            <span>
              ${p.name}
            </span>
          </div>`
      )
      .join('');

  c.innerHTML=`
    <div class="center-col jodoh-layer">

      <div class="soal">
        ${q.soal}
      </div>

      <div
        class="jodoh-wrap"
        id="jw-latih"
      >

        <div class="jodoh-kol">
          ${kiri}
        </div>

        <div class="jodoh-kol">
          ${kanan}
        </div>

      </div>

      <div
        class="feedback"
        id="bl-fb"
      ></div>

    </div>`;
}

function latJodohLatih(el){
  if(
    latihState().done ||
    el.classList.contains('locked')
  ){
    return;
  }

  if(
    el.dataset.side===
    'kiri'
  ){
    $$(
      '#berlatih-content [data-side="kiri"]'
    ).forEach(
      x=>x.classList.remove('sel')
    );

    el.classList.add('sel');

    activeGame.s=el;

    play('klik');

    return;
  }

  if(!activeGame.s){
    return;
  }

  if(
    el.dataset.n!==
    activeGame.s.dataset.n
  ){
    evLatih(false);
    return;
  }

  play('klik');

  el.classList.add(
    'locked'
  );

  activeGame.s
    .classList
    .add(
      'locked',
      'benar'
    );

  drawLine(
    activeGame.s,
    el,
    'jw-latih'
  );

  activeGame.s
    .classList
    .remove('sel');

  activeGame.s=null;

  if(
    ++activeGame.c===
    activeGame.t
  ){
    evLatih(true);
  }
}


/* ---- Hasil Latihan ---- */

function renderSkorLatih(){
  setText(
    'berlatih-sub',
    'Selesai'
  );

  setNext(
    'berlatih-next',
    false
  );

  const total=
    dtLatih.length;

  const persen=
    Math.round(
      latih.skor/total*100
    );

  const pesan=
    persen>=80
      ? '🎉 <b>Luar biasa! Pemahamanmu sudah sangat baik.</b>'
      : persen>=50
        ? 'Bagus! Ayo pelajari lagi bagian yang belum tepat.'
        : 'Tetap semangat! Ulangi materi Belajar lalu kerjakan lagi.';

  play('bintang');

  $('berlatih-content')
    .innerHTML=`
      <div class="akhir hasil-latih">

        <h2>
          Kerja Bagus, Murid Hebat!
        </h2>

        <div class="identitas">
          ${infoMurid.nama} •
          ${infoMurid.sekolah}
        </div>

        <p class="hasil-label">
          Jawaban benarmu:
        </p>

        <p class="skor-angka">
          ${latih.skor}

          <span class="skor-total-detail">
            dari ${total}
          </span>
        </p>

        <p class="hasil-score">
          Skor Akhir: ${persen}
        </p>

        <p class="hasil-message">
          ${pesan}
        </p>

        <div class="akhir-actions hasil-actions">

          <button
            class="btn btn-biru btn-akhir"
            onclick="startBerlatih()"
          >
            🔄 Ulangi Ujian
          </button>

          <button
            class="btn btn-merah btn-akhir"
            onclick="goMenu()"
          >
            ☰ Menu Utama
          </button>

        </div>

      </div>`;
}


/* ---- Modal & inisialisasi ---- */

function openModal(id){
  $(id)
    .classList
    .add('show');

  play('transisi');
}

function closeModal(id){
  $(id)
    .classList
    .remove('show');

  play('klik');
}

$$('.modal-bg')
  .forEach(
    m=>
      m.addEventListener(
        'click',
        e=>
          e.target===m &&
          closeModal(m.id)
      )
  );

applyConfig();
resizeStage();