/* ============================================================
   EM course training · Math 5 (Okul için Matematik, 5. Seviye) [2051] · TURKISH
   Translated from content-en.js (the base version). Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM kurs eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Kurs eğitimi',
  devLink: '🛠 Developer',
  logoSub: 'Yeni Eğitim Modeli',
  navHome: '← Ana sayfa',
  navBackModule: '← Modüle dön',
  moduleN: 'Modül {n}',
  badgeStart: 'Başla →',
  badgeLocked: '🔒 Önce Modül {n}’i tamamla',
  badgeDone: '✓ Tamamlandı · %{score}',
  progLabel: 'modül tamamlandı',
  progAllDone: 'Modüller tamamlandı 🎉',
  eyebrow: '{course} · Modül {n} / {total}',
  ctaTitle: 'Modül kontrolü',
  ctaText: '{n} kısa soru. Geçmek için %70 veya üzeri gerekir.',
  lockSim: '🔒 Kontrolü açmak için yukarıdaki simülasyonu tamamla.',
  startCheck: 'Kontrole başla →',
  retake: '🔁 Kontrolü tekrarla',
  qmeta: '{e} Modül {n} kontrolü · Soru {i} / {total}',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',
  passedTitle: 'Geçtin!',
  failTitle: 'Az kaldı',
  scoreLine: '<b>{n} sorudan {score}</b> tanesini doğru cevapladın.',
  failText: '%70 veya üzeri gerekiyor. Modülü tekrar gözden geçir ve yeniden dene — istediğin kadar tekrar edebilirsin.',
  nextUnlocked: '<b>Modül {n} · {title}</b> açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Bu eğitimin iki modülünü de tamamladın.',
  seeNext: 'Sıradaki adımı gör →',
  reviewModule: '📖 Modülü gözden geçir',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS’teki eğitim sayfasında DST testi.',
  homeDoneBtn: 'Şimdi ne yapmalıyım →',
  doneBadge: '✓ Tamamlandı',
  doneBack: 'Modüllere dön',
  lockedTitle: 'Henüz kilitli',
  lockedModule: 'Önce Modül {n}’i tamamla.',
  lockedStep: 'Bunu açmak için önceki adımı tamamla.',
  ok: 'Tamam',
  linkOpen: 'Aç ↗',
  projPlay: '▶ Aç ↗',
  simOpen: '▶ Simülasyonu burada aç',
  simClose: '✕ Simülasyonu kapat',
  simNewTab: 'Yeni sekmede aç ↗',
  simDone: '✅ Simülasyon tamamlandı',
  simTodo: '○ Simülasyon bekliyor',
  checkTag: 'İşaretle',
  mythTag: 'Efsane',
  mythTap: 'Gerçeği görmek için dokun →',
  mythReality: 'Gerçek ✓',
  sortWrong: '✗ Tam olarak değil.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'math5';
COURSE.code = '2051';
COURSE.title = 'Math 5';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2051]',
  title: 'Matematik <span class="hl">5. Seviye</span>',
  lead: 'Math Adventures, 9–11 yaş öğrenciler için: her modül gerçek hayattan bir vaka — bir park tasarlamak, okul şenliği düzenlemek, bir tarifle yemek yapmak — ve öğrenciler ihtiyaç duydukları matematiği yol boyunca keşfeder. İki modül: kursun içeriği ve derslerin teknik tarafı.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['🧮', '<b>Uygulamaya yönelik.</b> Derslerden gerçek durumlar, neyin işe yaradığına karar verdiğin bir etkinlik ve ilk derslerin için teknik bir kontrol listesi.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> önce <b>Yeni Eğitim Modeli (EM) ana eğitimini</b> tamamla. Bu kurs eğitimi ondan sonra gelir ve orada gördüklerinin üzerine kurulur: Backoffice ve öğretmen notları (Teacher Notes), Follow Mode ile Classroom ve ders kalitesi.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri güncellenmeye devam edecek.</b> Dersler, öğrencilerden ve eğitmenlerden gelen geri bildirimlerle sürekli iyileştiriliyor. Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📐', color:'#0EA5E9', title:'Kursun içeriği',
    desc:'Math 5’in yeni modelde nasıl işlendiği ve Modül 1’in ilk 4 dersi.',
    obj:'9–11 yaş öğrencilerin her modülde gerçek hayattan bir vakayı çözdüğü ve ihtiyaç duydukları matematiği yol boyunca keşfettiği Math 5’in ilk derslerine hazırlan.',
    offer:[['🏙️','Kursu ve vakaya dayalı hikâyesini tanı.'],['🧠','Yeni modelin bir matematik kursunda nasıl işlediğini anla.'],['📖','İlk 4 dersin her birinde ne olduğunu öğren.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🏙️', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','9–11'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 5. Seviye</b> vakaya dayalı bir kurstur. Öğrenciler konuları tek tek çalışmak yerine <b>her modülde gerçek hayattan bir problemi</b> çözer — bir şehir parkı tasarlamak, okul şenliği düzenlemek, bir tarifle yemek yapmak, spor rekorlarını takip etmek — ve ihtiyaç duydukları matematiği yol boyunca keşfeder.' },
        { t:'p', html:'Modül 1, <b>Sofi ve Rafi’nin amcasının mimarlık bürosunda</b> geçer. Büroda açık kapı günüdür ve öğrenci “stajyer mimar” olarak katılır. Yeni bir parkın planında çeşme, köprü ve kavşak eksiktir; bunları doğru çizebilmek için öğrencilerin önce “tasarımcı setinin” temel araçlarını tanıması gerekir: nokta, doğru parçası, ışın, doğru ve çember.' },
        { t:'callout', kind:'tip', e:'🇹🇷', html:'Kurs, <b>Maarif programının 5. sınıf matematik müfredatıyla</b> (<code>MAT.5.1</code> – <code>MAT.5.6</code>) tamamen uyumludur: her kazanım, uygulamalı bir vakanın içinde ele alınır.' }
      ]},
      { id:'model', e:'🧠', title:'Matematikte yeni model', blocks:[
        { t:'p', html:'Yeni modelin çerçevesi ana eğitimde gördüğünle aynıdır, ancak matematikte biraz farklı uygulanır. Her ilkeyi aç:' },
        { t:'acc', items:[
          ['🧱','Somut → Görsel → Soyut','<p>Her ders, konuyla yakından ilgili <b>gerçek bir problemle</b> açılır: öğrenci önce somut bir durumla karşılaşır (S), ardından onun görsel temsiliyle (G) ve ancak sonra soyut formüllere ve kurallara geçer (S).</p><p>Açılış görevi <b>bir kancadır, açıklama değil</b>. Tanımı örnekten önce verme.</p>'],
          ['📶','Basitten karmaşığa','<p>Görevler her dersin içinde artan zorlukla sıralanır. Her seviye anlamanın bir adımına odaklanır: önce temel uygulama, sonra daha karmaşık durumlar. Seviyeler sabittir ve <b>açıkça etiketlenmiştir</b>.</p>'],
          ['🌱','Yeni Nesil Sorular','<p>Öğrenciler yalnızca çözmez, <b>problemin arkasındaki matematiği açıklar</b>: bu yöntem neden işe yarıyor, şu değişirse ne olur… Her ders bir Yeni Nesil Soru ile biter ve bu soru <b>asla atlanmaz</b>.</p>'],
          ['🔁','Kodland Öğrenme Döngüsü','<p>Hedef → taslak çözüm → zorluk veya hata → strateji veya ipucu → iyileştirme → sonuç kontrolü → yansıma. Döngü hem derste hem de sonraki bağımsız çalışmada devam eder. <b>Ev ödevi dersin zorunlu bir parçasıdır.</b></p>'],
          ['✅','Sonuç kontrolleri ve modül testi','<p>Her ders bir <b>sonuç kontrolüyle</b> kapanır: o dersin belirli kazanımına bağlı kısa bir görev. Modül, tüm sonuç kontrollerini kapsayan birikimli bir testle biter. Sonuçları öğrenci, öğretmen ve veli görür.</p>'],
          ['💬','Üç yönlü geri bildirim','<p>Öğretmen çözümün kalitesini ve adımların anlaşılmasını değerlendirir; grup, gözden geçirme sırasında tepki verir; öğrenci de hangi sonuç kontrollerini tamamladığını ve hangilerini tamamlamadığını işaretler.</p>'],
          ['🪜','Sorumluluğun kademeli devri','<p>Modülün başında öğrenciler adım adım talimatlar ve çözüm şablonları alır. Modülün sonunda <b>yöntemi kendileri seçer</b> ve çözümü ipucu olmadan tamamlar.</p>']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk 4 ders', blocks:[
        { t:'p', html:'Modül 1: <b>Doğrular ve açılar. Çokgenler ve çemberler.</b> İlk dört ders park planını tamamlar. Her dersi aç:' },
        { t:'lessons', key:'m1', items:[
          { tab:'D1', e:'🏛️', h:'1. Ders — Mimari çizimin temelleri', p:'Mimarlık bürosu hikâyesinin ilk dersi. Öğrenciler bir parkın planını tamamlamak için nokta, doğru parçası, ışın, doğru ve çemberi (merkez, yarıçap, çap, kiriş) öğrenir. <code>MAT.5.3.1</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Nokta</b>: belirli bir yeri gösteren, boyutu olmayan bir işaret. Büyük harfle gösterilir: A.</li><li><b>Doğru parçası</b>: bir doğrunun iki uç noktası arasındaki parçası. [AB] (veya [BA] — aynı doğru parçasıdır) şeklinde gösterilir.</li><li><b>Işın</b>: bir noktadan başlar ve bir yönde sonsuza kadar uzanır. [AB şeklinde gösterilir: A’dan başlar ve B’den geçer. [AB ve [BA <b>iki farklı ışındır</b>.</li><li><b>Doğru</b>: iki yönde de sonsuza uzanır, uç noktası yoktur. AB şeklinde gösterilir.</li><li><b>Çember</b>: merkez, yarıçap (merkezden çember üzerindeki bir noktaya), çap (merkezden geçen kiriş; d = 2r) ve kiriş (çember üzerindeki iki noktayı birleştirir).</li><li>Tasarımcı seti: cetvel, pergel ve gönye.</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (15 dk):</b> karşılama, Sofi ve Rafi ile tanışma, Wordwall buz kırıcı, ders kuralları, Classroom kontrolü, hikâyeye giriş.</li><li><b>Ana bölüm 1 (18 dk):</b> nokta; park haritasında noktaları işaretleme; interaktif cetvelle doğru parçası.</li><li><b>Ana bölüm 2 (17 dk):</b> ışın ve doğru, 5 soruluk test, geometri atölyesi, Wordwall pekiştirme.</li><li><b>Ana bölüm 3 (18 dk):</b> doğru parçalarını ölçme, 3 dakikalık mola, çember, renk lejantı görevi, çemberle ilgili doğru ifadeler.</li><li><b>Kapanış (12 dk):</b> bireysel çalışma, tartışma, özet sorular, yansıma, ev ödevi hatırlatması ve sonraki derse bakış.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Nokta, doğru parçası, ışın ve doğruyu tanımlarına göre birbirinden ayırt eder.</li><li>Gösterimlerini okur ve yazar: A, [AB], [AB, AB.</li><li>Çemberde merkez, yarıçap, çap ve kirişi tanır.</li><li>Bunları çizmek için uygun aracı seçer.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Her yeni kavramdan önce günlük hayattan bir örnekle sezgisel bir soru sor (iğne batığı, tren rayları, rogar kapağı). <b>Tanımı hemen söyleme.</b></li><li>Park hikâyesini sık sık hatırlat: bugün öğrenilen her araç planı tamamlamak için kullanılır.</li><li>İnteraktif kartlarda öğrencinin görevi kendi başına bitirmesini bekle.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Nokta “küçük bir daire” değildir: boyutu olmayan ideal bir işarettir.</li><li>Işınlarda harf sırası önemlidir: [AB ve [BA farklı ışınlardır.</li><li>Çap her zaman merkezden geçer; merkezden geçmeyen bir kiriş çap değildir.</li><li>Bazı interaktif görevler harici bir araca bağlıdır: dersten önce kendin dene.</li></ul>']] },
          { tab:'D2', e:'📏', h:'2. Ders — Nokta, doğru parçası ve doğruların özellikleri', p:'Öğrenciler tasarımcı setini genişletir: çember, paralel doğrular ve dik doğrularla çalışır ve aralarındaki farkları öğrenir. <code>MAT.5.3.2</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Paralel doğrular</b> hiçbir zaman kesişmez; <b>dik doğrular</b> dik açıyla kesişir.</li><li>Gönye ile dikme çizmek.</li><li>1. Dersteki gösterimlerin tekrarı.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Paralel ve dik doğruları tanır ve çizer.</li><li>Aradaki farkı park planından örneklerle (yollar, köprüler, kavşaklar) açıklar.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Kavramın adını söylemeden önce parktan somut bir durumla başla (örneğin, hiç kesişmeyen iki yol).</li><li>1–2 öğrenciden iki doğrunun dik olduğunu nasıl anladıklarını açıklamalarını iste.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Her karttaki öğretmen notlarına bak: her görevin cevapları ve ipuçları oradadır.</li><li>Puanlı her kartı her öğrenci platformda kendisi tamamlar.</li></ul>']] },
          { tab:'D3', e:'📐', h:'3. Ders — Her dereceye kadar hassas ölçüm: açı ölçme', p:'Öğrenciler parktaki kavşakları tamamlamak için açı türlerini ve açıların açıölçerle nasıl ölçüldüğünü öğrenir. <code>MAT.5.3.3</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li>Açı türleri: dar açı, dik açı, geniş açı ve doğru açı.</li><li>Açıölçerin yerleştirilmesi: merkezi açının köşesine, sıfırı açının bir koluna.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Açıları ölçülerine göre sınıflandırır.</li><li>Açıları açıölçerle doğru ölçer.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Önce gerçek problem (kesişen iki yol hangi açıyı oluşturur?), sonra görsel temsil, en son kural.</li><li>Öğretmen panelinde birçok öğrenci hata yaparsa farklı bir örnekle tekrar açıkla ve yeniden denemelerine izin ver.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Sık yapılan bir hata, açıölçerde yanlış ölçeği okumaktır. Düzeltmek yerine “Hangi sıfırdan başladın?” diye sor.</li></ul>']] },
          { tab:'D4', e:'🏅', h:'4. Ders — Modül tekrarı', p:'Öğrenciler öğrendikleri her şeyi bir araya getirerek park planını bitirir ve mimar sertifikalarını alır. <code>MAT.5.3.4</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li>Tasarımcı setinin tamamı: nokta, doğru parçası, ışın, doğru, çember, paralel ve dik doğrular ve açılar.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Öğrenci yöntemi ve aracı kendisi seçer ve ipucu olmadan çözer (sorumluluğun kademeli devri).</li><li>Modülün bu bölümünün sonuç kontrolünü tamamlar.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>İlerlemeyi kutla: haritadaki ilk noktadan tamamlanmış plana.</li><li>Öğretmen panelinde hangi sonuç kontrollerinin eksik kaldığına bak ve pekiştirmeyi planla.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Zaman az olsa bile bireysel çalışmayı ve Yeni Nesil Soruları atlama.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Öğretmen notları artık derse hazırlığın ana kaynağıdır.</b> Zamanlamalı ders planını, dersin görevlerini ve her kartta her an ne yapılacağını içerir. İlk kartta tam açıklama ve bir <b>video brifing</b> vardır. <b>Dersten önce tüm öğretmen notlarını incele ve videoyu izle.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve dört dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2051', e:'📘', title:'Kursu Backoffice’te aç', small:'[2051] Math 5 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlerle güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Follow Mode, puanlı kartlar, öğretmen paneli ve bir şey çalışmadığında ne yapılacağı.',
    obj:'Bir Math 5 dersini teknik olarak neyin işlettiğini öğren: her seferinde Follow Mode, her öğrencinin kendi çözdüğü puanlı kartlar, öğretmen paneli ve bir sorunun nasıl bildirileceği.',
    offer:[['👁️','Materyalleri her zaman Follow Mode ile göster.'],['🧮','Her öğrencinin kartlarını çözüp göndermesini sağla.'],['📊','Zamanında tepki vermek için öğretmen panelini kullan.'],['🚨','Neyin, nereye bildirileceğini bil.']],
    sections:[
      { id:'class', e:'🎥', title:'Ders sırasında', blocks:[
        { t:'cards', cols:2, items:[
          ['👁️','Her zaman Follow Mode','Ders materyallerini gösterirken <b>her seferinde</b> Follow Mode kullan. Dersi göstermek için <b>ekran paylaşma</b>.'],
          ['🧮','Puanlı her kart, bireysel olarak','Puanlı kartları her öğrenci platformda kendisi tamamlar. <b>Yalnızca senin ekranında çözülen puanlı bir kart</b> her öğrenci için <b>sıfır</b> sayılır.'],
          ['📤','Sınıf çalışması ve ödev gönderimi','Öğrencilerin görevlerini ders sırasında göndermelerini sağla, ödevlerini yapmaları için onları teşvik et ve gönderdiklerinden emin ol.'],
          ['🖍️','Açıklamalar yerine Whiteboard','Classroom’da henüz (Zoom’daki gibi) bir açıklama aracı yok. Bir şeyi görsel olarak açıklamak için <b>Whiteboard</b>’u kullan.']
        ]}
      ]},
      { id:'panel', e:'📊', title:'Öğretmen paneli ve açıklamalar', blocks:[
        { t:'steps', items:[
          ['Sonuçları kontrol et','Öğrenciler gönderdikten sonra sonuçları <b>öğretmen panelinde</b> kontrol et.'],
          ['Birçok öğrenci hata yaptıysa','<b>Farklı bir örnekle</b> tekrar açıkla ve yeniden denemelerine izin ver.'],
          ['Açıklama iste','1–2 öğrenciden çözümlerini açıklamalarını iste. Hataları öğrenme fırsatı olarak gör.'],
          ['Cevap değil, ipucu ver','Görevde ipucu yoksa <b>yönlendirici sorularla</b> sen ver ve tam çözümü ancak öğrenci denedikten sonra göster. Sorular ve cevaplar öğretmen notlarında yazılıdır.']
        ]},
        { t:'h', html:'Öğrencileri aktif tutar mı? Her biri için karar ver' },
        { t:'sorter', yes:'✅ İşe yarar', no:'❌ İşe yaramaz', items:[
          ['💬','“İlk adımın sonucunu sohbete yazın — hep birlikte, aynı anda.”','yes','<b>İşe yarar.</b> Anlık bir kontroldür: kimin anladığını hemen görürsün.'],
          ['🙂','“Her şey anlaşıldı mı?”','no','<b>İşe yaramaz.</b> Neredeyse her zaman “evet” cevabı alırsın ve ne anladıkları hakkında hiçbir şey öğrenmezsin.'],
          ['✋','“Parmaklarınızla gösterin: çizimde kaç kiriş görüyorsunuz?”','yes','<b>İşe yarar.</b> Herkes katılır ve cevapları anında görürsün.'],
          ['🖥️','Zaman kazanmak için puanlı kartı kendi ekranında çözmek.','no','<b>İşe yaramaz.</b> Yalnızca senin ekranında çözülen puanlı bir kart her öğrenci için sıfır sayılır.']
        ]}
      ]},
      { id:'after', e:'🗂️', title:'Dersten sonra ve bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['✍️','Açık uçlu cevapları değerlendir','Açık uçlu cevaplı görevler (örneğin kompozisyon soruları) <b>bir sonraki dersten önce elle</b> değerlendirilir. Nadirdirler ama olurlar.'],
          ['🚫','Bireysel çalışmayı asla atlama','Bireysel çalışma bölümü ve Yeni Nesil Sorular, grup geride kalsa bile <b>asla atlanmaz</b>.'],
          ['🐞','Bir kart çalışmıyor','Bir kart çalışmıyorsa, gönderilemiyorsa veya garip bir puan veriyorsa, <b>ders numarası</b> ve <b>kart adıyla</b> metodoloji ekibine bildir.'],
          ['🔌','Follow Mode ile ilgili sorunlar','Follow Mode kullanılırken teknik sorunlar olursa, bunları yeşil Slack’teki <b>#mena-math-newcontent-questions</b> kanalından ürün ve içerik ekibine bildir.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Tüm öğretmen notlarını inceledim ve ilk karttaki video brifingi izledim.','Harici bir araca bağlı interaktif görevleri denedim.'] },
          { h:'🎬 Ders sırasında', items:['Materyalleri ekran paylaşmadan, Follow Mode ile gösteriyorum.','Her öğrenci puanlı kartları platformda çözüp gönderiyor.','Öğretmen panelini kontrol ediyorum ve gerektiğinde farklı bir örnekle tekrar açıklıyorum.','“Her şey anlaşıldı mı?” diye sormak yerine anlık kontroller yapıyorum.','Bireysel çalışmayı ve Yeni Nesil Soruları atlamıyorum.'] },
          { h:'📤 Dersten sonra', items:['Açık uçlu cevapları bir sonraki dersten önce elle değerlendirdim.','Öğrencilerin ödevlerini gönderdiğini kontrol ettim.','Çalışmayan her kartı ders numarası ve kart adıyla bildirdim.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Math 5 nasıl düzenlenmiştir?',
      o:['Ayrı konular ve alıştırmalarla.','Vakalarla: her modül gerçek hayattan bir problemdir ve matematik, öğrenciler ihtiyaç duyduğunda ortaya çıkar.','Haftalık sınavlarla.'],
      a:1, e:'Her modülde gerçek hayattan bir vaka — park, şenlik, tarif — ve matematik yol boyunca keşfedilir.' },
    { q:'Bir derste yeni bir kavram hangi sırayla sunulur?',
      o:['Soyut → Görsel → Somut.','Somut → Görsel → Soyut: önce gerçek bir durum, sonra onun görsel temsili ve en son kural.','Önce tanım, sonra alıştırmalar.'],
      a:1, e:'Açılış görevi bir kancadır. Tanım asla örnekten önce gelmez.' },
    { q:'Yeni Nesil Soru nedir?',
      o:['Daha zor bir çoktan seçmeli soru.','Öğrencinin yönteminin neden işe yaradığını veya koşullar değişirse neyin değişeceğini açıkladığı bir soru.','Erken bitiren öğrenciler için isteğe bağlı bir soru.'],
      a:1, e:'Her ders bir tanesiyle biter ve asla atlanmaz: odak yalnızca hesaplamak değil, açıklamaktır.' },
    { ctx:'1. Derste bir öğrenci, [AB ve [BA’nın aynı ışın olduğunu yazıyor.',
      q:'Hangisi doğru?',
      o:['Haklı: ikisi de aynı iki noktadan geçiyor.','Hayır: ışın ilk harften başlar, bu yüzden [AB ve [BA iki farklı ışındır.','Yalnızca ışın dikeyse yanlıştır.'],
      a:1, e:'[AB, A’dan başlar ve B’den geçer; [BA, B’den başlar ve A’dan geçer. Buna karşılık [AB] ve [BA] doğru parçaları aynı doğru parçasıdır.' },
    { q:'Modül boyunca sorumluluğun kademeli devri ne anlama gelir?',
      o:['Öğretmen modülün sonunda her şeyi çözer.','Başta adım adım talimatlar ve şablonlar vardır; sonunda öğrenci yöntemi seçer ve ipucu olmadan çözer.','Ev ödevi isteğe bağlı hâle gelir.'],
      a:1, e:'Destek modül boyunca azalır ve sonunda öğrenci bağımsız olarak çözer.' }
  ],
  m2:[
    { q:'Ders materyallerini nasıl gösterirsin?',
      o:['Ekranını paylaşarak.','Her seferinde Follow Mode ile.','Sohbete ekran görüntüleri göndererek.'],
      a:1, e:'Her zaman Follow Mode kullanılır. Ekran paylaşarak göstermek istenmez.' },
    { ctx:'Zaman kazanmak için bir eğitmen, grup izlerken puanlı bir kartı kendi ekranında çözüyor.',
      q:'Öğrencilerin puanlarına ne olur?',
      o:['Herkes tam puan alır.','Her öğrenci için sıfır sayılır: her biri kartı platformda kendisi çözmelidir.','Puan öğrenciler arasında paylaştırılır.'],
      a:1, e:'Puanlı her kartı her öğrenci platformda bireysel olarak tamamlar.' },
    { ctx:'Öğretmen paneli, öğrencilerin çoğunun bir görevi yanlış yaptığını gösteriyor.',
      q:'Ne yaparsın?',
      o:['Zaman kaybetmemek için sonraki karta geçersin.','Farklı bir örnekle tekrar açıklar ve yeniden denemelerine izin verirsin.','Doğru cevabı sohbete yazarsın.'],
      a:1, e:'Öğretmen paneli zamanında tepki vermen içindir: farklı bir örnek ve yeni bir deneme.' },
    { q:'Bir kart garip bir puan veriyor. Ne yaparsın?',
      o:['Hiçbir şey — oluyor böyle şeyler.','Ders numarası ve kart adıyla metodoloji ekibine bildirirsin.','Öğrencilere o kartı bir daha yapmamalarını söylersin.'],
      a:1, e:'Ders numarası ve kart adıyla ekip kartı bulup düzeltebilir.' },
    { q:'Classroom’da bir şeyi görsel olarak açıklamak için hangi aracı kullanırsın?',
      o:['Zoom’daki gibi açıklama aracını.','Whiteboard’u.','Ayrı bir paylaşılan belgeyi.'],
      a:1, e:'Classroom’da henüz açıklama aracı yok: bir şeyi açıklamak için Whiteboard kullanılır.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modüller tamamlandı!',
  html: `<p>Neredeyse bitirdin! Bu eğitime eriştiğin LMS eğitim sayfasına geri dön. DST testi, eğitimin hemen altında yer alıyor.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini yapman ve geçmen gerekir.</b> DST testini yapmazsan eğitim tamamlanmamış olarak kalır ve süresi dolabilir.</p>
    <p>Geçme notu en az <b>%80</b>’dir.</p>
    <p>Bol şans! ❤️</p>`,
  nexts: [
    ['📒', '<b>Her dersten önce:</b> tüm öğretmen notlarını incele ve video brifingi izle.'],
    ['👁️', '<b>Derste:</b> her seferinde Follow Mode, ve her öğrenci kendi kartlarını çözer.'],
    ['📊', '<b>Öğretmen paneli:</b> birçok öğrenci yanlış yaparsa farklı bir örnek ve yeni bir deneme.'],
    ['🌱', '<b>Asla atlama:</b> bireysel çalışmayı ve Yeni Nesil Soruları.']
  ]
};
