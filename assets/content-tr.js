/* ============================================================
   EM course training · Math levels 5, 6 and 7 (Matematik Maceraları) [2218 · 2219 · 2220] · TURKISH ONLY
   Emergency version built from the Turkish course cards (no English base file). Keep HTML tags, {placeholders},
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
  allDoneText: 'Bu eğitimin dört modülünü de tamamladın.',
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
COURSE.id = 'math567';
COURSE.code = '2218 · 2219 · 2220';
COURSE.title = 'Math 5–7';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2218] [2219] [2220]',
  title: 'Matematik <span class="hl">5 · 6 · 7. Seviye</span>',
  lead: 'Math Adventures, 9–13 yaş öğrenciler için: 5., 6. ve 7. seviyelerin kurs içeriği ve derslerin teknik tarafı. Dört modül: her seviye için bir modül ve ortak teknik modül.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['🧮', '<b>Uygulamaya yönelik.</b> Derslerden gerçek durumlar, neyin işe yaradığına karar verdiğin bir etkinlik ve ilk derslerin için teknik bir kontrol listesi.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> önce <b>Yeni Eğitim Modeli (EM) ana eğitimini</b> tamamla. Bu kurs eğitimi ondan sonra gelir ve orada gördüklerinin üzerine kurulur: Backoffice ve öğretmen notları (Teacher Notes), Follow Mode ile Classroom ve ders kalitesi.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek.</b> Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📐', color:'#0EA5E9', title:'5. Seviye · Kursun içeriği',
    desc:'Math 5’in yeni modelde nasıl işlendiği ve Modül 1’in ilk dersi.',
    obj:'9–11 yaş öğrencilerin her modülde gerçek hayattan bir vakayı çözdüğü ve ihtiyaç duydukları matematiği yol boyunca keşfettiği Math 5’in ilk dersine hazırlan.',
    offer:[['🏙️','Kursu ve vakaya dayalı hikâyesini tanı.'],['🧠','Yeni modelin bir matematik kursunda nasıl işlediğini anla.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🏙️', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','9–11'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 5. Seviye</b> vakaya dayalı bir kurstur. Öğrenciler konuları tek tek çalışmak yerine <b>her modülde gerçek hayattan bir problemi</b> çözer — bir şehir parkı tasarlamak, okul şenliği düzenlemek, bir tarifle yemek yapmak, spor rekorlarını takip etmek — ve ihtiyaç duydukları matematiği yol boyunca keşfeder.' },
        { t:'p', html:'Modül 1’in ilk dersinde öğrenci, <b>Sofya ve Rafi’nin mimarlık ekibine</b> katılır. Ekip bir <b>okul parkı</b> tasarlıyor, ancak önce fikirlerini kesin çizgilerle göstermesi gerekiyor. Bunun için öğrenciler “mimarın araç kutusunu” tanır: nokta, doğru parçası, ışın ve doğru.' },
        { t:'callout', kind:'tip', e:'🇹🇷', html:'Kurs, <b>Maarif programının 5. sınıf matematik müfredatıyla</b> (<code>MAT.5.1</code> – <code>MAT.5.6</code>) tamamen uyumludur: her kazanım, uygulamalı bir vakanın içinde ele alınır.' }
      ]},
      { id:'model', e:'🧠', title:'Matematikte yeni model', blocks:[
        { t:'p', html:'Yeni modelin çerçevesi ana eğitimde gördüğünle aynıdır, ancak matematikte biraz farklı uygulanır. Her ilkeyi aç:' },
        { t:'acc', items:[
          ['🧱','Somut → Görsel → Soyut','<p>Her ders, konuyla yakından ilgili <b>gerçek bir problemle</b> açılır: öğrenci önce somut bir durumla karşılaşır (S), ardından onun görsel temsiliyle (G) ve ancak sonra soyut formüllere ve kurallara geçer (S).</p><p>Dersin başlangıcındaki görev, <b>öğrencinin ilgisini çekmeyi amaçlar; konuyu açıklamak için kullanılmaz</b>. Tanımı örnekten önce açıklama.</p>'],
          ['📶','Basitten karmaşığa','<p>Görevler her dersin içinde artan zorlukla sıralanır. Her seviye anlamanın bir adımına odaklanır: önce temel uygulama, sonra daha karmaşık durumlar. Seviyeler sabittir ve <b>açıkça etiketlenmiştir</b>.</p>'],
          ['🌱','Yeni Nesil Sorular','<p>Öğrenciler yalnızca çözmez, <b>problemin arkasındaki matematiği açıklar</b>: bu yöntem neden işe yarıyor, şu değişirse ne olur… Her ders bir Yeni Nesil Soru ile biter ve bu soru <b>asla atlanmaz</b>.</p>'],
          ['🔁','Kodland Öğrenme Döngüsü','<p>Hedef → taslak çözüm → zorluk veya hata → strateji veya ipucu → iyileştirme → sonuç kontrolü → yansıma. Döngü hem derste hem de sonraki bağımsız çalışmada devam eder. <b>Ev ödevi dersin zorunlu bir parçasıdır.</b></p>'],
          ['✅','Sonuç kontrolleri ve modül testi','<p>Her ders bir <b>sonuç kontrolüyle</b> kapanır: o dersin belirli kazanımına bağlı kısa bir görev. Modül, tüm sonuç kontrollerini kapsayan birikimli bir testle biter. Sonuçları öğrenci, öğretmen ve veli görür.</p>'],
          ['💬','Üç yönlü geri bildirim','<p>Öğretmen çözümün kalitesini ve adımların anlaşılmasını değerlendirir; grup, gözden geçirme sırasında tepki verir; öğrenci de hangi sonuç kontrollerini tamamladığını ve hangilerini tamamlamadığını işaretler.</p>'],
          ['🪜','Sorumluluğun aşamalı olarak öğrenciye devredilmesi','<p>Modülün başında öğrenciler adım adım talimatlar ve çözüm şablonları alır. Modülün sonunda <b>yöntemi kendileri seçer</b> ve çözümü ipucu olmadan tamamlar.</p>']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Doğrular ve açılar. Çokgenler ve çemberler.</b> İlk derste öğrenci, okul parkı planını çizebilmek için geometrinin temel dilini öğrenir. Dersi aç:' },
        { t:'lessons', key:'m1', items:[
          { tab:'D1', e:'🏛️', h:'1. Ders — Mimari çizimin temelleri', p:'Matematik Maceraları’nın ilk dersi. Öğrenci, Sofya ve Rafi’nin mimarlık ekibine katılır: bir okul parkı tasarlıyorlar, ancak önce fikirlerini kesin çizgilerle göstermeleri gerekiyor. Öğrenci nokta, doğru parçası, ışın ve doğruyu öğrenirken “mimarın araç çantasını” tanır. <code>MAT.5.3.1</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Nokta</b>: tam olarak bir yeri gösterir ve boyutu yoktur (uzunluğu, genişliği ve kalınlığı yoktur). Büyük harfle gösterilir: A.</li><li><b>Doğru parçası</b>: iki noktayla sınırlıdır ve belirli bir uzunluğu vardır. [AB] şeklinde gösterilir; [AB] ve [BA] aynı doğru parçasıdır. Cetvelle ölçülebilen tek şekildir.</li><li><b>Işın</b>: bir başlangıç noktası vardır ve tek yönde sonsuza kadar uzanır. [AB şeklinde gösterilir: ilk harf başlangıç noktasıdır. [AB ve [BA <b>iki farklı ışındır</b>.</li><li><b>Doğru</b>: iki yönde de sonsuza kadar uzanır, ucu yoktur. AB şeklinde gösterilir.</li><li>Bir doğru parçası bir uçtan uzatılırsa ışın, iki uçtan uzatılırsa doğru olur.</li><li>Mimarın araç çantası: cetvel, pergel ve gönye. Pergel ve gönye ilerideki dersler için önceden tanıtılır.</li><li>Derste iki tür kart vardır: <b>mavi</b> kartlar tüm sınıfla birlikte işlenir ve puanlanmaz (5, 6 ve 8. teori kartları); <b>yeşil ✍️</b> kartlar bireysel olarak çözülür, puanlıdır ve otomatik kontrol edilir (7, 9, 12 ve 13. kartlar).</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (17 dk):</b> Sofya ve Rafi ile tanışma ve bağlantı kontrolü (5 dk), roller ve ruh hâli (5 dk), kurallar ve iki kart türü (4 dk), mimarın araç çantası (3 dk).</li><li><b>Nokta ve doğru parçası (16 dk):</b> nokta (5 dk) ve doğru parçası (4 dk) teori kartları, ardından ✍️ Bireysel çalışma 1 (7 dk).</li><li><b>Işın ve doğru (12 dk):</b> teori kartı (5 dk), ardından ✍️ Bireysel çalışma 2 (7 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Dersin kazanımları (14 dk):</b> ✍️ Bireysel çalışma 3 (7 dk) ve ✍️ Yeni Nesil Sorular (7 dk).</li><li><b>Kapanış (10 dk):</b> değerlendirme ve yansıtma (3 dk); modül hedefi, ödev ve sonraki ders (7 dk).</li><li>Toplam yaklaşık 72 dakika ve geçişler, geç kalanlar ve sorular için yaklaşık 8 dakika pay. “Yaygın hataları kontrol etme” ve “Ek görev” kartları 80 dakikaya dâhil değildir: yalnızca zaman kalırsa yapılır.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Nokta, doğru parçası, ışın ve doğruyu uçlarına göre birbirinden ayırt eder.</li><li>Gösterimleri okur ve yazar: A, [AB], [AB, AB; [AB] = [BA] olduğunu, ancak [AB ≠ [BA olduğunu bilir.</li><li>Yalnızca doğru parçasının ölçülebileceğini ve bir doğru parçası uzatıldığında önce ışına, sonra doğruya dönüştüğünü bilir.</li><li>Dersin 4 yaygın hatasından kaçınır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Teori kartlarını tüm sınıfla birlikte işle: önce animasyonu göster, sonra tanımı açıkla ve kontrol sorularını grupla birlikte cevapla. Bu kartlar puanlanmaz.</li><li>Bireysel çalışma kartlarında öğrenci tek başına çalışır: <b>ilk denemeden önce ipucu verme</b>. Öğrenci hata yaparsa cevabı söyleme; onu öğretmen notlarında belirtilen teori kartına yönlendir.</li><li>Bu ilk ders olduğu için her öğrencinin derse katıldığından, arayüzü gördüğünden ve iki kart türünü anladığından emin ol.</li><li>Yeni Nesil Sorulardan sonra yalnızca “Cevap ne?” diye sorma; “Nasıl karar verdin?” diye sor.</li><li>Kapanışta her öğrenci bir modül hedefi seçer ve bunun kendisi için neden önemli olduğunu söyler. Ödevi hatırlat: zorunlu bölüm 3 sorudur ve yaklaşık 5 dakika sürer, diğer sorular bonustur.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Doğru parçası doğru değildir: uç noktalarının ötesine uzanmaz.</li><li>[AB] = [BA], çünkü doğru parçasında harf sırası önemli değildir; ancak [AB ≠ [BA, çünkü ışında ilk harf başlangıç noktasını gösterir.</li><li>Işında harflerin sırası önemlidir: [AB ışını A’dan başlar, B’den başlamaz.</li><li>Noktanın boyutu yoktur: “alanı olan küçük bir nokta” değildir.</li><li>Dersin 60 dakikası geçtiyse “Yaygın hataları kontrol etme” kartını atla; bireysel çalışmayı ve Yeni Nesil Soruları ise asla atlama.</li><li>Bireysel çalışma 1’deki interaktif cetveli dersten önce kendin dene.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Öğretmen notları artık derse hazırlığın ana kaynağıdır.</b> Zamanlamalı ders planını, dersin görevlerini ve her kartta her an ne yapılacağını içerir. İlk kartta tam açıklama ve bir <b>video bilgilendirmesi</b> vardır. <b>Dersten önce tüm öğretmen notlarını incele ve videoyu izle.</b>' }
      ]},
      { id:'goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','Sayılar, işlemler ve ekonomi','Öğrenciler çok basamaklı işlemleri güvenle yapar ve bunları gerçek bütçeleme ve kâr/zarar durumlarına (okul kermesi örneği) uygular.'],
          ['📐','Geometri ve ölçme','Noktalar, doğrular, açılar, çokgenler, daireler, çevre ve alan kavramlarını kullanarak gerçek mekân düzenleri tasarlar (park ve oyun alanı örnekleri).'],
          ['🍰','Kesirler, ondalık sayılar ve yüzdeler','Yemek pişirme ve spor karşılaştırması bağlamlarında kesirleri, ondalık sayıları ve yüzdeleri akıcı biçimde dönüştürür ve karşılaştırır.'],
          ['📊','Veri, cebir ve olasılık','Kendi verilerini toplar ve görselleştirir, denklem temelli bulmacaları çözer, sayı dizilerini tanır ve günlük olayların olasılıklarını tahmin eder.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Temel işlemleri kavramak:</b> çok basamaklı çarpma/bölme, basamak değeri ve dört işlemde akıcı olmak.</li><li><b>Kesir, ondalık sayı ve yüzde becerileri:</b> bunları karşılaştırmak, dönüştürmek, toplamak ve çıkarmak.</li><li><b>Geometri ve ölçme:</b> şekilleri tanımlamak, açıları ölçmek, çevre ve alan hesaplamak.</li><li><b>Veri analizi:</b> araştırma sorusu kurmak, sıklık tablosu ve çubuk grafik hazırlamak, kanıta dayalı sonuca varmak.</li><li><b>Cebirsel ve olasılıksal akıl yürütme:</b> eşitliğin korunması, işlem sırası, sayı dizileri, basit algoritmalar ve 0–1 ölçeğinde olasılık.</li><li><b>Analitik düşünme:</b> hesaplamanın ötesinde açıklama gerektiren Yeni Nesil Sorular.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Modül görevleri:</b> her modülün sonunda (yaklaşık her 4 derste bir) vaka temelli bir görev.</li><li><b>Uygulamalı ödevler:</b> her dersin ikinci yarısında, o dersin kazanımına bağlı bireysel görev.</li><li><b>Çözüm belgeleri:</b> öğrencinin çözüm sürecini, hatalarını ve son cevabını gösteren, öğretmenin incelediği şablon.</li><li><b>İlerleme panosu</b> ve <b>veli raporları</b> (her modülün 1., 4. ve 8. dersinden sonra).</li></ul>']
        ]}
      ]},
      { id:'syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['📐','Modül 1 · Doğrular ve açılar. Çokgenler ve daireler','<ol><li>Mimari çizimin temelleri <code>MAT.5.3.1</code></li><li>Noktaların, doğru parçalarının ve doğruların özellikleri <code>MAT.5.3.2</code></li><li>Her derecede hassasiyet: açıların ölçülmesi <code>MAT.5.3.3</code></li><li>Modül incelemesi <code>MAT.5.3.4</code></li><li>Oyun alanları oluşturma: çokgenlere giriş <code>MAT.5.3.5</code></li><li>Şekillerin özellikleri: üçgenlerin ve dörtgenlerin sırları <code>MAT.5.3.6</code></li><li>Çembere çizilen çokgenlerin inşası <code>MAT.5.3.7</code></li><li>Şekilleri birleştirme. Modül tekrarı</li></ol><p><b>Sonuç:</b> çizim temelleri, noktaların, doğru parçalarının ve doğruların özellikleri ile hassas açı ölçümü; çokgenler ve daireler konusunda sağlam bir kavrayış ve şekilleri birleştirerek geometrik problemleri özgüvenle çözme.</p>'],
          ['🔢','Modül 2 · Sayılar ve işlemler. Çevre ve alan','<ol start="9"><li>Büyük sayıların okunması ve yazılması, basamak değerleri <code>MAT.5.1.1</code></li><li>Büyük sayılarla toplama ve çıkarma <code>MAT.5.1.1</code></li><li>Doğal sayılarla çarpma ve bölme <code>MAT.5.1.2</code></li><li>Karmaşık hesaplamalar, işlem sırası. Modül gözden geçirme <code>MAT.5.1.2</code></li><li>Uygulamada doğal sayılar: bir dikdörtgenin çevresi <code>MAT.5.1.2</code>, <code>MAT.5.4.1</code></li><li>Alan ölçümü <code>MAT.5.4.1</code>, <code>MAT.5.4.2</code></li><li>Alan ve çevre: hangisi daha önemli? <code>MAT.5.4.3</code></li><li>Yenileme sorunlarının çözümü. Modül gözden geçirme <code>MAT.5.4.4</code></li></ol><p><b>Sonuç:</b> büyük sayıları okuma ve yazma, basamak değeri, dört işlem; dikdörtgenlerin çevresini ve alanını hesaplama ve bunları yenileme ve alan planlaması gibi pratik problemlere uygulama.</p>'],
          ['🍰','Modül 3 · Kesirler, ondalık sayılar ve yüzdeler','<ol start="17"><li>Kesirler, bileşik kesirler ve karma sayılar <code>MAT.5.1.3</code></li><li>Kesirlerden ondalık sayılara ve yüzdelere <code>MAT.5.1.3</code></li><li>Kesirlerde toplama ve çıkarma <code>MAT.5.1.3</code></li><li>Modül incelemesi <code>MAT.5.1.3</code>, <code>MAT.5.1.4</code></li><li>Kesirlerin karşılaştırılması <code>MAT.5.1.4</code></li><li>Kesirlerin, karma sayıların ve bileşik kesirlerin karşılaştırılması <code>MAT.5.1.4</code></li><li>Ondalık sayıların karşılaştırılması <code>MAT.5.1.4</code></li><li>Modül incelemesi</li></ol><p><b>Sonuç:</b> kesirleri, karma sayıları, bileşik kesirleri ve ondalık sayıları doğru karşılaştırma ve sayısal değerleri güvenle sıralama.</p>'],
          ['📊','Modül 4 · Veri toplama: istatistiğe giriş','<ol start="25"><li>Kategorik verilerle çalışma: araştırma sorusu ve anket <code>MAT.5.5.1</code></li><li>Çetele tabloları ve sıklık tabloları <code>MAT.5.5.1</code></li><li>Nokta grafikleri ve çubuk grafikler <code>MAT.5.5.1</code></li><li>Daire grafikleriyle çalışma. Modül özeti <code>MAT.5.5.1</code>, <code>MAT.5.5.2</code></li><li>Örüntülere ve dizilere giriş <code>MAT.5.2.2</code>, <code>MAT.5.2.3</code></li><li>Olasılık ölçeğini anlama <code>MAT.5.6.1</code></li><li>Final sınavlarına hazırlık</li><li>Mezuniyet dersi</li></ol><p><b>Sonuç:</b> anketler, çetele ve sıklık tablolarıyla kategorik veri toplama; nokta, sütun ve daire grafikleriyle gösterme; istatistiksel ifadeleri yorumlama ile sayısal ve geometrik örüntüleri fark edip sürdürme.</p>']
        ]}
      ]},
      { id:'req', e:'🤓', title:'Katılım koşulları', blocks:[
        { t:'p', html:'<ul><li>4. sınıf matematik müfredatını veya eşdeğerini tamamlamış olmak.</li><li>Çok basamaklı toplama, çıkarma, çarpma ve bölme işlemlerinde kendine güvenmek.</li><li>Temel kesirler, ondalık sayılar ve yüz binlere kadar basamak değeri kavramlarına aşina olmak.</li><li>Bulmaca çözmeye, örüntüleri keşfetmeye ve gerçek hayat problemleriyle öğrenmeye ilgi duymak.</li></ul>' }
      ]},      { id:'bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve ilk dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2218', e:'📘', title:'Kursu Backoffice’te aç', small:'[2218] Math 5 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'m2', n:2, e:'🧮', color:'#8B5CF6', title:'6. Seviye · Kursun içeriği',
    desc:'Math Adventures 6. Seviye: kurs kartı, kazanımlar, ilk ders, müfredat ve katılım koşulları.',
    obj:'10–12 yaş öğrencilere yönelik Math Adventures 6. Seviye kursunun genel yapısını, kazanımlarını ve 4 modüllük müfredatını tanı ve ilk derse hazırlan.',
    offer:[['📋','Kursun genel bilgilerini ve hedeflerini öğren.'],['🏆','Öğrencilerin kurs sonunda neler kazandığını bil.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📜','4 modülün konularını ve sonuçlarını gör.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'l6ov', e:'📋', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','10–12'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 6. Seviye</b>, 10–12 yaş arası çocuklar için tasarlanmış kapsamlı ve ilgi çekici bir matematik kursudur. Temel aritmetik becerilerini geliştirmeyi, kesirler ve ondalık sayılarla çalışmayı ve geometriyle problem çözmeyi amaçlar. Gerçek hayattan örnekler derse entegre edilir; öğrenciler her 8 derste bir interaktif ve macera tarzı görevlerle matematiğin günlük hayatta nasıl kullanıldığını öğrenir.' },
        { t:'callout', kind:'tip', e:'🏠', html:'<b>Ödev:</b> haftada bir <b>haftalık Meydan Okuma</b>. Öğrenciler 32 haftalık oyunlaştırılmış bir deneyime katılır; bu etkileşimli zorluklar ders materyalini pekiştirir ve öğrencinin gelişimini takip eder.' },
        { t:'callout', kind:'warn', e:'🧭', html:'<b>Grup ve birebir dersler:</b> grup dersleri 80 dakika, birebir dersler 50 dakikadır. Yeni modelin ilkeleri (Modül 1) ve teknik adımlar (Modül 4) bu seviye için de geçerlidir.' }
      ]},
      { id:'l6goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','İşlemlerde yeterlilik','Öğrenciler tam sayılar, kesirler ve ondalık sayılarla işlemlerde uzmanlaşır.'],
          ['🧩','Temel cebir ustalığı','Basit denklemleri anlar ve çözer, cebirsel ifadeleri sadeleştirir.'],
          ['📐','Geometrik beceriler','Alanları ve hacimleri hesaplar, şekillerde dönüştürme yapar.'],
          ['📊','Veri analizi yetenekleri','Verileri etkili biçimde analiz eder, tablo ve grafikleri yorumlar.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Oranlar ve yüzdelerle problem çözme:</b> orantıları, oranları ve yüzdeleri içeren gerçek dünya problemlerini çözmek.</li><li><b>Temel cebire giriş:</b> cebirsel ifadeler ve basit denklemler.</li><li><b>Geometrinin temelleri:</b> alan ve hacim hesaplamak, şekil dönüşümlerini anlamak.</li><li><b>Veri yorumlama:</b> grafikleri yorumlamak ve istatistiklerle çalışmak.</li></ul>'],
          ['🧮','Zor beceriler','<ul><li>Tam sayılarla, kesirlerle ve ondalık sayılarla işlemler.</li><li>Basit cebirsel denklemlerin çözümü.</li><li>Geometrik şekillerin alan ve hacimlerinin hesaplanması.</li><li>Yüzde ve orantılarla çalışmak.</li><li>Verileri yorumlama ve ortalamayı hesaplama.</li></ul>'],
          ['🤝','Kolay beceriler (soft skills)','<ul><li>Mantıksal ve analitik düşünmede gelişme.</li><li>Problem çözme ve karar verme becerisi.</li><li>Çözümleri planlama ve yapılandırma becerisi.</li><li>Matematiksel bilgiyi günlük yaşamda uygulama konusunda güven.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Göreve dayalı zorluklar:</b> her 8 derste bir, öğrencilerin modüldeki ustalığını değerlendiren eğlenceli görevler.</li><li><b>Pratik ödevler:</b> her dersin ikinci bölümünde öğrenciler görevleri kendi hızlarında tamamlar; bireysel ilerleme izlenir ve gerektiğinde zamanında destek verilir.</li><li><b>Haftalık zorluklar:</b> geleneksel ev ödevinin yerine geçen 32 haftalık oyunlaştırılmış deneyim.</li></ul>']
        ]}
      ]},
      { id:'l6les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Sayılar, bölünebilirlik ve tamsayılar.</b> İlk derste öğrenci, Rafi’nin şenlik fırınında bölenleri ve katları keşfeder. Dersi aç:' },
        { t:'lessons', key:'m2', items:[
          { tab:'D1', e:'🧁', h:'1. Ders — Doğal sayıların çarpanları ve katları', p:'Rafi, okul şenliği için kendi fırınını açmak istiyor ve Sofya’nın titizliğine ihtiyacı var. Öğrenci fırıncı yardımcısıdır ve bu ders onun ilk vardiyasıdır: kapkekleri eşit sıralara dizerken, fırından çıkan partileri sayarken ve kumbarada para biriktirirken bölenleri ve katları kullanır.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Çarpan ve çarpım</b>: 2 × 6 = 12 eşitliğinde 2 ve 6 çarpan, 12 ise çarpımdır.</li><li><b>Bölen</b>: bir sayıyı kalansız bölen sayıdır. 12’nin bölenleri 1, 2, 3, 4, 6 ve 12’dir. Bir sayının çarpanları ve bölenleri aynı sayılardır; yalnızca adları farklıdır.</li><li>1 her sayının bölenidir; sayının kendisi de en büyük bölenidir.</li><li><b>Kat</b>: bir sayının 1, 2, 3… ile çarpılmasıyla elde edilir (5, 10, 15, 20…). Her sayının sonsuz sayıda katı vardır.</li><li>Derste iki tür kart vardır: <b>mavi</b> kartları sen yönetirsin, kontrol soruları tüm grupla cevaplanır ve puanlanmaz; <b>yeşil ✍️</b> kartlar (8, 11 ve 13. kartlar) bireysel olarak çözülür, puanlıdır ve otomatik kontrol edilir.</li><li>Jestler: “3–2–1 — gösterin!” denince herkes aynı anda gösterir (👍 / 👎, parmaklarla seçenek numarası veya sayı). Kamerası olmayanlar cevabı sohbete yazar. Jestler hiçbir zaman zorunlu değildir.</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (19 dk):</b> tanışma ve bağlantı kontrolü (10 dk), “Merhaba, fırıncı yardımcısı” (3 dk), kurallar ve iki kart türü (3 dk), ısınma: 12 kapkek (3 dk).</li><li><b>Bölenler (20 dk):</b> çarpan ve çarpım (3 dk), 12 sayısının çarpanları (3 dk), bölen teori kartı (7 dk), ✍️ Bireysel çalışma 1 (7 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Katlar (14 dk):</b> kumbara ve kat teori kartı (7 dk), ✍️ Bireysel çalışma 2 (7 dk).</li><li><b>✍️ Yeni nesil problemler (9 dk).</b></li><li><b>Kapanış (12 dk):</b> değerlendirme (5 dk); çeyrek hedefi, ödev ve sonraki ders (7 dk).</li><li>Toplam 77 dakika ve geçişler, geç kalanlar ve sorular için 3 dakika pay. İlk ders her zaman daha yavaş ilerler. “Stajyerin hatasını bulun” ve “Ek görev: çarpan çiftleri” kartları 80 dakikaya dâhil değildir: erken bitirenlere ver veya evde yapmalarını öner.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>“Çarpan”, “çarpım” ve “bölen” terimlerini bilir; çarpan ile bölenin aynı şey olduğunu bilir.</li><li>Sayıları sırayla deneyerek bir sayının tüm bölenlerini bulur.</li><li>1, 2, 3… ile çarparak katları bulur ve neden sonsuz sayıda olduklarını açıklar.</li><li>Bölenleri ve katları paketleme ve para biriktirme gibi günlük hayat problemlerinde kullanır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Her kavramı mavi kartta birlikte ele al: önce fırındaki durum (kapkek sıraları, kumbara, kutular), sonra tanım, en son grupla kontrol. <b>Tanımı deneyimden önce verme.</b></li><li>Yeşil kartlarda öğrenci tek başına çalışır: <b>ilk denemeden önce ipucu verme</b>. Hata yaparsa cevabı söyleme; onu ilgili teori kartına yönlendir (8 → 7, 11 → 10, 13 → 5, 7 ve 10).</li><li>Bu ilk ders olduğu için her öğrencinin iki kart türünü anladığından emin ol. Jest yapmayanları öne çıkarma; tüm grubu cesaretlendir.</li><li>Yeni nesil problemlerden sonra “Cevap ne?” yerine “Nasıl çözdün?” diye sor.</li><li>Kapanışta her öğrenci çeyrek için bir hedef seçer. Ödevin platformda nerede olduğunu göster: zorunlu bölüm 3 kısa görevdir ve yaklaşık 5 dakika sürer, bonus bölüm isteğe bağlıdır.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Çarpan ile çarpımı karıştırmak.</li><li>Kalanlı bölünen bir sayıyı bölen sanmak (örneğin 5’i 12’nin böleni saymak).</li><li>Bölenler arasında 1’i ve sayının kendisini unutmak.</li><li>Bölen ile katı karıştırmak: Bireysel çalışma 2’de 20 ve 25, 5’in katıdır ama 6’nın katı değildir.</li><li>Katların sonlu sayıda olduğunu düşünmek.</li><li>Dersin 60 dakikası geçtiyse “Stajyerin hatasını bulun” kartını atla; bireysel çalışmayı ve yeni nesil problemleri ise asla atlama.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Öğretmen notları artık derse hazırlığın ana kaynağıdır.</b> Zamanlamalı ders planını, dersin görevlerini ve her kartta her an ne yapılacağını içerir. İlk kartta tam açıklama ve bir <b>video bilgilendirmesi</b> vardır. <b>Dersten önce tüm öğretmen notlarını incele ve videoyu izle.</b>' }
      ]},
      { id:'l6syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['🔢','Modül 1 · Sayılar, bölünebilirlik ve tamsayılar','<ol><li>Doğal sayıların çarpanları ve katları</li><li>Bölünebilirlik kuralları</li><li>Üsleri ve kuvvetleri anlama</li><li>Ortak bölenleri ve katları bulma</li><li>Kümelere giriş</li><li>Tamsayılara giriş</li><li>Tam sayıların karşılaştırılması ve sıralanması, mutlak değer</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler sayı özellikleri, bölünebilirlik, çarpanlar ve katlar konusundaki anlayışlarını derinleştirir; tamsayılar ve kümelerle ilgili temel kavramlarla tanışır.</p>'],
          ['🍰','Modül 2 · Kesirler, ondalıklar ve cebirsel işlemler','<ol><li>Kesirler ve kesirlerle işlemlerin tekrarı</li><li>Kesirlerde çarpma ve bölme işlemleri</li><li>Ondalık sayıların gözden geçirilmesi</li><li>Ondalık sayılarla çarpma işlemleri</li><li>Ondalık sayılarla bölme işlemleri</li><li>Oran</li><li>Cebirsel ifadeler</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler kesirler ve ondalık sayılarla işlem yapmada yeterlilik kazanır, oranlar konusunda bir kavrayış geliştirir ve cebirsel ifadelerin temelleriyle tanışır.</p>'],
          ['📐','Modül 3 · Geometri ve ölçme','<ol><li>Açılar</li><li>Üçgenlerin alanını hesaplama</li><li>Dikdörtgenlerin ve paralelkenarların alanını hesaplama</li><li>Bir dairenin çevresini hesaplama</li><li>Dikdörtgen prizmaların hacmini anlama</li><li>Dikdörtgen prizmaların hacmini hesaplama</li><li>Sıvı ölçümü</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler kapsamlı bir geometri kavrayışı geliştirir; alanları ve hacimleri hesaplamayı ve açılarla çalışmayı öğrenir, uzamsal farkındalıklarını ve ölçüm becerilerini güçlendirir.</p>'],
          ['📊','Modül 4 · Veri analizi ve olasılık','<ol><li>İkili sıklık tabloları ve sütun grafikleri</li><li>Bir veri kümesinin açıklığının hesaplanması</li><li>Bir veri kümesinin aritmetik ortalamasının hesaplanması</li><li>Olasılığın temel kavramları</li><li>Olasılık hesaplama</li><li>Sayı dizileri ve mantık problemleri</li><li>Son gözden geçirme: modülü gözden geçirme çalışması</li><li>Sınıf geçme sınavı</li></ol><p><b>Sonuç:</b> öğrenciler verileri analiz etme ve sunma ile mantık yürüterek problem çözme yaklaşımı kazanır; veri gösterimi, ortalama, açıklık ve olasılığa giriş konularında analitik becerilerini geliştirir.</p>']
        ]}
      ]},
      { id:'l6req', e:'🤓', title:'Katılım koşulları ve donanım', blocks:[
        { t:'cards', cols:2, items:[
          ['🤓','Katılım koşulları','<ul><li>Çok basamaklı sayılarla işlemlerde (toplama, çıkarma, çarpma, bölme) yeterlilik.</li><li>Kesirlerle işlem yapma konusunda güven.</li><li>Açı ve alan gibi temel geometrik kavramların anlaşılması.</li><li>İfadeleri içeren temel işlemlere (sadeleştirme) aşinalık.</li></ul>'],
          ['💻','Bilgisayar gereksinimleri','<ul><li><b>İşlemci:</b> en az 2 çekirdek, 2 GHz (önerilen: 4 çekirdek, 2,5 GHz).</li><li><b>RAM:</b> en az 4 GB (önerilen: 16 GB).</li><li>Google Chrome tarayıcısı.</li><li>Kişisel bilgisayar veya dizüstü bilgisayar (tablet veya telefon değil).</li></ul>']
        ]}
      ]},
      { id:'l6bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve derslerin etkinlik kartlarını ve öğretmen notlarını kendi hızında incele. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2219', e:'📘', title:'Kursu Backoffice’te aç', small:'[2219] Math 6 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},
  { id:'m3', n:3, e:'📈', color:'#10B981', title:'7. Seviye · Kursun içeriği',
    desc:'Math Adventures 7. Seviye: kurs kartı, kazanımlar, ilk ders, müfredat ve katılım koşulları.',
    obj:'11–13 yaş öğrencilere yönelik Math Adventures 7. Seviye kursunun genel yapısını, kazanımlarını ve 4 modüllük müfredatını tanı ve ilk derse hazırlan.',
    offer:[['📋','Kursun genel bilgilerini ve hedeflerini öğren.'],['🏆','Öğrencilerin kurs sonunda neler kazandığını bil.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📜','4 modülün konularını ve sonuçlarını gör.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'l7ov', e:'📋', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','11–13'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 7. Seviye</b>, 11–13 yaş arası çocuklara yönelik ilgi çekici ve derinlemesine bir 7. sınıf matematik kursudur. Öğrencilerin rasyonel sayılarla işlemlerde uzmanlaşmasına, cebirsel ifadelerle çalışmasına ve oranlar, yüzdeler ve geometriyle gerçek dünya problemlerini çözmesine yardımcı olur. Ayrıca öğrenciler istatistik ve olasılık yoluyla veri analizini keşfeder.' },
        { t:'callout', kind:'tip', e:'🏠', html:'<b>Ödev:</b> haftada bir <b>haftalık Meydan Okuma</b>. Öğrenciler 32 haftalık oyunlaştırılmış bir deneyime katılır; her 8 derste bir interaktif dersler, gerçek hayattan uygulamalar ve macera tarzı görevler eleştirel düşünme ve problem çözme becerilerini geliştirir.' },
        { t:'callout', kind:'warn', e:'🧭', html:'<b>Grup ve birebir dersler:</b> grup dersleri 80 dakika, birebir dersler 50 dakikadır. Yeni modelin ilkeleri (Modül 1) ve teknik adımlar (Modül 4) bu seviye için de geçerlidir.' }
      ]},
      { id:'l7goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','Rasyonel sayılarda yeterlilik','Kesirler, ondalık sayılar ve tam sayılarla işlemlerde ustalaşır ve bu becerileri gerçek dünya problemlerine uygular.'],
          ['🧩','Cebir ustalığı','Cebirsel ifadeleri güvenle sadeleştirir, doğrusal denklemleri çözer ve grafiğini çizer; denklem sistemlerini hem cebirsel hem grafiksel olarak çözer.'],
          ['⚖️','Oranlar ve yüzdelerle problem çözme','Orantıları, oranları ve yüzdeleri kullanarak gerçek dünya problemlerini etkili biçimde çözer.'],
          ['📐','Geometri becerileri','2B ve 3B şekillerin alanlarını, yüzey alanlarını ve hacimlerini hesaplar; şekillere dönüşümler uygular.'],
          ['📊','Veri analizi ve istatistik','Verileri analiz eder, grafikleri yorumlar; ortalama, medyan ve mod gibi istatistikleri hesaplar.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Temel matematik işlemleri:</b> tam sayılar, kesirler ve ondalık sayılarla işlemlerde yetkinlik.</li><li><b>İleri cebir becerileri:</b> ifadeleri basitleştirme, doğrusal denklemleri ve grafik denklemlerini çözme; denklem sistemlerinin temelleri.</li><li><b>Oranlar ve yüzdeler:</b> gerçek dünya problemlerinde pratik uygulama.</li><li><b>Geometri:</b> üçgenler, dörtgenler ve daireler dahil 2B ve 3B şekillerin alanları, hacimleri ve geometrik dönüşümler.</li><li><b>Veri yorumlama ve istatistik:</b> verileri analiz etme, grafikleri yorumlama; ortalama, medyan ve mod.</li><li><b>Eleştirel düşünme ve problem çözme:</b> mantıksal akıl yürütme ve karar verme.</li></ul>'],
          ['🧮','Zor beceriler','<ul><li>Kesirler, ondalık sayılar ve tam sayılar dahil <b>rasyonel sayılarla işlemler</b>.</li><li>Cebirsel ifadeleri basitleştirme, doğrusal denklemleri çözme ve denklem sistemleriyle çalışma.</li><li>2B ve 3B şekillerin alanlarını, yüzey alanlarını ve hacimlerini hesaplama.</li><li>Oranları, orantıları ve yüzdeleri kullanarak gerçek dünya problemlerini çözme.</li><li>Veri yorumlama, ortalama, medyan ve mod hesaplama, grafik oluşturma ve yorumlama.</li></ul>'],
          ['🤝','Kolay beceriler (soft skills)','<ul><li>Eleştirel düşünme ve analitik akıl yürütme.</li><li>Yapılandırılmış bir yaklaşımla güçlü problem çözme becerileri.</li><li>Matematiksel kavramları gerçek hayata uygulamada gelişmiş karar verme.</li><li>Matematiği günlük yaşamda kullanma konusunda özgüven; konuya dair korku veya kaygıda azalma.</li><li>Karmaşık görevlerde adım adım ilerlemeyi sağlayan azim ve odaklanma.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Göreve dayalı zorluklar:</b> her 8 derste bir, öğrencilerin modüldeki ustalığını değerlendiren eğlenceli görevler.</li><li><b>Pratik ödevler:</b> her dersin ikinci bölümünde öğrenciler görevleri kendi hızlarında tamamlar; bireysel ilerleme izlenir ve gerektiğinde zamanında destek verilir.</li><li><b>Haftalık zorluklar:</b> geleneksel ev ödevinin yerine geçen 32 haftalık oyunlaştırılmış deneyim.</li></ul>']
        ]}
      ]},
      { id:'l7les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Sayılar, rasyonel sayılar ve oranlar.</b> İlk derste öğrenci, robot Nova’nın test ölçümlerini okurken tam sayılarla toplama ve çıkarma yapar. Dersi aç:' },
        { t:'lessons', key:'m3', items:[
          { tab:'D1', e:'🤖', h:'1. Ders — Tam sayılarla toplama ve çıkarma', p:'Modül 1’in hikâyesi başlar: Sofya ve Rafi, okulun bilim ekibi CodeCrew’e katılır ve robot Nova’yı Robotik ve Bilim Fuarı’na hazırlar. Nova ilk testlerini dondurucu bir laboratuvarda, okyanusun derinliklerinde ve yüksek bir kulede yapar; öğrenciler de onun sıfırın altındaki ve üstündeki ölçümlerini okur, toplar ve çıkarır.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Tam sayılar</b>: negatif tam sayılar, sıfır ve pozitif tam sayılar. Sıfır ne pozitif ne de negatiftir: işareti yoktur.</li><li>Bu derste kullanılan tek model <b>sayı doğrusudur</b>: sağa gittikçe sayılar büyür, sola gittikçe küçülür.</li><li><b>Mutlak değer</b>: bir sayının sayı doğrusunda sıfıra olan uzaklığıdır ve asla negatif olmaz. <b>Zıt sayılar</b> sıfırın farklı taraflarında, sıfıra eşit uzaklıktadır.</li><li><b>Toplama</b>: işaretler aynıysa mutlak değerler toplanır ve ortak işaret korunur; işaretler farklıysa küçük mutlak değer büyükten çıkarılır ve mutlak değeri büyük olan sayının işareti alınır.</li><li><b>Çıkarma</b>: zıt sayıyı toplamaya dönüştürülür: a − b = a + (−b) ve a − (−b) = a + b.</li><li>Yalnızca yeşil ✍️ bireysel çalışma kartları ve ödev değerlendirilir; mavi kartlarda grup birlikte cevap verir.</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (10 dk):</b> Sofya ve Rafi ile tanışma ve bağlantı kontrolü (6 dk), Modül 1’in hikâyesi, bugünün görevi ve iki kart türü (4 dk).</li><li><b>Tam sayılar (15 dk):</b> Nova’nın test bölgelerinde tam sayılar, sayı doğrusu, mutlak değer ve zıt sayılar (10 dk), ardından ✍️ Bireysel çalışma 1 (5 dk).</li><li><b>Toplama (17 dk):</b> tam sayıları toplama, dersin temel kartı (12 dk), ardından ✍️ Bireysel çalışma 2 (5 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Çıkarma (13 dk):</b> tam sayıları çıkarma (9 dk), ardından ✍️ Bireysel çalışma 3 (4 dk).</li><li><b>✍️ Yeni Nesil Sorular (6 dk):</b> dersin kazanımlarını kontrol eder ve asla atlanmaz.</li><li><b>Kapanış (8 dk):</b> değerlendirme (5 dk); modül hedefi, ödev ve sonraki ders (3 dk).</li><li>Zorunlu kartlar 72 dakikadır; kalan 8 dakika iki isteğe bağlı kart içindir: “Hatayı bulun” (yalnızca Bireysel çalışma 3 60. dakikada biterse) ve “Ek görev” (yalnızca Yeni Nesil Sorular 66. dakikada biterse). Genellikle bunlardan yalnızca biri için zaman olur.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Pozitif sayıları, negatif sayıları ve sıfırı ayırt eder ve sayı doğrusunda gösterir; sıfırın işareti olmadığını bilir.</li><li>Bir sayının mutlak değerini ve zıttını bulur; tam sayıları karşılaştırır.</li><li>Aynı ve farklı işaretli tam sayıları toplar.</li><li>Zıt sayıyı ekleyerek çıkarma yapar; a − (−b) = a + b durumu da buna dâhildir.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Yeşil ✍️ kartlar dışındaki tüm kartları sen yönetirsin. Her kuralı önce sayı doğrusundaki oklarla göster, sonra kural olarak yaz.</li><li>Grup cevapları: galeri görünümünü aç ve “3–2–1 — gösterin!” de. Sonucu grup sayısı olarak söyle (“6 kişiden 5’i 2. seçeneği gösteriyor”) ve yanlış cevap verenin adını asla söyleme. Doğru cevap oranı %80 veya üzerindeyse “Cevap ✅” bölümünü aç; altındaysa sayı doğrusuyla bir ipucu ver ve ikinci bir deneme yaptır.</li><li>Yeşil kartlarda <b>ilk denemeden önce ipucu verme</b>. Hata sonrasında öğrenciyi teori kartına yönlendir: tam sayılar, mutlak değer ve zıt sayılar için 3. kart, toplama için 5. kart, çıkarma için 8. kart.</li><li>Bu, grubun ilk dersidir: öğrencilerin isimlerini öğren, çabalarını öv ve kimseyi kamerada tek başına cevap vermeye zorlama.</li><li>Kapanışta her öğrenci bir modül hedefi seçer. Ödevin platformda nerede olduğunu göster: 3 zorunlu soru yaklaşık 5 dakika sürer, bonus sorular daha fazla puan kazandırır.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Sıfırı pozitif kabul etmek.</li><li>Negatif bir sayının mutlak değerini eksi işaretiyle yazmak.</li><li>İşaretler aynıyken mutlak değerleri çıkarmak veya işaretler farklıyken yanlış sayının işaretini almak. Her zaman oklara geri dön.</li><li>a − (−b) ifadesindeki çift eksiyi gözden kaçırmak. “−3’ün zıttı nedir?” diye sor.</li><li>“İki negatif artı eder” kuralı çarpmadan gelir: toplamada iki negatif sayının toplamı negatiftir.</li><li>Zaman yetmezse isteğe bağlı kartları atla, ama “Zamanımız yetmedi.” deme: “Bu, daha fazlasını isteyenler için bonus bir görev.” de.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Öğretmen notları artık derse hazırlığın ana kaynağıdır.</b> Zamanlamalı ders planını, dersin görevlerini ve her kartta her an ne yapılacağını içerir. İlk kartta tam açıklama ve bir <b>video bilgilendirmesi</b> vardır. <b>Dersten önce tüm öğretmen notlarını incele ve videoyu izle.</b>' }
      ]},
      { id:'l7syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['🔢','Modül 1 · Sayılar, rasyonel sayılar ve oranlar','<ol><li>Tam sayılarla toplama ve çıkarma</li><li>Tam sayılarda çarpma ve bölme</li><li>Üslü sayıları anlama ve kullanma</li><li>Kesirler ve ondalık sayıların tekrarı</li><li>Kesirler ve ondalık sayılarla işlemler</li><li>Oran ve orantının temelleri</li><li>Yüzdelerle çalışma</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler sayısal ve oransal muhakemede güçlü bir temel oluşturmak için tamsayılar, rasyonel sayılar, oranlar ve yüzdeler dahil sayı özellikleri hakkında kapsamlı bir kavrayış geliştirir.</p>'],
          ['🧩','Modül 2 · İfadeler, örüntüler ve denklemler','<ol><li>Cebirsel ifadelerin gözden geçirilmesi</li><li>Cebirsel ifadelerin sadeleştirilmesi</li><li>Cebirsel ifadelerin genişletilmesi</li><li>Cebirsel formda örüntüler ve kuralları</li><li>Denklemlerde eşitlik ilkesi</li><li>İki adımlı denklemlere giriş</li><li>Ondalık sayılar ve kesirlerle iki adımlı denklemler</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler mantık yürütme ve problem çözme yeteneklerini geliştirmek için çok önemli olan ifadelere, örüntülere ve denklem çözmeye odaklanarak temel cebirsel beceriler kazanır.</p>'],
          ['📐','Modül 3 · Geometri ve ölçme','<ol><li>Doğrular ve açılar</li><li>Çokgenlere giriş</li><li>Dörtgenlerin özellikleri</li><li>Dörtgenlerin alan ve çevresinin hesaplanması</li><li>Dairenin çevresini bulma ve yay uzunluklarını anlama</li><li>Çemberlerin ve sektörlerin alanlarının hesaplanması</li><li>Katıların farklı görünümleri</li><li>Problem çözme uygulaması: modülü gözden geçirme çalışması</li></ol><p><b>Sonuç:</b> öğrenciler alan ve çevre hesaplamaya ve iki ve üç boyutlu şekillerin özelliklerini anlamaya odaklanarak uzamsal farkındalık ve geometri muhakemelerini geliştirir.</p>'],
          ['📊','Modül 4 · Veri analizi ve olasılık','<ol><li>Çizgi grafiklerinin oluşturulması ve yorumlanması</li><li>Ortalama, medyan ve modun hesaplanması</li><li>Daire grafiklerini anlama ve oluşturma</li><li>Grafik türleri arasında dönüştürme</li><li>Uygun ölçümlerin seçilmesi ve verilerin karşılaştırılması</li><li>Gerçek yaşam verilerini analiz etme ve grafikleri yorumlama</li><li>Son gözden geçirme: modülü gözden geçirme çalışması</li><li>Sınıf geçme sınavı</li></ol><p><b>Sonuç:</b> öğrenciler veri gösterimi, istatistiksel analiz ve olasılık konularında becerilerini geliştirir ve veri kümelerini etkin biçimde yorumlayıp analiz edebilecekleri araçlarla donatılır.</p>']
        ]}
      ]},
      { id:'l7req', e:'🤓', title:'Katılım koşulları ve donanım', blocks:[
        { t:'cards', cols:2, items:[
          ['🤓','Katılım koşulları','<ul><li>Tam sayılar, kesirler ve ondalık sayılarla işlemlerde yeterlilik.</li><li>Basit cebirsel denklemleri çözme ve ifadeleri basitleştirme konusunda güven.</li><li>Açılar, alanlar ve şekillerin temel özellikleri dahil geometrik kavramların anlaşılması.</li><li>Oranlara ve yüzdelere aşinalık; bu kavramlarla temel problem çözme.</li><li>Grafiklerden veri yorumlama ve ortalama gibi basit istatistikleri hesaplama.</li></ul>'],
          ['💻','Bilgisayar gereksinimleri','<ul><li><b>İşlemci:</b> en az 2 çekirdek, 2 GHz (önerilen: 4 çekirdek, 2,5 GHz).</li><li><b>RAM:</b> en az 4 GB (önerilen: 16 GB).</li><li>Google Chrome tarayıcısı.</li><li>Kişisel bilgisayar veya dizüstü bilgisayar (tablet veya telefon değil).</li></ul>']
        ]}
      ]},
      { id:'l7bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve derslerin etkinlik kartlarını ve öğretmen notlarını kendi hızında incele. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2220', e:'📘', title:'Kursu Backoffice’te aç', small:'[2220] Math 7 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},
  { id:'m4', n:4, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Follow Mode, puanlı kartlar, öğretmen paneli ve bir şey çalışmadığında ne yapılacağı.',
    obj:'Bir Math dersinin teknik işleyişini öğren: Her zaman Follow Mode kullanımı, her öğrencinin bireysel olarak tamamladığı puanlı kartlar, öğretmen panelinin kullanımı ve sorunların nasıl bildirileceği.',
    offer:[['👁️','Materyalleri her zaman Follow Mode ile göster.'],['🧮','Her öğrencinin kartları bireysel olarak tamamlayıp göndermesini sağla.'],['📊','Öğrencilere zamanında geri bildirim vermek için öğretmen panelini kullan.'],['🚨','Neyin, nereye bildirileceğini bil.']],
    sections:[
      { id:'class', e:'🎥', title:'Ders sırasında', blocks:[
        { t:'cards', cols:2, items:[
          ['👁️','Her zaman Follow Mode','Ders materyallerini gösterirken <b>her zaman</b> Follow Mode kullan. Materyalleri göstermek için <b>ekran paylaşımı yapma</b>.'],
          ['🧮','Puanlı her kart, bireysel olarak','Her öğrenci puanlı kartları platformda bireysel olarak tamamlamalıdır. <b>Yalnızca öğretmenin ekranında çözülen bir puanlı kart</b>, her öğrenci için <b>sıfır puan</b> olarak değerlendirilir.'],
          ['📤','Sınıf çalışması ve ödev gönderimi','Öğrencilerin sınıf içi çalışmalarını ders sırasında göndermelerini sağla. Ödevlerini tamamlamaları için onları teşvik et ve ödevlerini gönderdiklerini kontrol et.'],
          ['🖍️','Çizim aracı yerine Beyaz Tahta','Classroom’da henüz Zoom’daki gibi bir çizim ve açıklama aracı bulunmuyor. Bir konuyu görsel olarak açıklamak için <b>Beyaz Tahtayı</b> kullan.']
        ]}
      ]},
      { id:'panel', e:'📊', title:'Öğretmen paneli ve geri bildirim', blocks:[
        { t:'steps', items:[
          ['Sonuçları kontrol et','Öğrenciler cevaplarını gönderdikten sonra sonuçlarını <b>öğretmen panelinden</b> kontrol et.'],
          ['Birçok öğrenci hata yaptıysa','Konuyu <b>farklı bir örnek üzerinden</b> yeniden açıkla ve öğrencilerin tekrar denemelerini sağla.'],
          ['Açıklama iste','Bir veya iki öğrenciden çözümlerini açıklamalarını iste. Hataları birer öğrenme fırsatı olarak değerlendir.'],
          ['Cevap değil, ipucu ver','Görevde ipucu bulunmuyorsa <b>yönlendirici sorularla</b> öğrenciye ipucu ver. Tam çözümü yalnızca öğrenci denedikten sonra göster. Sorular ve cevaplar öğretmen notlarında yer alır.']
        ]},
        { t:'h', html:'Öğrencileri derse aktif olarak katılmaya teşvik eder mi? Her birini değerlendir.' },
        { t:'sorter', yes:'✅ İşe yarar', no:'❌ İşe yaramaz', items:[
          ['💬','“İlk adımın sonucunu sohbete yazın. Hep birlikte, aynı anda cevaplayalım.”','yes','<b>İşe yarar.</b> Anlık bir kontroldür: kimin anladığını hemen görürsün.'],
          ['🙂','“Her şey anlaşıldı mı?”','no','<b>İşe yaramaz.</b> Neredeyse her zaman “evet” cevabı alırsın ve ne anladıkları hakkında hiçbir şey öğrenmezsin.'],
          ['✋','“Parmaklarınızla gösterin: çizimde kaç kiriş görüyorsunuz?”','yes','<b>İşe yarar.</b> Herkes katılır ve cevapları anında görürsün.'],
          ['🖥️','Zaman kazanmak için puanlı kartı kendi ekranında çözmek.','no','<b>İşe yaramaz.</b> Yalnızca öğretmenin ekranında çözülen bir puanlı kart, her öğrenci için sıfır puan olarak değerlendirilir.']
        ]}
      ]},
      { id:'after', e:'🗂️', title:'Dersten sonra ve bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['✍️','Açık uçlu cevapları değerlendir','Açık uçlu cevaplı görevler (örneğin kompozisyon soruları) <b>bir sonraki dersten önce elle</b> değerlendirilir. Nadirdirler ama olurlar.'],
          ['🚫','Bireysel çalışmayı asla atlama','Bireysel çalışma bölümü ve Yeni Nesil Sorular, grup geride kalsa bile <b>asla atlanmaz</b>.'],
          ['🐞','Bir kart çalışmıyor','Bir kart çalışmıyorsa, gönderilemiyorsa veya garip bir puan veriyorsa, <b>ders numarasını</b> ve <b>kart adını</b> belirterek metodoloji ekibine bildir.'],
          ['🔌','Follow Mode ile ilgili sorunlar','Follow Mode kullanılırken teknik sorunlar olursa, bunları yeşil Slack’teki <b>#mena-math-newcontent-questions</b> kanalından ürün ve içerik ekibine bildir.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Tüm öğretmen notlarını inceledim ve ilk karttaki video bilgilendirmesini izledim.','Harici bir araca bağlı interaktif görevleri denedim.'] },
          { h:'🎬 Ders sırasında', items:['Materyalleri ekran paylaşmadan, Follow Mode ile gösteriyorum.','Her öğrenci puanlı kartları platformda çözüp gönderiyor.','Öğretmen panelini kontrol ediyorum ve gerektiğinde farklı bir örnekle tekrar açıklıyorum.','“Her şey anlaşıldı mı?” diye sormak yerine anlık kontroller yapıyorum.','Bireysel çalışmayı ve Yeni Nesil Soruları atlamıyorum.'] },
          { h:'📤 Dersten sonra', items:['Açık uçlu cevapları bir sonraki dersten önce manuel olarak değerlendirdim.','Öğrencilerin ödevlerini gönderdiğini kontrol ettim.','Çalışmayan her kartı ders numarasını ve kart adını belirterek bildirdim.'] }
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
      a:1, e:'Dersin başlangıcındaki görev, öğrencinin ilgisini çekmeyi amaçlar. Tanım asla örnekten önce gelmez.' },
    { q:'Yeni Nesil Soru nedir?',
      o:['Daha zor bir çoktan seçmeli soru.','Öğrencinin yönteminin neden işe yaradığını veya koşullar değişirse neyin değişeceğini açıkladığı bir soru.','Erken bitiren öğrenciler için isteğe bağlı bir soru.'],
      a:1, e:'Her ders bir tanesiyle biter ve asla atlanmaz: odak yalnızca hesaplamak değil, açıklamaktır.' },
    { ctx:'1. Derste bir öğrenci, [AB ve [BA’nın aynı ışın olduğunu yazıyor.',
      q:'Hangisi doğru?',
      o:['Haklı: ikisi de aynı iki noktadan geçiyor.','Hayır: ışın ilk harften başlar, bu yüzden [AB ve [BA iki farklı ışındır.','Yalnızca ışın dikeyse yanlıştır.'],
      a:1, e:'[AB, A’dan başlar ve B’den geçer; [BA, B’den başlar ve A’dan geçer. Buna karşılık [AB] ve [BA] doğru parçaları aynı doğru parçasıdır.' },
    { q:'Modül boyunca sorumluluğun aşamalı olarak öğrenciye devredilmesi ne anlama gelir?',
      o:['Öğretmen modülün sonunda her şeyi çözer.','Başta adım adım talimatlar ve şablonlar vardır; sonunda öğrenci yöntemi seçer ve ipucu olmadan çözer.','Ev ödevi isteğe bağlı hâle gelir.'],
      a:1, e:'Destek modül boyunca azalır ve sonunda öğrenci bağımsız olarak çözer.' }
  ],
  m2:[
    { q:'Math 6 kursu kimler için ve bir grup dersi ne kadar sürer?',
      o:['9–11 yaş, 60 dakika.','10–12 yaş, 80 dakika.','11–13 yaş, 90 dakika.'],
      a:1, e:'6. Seviye 10–12 yaş içindir; grup dersleri 80 dakika, birebir dersler 50 dakikadır.' },
    { q:'Ödev, 6. Seviye kursunda nasıl işler?',
      o:['Haftada bir haftalık Meydan Okuma ile: 32 haftalık oyunlaştırılmış bir deneyim.','Her derste ayrı bir yazılı ödevle.','Yalnızca modül sonlarında bir sınavla.'],
      a:0, e:'Haftalık Meydan Okuma, geleneksel ev ödevinin yerine geçer ve öğrencinin gelişimini takip eder.' },
    { q:'6. Seviyede alan ve hacim hangi modülde işlenir?',
      o:['Modül 1 · Sayılar, bölünebilirlik ve tamsayılar.','Modül 4 · Veri analizi ve olasılık.','Modül 3 · Geometri ve ölçme.'],
      a:2, e:'Modül 3 açılar, alan, çevre ve hacim konularını kapsar.' },
    { q:'6. Seviyenin ilk dersinin ana fikri nedir?',
      o:['Kesirleri ondalık sayılara dönüştürmek.','Bir sayının tüm bölenlerini bulmak ve bölenleri katlardan ayırt etmek: bölenlerin sayısı sınırlıdır, katlar ise sonsuz sayıdadır.','Dikdörtgenin alanını ve çevresini hesaplamak.'],
      a:1, e:'Rafi’nin fırınında öğrenciler bölenleri (kalansız bölen sayılar) ve katları (1, 2, 3… ile çarpılarak elde edilen sayılar) keşfeder ve bu iki kavramı açıkça ayırt eder.' },
    { q:'Her 8 derste bir öğrencileri ne bekler?',
      o:['Hiçbir değerlendirme yoktur.','Modüldeki ustalıklarını ölçen eğlenceli, macera tarzı görevler (göreve dayalı zorluklar).','Öğretmenin tüm konuyu yeniden anlattığı bir ders.'],
      a:1, e:'Göreve dayalı zorluklar, modülün temel kavramlarının kavrandığından emin olmak içindir.' }
  ],
  m3:[
    { q:'Math 7 kursu kimler için ve bir grup dersi ne kadar sürer?',
      o:['11–13 yaş, 80 dakika.','9–11 yaş, 80 dakika.','10–12 yaş, 50 dakika.'],
      a:0, e:'7. Seviye 11–13 yaş içindir; grup dersleri 80 dakika, birebir dersler 50 dakikadır.' },
    { q:'7. Seviyede cebirsel ifadeler ve denklemler hangi modülün konusudur?',
      o:['Modül 3 · Geometri ve ölçme.','Modül 2 · İfadeler, örüntüler ve denklemler.','Modül 4 · Veri analizi ve olasılık.'],
      a:1, e:'Modül 2, ifadelerin sadeleştirilmesi ve genişletilmesi, örüntüler ve iki adımlı denklemleri kapsar.' },
    { q:'Veri analizi modülünde hangi istatistikler hesaplanır?',
      o:['Yalnızca toplam.','Ortalama, medyan ve mod.','Yalnızca en büyük değer.'],
      a:1, e:'Öğrenciler ortalama, medyan ve modu hesaplar; çizgi ve daire grafikleriyle çalışır.' },
    { q:'Kurs denklem sistemlerini nasıl ele alır?',
      o:['Hiç ele almaz.','Cebirsel ve grafiksel olarak çözmenin temellerini tanıtır.','Yalnızca ezberlenecek formüllerle.'],
      a:1, e:'Kurs, denklem sistemlerini hem cebirsel hem grafiksel olarak çözmenin temellerini tanıtır.' },
    { q:'7. Seviyenin ilk dersinde tam sayılarla toplama ve çıkarma nasıl öğretilir?',
      o:['İşaret kuralları önce ezberletilir, sonra alıştırma yapılır.','Sayı doğrusuyla: her kural önce oklarla gösterilir, sonra kural olarak yazılır; çıkarma her zaman zıt sayıyı toplamaya dönüştürülür.','Her öğrenci kendi seçtiği bir modeli kullanır.'],
      a:1, e:'Bu derste kullanılan tek model sayı doğrusudur. Kurallar oklardan çıkarılır ve a − b = a + (−b) olarak yazılır.' }
  ],  m4:[
    { q:'Ders materyallerini nasıl gösterirsin?',
      o:['Ekranını paylaşarak.','Her zaman Follow Mode ile.','Sohbete ekran görüntüleri göndererek.'],
      a:1, e:'Her zaman Follow Mode kullanılır. Materyalleri göstermek için ekran paylaşımı yapılmaz.' },
    { ctx:'Zaman kazanmak için bir eğitmen, grup izlerken puanlı bir kartı kendi ekranında çözüyor.',
      q:'Öğrencilerin puanlarına ne olur?',
      o:['Herkes tam puan alır.','Her öğrenci için sıfır puan olarak değerlendirilir: her öğrenci kartı platformda bireysel olarak tamamlamalıdır.','Puan öğrenciler arasında paylaştırılır.'],
      a:1, e:'Her öğrenci puanlı kartları platformda bireysel olarak tamamlamalıdır.' },
    { ctx:'Öğretmen paneli, öğrencilerin çoğunun bir görevi yanlış yaptığını gösteriyor.',
      q:'Ne yaparsın?',
      o:['Zaman kaybetmemek için sonraki karta geçersin.','Konuyu farklı bir örnek üzerinden yeniden açıklar ve öğrencilerin tekrar denemelerini sağlarsın.','Doğru cevabı sohbete yazarsın.'],
      a:1, e:'Öğretmen paneli, öğrencilere zamanında geri bildirim vermen içindir: farklı bir örnek ve yeni bir deneme.' },
    { q:'Bir kart garip bir puan veriyor. Ne yaparsın?',
      o:['Hiçbir şey — oluyor böyle şeyler.','Ders numarasını ve kart adını belirterek metodoloji ekibine bildirirsin.','Öğrencilere o kartı bir daha yapmamalarını söylersin.'],
      a:1, e:'Ders numarası ve kart adı belirtilirse ekip kartı bulup düzeltebilir.' },
    { q:'Classroom’da bir şeyi görsel olarak açıklamak için hangi aracı kullanırsın?',
      o:['Zoom’daki gibi çizim ve açıklama aracını.','Beyaz Tahtayı.','Ayrı bir paylaşılan belgeyi.'],
      a:1, e:'Classroom’da henüz Zoom’daki gibi bir çizim ve açıklama aracı bulunmuyor: bir konuyu görsel olarak açıklamak için Beyaz Tahta kullanılır.' }
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
    ['📒', '<b>Her dersten önce:</b> tüm öğretmen notlarını incele ve video bilgilendirmesini izle.'],
    ['👁️', '<b>Derste:</b> her zaman Follow Mode, ve her öğrenci kartlarını bireysel olarak tamamlar.'],
    ['📊', '<b>Öğretmen paneli:</b> birçok öğrenci yanlış yaparsa farklı bir örnek ve yeni bir deneme.'],
    ['🌱', '<b>Asla atlama:</b> bireysel çalışmayı ve Yeni Nesil Soruları.']
  ]
};
