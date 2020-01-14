const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])


//navBar///
const nav1 = document.querySelectorAll('a');
nav1[0].textContent = siteContent["nav"]["nav-item-1"];

const nav2 = document.querySelectorAll('a');
nav2[1].textContent = siteContent["nav"]["nav-item-2"];

const nav3 = document.querySelectorAll('a');
nav3[2].textContent = siteContent["nav"]["nav-item-3"];

const nav4 = document.querySelectorAll('a');
nav4[3].textContent = siteContent["nav"]["nav-item-4"];

const nav5 = document.querySelectorAll('a');
nav5[4].textContent = siteContent["nav"]["nav-item-5"];

const nav6 = document.querySelectorAll('a');
nav6[5].textContent = siteContent["nav"]["nav-item-6"]

/////ends navBar//////

////cta box//////////
const grabCTA = document.querySelectorAll('h1');
grabCTA[0].textContent = siteContent["cta"]["h1"];

const getButton = document.querySelector('button');
getButton.textContent = siteContent["cta"]["button"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//////ends cta box////

/////main content//////

const grabFeature = document.querySelectorAll('h4');
grabFeature[0].textContent = siteContent["main-content"]["features-h4"]

const grabFeatureP = document.querySelectorAll('p');
grabFeatureP[0].textContent = siteContent["main-content"]["features-content"];

const grabAbout = document.querySelectorAll('h4');
grabAbout[1].textContent = siteContent["main-content"]["about-h4"];

const grabAboutP = document.querySelectorAll('p');
grabAboutP[1].textContent = siteContent["main-content"]["about-content"];

///bottom-content/////

const grabServices = document.querySelectorAll('h4');
grabServices[2].textContent = siteContent["main-content"]["services-h4"];


const grabServicesP = document.querySelectorAll('p');
grabServicesP[2].textContent = siteContent["main-content"]["services-content"];

const grabProduct = document.querySelectorAll('h4');
grabProduct[3].textContent = siteContent["main-content"]["product-h4"];

const grabProductP = document.querySelectorAll('p');
grabProductP[3].textContent = siteContent["main-content"]["product-content"];

const grabVision = document.querySelectorAll('h4');
grabVision[4].textContent = siteContent["main-content"]["vision-h4"];

const grabVisionP = document.querySelectorAll('p');
grabVisionP[4].textContent = siteContent["main-content"]["vision-content"];
//////closes bottom-content///////

//////contact////////

const grabContact = document.querySelectorAll('h4');
grabContact[5].textContent = siteContent["contact"]["contact-h4"];


const grabContactP = document.querySelectorAll('p');
grabContactP[5].textContent = siteContent["contact"]["address"];

const grabContactP2 = document.querySelectorAll('p');
grabContactP2[6].textContent = siteContent["contact"]["phone"];

const grabContactP3 = document.querySelectorAll('p');
grabContactP3[7].textContent = siteContent["contact"]["email"];

/////ends contacts/////////////

////////footer/////////////////

const grabFooter = document.querySelectorAll('p');
grabFooter[8].textContent = siteContent["footer"]["copyright"];