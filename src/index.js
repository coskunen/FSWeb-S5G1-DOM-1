const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


 /* Kodlar Buradan aşağıya */
const navList = document.querySelectorAll('nav a');
console.log("basliktaki linklerin listesi", navList);
navList[0].textContent = siteContent.nav["nav-item-1"];
navList[1].textContent = siteContent.nav["nav-item-2"];
navList[2].textContent = siteContent.nav["nav-item-3"];
navList[3].textContent = siteContent.nav["nav-item-4"];
navList[4].textContent = siteContent.nav["nav-item-5"];
navList[5].textContent = siteContent.nav["nav-item-6"];

[...navList].map((element , index) => {
  navList[index].setAttribute("class" , "italic");
})


const domH1 = document.querySelectorAll('.cta-text h1');
console.log(domH1);
domH1[0].textContent = siteContent.cta["h1"];

const domButton = document.querySelectorAll('button');
domButton[0].textContent = siteContent.cta['button'];

const imglogo = document.getElementById('logo-img');
const imgSrcLogo = siteContent.images['logo-img'];
/* imglogo.setAttribute("src" ,"../mocks/img/logo.png") */
imglogo.setAttribute("src" ,"http://localhost:9000/img/logo.png")

const imgCta =document.getElementById('cta-img');
/* imgCta.setAttribute("src" , "../mocks/img/cta.png"); */
imgCta.setAttribute("src" , "http://localhost:9000/img/cta.png");

const imgMiddle = document.getElementById('middle-img');
/* imgMiddle.setAttribute("src","../mocks/img/accent.png"); */
imgMiddle.setAttribute("src","http://localhost:9000/img/accent.png");

const h4basliklar = document.querySelectorAll("h4")
console.log(h4basliklar);
h4basliklar[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4basliklar[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4basliklar[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4basliklar[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4basliklar[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
h4basliklar[5].textContent = siteContent["iletisim"]["iletişim-h4"];

const yazilar = document.querySelectorAll('p');
console.log(yazilar);
yazilar[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"]
yazilar[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"]
yazilar[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"]
yazilar[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"]
yazilar[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"]
yazilar[5].textContent = siteContent["iletisim"]["adres"]
yazilar[6].textContent = siteContent["iletisim"]["telefon"]
yazilar[7].textContent = siteContent["iletisim"]["email"]


const footerNav =document.querySelectorAll('footer a');
footerNav[0].textContent = siteContent.footer['copyright'];
footerNav[0].setAttribute("class" , "bold");