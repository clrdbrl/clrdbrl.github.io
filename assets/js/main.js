/* ============ À PERSONNALISER ============ */
var CONTACT_EMAIL  = "cdprojectspro@gmail.com"; // ton adresse
var LINKEDIN_URL   = "https://www.linkedin.com/in/clara-d-51b2a6208";                   // https://www.linkedin.com/in/ton-profil
var BEHANCE_URL    = "https://www.behance.net/claradbrl";                   // https://www.behance.net/ton-profil
var SHOW_BACK_LINK = true;                 // true pour réafficher « Tous les projets » en haut des pages projet
var FEATURED       = ["grpf","groupe-apb","nyro"]; // les 3 projets mis en avant sur l'accueil

var IMG = {
 "logo": {
  "src": "/images/projets/groupe-apb/groupe-apb-logo-anime.gif?v=3dda31f9",
  "w": 1920,
  "h": 956,
  "alt": "Logo Groupe APB en blanc sur fond bleu",
  "alt_en": "White Groupe APB logo on a blue background"
 },
 "browser": {
  "src": "/images/projets/groupe-apb/groupe-apb-navigateur.webp?v=1ca58856",
  "w": 733,
  "h": 490,
  "alt": "Onglet de navigateur avec le favicon Groupe APB",
  "alt_en": "Browser tab with the Groupe APB favicon"
 },
 "house": {
  "src": "/images/projets/groupe-apb/groupe-apb-maison.webp?v=2aaab180",
  "w": 779,
  "h": 376,
  "alt": "Maison équipée de panneaux solaires avec le pictogramme Groupe APB",
  "alt_en": "House with solar panels and the Groupe APB symbol"
 },
 "typo": {
  "src": "",
  "w": 348,
  "h": 300,
  "alt": "Typographie Mazzard Semi Bold",
  "alt_en": "Mazzard Semi Bold typeface"
 },
 "palette": {
  "src": "",
  "w": 993,
  "h": 300,
  "alt": "Palette de couleurs : orange, blanc, gris clair, bleu APB et bleu marine",
  "alt_en": "Colour palette: orange, white, light grey, APB blue and navy blue"
 },
 "sign": {
  "src": "/images/projets/groupe-apb/groupe-apb-ordinateur.webp?v=1c649bfc",
  "w": 1600,
  "h": 1104,
  "alt": "Site Groupe APB affiché sur un ordinateur portable",
  "alt_en": "Groupe APB website on a laptop"
 },
 "slogan": {
  "src": "/images/projets/groupe-apb/groupe-apb-slogan.webp?v=a50304ae",
  "w": 682,
  "h": 471,
  "alt": "Carte avec le slogan Rénovez aujourd'hui, économisez demain",
  "alt_en": "Card with the slogan “Rénovez aujourd’hui, économisez demain”"
 },
 "tote": {
  "src": "/images/projets/groupe-apb/groupe-apb-tote-bag.webp?v=82eebd9c",
  "w": 659,
  "h": 998,
  "alt": "Tote bag au logo Groupe APB",
  "alt_en": "Groupe APB logo tote bag"
 },
 "site": {
  "src": "/images/projets/groupe-apb/groupe-apb-site-accueil.webp?v=466178db",
  "w": 1395,
  "h": 919,
  "alt": "Page d'accueil du site Groupe APB",
  "alt_en": "Groupe APB website homepage"
 },
 "pages": {
  "src": "/images/projets/groupe-apb/groupe-apb-site-pages.webp?v=a7429aa3",
  "w": 1205,
  "h": 537,
  "alt": "Six pages du site Groupe APB",
  "alt_en": "Six pages of the Groupe APB website"
 },
 "hand": {
  "src": "/images/projets/groupe-apb/groupe-apb-mobile-main.webp?v=2f78a51f",
  "w": 580,
  "h": 976,
  "alt": "Site Groupe APB affiché sur un smartphone",
  "alt_en": "Groupe APB website on a smartphone"
 },
 "phones": {
  "src": "/images/projets/groupe-apb/groupe-apb-mobile-ecrans.webp?v=ca88f6dd",
  "w": 761,
  "h": 975,
  "alt": "Six écrans mobiles du site Groupe APB",
  "alt_en": "Six mobile screens of the Groupe APB website"
 },
 "apbpro_browser": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-navigateur.webp?v=73982a6f",
  "w": 628,
  "h": 419,
  "alt": "Onglet de navigateur avec le favicon Groupe APB Pro",
  "alt_en": "Browser tab with the Groupe APB Pro favicon"
 },
 "apbpro_deco1": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-declinaison.webp?v=7d5e6f40",
  "w": 720,
  "h": 495,
  "alt": "Techniciens portant la veste Groupe APB",
  "alt_en": "Technicians wearing the Groupe APB jacket"
 },
 "apbpro_logo": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-logo-anime.gif?v=de3be699",
  "w": 1920,
  "h": 956,
  "alt": "Logo Groupe APB Pro",
  "alt_en": "Groupe APB Pro logo"
 },
 "apbpro_pages": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-site-pages.webp?v=0969a749",
  "w": 1475,
  "h": 735,
  "alt": "Pages du site Groupe APB Pro",
  "alt_en": "Groupe APB Pro website pages"
 },
 "apbpro_palette": {
  "src": "",
  "w": 1050,
  "h": 316,
  "alt": "Palette de couleurs de Groupe APB Pro",
  "alt_en": "Groupe APB Pro colour palette"
 },
 "apbpro_photo": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-photo.webp?v=7c8234d4",
  "w": 822,
  "h": 396,
  "alt": "Photo d’ambiance avec le pictogramme Groupe APB Pro",
  "alt_en": "Lifestyle photo with the Groupe APB Pro symbol"
 },
 "apbpro_site": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-site-accueil.webp?v=51c07e37",
  "w": 1474,
  "h": 970,
  "alt": "Page d’accueil du site Groupe APB Pro",
  "alt_en": "Groupe APB Pro website homepage"
 },
 "apbpro_slogan": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-slogan.webp?v=3c51fd7f",
  "w": 722,
  "h": 497,
  "alt": "Carte au slogan de Groupe APB Pro",
  "alt_en": "Groupe APB Pro slogan card"
 },
 "apbpro_tall": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-declinaison-verticale.webp?v=f4e2b7c5",
  "w": 694,
  "h": 1053,
  "alt": "Catalogue professionnel Groupe APB Pro",
  "alt_en": "Groupe APB Pro professional catalogue"
 },
 "apbpro_typo": {
  "src": "",
  "w": 367,
  "h": 316,
  "alt": "Typographie de la marque Groupe APB Pro",
  "alt_en": "Groupe APB Pro brand typography"
 },
 "grpf_browser": {
  "src": "/images/projets/grpf/grpf-navigateur.webp?v=140cabe7",
  "w": 594,
  "h": 395,
  "alt": "Onglet de navigateur avec le favicon GRPF",
  "alt_en": "Browser tab with the GRPF favicon"
 },
 "grpf_deco1": {
  "src": "/images/projets/grpf/grpf-declinaison.webp?v=6c569bd2",
  "w": 722,
  "h": 497,
  "alt": "Carte de visite GRPF",
  "alt_en": "GRPF business card"
 },
 "grpf_hand": {
  "src": "/images/projets/grpf/grpf-mobile-main.webp?v=5eb4aa7f",
  "w": 612,
  "h": 1030,
  "alt": "Site GRPF affiché sur un smartphone",
  "alt_en": "GRPF website on a smartphone"
 },
 "grpf_logo": {
  "src": "/images/projets/grpf/grpf-logo-anime.gif?v=e4b9b491",
  "w": 1920,
  "h": 956,
  "alt": "Logo GRPF",
  "alt_en": "GRPF logo"
 },
 "grpf_pages": {
  "src": "/images/projets/grpf/grpf-site-pages.webp?v=d6e5b1f4",
  "w": 1476,
  "h": 735,
  "alt": "Pages du site GRPF",
  "alt_en": "GRPF website pages"
 },
 "grpf_palette": {
  "src": "",
  "w": 1049,
  "h": 316,
  "alt": "Palette de couleurs de GRPF",
  "alt_en": "GRPF colour palette"
 },
 "grpf_phones": {
  "src": "/images/projets/grpf/grpf-mobile-ecrans.webp?v=399ef4ef",
  "w": 803,
  "h": 1030,
  "alt": "Écrans mobiles du site GRPF",
  "alt_en": "GRPF mobile screens"
 },
 "grpf_photo": {
  "src": "/images/projets/grpf/grpf-photo.webp?v=889871d7",
  "w": 823,
  "h": 396,
  "alt": "Photo d’ambiance avec le pictogramme GRPF",
  "alt_en": "Lifestyle photo with the GRPF symbol"
 },
 "grpf_site": {
  "src": "/images/projets/grpf/grpf-site-accueil.webp?v=b89ddf96",
  "w": 1474,
  "h": 970,
  "alt": "Page d’accueil du site GRPF",
  "alt_en": "GRPF website homepage"
 },
 "grpf_slogan": {
  "src": "/images/projets/grpf/grpf-slogan.webp?v=0b3ddb93",
  "w": 722,
  "h": 497,
  "alt": "Carte au slogan de GRPF",
  "alt_en": "GRPF slogan card"
 },
 "grpf_tall": {
  "src": "/images/projets/grpf/grpf-declinaison-verticale.webp?v=e46123f8",
  "w": 694,
  "h": 1053,
  "alt": "Mug au logo GRPF",
  "alt_en": "GRPF logo mug"
 },
 "grpf_typo": {
  "src": "",
  "w": 367,
  "h": 316,
  "alt": "Typographie de la marque GRPF",
  "alt_en": "GRPF brand typography"
 },
 "nyro_browser": {
  "src": "/images/projets/nyro/nyro-navigateur.webp?v=d6f2e34a",
  "w": 594,
  "h": 396,
  "alt": "Onglet de navigateur avec le favicon NYRO",
  "alt_en": "Browser tab with the NYRO favicon"
 },
 "nyro_deco1": {
  "src": "/images/projets/nyro/nyro-declinaison.webp?v=36ce7567",
  "w": 722,
  "h": 497,
  "alt": "Savon NYRO tenu contre l’épaule",
  "alt_en": "NYRO soap held against the shoulder"
 },
 "nyro_logo": {
  "src": "/images/projets/nyro/nyro-logo-anime.gif?v=1297ef55",
  "w": 1920,
  "h": 956,
  "alt": "Logo NYRO",
  "alt_en": "NYRO logo"
 },
 "nyro_pages": {
  "src": "/images/projets/nyro/nyro-site-pages.webp?v=7201e787",
  "w": 1475,
  "h": 433,
  "alt": "Pages du site NYRO",
  "alt_en": "NYRO website pages"
 },
 "nyro_palette": {
  "src": "",
  "w": 1050,
  "h": 316,
  "alt": "Palette de couleurs de NYRO",
  "alt_en": "NYRO colour palette"
 },
 "nyro_photo": {
  "src": "/images/projets/nyro/nyro-photo.webp?v=296d99a5",
  "w": 823,
  "h": 396,
  "alt": "Photo d’ambiance avec le pictogramme NYRO",
  "alt_en": "Lifestyle photo with the NYRO symbol"
 },
 "nyro_site": {
  "src": "/images/projets/nyro/nyro-site-accueil.webp?v=bf3a41c6",
  "w": 1474,
  "h": 970,
  "alt": "Page d’accueil du site NYRO",
  "alt_en": "NYRO website homepage"
 },
 "nyro_slogan": {
  "src": "/images/projets/nyro/nyro-slogan.webp?v=29860c23",
  "w": 722,
  "h": 497,
  "alt": "Carte au slogan de NYRO",
  "alt_en": "NYRO slogan card"
 },
 "nyro_tall": {
  "src": "/images/projets/nyro/nyro-declinaison-verticale.webp?v=869a9bd4",
  "w": 694,
  "h": 1053,
  "alt": "Flacon de sérum NYRO",
  "alt_en": "NYRO serum bottle"
 },
 "nyro_typo": {
  "src": "",
  "w": 367,
  "h": 316,
  "alt": "Typographie de la marque NYRO",
  "alt_en": "NYRO brand typography"
 },
 "m2_logo": {
  "src": "/images/projets/2m-energie/2m-energie-logo-anime.gif?v=54a33aa8",
  "w": 1920,
  "h": 956,
  "alt": "Logo 2M Energie",
  "alt_en": "2M Energie logo"
 },
 "m2_browser": {
  "src": "/images/projets/2m-energie/2m-energie-navigateur.webp?v=da3c9d39",
  "w": 593,
  "h": 395,
  "alt": "Onglet de navigateur avec le favicon 2M Energie",
  "alt_en": "Browser tab with the 2M Energie favicon"
 },
 "m2_photo": {
  "src": "/images/projets/2m-energie/2m-energie-photo.webp?v=74f86b73",
  "w": 822,
  "h": 395,
  "alt": "Couple consultant le site 2M Energie sur un smartphone",
  "alt_en": "Couple browsing the 2M Energie website on a smartphone"
 },
 "m2_typo": {
  "src": "",
  "w": 366,
  "h": 315,
  "alt": "Typographie Neulis Neue Semi Bold",
  "alt_en": "Neulis Neue Semi Bold typeface"
 },
 "m2_palette": {
  "src": "",
  "w": 1049,
  "h": 315,
  "alt": "Palette 2M Energie : Light, Sauge, Avocado, Forest et Dark",
  "alt_en": "2M Energie palette: Light, Sage, Avocado, Forest and Dark"
 },
 "m2_deco1": {
  "src": "/images/projets/2m-energie/2m-energie-declinaison.webp?v=ec93848c",
  "w": 721,
  "h": 496,
  "alt": "Cartes de visite 2M Energie",
  "alt_en": "2M Energie business cards"
 },
 "m2_tall": {
  "src": "/images/projets/2m-energie/2m-energie-declinaison-verticale.webp?v=388b77e8",
  "w": 695,
  "h": 1054,
  "alt": "Casquette au logo 2M Energie",
  "alt_en": "2M Energie logo cap"
 },
 "m2_slogan": {
  "src": "/images/projets/2m-energie/2m-energie-slogan.webp?v=6b01bd77",
  "w": 719,
  "h": 495,
  "alt": "Carte au slogan La rénovation globale pour les particuliers",
  "alt_en": "Card with the slogan “La rénovation globale pour les particuliers”"
 },
 "m2_billboard": {
  "src": "/images/projets/2m-energie/2m-energie-panneau.webp?v=a2c93e3b",
  "w": 1476,
  "h": 593,
  "alt": "Panneau d'affichage 2M Energie sur la pompe à chaleur et le solaire",
  "alt_en": "2M Energie billboard about heat pumps and solar panels"
 },
 "mk_grpf": {
  "src": "/images/projets/grpf/grpf-banniere.webp?v=43e4706b",
  "w": 2400,
  "h": 1490,
  "alt": "",
  "alt_en": "",
  "box": [
   0.28,
   0.22,
   0.72,
   0.77
  ],
  "focus": [
   0.23,
   0.06,
   0.77,
   0.93
  ]
 },
 "mk_m2": {
  "src": "/images/projets/2m-energie/2m-energie-banniere.webp?v=fc35bd17",
  "w": 2400,
  "h": 1340,
  "alt": "",
  "alt_en": "",
  "box": [
   0.225,
   0.23,
   0.825,
   0.85
  ],
  "fc": [
   0.43,
   0.415
  ]
 },
 "mk_apbpro": {
  "src": "/images/projets/groupe-apb-pro/groupe-apb-pro-banniere.webp?v=fddf93bb",
  "w": 2400,
  "h": 1382,
  "alt": "",
  "alt_en": "",
  "box": [
   0.25,
   0.2,
   0.73,
   0.86
  ],
  "focus": [
   0.216,
   0.057,
   0.759,
   1.0
  ]
 },
 "mk_apb": {
  "src": "/images/projets/groupe-apb/groupe-apb-banniere.webp?v=19febd8c",
  "w": 2400,
  "h": 1644,
  "alt": "",
  "alt_en": "",
  "box": [
   0.3,
   0.13,
   0.74,
   0.85
  ],
  "focus": [
   0.154,
   0,
   0.844,
   1
  ]
 },
 "mk_nyro": {
  "src": "/images/projets/nyro/nyro-banniere.webp?v=fb595250",
  "w": 2400,
  "h": 1019,
  "alt": "",
  "alt_en": "",
  "box": [
   0.38,
   0.2,
   0.63,
   0.75
  ],
  "focus": [
   0.29,
   0,
   0.72,
   1
  ]
 },
 "nyro_prod": {
  "src": "/images/projets/nyro/nyro-produit.webp?v=cc58c9ff",
  "w": 1672,
  "h": 941,
  "alt": "Gamme de soins NYRO",
  "alt_en": "NYRO skincare range"
 },
 "nyro_schema": {
  "src": "/images/projets/nyro/nyro-schemas.webp?v=c7fdb986",
  "w": 2400,
  "h": 1073,
  "alt": "Schémas des packagings NYRO",
  "alt_en": "NYRO packaging drawings"
 },
 "apbpro_palette2": {
  "src": "",
  "w": 1433,
  "h": 316,
  "alt": "Couleurs secondaires des secteurs de Groupe APB Pro",
  "alt_en": "Groupe APB Pro secondary sector colours"
 },
 "apb_icons": {
  "src": "/images/projets/groupe-apb/groupe-apb-pictos.mp4?v=067f4a87",
  "w": 2000,
  "h": 300,
  "video": 1,
  "bg": "#0247CE",
  "alt": "Animation de l'iconographie de Groupe APB",
  "alt_en": "Groupe APB iconography animation",
  "webm": "/images/projets/groupe-apb/groupe-apb-pictos.webm?v=3280b195"
 },
 "m2_lp": {
  "src": "/images/projets/2m-energie/2m-energie-onepage-pompe-a-chaleur.webp?v=a88386d6",
  "w": 1200,
  "h": 4297,
  "alt": "One-page de 2M Energie dédiée à la pompe à chaleur",
  "alt_en": "2M Energie heat pump one-page"
 },
 "m2_home": {
  "src": "/images/projets/2m-energie/2m-energie-onepage-accueil.webp?v=2bb179dc",
  "w": 1200,
  "h": 4832,
  "alt": "One-page d’accueil de 2M Energie",
  "alt_en": "2M Energie home one-page"
 }
};

/* ============ LANGUE ============ */
var PATH_MODE=true; /* true sur le site en ligne : vraies adresses (/projets/nyro/), false dans l'aperçu en un seul fichier (#/projets/nyro) */
var LANG="fr";
if(PATH_MODE){if(/^\/en(\/|$)/.test(location.pathname))LANG="en"}
else{try{var saved=localStorage.getItem("cd-lang");if(saved==="en"||saved==="fr")LANG=saved}catch(e){}}
/* Adresse d'une page dans la langue courante */
var EN_SEG={"projets":"projects","a-propos":"about"};
function u(p){
  if(!PATH_MODE)return "#"+p;
  if(LANG!=="en")return p;
  return "/en"+p.replace(/^\/([^\/]+)/,function(m,x){return "/"+(EN_SEG[x]||x)});
}
function L(v){return v&&typeof v==="object"&&!Array.isArray(v)&&("fr" in v)?v[LANG]:v}
function t(k){return T[LANG][k]}

/* ============ TEXTES FIXES ============ */
var T={
fr:{
  title:"Clara Debarle, UI/UX & Brand Designer | CD Projects", metaWho:"Clara Debarle, UI/UX & Brand Designer",
  metaHome:"Portfolio de Clara Debarle, designer UI/UX et identité de marque. Sites web, interfaces et identités visuelles pensés pour des marques qui se retiennent.",
  metaProjects:"Projets de Clara Debarle en identité de marque, UI et UX design, de la refonte de site web à la création d\u2019identité visuelle.",
  metaContact:"Alternance, mission freelance ou projet de marque, contactez Clara Debarle, designer UI/UX et identité de marque.",
  heroAlt:"Visuel du projet", tProjects:"Projets", tAbout:"À propos", tContact:"Contact",
  brandAria:"CD Projects, accueil", navAria:"Navigation principale", 
  menuOpen:"Ouvrir le menu", menuClose:"Fermer le menu", langSwitch:"EN", langAria:"Switch to English",
  navHome:"Accueil", navProjects:"Projets", navAbout:"À propos", navContact:"Contact", smMenu:"Menu", smClose:"Fermer",
  socials:"Réseaux sociaux", socialsAria:"Réseaux sociaux", newTab:" (nouvel onglet)",
  footTitle:"Un projet en tête ?", footPortfolio:"Portfolio", footProjects:"Découvrir les projets", footBtn:"Me contacter", toTop:"Revenir en haut de page",
  status:"Ouverte aux nouvelles opportunités",
  heroL1:"Designer", heroL2:"Digital",
  heroP:"En tant que UI/UX & Brand designer, j’accompagne les marques dans leur stratégie, de l’identité visuelle jusqu’à l’interface.",
  ctaProjects:"Voir mes projets", 
  storyAria:"Ma vision du design",
  story:["Des interfaces qui se comprennent au premier regard.","Des marques qui se retiennent.","Des expériences qui se vivent."],
  expTitle:"Missions", seeMore:"Verso", seeBack:"Recto", 
  featTitle:"Projets", 
  backProjects:"Retour aux projets",
  moreTitle:function(n){return n+(n>1?" autres projets vous attendent":" autre projet vous attend")}, moreHead:"Voir plus<br>de projets", moreBtn:"Découvrir",
  methodTitle:"Mon approche", apMore:"Voir le détail", apLess:"Masquer", ctLead:"Alternance, mission freelance ou projet de marque, discutons de ce que nous pourrions construire.", llAria:"Entreprises et marques accompagnées", stpNext:"Suivant", stpDone:"Échanger sur votre projet", stepOut:"Livrables", stepOf:function(i,n){return "Étape "+i+" sur "+n},
  cvTitle:"Mon parcours", cvLead:"Du marketing au design, un chemin qui m’a appris à penser à la fois à la marque, au message et à l’utilisateur.",
  expSub:"Expériences", eduSub:"Formation", 
  
  filterAll:"Tous", filterAria:"Filtrer les projets", nProjects:function(n){return n+(n>1?" projets":" projet")},
  allProjects:"Tous les projets", role:"Rôle", company:"Entreprise", year:"Année", tools:"Outils", todo:"À compléter",
  descTodo:"Description de l’entreprise à compléter.", cursorCard:"Découvrir", moreTitle:"Autres projets", carAria:"Carrousel des autres projets", tocAria:"Sommaire du projet",
  chResults:"En quelques chiffres",
  
  
  emptyVisuals:"Les visuels de ce projet arrivent bientôt.",
  ch:{identity:"Identité de marque", applications:"Déclinaisons", website:"Site web",onepage:"One-page",onepages:"One-pages", mobile:"Version mobile", universe:"Univers visuel", campaign:"Campagne d\u2019affichage"},
  
  aboutHi:"À propos",
  aboutLead:"Après plusieurs années dans la communication et le marketing, j’ai choisi de me spécialiser dans le domaine du web, au croisement de l’identité de marque et de l’expérience utilisateur. Aujourd’hui, je conçois des sites qui valorisent les marques, des interfaces qui facilitent les interactions et des identités visuelles qui en révèlent la singularité.",
  
  
  lifeTitle:"En dehors des écrans", stkHint:"Glisse la carte pour passer à la suivante", stkAria:"Mes centres d’intérêt, en pile de cartes", 
  
  copy:"Copier l’adresse", copied:"Adresse copiée", copyOk:"L’adresse e-mail a été copiée.",
  copyFail:"La copie n’a pas fonctionné, sélectionnez l’adresse ci-dessus pour la copier.",
  ctTitle:"Travaillons<br>ensemble", ctWrite:"Écrire un message", ctSubject:"Prise de contact", ctFastT:"Réponse sous 48 h", ctFast:"Un projet, une mission ou une simple question ? Écrivez-moi, je reviens vers vous rapidement avec de premières pistes concrètes.", ctCopied:"Copiée", ctMailK:"Me contacter par e-mail", 
  
  nfTitle:"Cette page n’existe pas", nfLink:"Revenir à l’accueil"
},
en:{
  title:"Clara Debarle, UI/UX & Brand Designer | CD Projects", metaWho:"Clara Debarle, UI/UX & Brand Designer",
  metaHome:"Portfolio of Clara Debarle, UI/UX and brand identity designer. Websites, interfaces and visual identities crafted for memorable brands.",
  metaProjects:"Projects by Clara Debarle in brand identity, UI and UX design, from website redesigns to visual identity creation.",
  metaContact:"Work-study, freelance assignment or brand project, get in touch with Clara Debarle, UI/UX and brand identity designer.",
  heroAlt:"Project visual for", tProjects:"Projects", tAbout:"About", tContact:"Contact",
  brandAria:"CD Projects, home", navAria:"Main navigation", 
  menuOpen:"Open menu", menuClose:"Close menu", langSwitch:"FR", langAria:"Passer en français",
  navHome:"Home", navProjects:"Projects", navAbout:"About", navContact:"Contact", smMenu:"Menu", smClose:"Close",
  socials:"Social media", socialsAria:"Social media", newTab:" (opens in a new tab)",
  footTitle:"Have a project in mind?", footPortfolio:"Portfolio", footProjects:"Discover the projects", footBtn:"Get in touch", toTop:"Back to top",
  status:"Open to new opportunities",
  heroL1:"Digital", heroL2:"Designer",
  heroP:"As a UI/UX & Brand designer, I help brands shape their strategy, from visual identity to interface.",
  ctaProjects:"See my projects", 
  storyAria:"My design vision",
  story:["Interfaces that make sense at first glance.","Brands people remember.","Experiences that are felt."],
  expTitle:"Missions", seeMore:"Back", seeBack:"Front", 
  featTitle:"Projects", 
  backProjects:"Back to projects",
  moreTitle:function(n){return n+(n>1?" more projects are waiting for you":" more project is waiting for you")}, moreHead:"See more<br>projects", moreBtn:"Discover",
  methodTitle:"My approach", apMore:"See details", apLess:"Hide", ctLead:"Work-study, freelance mission or brand project, let’s talk about what we could build.", llAria:"Companies and brands I worked with", stpNext:"Next", stpDone:"Discuss your project", stepOut:"Deliverables", stepOf:function(i,n){return "Step "+i+" of "+n},
  cvTitle:"My journey", cvLead:"From marketing to design, a path that taught me to think about the brand, the message and the user at the same time.",
  expSub:"Experience", eduSub:"Education", 
  
  filterAll:"All", filterAria:"Filter projects", nProjects:function(n){return n+(n>1?" projects":" project")},
  allProjects:"All projects", role:"Role", company:"Company", year:"Year", tools:"Tools", todo:"To be completed",
  descTodo:"Company description to be completed.", cursorCard:"Discover", moreTitle:"Other projects", carAria:"Other projects carousel", tocAria:"Project contents",
  chResults:"In numbers",
  
  
  emptyVisuals:"Visuals for this project are coming soon.",
  ch:{identity:"Brand identity", applications:"Applications", website:"Website",onepage:"One-page",onepages:"One-pages", mobile:"Mobile version", universe:"Visual universe", campaign:"Billboard campaign"},
  
  aboutHi:"About",
  aboutLead:"After several years in communication and marketing, I chose to specialise in the web, where brand identity meets user experience. Today, I design websites that showcase brands, interfaces that make interactions easier and visual identities that reveal what makes them unique.",
  
  
  lifeTitle:"Away from screens", stkHint:"Swipe the card to see the next one", stkAria:"My interests, as a stack of cards", 
  
  copy:"Copy address", copied:"Address copied", copyOk:"The email address has been copied.",
  copyFail:"Copying didn’t work, select the address above to copy it.",
  ctTitle:"Let’s work<br>together", ctWrite:"Write a message", ctSubject:"Getting in touch", ctFastT:"Reply within 48 hours", ctFast:"A project, an assignment or a simple question? Write to me, I’ll get back to you quickly with first concrete ideas.", ctCopied:"Copied", ctMailK:"Contact me by email", 
  
  nfTitle:"This page doesn’t exist", nfLink:"Back to home"
}};

/* ============ CONTENUS ============ */
var TAGS=["UX","UI","Branding"];

var EXPERTISES=[
  {ico:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11"/>', title:{fr:"UI Design",en:"UI Design"},
   text:{fr:"Je conçois des interfaces claires, cohérentes et responsives, en alliant hiérarchie visuelle, ergonomie et systèmes de composants.",en:"I design clear, consistent and responsive interfaces, combining visual hierarchy, usability and component systems."},
   list:{fr:["Design systems","Responsive design","Maquettes","Micro-interactions","Composants UI","Hiérarchie visuelle","Prototypage","Landing pages"],en:["Design systems","Responsive design","Mock-ups","Micro-interactions","UI components","Visual hierarchy","Prototyping","Landing pages"]}},
  {ico:'<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"/>', title:{fr:"UX Design",en:"UX Design"},
   text:{fr:"Je conçois des parcours intuitifs et user-centric, en m\u2019appuyant sur l\u2019architecture de l\u2019information et le prototypage interactif.",en:"I design intuitive, user-centric journeys, building on information architecture and interactive prototyping."},
   list:{fr:["User flows","Parcours utilisateur","Arborescence","Recherche utilisateur","Wireframes","Prototypage","Tests utilisateurs","Accessibilité"],en:["User flows","User journeys","Site map","User research","Wireframes","Prototyping","User testing","Accessibility"]}},
  {ico:'<path d="M16.5 3.5l4 4L8 20H4v-4z"/><path d="M14 6l4 4"/>', title:{fr:"Branding",en:"Branding"},
   text:{fr:"Je conçois des identités de marque, du positionnement stratégique aux systèmes visuels déclinés sur tous les supports.",en:"I design brand identities, from strategic positioning to visual systems rolled out across every touchpoint."},
   list:{fr:["Charte graphique","Identité visuelle","Typographie","Logo et déclinaisons","Système graphique","Supports digitaux","Supports print","Signalétiques"],en:["Brand guidelines","Visual identity","Typography","Logo and variations","Graphic system","Digital materials","Print materials","Signage"]}}
];

var STEPS=[
  {title:{fr:"Comprendre",en:"Discover"},tag:{fr:"Immersion et cadrage",en:"Immersion and scoping"},
   text:{fr:"Définition des objectifs, des cibles et du positionnement lors d’un atelier de cadrage. Analyse concurrentielle et audit des supports existants afin d’identifier les enjeux et de définir les priorités du projet.",
         en:"Definition of goals, audiences and positioning during a scoping workshop. Competitive analysis and audit of existing assets to identify the challenges and set the project priorities."},
   outs:{fr:["Brief créatif","Benchmark concurrentiel","Audit de l’existant","Personas"],en:["Creative brief","Competitive benchmark","Brand & UX audit","Personas"]}},
  {title:{fr:"Structurer",en:"Define"},tag:{fr:"Stratégie et architecture",en:"Strategy and structure"},
   text:{fr:"Définition de la plateforme de marque et des messages clés, puis élaboration de l’architecture des contenus et des parcours utilisateurs. Conception des zonings et wireframes pour structurer les supports et valider les fondations du projet avant la création.",
         en:"Definition of the brand platform and key messages, then development of the content architecture and user journeys. Design of zoning and wireframes to structure every touchpoint and validate the project foundations before creation."},
   outs:{fr:["Plateforme de marque","Arborescence","User flows","Wireframes"],en:["Brand platform","Site map","User flows","Wireframes"]}},
  {title:{fr:"Concevoir",en:"Design"},tag:{fr:"Création et itérations",en:"Creation and iteration"},
   text:{fr:"Exploration de plusieurs pistes créatives et définition d’une direction artistique. Déclinaison de la piste retenue en identité visuelle, maquettes desktop et mobile, puis réalisation d’un prototype interactif soumis à des tests utilisateurs.",
         en:"Exploration of several creative routes and definition of an art direction. The chosen route is rolled out into a visual identity and desktop and mobile mock-ups, followed by an interactive prototype put through user testing."},
   outs:{fr:["Moodboard","Identité visuelle","Maquettes UI","Prototype interactif"],en:["Moodboard","Visual identity","UI mock-ups","Interactive prototype"]}},
  {title:{fr:"Livrer",en:"Deliver"},tag:{fr:"Déploiement et transmission",en:"Roll-out and handover"},
   text:{fr:"Finalisation de la charte graphique, du design system et des fichiers sources prêts à l’emploi. Accompagnement de la production et de l’intégration jusqu’à la mise en ligne, suivi d’un contrôle qualité final.",
         en:"Finalisation of the brand guidelines, design system and ready-to-use source files. Support through production and development up to launch, followed by a final quality check."},
   outs:{fr:["Charte graphique","Design system","Kit de déclinaisons","Handoff développeur"],en:["Brand guidelines","Design system","Asset kit","Developer handoff"]}}
];

var CAREER=[
  {date:{fr:"2025 – aujourd\u2019hui",en:"2025 – now"}, role:{fr:"UI/UX & Brand Designer",en:"UI/UX & Brand Designer"},
   org:{fr:"Groupe APB",en:"Groupe APB"}, tags:["UX","UI","Branding"],
   text:{fr:"Identité de marque, zoning, wireframing, prototypage, intégration web, objets promotionnels, print, direction de contenus UGC et vidéo, motion design, campagnes de communication et marketing (réseaux sociaux, mailing).",
         en:"Brand identity, zoning, wireframing, prototyping, web integration, promotional items, print content, UGC and video direction, motion design, communication and marketing campaigns (social media, mailing)."}},
  {date:{fr:"2023 – 2025",en:"2023 – 2025"}, role:{fr:"Chargée de communication et marketing digital",en:"Communication & Digital Marketing Manager"},
   org:{fr:"Alan Allman Associates / Ited",en:"Alan Allman Associates / Ited"}, tags:["Marketing","Communication","UX"],
   text:{fr:"Stratégies B2B de génération de leads, refonte de l\u2019identité visuelle et du site web, gestion de contenus (réseaux sociaux, mailing, SEO, interviews, podcasts, webinars).",
         en:"B2B lead generation strategies, visual identity and website redesign, content management (social media, mailing, SEO, interviews, podcasts, webinars)."}},
  {date:{fr:"2022 – 2023",en:"2022 – 2023"}, role:{fr:"Responsable marketing et communication",en:"Communication & Marketing Manager"},
   org:{fr:"I-Deal Development",en:"I-Deal Development"}, tags:["Communication","Marketing"],
   text:{fr:"Stratégies marketing, SEO, gestion des contenus réseaux sociaux, promotion de la marque dans la presse et à la radio, marketing interne et organisation d\u2019événements.",
         en:"Marketing strategies, SEO, social media content management, brand promotion in the press and on the radio, internal marketing and event organisation."}}
];
var EDUCATION=[
  {date:{fr:"2025 – 2027 (en cours)",en:"2025 – 2027 (in progress)"}, role:{fr:"Mastère Direction Artistique et Numérique",en:"Master\u2019s in Digital Art Direction"}, org:{fr:"LISAA, Paris (formation à distance)",en:"LISAA, Paris (distance learning)"}},
  {date:{fr:"2024",en:"2024"}, role:{fr:"MBA Stratégie Digitale",en:"MBA in Digital Strategy"}, org:{fr:"MBA ESG, Paris",en:"MBA ESG, Paris"}},
  {date:{fr:"2022",en:"2022"}, role:{fr:"Licence Japonais et Commerce International",en:"Bachelor\u2019s in Japanese and International Trade"}, org:{fr:"INALCO, Paris",en:"INALCO, Paris"}}
];

var TOOLS=["Figma","Framer","Photoshop","Illustrator","InDesign","Premiere Pro","WordPress","Elementor"];
var AI_TOOLS=["Claude","Claude Code","ChatGPT","Codex","Cursor","Lovable","Higgsfield","Kling"];

var CREATE=[
  {cls:"ux", title:{fr:"UX/UI design",en:"UX/UI design"},
   text:{fr:"Je pars des usages pour concevoir des parcours simples et des interfaces lisibles, sur desktop comme sur mobile.",en:"I start from how people use things to design simple journeys and readable interfaces, on desktop and mobile."},
   list:{fr:["Parcours utilisateurs","Zonings et wireframes","Prototypes","Web design","Design responsive","Design orienté conversion","Accessibilité"],en:["User journeys","Zoning and wireframes","Prototypes","Web design","Responsive design","Conversion-focused design","Accessibility"]}},
  {cls:"branding", title:{fr:"Branding",en:"Branding"},
   text:{fr:"Je donne une identité claire aux marques et je la fais vivre sur tous leurs supports, du digital au print.",en:"I give brands a clear identity and bring it to life across all their materials, digital and print."},
   list:{fr:["Identité visuelle","Logo","Charte graphique","Typographie","Palette","Supports print","Signalétique"],en:["Visual identity","Logo","Brand guidelines","Typography","Palette","Print materials","Signage"]}}
];
var SKILLS=[
  {title:{fr:"Logiciels",en:"Software"}, list:{fr:TOOLS,en:TOOLS}},
  {title:{fr:"Outils IA",en:"AI tools"}, list:{fr:AI_TOOLS,en:AI_TOOLS}}
];
/* « En dehors des écrans » : visuels provisoires (remplacer par des photos : renseigner img:"..." ) */
var HOBBIES=[
  {title:{fr:"Voyages",en:"Travel"},bg:"#2E6CF6",fg:"#FFFFFF",ico:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>'},
  {title:{fr:"Art visuel",en:"Visual art"},bg:"#76A2FF",fg:"#FFFFFF",ico:'<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.8-1.8 0-1.3-1-1.6-1-2.7 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="10.5" cy="7" r="1.1"/><circle cx="15" cy="7.5" r="1.1"/>'},
  {title:{fr:"Photographie",en:"Photography"},bg:"#1A1A1A",fg:"#FFFFFF",ico:'<path d="M4 8h3l1.6-2.4h6.8L17 8h3v11H4z"/><circle cx="12" cy="13.2" r="3.6"/>'},
  {title:{fr:"Sport",en:"Sport"},bg:"#D7F241",fg:"#1A1A1A",ico:'<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>'},
  {title:{fr:"Nutrition",en:"Nutrition"},bg:"#EEF3FF",fg:"#2E6CF6",ico:'<path d="M12 7c-3.5-2-8 0-7.5 5 .4 4.4 3.4 8.4 6 8 .6-.1 1-.4 1.5-.4s.9.3 1.5.4c2.6.4 5.6-3.6 6-8 .5-5-4-7-7.5-5z"/><path d="M12 7c0-2 1-3.5 3-4"/>'}
];
var LIFE=[
  {ico:'<path d="M12 3v18M5 8c4 0 7-2 7-5M19 8c-4 0-7-2-7-5M4 14h16"/>', title:{fr:"Le Japon",en:"Japan"},
   text:{fr:"Une passion pour l’Asie et en particulier le Japon, dont j\u2019ai étudié la langue à l\u2019INALCO.",en:"A passion for Asia, especially Japan, whose language I studied at INALCO."}},
  {ico:'<path d="M3 20l6-11 4 6 3-4 5 9z"/>', title:{fr:"La Suisse",en:"Switzerland"},
   text:{fr:"Un pays que j’aime beaucoup, pour ses paysages et sa culture du design.",en:"A country I love, for its landscapes and its design culture."}},
  {ico:'<circle cx="12" cy="9" r="3"/><path d="M12 12v9M12 6a3 3 0 0 1 3-3M12 6a3 3 0 0 0-3-3M9 9H6M15 9h3"/>', title:{fr:"Les fleurs",en:"Flowers"},
   text:{fr:"Leurs formes et leurs couleurs sont une source d’inspiration inépuisable.",en:"Their shapes and colours are an endless source of inspiration."}},
  {ico:'<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="15.5" cy="10" r="1.2"/>', title:{fr:"L’art visuel",en:"Visual art"},
   text:{fr:"Peinture, décoration, design, l’art sous toutes ses formes.",en:"Painting, decoration, design, art in all its forms."}}
];

/* ============ PROJETS ============ */
var CAT={fr:"Identité de marque et site web",en:"Brand identity and website"};
function std(p,extra){
  return [
    {key:"identity",rows:[{type:"row",items:[p+"_logo"],framed:p==="nyro"||p==="m2"},{type:"row",items:[p+"_browser",p+"_photo"]},{type:"row",items:[p+"_typo",p+"_palette"],framed:p==="m2"}].concat(p==="apbpro"?[{type:"row",items:["apbpro_palette2"]}]:[])},
    {key:"applications",rows:[{type:"stack",left:[p+"_deco1",p+"_slogan"],right:p+"_tall"}]}
  ].concat(extra);
}
var PROJECTS=[
  {slug:"grpf", name:"GRPF", year:"2026", color:"#FF6A55", cover:"mk_grpf", category:CAT, tags:["Branding","UX","UI"],
   description:{fr:["Groupe Rénovation Performance France (GRPF) accompagne les particuliers dans leurs projets de rénovation énergétique, des travaux jusqu’à l’obtention des aides et subventions.", "Le projet a porté sur la refonte complète du site web afin de renforcer la notoriété et la crédibilité de la marque, de clarifier ses domaines d’expertise et d’améliorer l’expérience utilisateur. L’objectif était de guider les propriétaires vers la prise de contact tout en structurant des contenus évolutifs, conçus pour renforcer la visibilité sur les moteurs de recherche (SEO)."],
                en:["Groupe Rénovation Performance France (GRPF) supports homeowners through their energy renovation projects, from the works to securing grants and subsidies.", "The project focused on a complete website redesign to strengthen the brand’s awareness and credibility, clarify its areas of expertise and improve the user experience. The goal was to guide homeowners towards getting in touch while structuring scalable content designed to boost visibility on search engines (SEO)."]},
   stats:[{to:10,plus:true,label:{fr:"pages stratégiques conçues, de l\u2019accueil au devis en passant par les aides et les réalisations.",en:"strategic pages designed, from the homepage to quotes, grants and case studies."}},
          {to:30,plus:true,label:{fr:"composants UI créés, cartes, boutons d\u2019action, formulaires, avis clients, FAQ\u2026",en:"UI components built, cards, CTAs, forms, testimonials, FAQ\u2026"}},
          {to:8,label:{fr:"points d\u2019entrée vers la conversion, du contact aux pages services et au guide des aides financières.",en:"conversion entry points, from contact to service pages and financial aid guidance."}}],
   chapters:std("grpf",[
     {key:"website",rows:[{type:"row",items:["grpf_site"],framed:true},{type:"row",items:["grpf_pages"],framed:true}]},
     {key:"mobile",rows:[{type:"row",items:["grpf_hand","grpf_phones"],framed:true}]}])},
  {slug:"groupe-apb", name:"Groupe APB", year:"2026", color:"#1E49CA", cover:"mk_apb", category:CAT, tags:["Branding","UX","UI"],
   role:{fr:"Brand et UI/UX Designer",en:"Brand and UI/UX Designer"},
   stats:[{to:5,label:{fr:"univers d\u2019offres structurés, isolation, chauffage, solaire, ventilation et menuiserie.",en:"offer categories structured, insulation, heating, solar, ventilation and joinery."}},
          {to:60,plus:true,label:{fr:"composants UI créés, cartes, boutons d\u2019action, formulaires, avis clients\u2026",en:"UI components built, cards, CTAs, forms, testimonials\u2026"}},
          {to:1200,label:{fr:"leads générés en moyenne chaque mois depuis le lancement de la nouvelle identité.",en:"leads generated on average every month since the new identity launched."}}],
   description:{fr:["Groupe APB est une entreprise française certifiée RGE, spécialisée dans la rénovation énergétique des particuliers, de l’isolation au chauffage, en passant par les panneaux solaires, la ventilation et la menuiserie.", "Le projet consistait à refondre l’identité de marque pour renforcer sa notoriété et harmoniser sa présence sur l’ensemble des canaux, du site web aux réseaux sociaux et campagnes marketing. L’objectif était également de simplifier la gestion des offres, d’améliorer l’expérience utilisateur et d’optimiser le parcours client, de l’acquisition à la fidélisation, tout en assurant une continuité entre les points de contact physiques et digitaux."],
                en:["Groupe APB is a French RGE-certified company specialising in energy renovation for homeowners, from insulation and heating to solar panels, ventilation and joinery.", "The project involved redesigning the brand identity to strengthen its awareness and harmonise its presence across every channel, from the website to social media and marketing campaigns. The goal was also to simplify offer management, improve the user experience and optimise the customer journey, from acquisition to loyalty, while ensuring continuity between physical and digital touchpoints."]},
   
   chapters:[
     {key:"identity",rows:[{type:"row",items:["logo"]},{type:"row",items:["browser","house"]},{type:"row",items:["typo","palette"]},{type:"row",items:["apb_icons"]}]},
     {key:"applications",rows:[{type:"stack",left:["sign","slogan"],right:"tote"}]},
     {key:"website",rows:[{type:"row",items:["site"],framed:true},{type:"row",items:["pages"],framed:true}]},
     {key:"mobile",rows:[{type:"row",items:["hand","phones"],framed:true}]}]},
  {slug:"nyro", name:"NYRO", year:"2025", color:"#F1EEFF", cover:"mk_nyro", noResults:true, tags:["Branding","UI"],
   category:{fr:"Identité de marque et site e-commerce",en:"Brand identity and e-commerce website"},
   description:{fr:["NYRO est née d\u2019une conviction simple, la beauté doit être révélée et non masquée. Le projet donne vie à une marque de soins naturels, sains et efficaces, adaptés à toutes les peaux et carnations, dont les formules s\u2019appuient sur la recherche dermatologique et une efficacité validée cliniquement.",
                    "L\u2019identité visuelle traduit cette exigence dans un univers épuré et lumineux. Le blanc et le bleu inspirent confiance, le violet évoque la douceur du soin et le rouge apporte de la chaleur. À la croisée de la rigueur médicale et de la sensibilité, elle incarne une vision inclusive de la beauté naturelle."],
                en:["NYRO was born from a simple belief, beauty should be revealed, not masked. The project brings to life a natural skincare brand, healthy and effective, suited to every skin type and tone, with formulas grounded in dermatological research and clinically proven efficacy.",
                    "The visual identity expresses this standard through a clean, luminous universe. White and blue inspire trust, violet evokes the gentleness of care and red adds warmth. At the crossroads of medical rigour and sensitivity, it embodies an inclusive vision of natural beauty."]},
   
   chapters:(function(c){c[1].rows.push({type:"row",items:["nyro_prod"]},{type:"row",items:["nyro_schema"],framed:true});return c})(std("nyro",[{key:"onepage",rows:[{type:"row",items:["nyro_site"],framed:true},{type:"row",items:["nyro_pages"],framed:true}]}]))},
  {slug:"groupe-apb-pro", noResults:true, name:"Groupe APB Pro", year:"2025", color:"#02113E", cover:"mk_apbpro", category:CAT, tags:["Branding","UX","UI"],
   description:{fr:["Groupe APB Pro est la branche professionnelle de Groupe APB, proposant des solutions de rénovation énergétique adaptées aux copropriétés, à l’industrie, au secteur tertiaire, au monde agricole et aux collectivités.", "Le projet a porté sur la refonte de l’identité de marque et du site web afin d’adapter la communication aux différents profils professionnels et aux enjeux propres à chaque secteur. L’objectif était de faciliter l’identification des solutions adaptées à chaque activité, tout en renforçant la clarté de l’offre, la crédibilité de la marque et l’expérience utilisateur."],
                en:["Groupe APB Pro is the professional branch of Groupe APB, offering energy renovation solutions tailored to co-ownership properties, industry, the service sector, agriculture and local authorities.", "The project covered the redesign of the brand identity and website to adapt communication to different professional profiles and to the specific challenges of each sector. The goal was to make it easier to identify the right solutions for each activity, while strengthening the clarity of the offer, brand credibility and the user experience."]},
   chapters:std("apbpro",[{key:"website",rows:[{type:"row",items:["apbpro_site"],framed:true},{type:"row",items:["apbpro_pages"],framed:true}]}])},
  {slug:"2m-energie", name:"2M Energie", year:"2025", color:"#F1FAEC", cover:"mk_m2", noResults:true, category:CAT, tags:["Branding","UI"],
   description:{fr:["2M Energie est une entreprise française spécialisée dans la rénovation énergétique des particuliers, proposant des solutions telles que l’installation de panneaux solaires et de pompes à chaleur.", "Le projet a porté sur la création de l’identité visuelle et la conception des maquettes du site web, avec pour objectif de développer une image moderne et accessible, reflétant l’expertise de la marque. Le design vise à inspirer confiance, à valoriser l’innovation et à mettre en avant un accompagnement personnalisé des propriétaires dans leurs projets de rénovation énergétique."],
                en:["2M Energie is a French company specialising in energy renovation for homeowners, offering solutions such as solar panel and heat pump installation.", "The project covered the creation of the visual identity and the design of the website mock-ups, with the aim of building a modern, accessible image that reflects the brand’s expertise. The design sets out to inspire trust, highlight innovation and showcase personalised support for homeowners throughout their energy renovation projects."]},
   chapters:std("m2",[
     {key:"onepages",rows:[{type:"row",items:["m2_home","m2_lp"],framed:true,keep:true}]},
     {key:"campaign",rows:[{type:"row",items:["m2_billboard"]}]}])}
];
/* Entreprise dans laquelle chaque projet a été réalisé */
var COMPANY={
  "grpf":{fr:"Groupe APB",en:"Groupe APB"},
  "groupe-apb":{fr:"Groupe APB",en:"Groupe APB"},
  "groupe-apb-pro":{fr:"Groupe APB",en:"Groupe APB"},
  "2m-energie":{fr:"Groupe APB",en:"Groupe APB"},
  
  "nyro":{fr:"Projet personnel (marque fictive)",en:"Personal project (fictional brand)"}
};
PROJECTS.forEach(p=>{p.company=COMPANY[p.slug]});
/* Outils utilisés sur chaque projet (affichés en hashtags) */
var PTOOLS={
  "grpf":["Figma","FigJam","Illustrator","Codex","WordPress","Elementor"],
  "groupe-apb":["Figma","FigJam","Photoshop","WordPress","Elementor"],
  "nyro":["Figma","Illustrator","Photoshop","ChatGPT"],
  "groupe-apb-pro":["Figma","FigJam","Photoshop","WordPress","Elementor"],
  "2m-energie":["Illustrator","Figma"]
};
PROJECTS.forEach(p=>{p.toolList=PTOOLS[p.slug]});
/* Template des chiffres clés (section Résultats) — remplacé par p.stats quand un projet a ses vrais chiffres.
   Format : {to:nombre, prefix:"+", suffix:"%", label:{fr,en}} */
var STATS_TEMPLATE=[
  {to:96,prefix:"+",suffix:"%",label:{fr:"d’engagement sur les réseaux sociaux après le lancement de la nouvelle identité",en:"social media engagement after the new identity launched"}},
  {to:80,label:{fr:"supports créés, du print au web en passant par les réseaux sociaux",en:"assets created, from print to web and social media"}},
  {to:1200,label:{fr:"visiteurs le premier mois sur la nouvelle landing page",en:"visitors in the first month on the new landing page"}}
];
function fmtNum(n){return LANG==="fr"?String(n).replace(/\B(?=(\d{3})+(?!\d))/g,"\u00A0"):String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")}
function statsBlock(p){
  var s=p.stats||STATS_TEMPLATE,sample=!p.stats;
  /* plus:true : « +60 » en français, « 60+ » en anglais */
  var pre=x=>(x.prefix||"")+(x.plus&&LANG!=="en"?"+":"");
  var suf=x=>(x.suffix?(LANG==="fr"&&x.suffix==="%"?"\u202F%":x.suffix):"")+(x.plus&&LANG==="en"?"+":"");
  return `<div class="stats">${s.map((x,i)=>`
    <div class="stat" data-reveal style="--d:${i}">
      <p class="stat-num" aria-label="${pre(x)+fmtNum(x.to)+suf(x)}"><span aria-hidden="true">${pre(x)}<span class="stat-val" data-to="${x.to}">${fmtNum(x.to)}</span>${suf(x)}</span></p>
      <p class="stat-label">${esc(L(x.label))}</p>
    </div>`).join("")}</div>`;
}
function initStats(root){
  var els=[].slice.call(root.querySelectorAll(".stat-val"));if(!els.length)return;
  if(reduce||!window.IntersectionObserver)return;
  els.forEach(e=>e.textContent=fmtNum(0));
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;io.unobserve(en.target);
    var el=en.target,to=+el.dataset.to,dur=1800,t0=performance.now();
    (function f(now){var k=Math.min(1,(now-t0)/dur),e=k===1?1:1-Math.pow(2,-10*k);el.textContent=fmtNum(Math.round(to*e));if(k<1&&el.isConnected)requestAnimationFrame(f)})(t0);
  })},{threshold:.6});
  els.forEach(e=>io.observe(e));
}

/* ============ OUTILS ============ */
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ratio(k){return IMG[k].w/IMG[k].h}
function badges(tags){return tags&&tags.length?`<ul class="badges">${tags.map(x=>`<li class="badge">${x}</li>`).join("")}</ul>`:""}
var PALETTES={
  palette:[[{fr:"Orange",en:"Orange"},"#F68D2E",1],[{fr:"Blanc",en:"White"},"#FFFFFF",0],[{fr:"Gris clair",en:"Light Grey"},"#F5F5F5",0],[{fr:"Bleu APB",en:"APB Blue"},"#0449D0",1],[{fr:"Bleu marine",en:"Navy Blue"},"#000F3E",1]],
  grpf_palette:[[{fr:"Noir doux",en:"Soft Black"},"#252525",1],[{fr:"Beige",en:"Beige"},"#F7F5ED",0],[{fr:"Bleu canard",en:"Teal Blue"},"#04494B",1],[{fr:"Rouge corail",en:"Coral Red"},"#FF6A56",1]],
  nyro_palette:[[{fr:"Blanc froid",en:"Cold White"},"#FFFFFF",0],[{fr:"Bleu crème",en:"Cream Blue"},"#F1EFFF",0],[{fr:"Bleu profond",en:"Deep Blue"},"#140087",1],[{fr:"Rouge coquelicot",en:"Poppy Red"},"#E34A2F",1],[{fr:"Noir doux",en:"Calm Black"},"#303030",1]],
  apbpro_palette:[[{fr:"Blanc",en:"White"},"#FFFFFF",0],[{fr:"Gris acier",en:"Steel Grey"},"#CCCCCC",0],[{fr:"Bleu APB",en:"APB Blue"},"#0449D0",1],[{fr:"Bleu marine",en:"Navy Blue"},"#000F3E",1]],
  apbpro_palette2:[[{fr:"Canard industriel",en:"Industrial Teal"},"#365D70",1],[{fr:"Bordeaux tertiaire",en:"Tertiary Burgundy"},"#870031",1],[{fr:"Vert agricole",en:"Agricultural Green"},"#008739",1],[{fr:"Orange public",en:"Public Orange"},"#E7730A",1],[{fr:"Bleu copropriété",en:"Co-ownership Blue"},"#3F7EFB",1]],
  m2_palette:[[{fr:"Clair",en:"Light"},"#FFFFFF",0],[{fr:"Sauge",en:"Sage"},"#F2FAEB",0],[{fr:"Avocat",en:"Avocado"},"#CEF17B",0],[{fr:"Forêt",en:"Forest"},"#085014",1],[{fr:"Sombre",en:"Dark"},"#000000",1]]};
/* Typographies : nom, graisse, fond, couleur des libellés, glyphe « Aa » détouré */
var TYPOS={
  typo:{n:"Mazzard",w:{fr:"Semi Bold",en:"Semi Bold"},bg:"#FFFFFF",lc:"#747474"},
  grpf_typo:{n:"Caldina",w:{fr:"Medium",en:"Medium"},bg:"#F7F5ED",lc:"#6B6A63"},
  nyro_typo:{n:"Manrope",w:{fr:"Bold",en:"Bold"},bg:"#FFFFFF",lc:"#6E6E6E"},
  apbpro_typo:{n:"Mazzard",w:{fr:"Semi Bold",en:"Semi Bold"},bg:"#FFFFFF",lc:"#6E6E6E"},
  m2_typo:{n:"Neulis Neue",w:{fr:"Semi Bold",en:"Semi Bold"},bg:"#CEF17B",lc:"#4B6624"}};
var GLYPHS={"typo": "/images/typo/groupe-apb-aa.png?v=da34e07e", "grpf_typo": "/images/typo/grpf-aa.png?v=90ab2c7a", "nyro_typo": "/images/typo/nyro-aa.png?v=b3861308", "apbpro_typo": "/images/typo/groupe-apb-pro-aa.png?v=62f6d6dd", "m2_typo": "/images/typo/2m-energie-aa.png?v=bab412ad", "ited_typo": ""};
function tile(k,cls){var ty=TYPOS[k];if(ty&&GLYPHS[k]){var i1=IMG[k];return `<figure class="tile typ" style="--ar:${i1.w}/${i1.h};background:${ty.bg};--lc:${ty.lc}" role="img" aria-label="${esc(LANG==="en"?i1.alt_en:i1.alt)}"><span class="typ-n">${ty.n}</span><img class="typ-g" src="${GLYPHS[k]}" alt=""><span class="typ-w">${L(ty.w)}</span></figure>`}var pl=PALETTES[k];if(pl){var i0=IMG[k];return `<figure class="tile pal" style="--ar:${i0.w}/${i0.h}" role="img" aria-label="${esc(LANG==="en"?i0.alt_en:i0.alt)}">${pl.map(c=>`<div class="pal-sw${c[2]?" dark":""}" style="background:${c[1]}"><span class="pal-n">${L(c[0])}</span><span class="pal-h">${c[1]}</span></div>`).join("")}</figure>`}var i=IMG[k];if(i.video)return `<figure class="tile vid" style="--ar:${i.w}/${i.h};background:${i.bg||"transparent"}" role="img" aria-label="${esc(LANG==="en"&&i.alt_en?i.alt_en:i.alt)}"><video autoplay muted loop playsinline preload="auto" aria-hidden="true">${i.webm?`<source src="${i.webm}" type="video/webm">`:""}<source src="${i.src}" type="video/mp4"></video></figure>`;return `<figure class="tile${cls?" "+cls:""}" style="--ar:${i.w}/${i.h}"><img src="${i.src}" loading="lazy" decoding="async" alt="${esc(LANG==="en"&&i.alt_en?i.alt_en:i.alt)}" width="${i.w}" height="${i.h}"></figure>`}
function cover(p){var m=p.cover&&IMG[p.cover];return `<div class="proj-cover${m&&m.box?" is-mk":""}" style="--c:${p.color}"${m&&m.box?` data-mk="${p.cover}"`:""}>${m?`<img src="${m.src}" alt="">`:""}</div>`}
var ARROW_DOWN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
function timeline(items){
  return `<ol class="timeline"><span class="tl-progress" aria-hidden="true"></span>${items.map(x=>`
    <li class="tl-item" data-reveal>
      <span class="tl-date${x.todo?" todo":""}">${L(x.date)}</span>
      <h3${x.todo?' class="todo"':""}>${L(x.role)}</h3>
      <p class="tl-org${x.todo?" todo":""}">${L(x.org)}</p>
      ${x.text?`<p${x.todo?' class="todo"':""}>${L(x.text)}</p>`:""}
      ${badges(x.tags)}
    </li>`).join("")}</ol>`;
}
function methodBlock(){
  var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  return `<section class="wrap section home-method"><div class="method">
    <div class="sec-head" data-reveal><h2 class="sec-title">${t("methodTitle")}</h2></div>
    <ol class="ap-list">${STEPS.map((s,i)=>`
      <li class="ap-row" data-reveal>
        <div class="ap-head">
          <p class="ap-count">${t("stepOf")(i+1,STEPS.length)}</p>
          <h3 class="ap-h">${L(s.title)}</h3>
          <p class="ap-tag">${L(s.tag)}</p>
          <button class="ap-toggle" type="button" aria-expanded="false" aria-controls="ap-p${i+1}"><span class="ul">${t("apMore")}</span>${chev}</button>
        </div>
        <div class="ap-body" id="ap-p${i+1}"><div class="ap-inner">
          <p class="ap-tag ap-tag-m">${L(s.tag)}</p>
          <p class="ap-text">${L(s.text)}</p>
        </div></div>
      </li>`).join("")}</ol>
    <div class="ap-cta" data-reveal><a class="btn btn-ink fill" href="${u('/contact/')}">${t("stpDone")}</a></div>
  </div></section>`;
}
function initApproach(root){
  root.querySelectorAll(".ap-toggle").forEach(function(b){
    b.addEventListener("click",function(){var row=b.closest(".ap-row"),open=!row.classList.contains("open");
      row.classList.toggle("open",open);b.setAttribute("aria-expanded",open);b.querySelector(".ul").textContent=open?t("apLess"):t("apMore")});
  });
}
function stepPane(i){var s=STEPS[i];
  return `<div class="stp-main"><p class="stp-count">${t("stepOf")(i+1,STEPS.length)}</p>
    <h3 class="stp-h">${L(s.title)}<span class="stp-tag">${L(s.tag)}</span></h3>
    <p class="stp-text">${L(s.text)}</p></div>
    <div class="stp-outs"><h4 class="stp-sub">${t("stepOut")}</h4><ul class="badges">${L(s.outs).map(x=>`<li class="badge">${x}</li>`).join("")}</ul></div>`}
/* ===== Stepper (React Bits) — porté en JS natif =====
   indicator bars · transition fade · width 760 · frame false · linear ; boutons et carte aux couleurs du site */
function initStepper(root){
  root.querySelectorAll(".stp").forEach(function(st){
    var bars=[].slice.call(st.querySelectorAll(".stp-bar")),vp=st.querySelector(".stp-viewport"),back=st.querySelector(".stp-back"),next=st.querySelector(".stp-next"),nl=st.querySelector(".stp-next-l");
    var n=STEPS.length,cur=1,reached=1,pane=null;
    var SPRING=CSS.supports&&CSS.supports("transition-timing-function","linear(0, 1)")?"linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)":"cubic-bezier(0.34, 1.4, 0.64, 1)";
    function paint(){
      bars.forEach(function(b,k){var num=k+1,status=num<cur?"complete":num===cur?"active":"upcoming";b.dataset.status=status;
        b.setAttribute("aria-selected",num===cur);b.toggleAttribute("aria-current",num===cur);b.disabled=num===cur||num>reached;});
      back.toggleAttribute("data-hidden",cur<=1);nl.textContent=cur===n?t("stpDone"):t("stpNext");
    }
    function render(num,animate){
      var from=vp.offsetHeight,old=pane;
      pane=document.createElement("div");pane.className="stp-pane";pane.tabIndex=-1;pane.innerHTML=stepPane(num-1);
      if(old&&animate&&!reduce&&vp.animate){old.classList.add("leaving");old.setAttribute("aria-hidden","true");vp.appendChild(pane);
        var to=pane.offsetHeight;
        if(Math.abs(from-to)>.5)vp.animate([{height:from+"px"},{height:to+"px"}],{duration:560,easing:SPRING});
        pane.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"});
        old.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(.2,0,.4,1)",fill:"forwards"}).onfinish=()=>old.remove();
      }else{if(old)old.remove();vp.appendChild(pane)}
    }
    function go(num){
      if(num>n){go(u("/contact/"));return}
      num=Math.max(1,Math.min(n,num));if(num===cur)return;
      var focusIn=st.contains(document.activeElement)&&document.activeElement.closest(".stp-pane");
      cur=num;if(cur>reached)reached=cur;paint();render(cur,true);if(focusIn)pane.focus({preventScroll:true});
    }
    bars.forEach(b=>b.addEventListener("click",()=>go(+b.dataset.n)));
    /* sur mobile, si le haut du stepper est sorti de l'écran, on le ramène pour voir les étapes */
    function keepInView(){var r=st.getBoundingClientRect(),hh=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--head-h"))||90;if(r.top<hh)window.scrollBy({top:r.top-hh-12,behavior:reduce?"auto":"smooth"})}
    back.addEventListener("click",()=>{go(cur-1);keepInView()});next.addEventListener("click",()=>{if(cur<n){go(cur+1);keepInView()}else go(cur+1)});
    /* glisser à gauche / droite sur le contenu (mobile) */
    var sx=0,sy=0;vp.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
    vp.addEventListener("touchend",e=>{var dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3){if(dx<0){if(cur<n)go(cur+1)}else go(cur-1)}});
    /* défilement automatique : pause tant que la souris est sur la section, reprise à la sortie */
    var DUR=6500,el=0,last=performance.now(),hover=false,visible=false,sec=st.closest(".section")||st;
    function fill(k){var f=bars[cur-1]&&bars[cur-1].querySelector(".stp-bar-fill");if(f){f.style.transition="none";f.style.transform="scaleX("+k+")"}}
    function clearFill(){bars.forEach(b=>{var f=b.querySelector(".stp-bar-fill");f.style.transition="";f.style.transform=""})}
    var go0=go;go=function(num){clearFill();el=0;go0(num)};
    var auto=!reduce;
    function tick(now){if(!st.isConnected)return;var dt=now-last;last=now;
      if(auto&&visible&&!hover){el+=dt;fill(Math.min(1,el/DUR));if(el>=DUR){var nx=cur<n?cur+1:1;if(nx===1){cur=0}go(nx)}}
      requestAnimationFrame(tick)}
    sec.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")hover=true});
    sec.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse")hover=false});
    new IntersectionObserver(es=>{visible=es[0].isIntersecting},{threshold:.3}).observe(st);
    paint();render(1,false);if(auto)requestAnimationFrame(tick);
  });
}

/* ============ PAGES ============ */
function pageHome(){
  var feat=FEATURED.map(s=>PROJECTS.find(p=>p.slug===s)).filter(Boolean);
  var others=PROJECTS.filter(p=>FEATURED.indexOf(p.slug)<0);
  var tools=TOOLS.map(x=>`<li>${x}</li>`).join("");
  return `
  <section class="hero wrap">
    <p class="status"><span class="dot" aria-hidden="true"></span>${t("status")}</p>
    <p class="hero-name">Clara Debarle</p>
    <h1><span class="sr">Clara Debarle, </span><span class="line"><span>${t("heroL1")}</span></span><span class="line"><span>${t("heroL2")}</span></span></h1>
    <p class="hero-lead">${t("heroP")}</p>
    <div class="btn-row">
      <a class="btn btn-ink fill" href="${u('/projets/')}">${t("ctaProjects")}</a>
      <a class="btn btn-outline fill" href="${u('/contact/')}">${t("footBtn")}</a>
    </div>
  </section>


  <section class="section wrap" id="home-projets" aria-labelledby="feat-t">
    <div class="sec-head" data-reveal><h2 class="sec-title" id="feat-t">${t("featTitle")}</h2></div>
    <ul class="feat-grid">${feat.map((p,i)=>`
      <li class="feat-item feat-${i%2?"l":"r"}" data-reveal style="--n:${i+1}">
        <a class="proj" href="${u('/projets/'+p.slug+'/')}">${cover(p)}
          <div class="proj-meta"><span class="proj-name">${esc(p.name)}</span><span class="proj-year">${p.year}</span></div>${badges(p.tags)}
        </a>
      </li>`).join("")}
      <li class="feat-item feat-cta" data-reveal>
        <a class="cta-card" href="${u('/projets/')}">
          <h3>${t("moreHead")}</h3>
          <span class="stack-cta"><span class="btn btn-light fill">${t("moreBtn")}</span></span>
        </a>
      </li></ul>
  </section>

  ${methodBlock()}


  <section class="statements wrap" aria-label="${t("storyAria")}">
    ${t("story").map(x=>`<div class="stmt" data-fill data-reveal><h2 data-words>${x}</h2></div>`).join("")}
  </section>

  ${logoLoop()}
  ${hobbiesBlock()}

`;
}

function pageProjects(){
  return `<section class="page-head wrap" data-reveal><h1>${t("tProjects")}</h1></section>
  <section class="wrap">
    <div class="filters">
      <div class="rseg-scroll"><div class="rseg" role="radiogroup" aria-label="${t("filterAria")}">
        ${[["",t("filterAll")]].concat(TAGS.map(x=>[x,x])).map((x,i)=>`<button class="rseg-item" type="button" role="radio" data-filter="${x[0]}" aria-checked="${i===0}" tabindex="${i===0?0:-1}">${x[1]}</button>`).join("")}
        <div class="rseg-thumb" aria-hidden="true">${[t("filterAll")].concat(TAGS).map(x=>`<span class="rseg-item rseg-copy">${x}</span>`).join("")}</div>
      </div></div>
      ${glideSelectHTML([["",t("filterAll")]].concat(TAGS.map(x=>[x,x])).map(x=>({value:x[0],label:x[1],tag:String(x[0]?PROJECTS.filter(p=>p.tags.indexOf(x[0])>-1).length:PROJECTS.length)})),t("filterAria"))}
      <span class="count" aria-live="polite">${t("nProjects")(PROJECTS.length)}</span>
    </div>
    <ul class="proj-list">${PROJECTS.map(p=>`
      <li data-tags="${p.tags.join(" ")}" data-reveal>
        <a class="proj" href="${u('/projets/'+p.slug+'/')}">${cover(p)}
          <div class="proj-meta"><span class="proj-name">${esc(p.name)}</span><span class="proj-year">${p.year}</span></div>${badges(p.tags)}
        </a>
      </li>`).join("")}</ul>
  </section>`;
}

function renderRow(r){
  if(r.type==="stack"){
    var a=ratio(r.left[0]),b=ratio(r.right)*2;
    return `<div class="stack" style="--cols:${a.toFixed(3)}fr ${b.toFixed(3)}fr"><div class="stack-left">${r.left.map(k=>tile(k)).join("")}</div>${tile(r.right,"tall")}</div>`;
  }
  return `<div class="row${r.keep?" keep":""}" style="--cols:${(function(){var rs=r.items.map(ratio),sm=rs.reduce((x,y)=>x+y,0),f=sm<1?1/sm:1;return rs.map(x=>(x*f).toFixed(3)+"fr").join(" ")})()}">${r.items.map(k=>tile(k,r.framed?"framed":"")).join("")}</div>`;
}
function pageCase(p){
  var next=PROJECTS[(PROJECTS.indexOf(p)+1)%PROJECTS.length];
  var todo=`<span class="todo">${t("todo")}</span>`;
  var tools=p.toolList?`<ul class="tags">${p.toolList.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:todo;
  var chapters=[];
  (p.chapters||[]).forEach(c=>chapters.push({id:"ch-"+c.key,title:t("ch")[c.key],html:`<div class="bento">${c.rows.map(r=>`<div data-reveal>${renderRow(r)}</div>`).join("")}</div>`}));
  if(!p.chapters)chapters.push({id:"ch-visuals",title:t("ch").identity,html:`<div class="empty-tile" style="--c:${p.color}"><span>${t("emptyVisuals")}</span></div>`});
  var res=L(p.results);
  if(!p.noResults)chapters.push({id:"ch-results",title:p.resultsTitle?L(p.resultsTitle):t("chResults"),html:statsBlock(p)+`<div class="ch-text">${res?res.map(x=>`<p>${esc(x)}</p>`).join(""):""}</div>`});
  var d=L(p.description);
  var back=SHOW_BACK_LINK?`<a class="back" href="${u('/projets/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg><span class="ul">${t("allProjects")}</span></a>`:"";
  return `<div class="read-progress" aria-hidden="true"></div>
  <div class="wrap">
    ${p.cover?`<div class="case-hero${IMG[p.cover].box?" is-mk":""}" style="--c:${p.color}"${IMG[p.cover].box?` data-mk="${p.cover}"`:""}><img src="${IMG[p.cover].src}" alt="${esc(t("heroAlt")+" "+p.name)}"></div>`:""}
    <div class="case-body">
      ${back}
      <header class="case-head" data-reveal><h1>${esc(p.name)}</h1>${badges(p.tags)}</header>
      <div class="case-intro" data-reveal style="--d:1">
        <div class="case-descs">${d?(Array.isArray(d)?d:[d]).map(x=>`<p class="case-desc">${esc(x)}</p>`).join(""):`<p class="case-desc todo">${esc(t("descTodo"))}</p>`}</div>
        <dl class="case-facts">
          <dt>${t("company")}</dt><dd>${p.company?esc(L(p.company)):todo}</dd>
          <dt>${t("year")}</dt><dd>${p.year||todo}</dd>
          <dt>${t("tools")}</dt><dd>${tools}</dd>
        </dl>
      </div>
      <div class="story">
        <nav class="toc" aria-label="${t("tocAria")}"><ol>${chapters.map(c=>`<li><button type="button" data-scroll="${c.id}" data-toc="${c.id}"><span class="ul">${c.title}</span></button></li>`).join("")}</ol></nav>
        <div class="chapters">${chapters.map(c=>`
          <section class="chapter" id="${c.id}">
            <div class="ch-head" data-reveal><h2>${c.title}</h2>${c.lead?`<p>${c.lead}</p>`:""}</div>
            ${c.html}
          </section>`).join("")}</div>
      </div>
      ${skewedCarousel(PROJECTS.filter(x=>x.slug!==p.slug))}
    </div>
  </div>`;
}

function hobbiesBlock(){
  return `<section class="section wrap" aria-labelledby="life-t">
    <div class="sec-head" data-reveal><h2 class="sec-title" id="life-t">${t("lifeTitle")}</h2></div>
    ${bounceCards(HOBBIES)}
    ${stackCards(HOBBIES)}
  </section>`;
}
function pageAbout(){
  return `
  <section class="about-hero wrap">
    <div data-reveal>
      <h1>${t("aboutHi")}</h1>
      <p class="lead">${t("aboutLead")}</p>
      <div class="btn-row"><a class="btn btn-ink fill" href="${u('/contact/')}">${t("footBtn")}</a></div>
    </div>
  </section>

  <section class="section wrap" aria-labelledby="exp-t">
    <div class="sec-head" data-reveal><h2 class="sec-title" id="exp-t">${t("expTitle")}</h2></div>
    <ul class="mc-grid">${EXPERTISES.map((e,i)=>`
      <li class="mc" data-i="${i}">
        <div class="mc-shadow" aria-hidden="true"></div>
        <div class="mc-body">
          <div class="mc-face mc-front">
            <span class="mc-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${e.ico}</svg></span>
            <h3 class="mc-title">${L(e.title)}</h3>
            <button class="mc-btn fill" type="button" aria-expanded="false">${t("seeMore")}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9"/><path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2"/></svg></button>
          </div>
          <div class="mc-face mc-back" aria-hidden="true" inert>
            <h3 class="mc-title mc-title-s">${L(e.title)}</h3>
            <p>${L(e.text)}</p>
            <ul class="mc-list">${L(e.list).map(x=>`<li>${x}</li>`).join("")}</ul>
            <button class="mc-btn fill" type="button" >${t("seeBack")}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9"/><path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2"/></svg></button>
          </div>
        </div>
      </li>`).join("")}</ul>
  </section>

  <section class="section wrap cv" aria-labelledby="cv-t">
    <div class="cv-side" data-reveal><h2 class="sec-title" id="cv-t">${t("cvTitle")}</h2><p class="sec-lead">${t("cvLead")}</p></div>
    <div class="cv-col">
      <div><h3 class="cv-sub">${t("expSub")}</h3>${timeline(CAREER)}</div>
      <div><h3 class="cv-sub">${t("eduSub")}</h3>${timeline(EDUCATION)}</div>
    </div>
  </section>
  ${hobbiesBlock()}`;
}

function pageContact(){
  var arr='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  var cp='<svg class="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg><svg class="i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var ico=txt=>`<svg class="ct-li-ico" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="16" y="16.5" text-anchor="middle" dominant-baseline="central" fill="currentColor">${txt}</text></svg>`;
  var mail='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7.5l8 5.5 8-5.5"/></svg>';
  var soc=(name,url,mark,sub)=>{var ext=url.charAt(0)!=="#";return `<a class="ct-tile ct-soc card" href="${url}" target="${ext?"_blank":"_self"}" rel="noopener" data-reveal>
      <span class="ct-ico ct-ico-o" aria-hidden="true">${mark}</span>${arr}
      <span class="ct-soc-txt"><span class="ct-soc-n">${name}</span></span>${ext?`<span class="sr">${t("newTab")}</span>`:""}
    </a>`};
  return `<section class="ct-hero wrap" data-reveal><h1>${t("ctTitle")}</h1><p class="ct-lead">${t("ctLead")}</p></section>
  <section class="ct-bento wrap">
    <div class="ct-tile ct-mail card" data-reveal>
      <div class="ct-tile-top"><span class="ct-ico" aria-hidden="true">${mail}</span><h2 class="ct-k">${t("ctMailK")}</h2></div>
      <div class="ct-mail-b">
        <div class="ct-addr-row">
          <p class="ct-address">${esc(CONTACT_EMAIL)}</p>
          <button class="ct-copy fill" type="button" data-copy="${esc(CONTACT_EMAIL)}" data-copy-icon aria-label="${t("copy")}" title="${t("copy")}">${cp}<span class="ct-copied" aria-hidden="true">${t("ctCopied")}</span></button>
        </div>
        <a class="btn btn-ink fill ct-write" href="mailto:${esc(CONTACT_EMAIL)}?subject=${encodeURIComponent(t("ctSubject"))}" target="_top">${t("ctWrite")}</a>
        <p class="copy-status sr" role="status" aria-live="polite"></p>
      </div>
    </div>
    <div class="ct-tile ct-avail-c card" data-reveal>
      <p class="ct-fast-t"><span class="ct-dot" aria-hidden="true"></span>${t("ctFastT")}</p>
      <p class="ct-fast-p">${t("ctFast")}</p>
    </div>
    ${soc("LinkedIn",LINKEDIN_URL,"in")}
    ${soc("Behance",BEHANCE_URL,"Bē")}
  </section>
`;
}
/* Effet de planage : les cards flottent légèrement à des vitesses différentes et se redressent en arrivant à l'écran */
function initContact(root){
  root.querySelectorAll(".exp-card,.create-card").forEach(function(el){
    var sib=[].slice.call(el.parentNode.children),i=sib.indexOf(el);
    el.classList.add("ct-float");el.dataset.float="g";el.dataset.k=i%3;el.dataset.sgn=i%2?1:-1;
  });
  var els=[].slice.call(root.querySelectorAll(".ct-float"));if(!els.length||reduce)return;
  var AMP=[46,72,58],tk=false;
  function upd(){tk=false;var vh=innerHeight;els.forEach(function(el){if(!el.isConnected||el.hidden)return;var r=el.getBoundingClientRect();
    if(r.bottom<-100||r.top>vh+100)return;
    var p=Math.max(0,Math.min(1,(vh-r.top)/(vh+r.height))),f=el.dataset.float,y,rot;
    if(f==="1"||f==="2"){y=0;rot=0}
    else{y=(.5-p)*AMP[+el.dataset.k];rot=0}
    el.style.setProperty("--fy",y.toFixed(1)+"px");el.style.setProperty("--fr",rot.toFixed(2)+"deg")})}
  function on(){if(!tk){tk=true;requestAnimationFrame(upd)}}
  window.addEventListener("scroll",function sc(){if(!els[0].isConnected){window.removeEventListener("scroll",sc);return}on()},{passive:true});
  window.addEventListener("resize",on);
  upd();
}

/* Missions : cartes retournables (portage vanilla de TiltedCard, React Bits — sans inclinaison ni reflet) */
function flipCards(root){
  var cards=[].slice.call(root.querySelectorAll(".mc"));if(!cards.length)return;
  var coarse=matchMedia("(hover: none) and (pointer: coarse)").matches;
  var clamp=function(v,a,b){return Math.min(b,Math.max(a,v))};
  var smoother=function(x){x=clamp(x,0,1);return x*x*x*(x*(x*6-15)+10)};
  function step(st,k,target,om,ze,dt){var v="v"+k,n=Math.max(1,Math.ceil(dt/(1/240))),h=dt/n;
    for(var i=0;i<n;i++){st[v]+=(om*om*(target-st[k])-2*ze*om*st[v])*h;st[k]+=st[v]*h}
    var done=Math.abs(target-st[k])<.001&&Math.abs(st[v])<.01;if(done){st[k]=target;st[v]=0}return !done}
  var SCALE=1.02,SHADOW=.3,STAGGER=120,vmq=matchMedia("(max-width:767px)");
  function axis(){cards.forEach(function(c){c.dataset.axis=vmq.matches?"x":"y"})}
  axis();if(vmq.addEventListener)vmq.addEventListener("change",function(){axis();cards.forEach(function(c){c._wake&&c._wake()})});
  cards.forEach(function(card,idx){
    var body=card.querySelector(".mc-body"),shade=card.querySelector(".mc-shadow"),
        front=card.querySelector(".mc-front"),back=card.querySelector(".mc-back"),
        btns=card.querySelectorAll(".mc-btn");
    var st={lift:0,vlift:0,flip:0,vflip:0,press:0,vpress:0,ty:0,vty:0,rx:0,vrx:0};
    var hover=false,pressed=false,flipped=false,raf=0,last=0,op=1,entered=true,introAt=-1;
    if(!reduce){entered=false;op=0;st.rx=16;st.ty=22;body.style.opacity="0"}
    function frame(now){raf=0;var dt=clamp((now-last)/1000||0,0,.05);last=now;var busy=false;
      if(!entered&&introAt>=0&&now>=introAt)entered=true;
      if(entered){busy=step(st,"rx",0,9,.86,dt)||busy;busy=step(st,"ty",0,9,.9,dt)||busy;
        if(op<1){op=Math.min(1,op+dt/.45);busy=true}}
      else busy=true;
      busy=step(st,"lift",hover?1:0,13,.9,dt)||busy;
      busy=step(st,"flip",flipped?180:0,reduce?18:9,.78,dt)||busy;
      busy=step(st,"press",pressed?1:0,26,.8,dt)||busy;
      var sc=1+(SCALE-1)*st.lift-.02*st.press;
      body.style.transform="translate3d(0,"+st.ty.toFixed(2)+"px,0) "+(card.dataset.axis==="x"?"rotateX("+(st.rx+st.flip).toFixed(3)+"deg)":"rotateX("+st.rx.toFixed(3)+"deg) rotateY("+st.flip.toFixed(3)+"deg)")+" scale("+sc.toFixed(4)+")";
      body.style.opacity=op<1?smoother(op).toFixed(3):"";
      var turn=Math.abs(Math.cos(st.flip*Math.PI/180)),spread=sc*(.9+.04*st.lift),
          oy=12+16*st.lift+Math.sin(st.rx*Math.PI/180)*18-st.ty*.6;
      var sx=spread,sy=spread;if(card.dataset.axis==="x")sy*=.2+.8*turn;else sx*=.2+.8*turn;
      shade.style.transform="translate3d(0,"+oy.toFixed(2)+"px,0) scale("+sx.toFixed(4)+","+sy.toFixed(4)+")";
      shade.style.opacity=(SHADOW*(op<1?smoother(op):1)*(.6+.4*st.lift)).toFixed(3);
      if(!busy&&!st.lift&&!st.press&&!st.ty&&!st.rx)body.style.transform=flipped?(card.dataset.axis==="x"?"rotateX(180deg)":"rotateY(180deg)"):"";
      if(busy&&card.isConnected)raf=requestAnimationFrame(frame)}
    function wake(){if(raf)return;last=performance.now();raf=requestAnimationFrame(frame)}
    card._wake=wake;
    function setFlip(v,kb){flipped=v;card.toggleAttribute("data-flipped",v);
      front.setAttribute("aria-hidden",v);back.setAttribute("aria-hidden",!v);
      if(v){front.setAttribute("inert","");back.removeAttribute("inert")}else{back.setAttribute("inert","");front.removeAttribute("inert")}
      btns[0].setAttribute("aria-expanded",v);
      if(kb)setTimeout(function(){(v?btns[1]:btns[0]).focus({preventScroll:true})},60);
      else if(document.activeElement&&card.contains(document.activeElement))document.activeElement.blur();
      wake()}
    var down=null;
    card.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"&&!coarse){hover=true;wake()}});
    card.addEventListener("pointerleave",function(){hover=false;pressed=false;wake()});
    card.addEventListener("pointerdown",function(e){down={x:e.clientX,y:e.clientY};pressed=true;wake()});
    window.addEventListener("pointerup",function(){if(pressed){pressed=false;wake()}},{passive:true});
    card.addEventListener("pointermove",function(e){if(down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>6){pressed=false;wake()}});
    card.addEventListener("click",function(e){
      var moved=down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>6;down=null;
      if(moved&&!e.target.closest(".mc-btn"))return;setFlip(!flipped,e.detail===0)});
    var io=new IntersectionObserver(function(en){if(en.some(function(x){return x.isIntersecting})&&!entered&&introAt<0){introAt=performance.now()+idx*STAGGER;wake();io.disconnect()}},{threshold:.2});
    io.observe(card);wake();
  });
}

/* ===== Logos (LogoLoop, React Bits) — porté en JS natif =====
   Pour mettre les vrais logos : renseigner src:"data:image/..." ou une URL ; sans src, le nom s'affiche en texte. */
var LOGOS=[{"name": "Groupe APB", "src": "/images/logos/groupe-apb.png?v=487e8c86", "h": 33}, {"name": "Alan Allman Associates", "src": "/images/logos/alan-allman-associates.png?v=b451b331", "h": 42}, {"name": "GRPF", "src": "/images/logos/grpf.png?v=f5273b95", "h": 30}, {"name": "ITED", "src": "/images/logos/ited.png?v=42644b75", "h": 30}, {"name": "Groupe APB Pro", "src": "/images/logos/groupe-apb-pro.png?v=75e4b289", "h": 35}, {"name": "2M Energie", "src": "/images/logos/2m-energie.png?v=0a0dc06c", "h": 42}, {"name": "NYRO", "src": "/images/logos/nyro.png?v=19e4be0f", "h": 35}];
var LL={speed:40,hoverSpeed:12,logoHeight:30,gap:88};
function logoLoop(){
  var item=l=>`<li class="ll-item">${l.src?`<img src="${l.src}" alt="${esc(l.name)}" draggable="false" style="height:${l.h||LL.logoHeight}px">`:`<span class="ll-word">${esc(l.name)}</span>`}</li>`;
  return `<section class="ll-sec wrap" aria-label="${t("llAria")}">
    <div class="ll" data-reveal style="--ll-h:${LL.logoHeight}px;--ll-gap:${LL.gap}px"><div class="ll-track"><ul class="ll-list">${LOGOS.map(item).join("")}</ul></div></div>
  </section>`;
}
function initLogoLoop(root){
  var el=root.querySelector(".ll");if(!el)return;
  var track=el.querySelector(".ll-track"),list=track.querySelector(".ll-list");
  var off=0,v=LL.speed,target=LL.speed,last=0,raf=0,visible=false,P=0,drag=null,fling=0,resumeT=0;
  function size(){track.querySelectorAll(".ll-list.clone").forEach(n=>n.remove());P=list.getBoundingClientRect().width;
    var need=Math.ceil(el.clientWidth*2/Math.max(1,P))+1;for(var k=0;k<need;k++){var c=list.cloneNode(true);c.classList.add("clone");c.setAttribute("aria-hidden","true");track.appendChild(c)}}
  function wrap(){if(!P)return;while(off<=-P)off+=P;while(off>0)off-=P}
  function paint(){var d=window.devicePixelRatio||1;track.style.transform="translate3d("+(Math.round(off*d)/d)+"px,0,0)"}
  function frame(now){raf=0;var dt=Math.min(.05,(now-last)/1000||0);last=now;
    v+=(target-v)*(1-Math.exp(-dt/.4));
    if(!drag){off-=v*dt;if(fling){off+=fling*dt;fling*=Math.exp(-dt/.35);if(Math.abs(fling)<5)fling=0}}
    wrap();paint();if(el.isConnected&&visible)raf=requestAnimationFrame(frame)}
  function wake(){if(!raf&&visible&&!reduce){last=performance.now();raf=requestAnimationFrame(frame)}}
  el.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"){target=LL.hoverSpeed}});
  el.addEventListener("pointerleave",function(){target=LL.speed});
  el.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse")return;drag={x:e.clientX,y:e.clientY,lx:e.clientX,lt:performance.now(),vx:0,h:false};fling=0;clearTimeout(resumeT)});
  el.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.h){if(Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)){drag.h=true;target=0;v=0}else if(Math.abs(dy)>10){drag=null;return}else return}
    var now=performance.now(),d=e.clientX-drag.lx;off+=d;drag.vx=d/Math.max(1,now-drag.lt)*1000;drag.lx=e.clientX;drag.lt=now;wrap();paint()});
  function end(){if(!drag)return;var was=drag.h;fling=was?drag.vx:0;drag=null;if(was)resumeT=setTimeout(function(){target=LL.speed},1200)}
  window.addEventListener("pointerup",end,{passive:true});window.addEventListener("pointercancel",end,{passive:true});
  el.addEventListener("dragstart",e=>e.preventDefault());
  new IntersectionObserver(function(es){visible=es[0].isIntersecting;wake()}).observe(el);
  size();el.querySelectorAll("img").forEach(im=>{if(!im.complete)im.addEventListener("load",size,{once:true})});
  window.addEventListener("resize",function rs(){if(!el.isConnected){window.removeEventListener("resize",rs);return}size()});
}


/* ===== Mockups : un seul visuel, recadré selon le format du cadre (carte carrée, hero large) — centré sur l'ordinateur ===== */
function mkCrop(m,Wc,Hc){
  if(m.focus){var W0=m.w,H0=m.h,A0=Wc/Hc,F=m.focus,fx=F[0]*W0,fy=F[1]*H0,fw=(F[2]-F[0])*W0,fh=(F[3]-F[1])*H0;
    var cw0=Math.min(Math.max(fw,fh*A0),W0,H0*A0),ch0=cw0/A0;
    var x0=Math.min(Math.max(fx+fw/2-cw0/2,0),W0-cw0),y0=Math.min(Math.max(fy+fh/2-ch0/2,0),H0-ch0),k0=Wc/cw0;
    return {left:-x0*k0,top:-y0*k0,width:W0*k0,height:H0*k0};}
  var W=m.w,H=m.h,A=Wc/Hc,b=m.box,fc=m.fc||[(b[0]+b[2])/2,(b[1]+b[3])/2];
  var lx0=b[0]*W,ly0=b[1]*H,lw=(b[2]-b[0])*W,lh=(b[3]-b[1])*H;
  var cx=(lx0+lw/2+fc[0]*W)/2,cy=(ly0+lh/2+fc[1]*H)/2;
  var f=A>=1.5?.5:(A>=1.2?.64:.84);
  var cw=Math.max(lw/f,lh*1.14*A);cw=Math.min(cw,W,H*A);var ch=cw/A;
  var x=Math.min(Math.max(cx-cw/2,0),W-cw),y=cy-ch/2;if(y>ly0-.07*ch)y=ly0-.07*ch;y=Math.min(Math.max(y,0),H-ch);
  var k=Wc/cw;return {left:-x*k,top:-y*k,width:W*k,height:H*k};
}
function layoutMk(root){
  (root||document).querySelectorAll(".is-mk").forEach(function(c){var m=IMG[c.dataset.mk],im=c.querySelector("img");if(!m||!im||c.closest(".flip-clone"))return;
    var r=c.getBoundingClientRect();if(!r.width||!r.height)return;var g=mkCrop(m,r.width,r.height);
    im.style.left=g.left+"px";im.style.top=g.top+"px";im.style.width=g.width+"px";im.style.height=g.height+"px";im.style.transformOrigin=(-g.left+r.width/2)+"px "+(-g.top+r.height/2)+"px"});
}
window.addEventListener("resize",function(){layoutMk(app)});
function pageNotFound(){return `<section class="notfound wrap"><h1>${t("nfTitle")}</h1><p><a class="ul" href="${u('/')}">${t("nfLink")}</a></p></section>`}

/* Libellé EN/FR : l'ancienne langue monte et sort, la nouvelle arrive par le bas */
function rollLabel(el,txt){
  var w=el.querySelector(".lr");
  if(!w||reduce){el.innerHTML='<span class="lr"><span class="lr-i">'+txt+'</span></span>';return}
  var cur=w.querySelector(".lr-i:last-child");if(cur&&cur.textContent===txt)return;
  w.querySelectorAll(".lr-i.out").forEach(x=>x.remove());
  var nx=document.createElement("span");nx.className="lr-i in";nx.textContent=txt;w.appendChild(nx);
  if(cur){cur.classList.add("out");setTimeout(()=>cur.remove(),560)}
  setTimeout(()=>nx.classList.remove("in"),560);
}
/* ============ TEXTES FIXES (header, footer) ============ */
function applyStatic(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.getAttribute("data-i18n"))});
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{el.setAttribute("aria-label",t(el.getAttribute("data-i18n-aria")))});
  document.querySelectorAll("[data-path]").forEach(el=>{el.setAttribute("href",u(el.getAttribute("data-path")))});
  document.querySelectorAll(".js-behance").forEach(a=>{if(BEHANCE_URL)a.href=BEHANCE_URL});
  document.querySelectorAll(".js-linkedin").forEach(a=>{if(LINKEDIN_URL)a.href=LINKEDIN_URL});
  document.querySelectorAll(".lang-btn").forEach(lb=>{rollLabel(lb,t("langSwitch"));lb.setAttribute("aria-label",t("langAria"));lb.setAttribute("lang",LANG==="fr"?"en":"fr")});
  var bu=document.querySelector(".sm-toggle");
  bu.setAttribute("aria-label",bu.getAttribute("aria-expanded")==="true"?t("menuClose"):t("menuOpen"));
  if(window.smRelabel)window.smRelabel();
}

/* ============ ANIMATIONS AU SCROLL ============ */
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduce)document.documentElement.classList.add("anim");
var revealIO="IntersectionObserver" in window?new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");revealIO.unobserve(e.target)}});
},{threshold:.12,rootMargin:"0px 0px -6% 0px"}):null;
var tocIO=null;

function initPage(){
  /* mots du manifeste */
  app.querySelectorAll("[data-words]").forEach(function(el){
    el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="w">${esc(w)}</span>`).join(" ");
  });
  /* apparitions */
  /* grille de la page Projets : toutes les cartes apparaissent en cascade dès l'arrivée sur la page */
  app.querySelectorAll(".proj-list>li[data-reveal]").forEach(function(el,i){
    el.style.setProperty("--d",Math.min(i,6));
    requestAnimationFrame(function(){requestAnimationFrame(function(){el.classList.add("in")})});
  });
  app.querySelectorAll("[data-reveal]").forEach(function(el){
    if(el.closest(".proj-list"))return;
    if(reduce||!revealIO){el.classList.add("in");return}
    revealIO.observe(el);
  });
  /* sommaire actif dans les pages projet : la section dont le haut a passé 40 % de l'écran ;
     en bas de page, la dernière section (trop courte pour atteindre cette ligne) devient active */
  if(tocIO){tocIO();tocIO=null}
  var tocBtns=app.querySelectorAll("[data-toc]");
  if(tocBtns.length){
    var chs=[].slice.call(app.querySelectorAll(".chapter")),tocLock=0,raf=0;
    var setToc=function(id){tocBtns.forEach(b=>b.classList.toggle("active",b.getAttribute("data-toc")===id))};
    var calc=function(){raf=0;if(Date.now()<tocLock||!chs[0].isConnected)return;
      var line=innerHeight*.4,cur=chs[0].id;
      chs.forEach(c=>{if(c.getBoundingClientRect().top<=line)cur=c.id});
      var last=chs[chs.length-1],end=document.documentElement.scrollHeight-innerHeight-4;
      if(scrollY>=end&&last.getBoundingClientRect().top<innerHeight)cur=last.id;
      setToc(cur)};
    var onS=function(){if(!raf)raf=requestAnimationFrame(calc)};
    /* clic dans le sommaire : la rubrique choisie est soulignée tout de suite */
    var onC=function(e){var b=e.target.closest("[data-toc]");if(!b)return;setToc(b.getAttribute("data-toc"));tocLock=Date.now()+1200;setTimeout(calc,1250)};
    window.addEventListener("scroll",onS,{passive:true});window.addEventListener("resize",onS);app.addEventListener("click",onC);
    tocIO=function(){window.removeEventListener("scroll",onS);window.removeEventListener("resize",onS);app.removeEventListener("click",onC)};
    calc();
  }
  initSkewed(app);
  layoutMk(app);requestAnimationFrame(function(){layoutMk(app)});setTimeout(function(){layoutMk(app)},400);
  initContact(app);flipCards(app);initLogoLoop(app);
  initStepper(app);initApproach(app);
  initBounce(app);
  initStack(app);
  matchBg(app.querySelectorAll(".proj-list .proj-cover img"));
  initStats(app);
  initTextLoops(app);
  /* carte CTA à la même hauteur que les cartes projets */
  sizeCta();
  /* filtres page Projets : segment « rubber » */
  var seg=app.querySelector(".rseg"),segCtl=null,gsCtl=null;
  if(seg)segCtl=rubberSegment(seg,function(f,i){applyFilter(f);if(gsCtl)gsCtl.set(i)});
  var gs=app.querySelector(".gsel");
  if(gs)gsCtl=glideSelect(gs,function(f,i){applyFilter(f);if(segCtl)segCtl.set(i)});
  function applyFilter(f){
    var n=0;
    app.querySelectorAll(".proj-list>li").forEach(function(li){
      var ok=!f||li.getAttribute("data-tags").split(" ").indexOf(f)>-1;
      li.hidden=!ok;
      if(ok){
        li.style.setProperty("--d",n);n++;
        if(!reduce){li.style.transition="none";li.classList.remove("in");void li.offsetWidth;li.style.transition="";requestAnimationFrame(function(){requestAnimationFrame(function(){li.classList.add("in")})})}
        else li.classList.add("in");
      }
    });
    app.querySelector(".count").textContent=t("nProjects")(n);
  }
  onScroll();
}

/* ===== TextLoop (React Bits) — porté en JS natif + GSAP =====
   shape wave · speed 30 · separator ✦ · curviness 18 · fontSize 40 · letterSpacing 2 · uppercase
   texte blanc sur ruban bleu du site · ribbonWidth 80 · pause au survol */
var TL={speed:30,separator:"✦",curviness:18,fontSize:40,fontWeight:600,letterSpacing:2,ribbonWidth:80};
var tlId=0;
function initTextLoops(root){
  var NS="http://www.w3.org/2000/svg",VW=1200,CY=260;
  root.querySelectorAll(".tloop").forEach(function(sec){
    var id="tl-path-"+(++tlId),a=Math.min(TL.curviness*2.2,CY*2);
    var d=`M -320 ${CY} Q -160 ${CY-a} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VW+320} ${CY}`;
    var unit=(sec.dataset.text+" "+TL.separator+" ").toUpperCase();
    var svg=document.createElementNS(NS,"svg");svg.setAttribute("class","tloop-svg");svg.setAttribute("aria-hidden","true");svg.setAttribute("preserveAspectRatio","xMidYMid meet");
    var half=a/2+TL.ribbonWidth/2+6;
    svg.innerHTML=`<path id="${id}" d="${d}" fill="none" stroke="var(--c-blue)" stroke-width="${TL.ribbonWidth}" stroke-linecap="round" stroke-linejoin="round"/>
      <text class="tloop-measure">${unit}</text>
      <text class="tloop-text" dominant-baseline="central"><textPath href="#${id}">${unit}</textPath></text>
      <text class="tloop-text" dominant-baseline="central"><textPath href="#${id}">${unit}</textPath></text>`;
    sec.appendChild(svg);
    var path=svg.querySelector("path"),meas=svg.querySelector(".tloop-measure"),tps=[].slice.call(svg.querySelectorAll("textPath")),texts=[].slice.call(svg.querySelectorAll(".tloop-text"));
    tps.forEach(tp=>tp.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+id));
    function view(){var w=sec.clientWidth||VW,vw=Math.max(560,Math.min(VW,w));svg.setAttribute("viewBox",`${(VW-vw)/2} ${CY-half-a/2} ${vw} ${half*2+a}`)}
    var len=0,tw=null,st={o:0};
    function apply(o){var p=o>=0?o-len:o+len;tps[0].setAttribute("startOffset",o);tps[1].setAttribute("startOffset",p)}
    function measure(){
      view();
      var L=path.getTotalLength(),uw=meas.getComputedTextLength();if(!L||!uw)return;
      len=L;var reps=Math.max(1,Math.round(L/uw)),txt=unit.repeat(reps);
      tps.forEach(tp=>tp.textContent=txt);texts.forEach(t=>{t.setAttribute("textLength",L);t.setAttribute("lengthAdjust","spacing")});
      if(tw)tw.kill();apply(0);
      if(reduce||!window.gsap)return;
      st.o=0;
      tw=gsap.to(st,{o:sec.dataset.dir==="reverse"?-L:L,duration:L/TL.speed,ease:"none",repeat:-1,onUpdate:function(){if(!sec.isConnected){tw.kill();return}apply(st.o)}});
    }
    measure();
    if(document.fonts)document.fonts.ready.then(measure);
    sec.addEventListener("pointerenter",()=>tw&&tw.pause());
    sec.addEventListener("pointerleave",()=>tw&&tw.resume());
    window.addEventListener("resize",function rs(){if(!sec.isConnected){window.removeEventListener("resize",rs);return}view()});
  });
}

/* ===== BounceCards (React Bits) — porté en JS natif =====
   containerWidth 500 · containerHeight 320 · cardSize 200 · spread 85 · rotation 10 · pushDistance 160
   hoverScale 1.06 · bounciness .6 · delay .5s · stagger .06s · bordure 5px blanche · arrondi 16 · ombre */
var BC={w:820,h:340,size:200,spread:140,rotation:10,arc:0,push:110,hoverScale:1.06,bounciness:.6,delay:.05,stagger:.05};
function bounceCards(list){
  return `<div class="bc-wrap" data-reveal><div class="bounce-cards" style="width:${BC.w}px;height:${BC.h}px;--bc-size:${BC.size}px">${list.map((x,i)=>`
    <div class="bc-card" style="z-index:${i+1}" tabindex="0" role="img" aria-label="${esc(L(x.title))}">
      ${x.img?`<img src="${x.img}" alt="" draggable="false">`:`<div class="bc-art" style="--bg:${x.bg};--fg:${x.fg}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x.ico}</svg></div>`}
      <span class="bc-label">${esc(L(x.title))}</span>
    </div>`).join("")}</div></div>`;
}
function initBounce(root){
  var wrap=root.querySelector(".bc-wrap");if(!wrap)return;
  var box=wrap.querySelector(".bounce-cards"),els=[].slice.call(box.querySelectorAll(".bc-card"));
  var P=[1,.5,-.3,-1,.2,.75,-.6,.35,-.85,.1],n=els.length,mid=(n-1)/2,reach=Math.max(1,mid);
  var slots=els.map((_,i)=>{var o=i-mid;return{x:o*BC.spread,y:BC.arc*Math.pow(o/reach,2),rotate:BC.rotation*P[i%P.length]}});
  var st={hovered:-1,time:0,layer:-1},bodies=[],raf=0,last=0,started=false,k=1;
  function fit(){k=Math.min(1,wrap.clientWidth/BC.w);box.style.transform="scale("+k+")";wrap.style.height=(BC.h*k)+"px"}
  fit();window.addEventListener("resize",function rs(){if(!wrap.isConnected){window.removeEventListener("resize",rs);return}fit()});
  function body(i){if(!bodies[i]){var s=slots[i];bodies[i]={x:s.x,y:s.y,rotate:s.rotate,scale:reduce?1:0,vx:0,vy:0,vr:0,vs:0}}return bodies[i]}
  function step(v,vel,t,K,D,dt){var nx=vel+((t-v)*K-vel*D)*dt;return[v+nx*dt,nx]}
  function frame(now){
    raf=0;if(!box.isConnected)return;
    var dt=Math.min(1/30,Math.max(1/240,(now-last)/1000));last=now;st.time+=dt;
    var hv=st.hovered,pK=170,pD=2*(1-.85*BC.bounciness)*Math.sqrt(pK),mK=210,mD=2*(reduce?1:.72)*Math.sqrt(mK);
    var sub=Math.ceil(dt/(1/240)),h=dt/sub,moving=0;
    els.forEach(function(el,i){
      var c=body(i),s=slots[i],app=reduce||st.time>=BC.delay+i*BC.stagger;
      var tx=s.x,ty=s.y,tr=s.rotate,ts=app?1:0;
      if(hv>=0&&app){if(i===hv){ty=s.y-BC.size*.04;tr=0;ts=BC.hoverScale}else tx=s.x+Math.sign(i-hv)*BC.push}
      for(var q=0;q<sub;q++){var r;
        r=step(c.x,c.vx,tx,mK,mD,h);c.x=r[0];c.vx=r[1];r=step(c.y,c.vy,ty,mK,mD,h);c.y=r[0];c.vy=r[1];
        r=step(c.rotate,c.vr,tr,mK,mD,h);c.rotate=r[0];c.vr=r[1];
        if(reduce){c.scale=ts;c.vs=0}else{r=step(c.scale,c.vs,ts,pK,pD,h);c.scale=r[0];c.vs=r[1]}}
      moving+=Math.abs(c.vx)+Math.abs(c.vy)+Math.abs(c.vr)+Math.abs(c.vs)*100+Math.abs(tx-c.x)+Math.abs(ty-c.y)+Math.abs(tr-c.rotate)+Math.abs(ts-c.scale)*100+(app?0:1);
      el.style.transform=`translate(-50%,-50%) translate3d(${c.x.toFixed(2)}px,${c.y.toFixed(2)}px,0) rotate(${c.rotate.toFixed(3)}deg) scale(${Math.max(0,c.scale).toFixed(4)})`;
    });
    if(st.layer!==hv){st.layer=hv;els.forEach((el,i)=>{el.style.zIndex=String(i===hv?n+1:i+1);el.toggleAttribute("data-active",i===hv)})}
    if(moving>.02)raf=requestAnimationFrame(frame);
  }
  function wake(){if(raf||!started)return;last=performance.now();raf=requestAnimationFrame(frame)}
  function pick(e){var r=box.getBoundingClientRect(),px=(e.clientX-r.left)/k-BC.w/2,py=(e.clientY-r.top)/k-BC.h/2,best=-1,d=1e9;
    slots.forEach((s,i)=>{var g=Math.abs(px-s.x);if(g<d){d=g;best=i}});if(best<0)return -1;
    var s=slots[best],half=BC.size/2;if(Math.abs(py-s.y)>half+12||d>half+12)return -1;
    if(st.hovered>=0&&st.hovered!==best){var cur=slots[st.hovered];if(cur&&Math.abs(px-cur.x)-d<6)return st.hovered}return best}
  function mv(e){var nx=pick(e);if(nx!==st.hovered){st.hovered=nx;wake()}}
  box.addEventListener("pointermove",mv);box.addEventListener("pointerdown",mv);
  box.addEventListener("pointerleave",function(e){if(e.pointerType==="mouse"&&st.hovered!==-1){st.hovered=-1;wake()}});
  box.addEventListener("focusin",function(e){var i=els.indexOf(e.target);if(i>=0){st.hovered=i;wake()}});
  box.addEventListener("focusout",function(){st.hovered=-1;wake()});
  document.addEventListener("pointerdown",function od(e){if(!box.isConnected){document.removeEventListener("pointerdown",od);return}if(!box.contains(e.target)&&st.hovered!==-1){st.hovered=-1;wake()}});
  els.forEach(el=>el.style.transform="translate(-50%,-50%) scale("+(reduce?1:0)+")");
  var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();started=true;wake()}},{threshold:.1,rootMargin:"0px 0px 10% 0px"});io.observe(box);
}
/* ===== Stack (React Bits) — porté en JS natif + GSAP, version mobile de « En dehors des écrans » =====
   layout fan · visible 4 · spread .5 · depth .5 · radius 16 · cadre 5px blanc · ombre · tilt 30 · seuil 90px · envoi au fond au toucher */
var STK={visible:4,spread:.5,depth:.5,tilt:30,threshold:90,flick:650};
function hobbyFace(x){return x.img?`<img src="${x.img}" alt="" draggable="false">`:`<div class="bc-art" style="--bg:${x.bg};--fg:${x.fg}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x.ico}</svg></div>`}
function stackCards(list){
  return `<div class="stk-wrap" data-reveal>
    <div class="stk" tabindex="0" role="group" aria-label="${t("stkAria")}">${list.map((x,i)=>`
      <div class="stk-card" data-i="${i}" aria-label="${esc(L(x.title))}"><div class="stk-face">${hobbyFace(x)}<span class="bc-label">${esc(L(x.title))}</span><span class="stk-shade"></span></div></div>`).join("")}</div>
    <p class="stk-hint">${t("stkHint")}</p>
  </div>`;
}
function initStack(root){
  var box=root.querySelector(".stk");if(!box)return;var G=window.gsap;
  var cards=[].slice.call(box.querySelectorAll(".stk-card")),n=cards.length,order=cards.map((_,i)=>i),busy=false,drag=null;
  var face=c=>c.querySelector(".stk-face"),shade=c=>c.querySelector(".stk-shade");
  function place(pos){var s=Math.min(pos,STK.visible-1);return{x:0,y:0,rotate:s*STK.spread*8,scale:1-s*STK.depth*.12,opacity:pos<STK.visible?1:0,shade:Math.min(.6,s*STK.depth*.14)}}
  function setZ(){order.forEach((ci,pos)=>{cards[ci].style.zIndex=String(n-pos);cards[ci].toggleAttribute("data-top",pos===0);cards[ci].setAttribute("aria-hidden",pos===0?"false":"true")})}
  function placeAll(opt){opt=opt||{};setZ();order.forEach(function(ci,pos){var p=place(pos),c=cards[ci];
    if(!G||reduce){Object.assign(c.style,{transform:`rotate(${p.rotate}deg) scale(${p.scale})`,opacity:p.opacity});shade(c).style.opacity=p.shade;return}
    G.to(c,{x:p.x,y:p.y,rotate:p.rotate,scale:p.scale,opacity:p.opacity,duration:.6,ease:"back.out(1.5)",delay:(opt.stagger||0)*pos,overwrite:"auto"});
    G.to(shade(c),{opacity:p.shade,duration:.35,overwrite:"auto"});
    G.to(face(c),{rotateX:0,rotateY:0,rotate:0,scale:1,duration:.5,ease:"power3.out",overwrite:"auto"});
  })}
  function sendToBack(dir){
    if(busy||n<2)return;var top=cards[order[0]];
    var commit=()=>{order=order.slice(1).concat(order[0]);placeAll()};
    if(!G||reduce){commit();return}
    busy=true;var dx=dir?dir[0]:1,dy=dir?dir[1]:-.3,l=Math.hypot(dx,dy)||1;dx/=l;dy/=l;
    var w=box.offsetWidth,travel=w*1.15+40;top.style.zIndex=String(n+1);
    G.to(top,{x:dx*travel,y:dy*travel,duration:.32,ease:"power2.out",overwrite:"auto",onComplete:function(){busy=false;commit()}});
    G.to(face(top),{rotateX:0,rotateY:0,rotate:0,scale:1,duration:.3,overwrite:"auto"});
  }
  function vel(s,now){var r=s.filter(p=>now-p[2]<=100);if(r.length<2)return[0,0];var a=r[0],b=r[r.length-1],dt=Math.max((b[2]-a[2])/1000,.008);return[(b[0]-a[0])/dt,(b[1]-a[1])/dt]}
  cards.forEach(function(c,ci){
    c.addEventListener("pointerdown",function(e){if(e.button!==0||drag||busy||order[0]!==ci)return;
      var r=c.getBoundingClientRect();face(c).style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%";
      if(G&&!reduce)G.to(face(c),{scale:1.035,duration:.2});
      drag={id:e.pointerId,sx:e.clientX,sy:e.clientY,moved:false,s:[[e.clientX,e.clientY,e.timeStamp]],ox:G?G.getProperty(c,"x"):0,oy:G?G.getProperty(c,"y"):0};
      if(e.pointerType==="mouse")e.preventDefault()});
  });
  window.addEventListener("pointermove",function mv(e){if(!box.isConnected){window.removeEventListener("pointermove",mv);return}
    var d=drag;if(!d||e.pointerId!==d.id)return;var dx=e.clientX-d.sx,dy=e.clientY-d.sy,c=cards[order[0]];
    if(!d.moved){if(Math.hypot(dx,dy)<6)return;d.moved=true;try{c.setPointerCapture(d.id)}catch(_){}}
    if(!G)return;G.set(c,{x:d.ox+dx,y:d.oy+dy});d.s.push([e.clientX,e.clientY,e.timeStamp]);if(d.s.length>12)d.s.shift();
    var v=vel(d.s,e.timeStamp),cl=(x,a,b)=>Math.max(a,Math.min(b,x));
    var side=cl(v[0]/1300,-1,1)*.7+cl(dx/260,-1,1)*.3,up=cl(-v[1]/1300,-1,1)*.7+cl(-dy/260,-1,1)*.3;
    if(!reduce)G.to(face(c),{rotateY:side*STK.tilt,rotateX:up*STK.tilt,rotate:cl(dx/260,-1,1)*6,duration:.25,overwrite:"auto"});
    var pr=cl(Math.hypot(dx,dy)/STK.threshold,0,1);
    order.slice(1).forEach(function(ci,k){var a=place(k+1),b=place(k),cc=cards[ci],m=pr*.4;G.to(cc,{rotate:a.rotate+(b.rotate-a.rotate)*m,scale:a.scale+(b.scale-a.scale)*m,duration:.25,overwrite:"auto"})});
  });
  function up(e){var d=drag;if(!d||e.pointerId!==d.id)return;drag=null;var c=cards[order[0]];
    if(!d.moved){if(e.type==="pointerup")sendToBack(null);else placeAll();return}
    var dx=e.clientX-d.sx,dy=e.clientY-d.sy,v=vel(d.s,e.timeStamp),dist=Math.hypot(dx,dy),pace=Math.hypot(v[0],v[1]);
    var flick=pace>STK.flick&&dist>16&&v[0]*dx+v[1]*dy>0;
    if(e.type==="pointerup"&&(dist>STK.threshold||flick))sendToBack(pace>300?v:[dx,dy]);else placeAll();
  }
  window.addEventListener("pointerup",up);window.addEventListener("pointercancel",up);
  box.addEventListener("keydown",function(e){if(["ArrowRight","ArrowDown","Enter"," "].indexOf(e.key)>-1){e.preventDefault();sendToBack(null)}});
  /* apparition : les cartes partent du centre puis s'éventaillent */
  setZ();
  if(G)cards.forEach(c=>G.set(face(c),{transformPerspective:800}));
  if(G&&!reduce){cards.forEach(c=>G.set(c,{x:0,y:0,rotate:0,scale:1,opacity:order.indexOf(cards.indexOf(c))<STK.visible?1:0}));
    var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();placeAll({stagger:.05})}},{threshold:.1,rootMargin:"0px 0px 10% 0px"});io.observe(box)}
  else placeAll();
}
/* ===== Skewed Carousel (React Bits Pro) — porté en JS natif =====
   cardWidth 230 · rotation 0 · inactiveScale .9 · perspective 950 · borderRadius 16
   titleBlur 1.5 · speed 1.3 · loop · autoplay 3000ms · 3 cartes visibles, format carré */
var SKC={cardWidth:230,rotation:0,inactiveScale:.9,perspective:950,borderRadius:8,titleBlur:1.5,speed:1.3,loop:true,autoplay:true,autoplayDelay:3000};
function skewedCarousel(list,title){
  var slide=(p,clone)=>`
        <a class="skc-slide" href="${u('/projets/'+p.slug+'/')}"${clone?' aria-hidden="true" tabindex="-1"':` aria-label="${esc(p.name)}"`}>
          <span class="skc-card${p.cover&&IMG[p.cover].box?" is-mk":""}" style="--c:${p.color}"${p.cover&&IMG[p.cover].box?` data-mk="${p.cover}"`:""}>${p.cover?`<img src="${IMG[p.cover].src}" alt="" draggable="false">`:""}</span>
          <span class="skc-title">${esc(p.name)}</span>
        </a>`;
  return `<section class="skc-sec" aria-labelledby="skc-t">
    <h2 class="sec-title" id="skc-t" data-reveal>${title||t("moreTitle")}</h2>
    <div class="skc" role="region" aria-label="${t("carAria")}">
      <div class="skc-track"><div class="skc-set">${list.map(p=>slide(p)).join("")}</div></div>
    </div>
    <div class="skc-all" data-reveal><a class="btn btn-outline fill" href="${u('/projets/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>${t("backProjects")}</a></div>
  </section>`;
}
/* fond de carte = couleur du bord de l'image (images en « contain »), pour un logo sans bandeau */
function matchBg(imgs){[].forEach.call(imgs,function(im){function s(){try{var c=document.createElement("canvas");c.width=c.height=1;var x=c.getContext("2d");var W=im.naturalWidth,H=im.naturalHeight;x.drawImage(im,Math.round(W*.06),Math.round(H*.5),1,1,0,0,1,1);var d=x.getImageData(0,0,1,1).data;if(d[3]>200)im.parentNode.style.background="rgb("+d[0]+","+d[1]+","+d[2]+")"}catch(_){}}if(im.complete)s();else im.addEventListener("load",s)})}
/* Galerie « Autres projets » : défilement continu de droite à gauche, freine en douceur au survol */
function initSkewed(root){
  var el=root.querySelector(".skc");if(!el)return;
  var track=el.querySelector(".skc-track"),set=track.querySelector(".skc-set");
  var SPEED=42,off=0,v=1,target=1,last=0,raf=0,visible=false,setW=0;
  function size(){
    var W=el.closest(".skc-sec").clientWidth,gap=W<720?12:24;
    var w=W<720?Math.round(W*.65):Math.round((W-2*gap)/2.8*.9);
    el.style.setProperty("--skc-w",w+"px");el.style.setProperty("--skc-gap",gap+"px");
    [].slice.call(track.querySelectorAll(".skc-set.clone")).forEach(n=>n.remove());
    setW=set.getBoundingClientRect().width;
    var need=Math.ceil((el.clientWidth*2)/Math.max(1,setW))+1;
    for(var k=0;k<need;k++){var c=set.cloneNode(true);c.classList.add("clone");c.setAttribute("aria-hidden","true");
      c.querySelectorAll("a").forEach(x=>{x.tabIndex=-1;x.removeAttribute("aria-label")});track.appendChild(c)}
    matchBg(track.querySelectorAll(".skc-set.clone .skc-card img"));
    if(window.layoutMk)layoutMk(el);
    off=off%setW;
  }
  function frame(now){raf=0;var dt=Math.min(.05,(now-last)/1000||0);last=now;
    v+=(target-v)*(1-Math.exp(-dt/(target<v?.45:.6)));
    if(Math.abs(v-target)<.002)v=target;
    if(!drag){off-=SPEED*v*dt;if(fling){off+=fling*dt;fling*=Math.exp(-dt/.35);if(Math.abs(fling)<5)fling=0}}
    wrap();paint();
    if(el.isConnected&&visible&&(v>0||target>0||fling))raf=requestAnimationFrame(frame)}
  function wrap(){if(!setW)return;while(off<=-setW)off+=setW;while(off>0)off-=setW}
  function paint(){var dpr=window.devicePixelRatio||1;track.style.transform="translate3d("+(Math.round(off*dpr)/dpr)+"px,0,0)"}
  function wake(){if(!raf&&visible&&(!reduce||fling)){last=performance.now();raf=requestAnimationFrame(frame)}}
  /* tactile : glisser au doigt, avec élan, puis reprise douce du défilement */
  var drag=null,fling=0,resumeT=0;
  el.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse")return;drag={x:e.clientX,y:e.clientY,lx:e.clientX,lt:performance.now(),vx:0,h:false};fling=0;clearTimeout(resumeT)});
  el.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.h){if(Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)){drag.h=true;target=0;v=0;el.dataset.dragging=""}else if(Math.abs(dy)>10){drag=null;return}else return}
    var now=performance.now(),d=e.clientX-drag.lx;off+=d;drag.vx=d/Math.max(1,now-drag.lt)*1000;drag.lx=e.clientX;drag.lt=now;wrap();paint()});
  function endDrag(){if(!drag)return;var was=drag.h;fling=was?drag.vx:0;drag=null;
    if(was){wake();resumeT=setTimeout(function(){target=1;wake()},1400);setTimeout(function(){delete el.dataset.dragging},0)}}
  window.addEventListener("pointerup",endDrag,{passive:true});window.addEventListener("pointercancel",endDrag,{passive:true});
  el.addEventListener("click",function(e){if(el.hasAttribute("data-dragging")){e.preventDefault();e.stopPropagation()}},true);
  el.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"){target=0;wake()}});
  el.addEventListener("pointerleave",function(){target=1;wake()});
  el.addEventListener("focusin",function(){target=0;wake()});
  el.addEventListener("focusout",function(){target=1;wake()});
  el.addEventListener("dragstart",e=>e.preventDefault());
  new IntersectionObserver(function(es){visible=es[0].isIntersecting;wake()},{threshold:0}).observe(el);
  matchBg(set.querySelectorAll(".skc-card img"));
  size();
  var imgs=set.querySelectorAll("img");imgs.forEach(im=>{if(!im.complete)im.addEventListener("load",size,{once:true})});
  window.addEventListener("resize",function rs(){if(!el.isConnected){window.removeEventListener("resize",rs);return}size()});
}

/* ===== GlideSelect (React Bits) — porté en JS natif, filtre des projets sur mobile ===== */
function glideSelectHTML(opts,label){
  var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var tick='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  return `<div class="gsel">
    <button class="gsel-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="gsel-list" aria-label="${esc(label)}"><span class="gsel-label">${esc(opts[0].label)}</span><span class="gsel-chev">${chev}</span></button>
    <div class="gsel-menu" data-state="closed" data-side="bottom" hidden>
      <div class="gsel-list" id="gsel-list" role="listbox" aria-label="${esc(label)}"><span class="gsel-pill" aria-hidden="true"></span>
        ${opts.map((o,i)=>`<div class="gsel-opt" role="option" id="gsel-${i}" data-index="${i}" data-value="${esc(o.value)}" aria-selected="${i===0}"><span class="gsel-name">${esc(o.label)}</span><span class="gsel-tag">${esc(o.tag)}</span><span class="gsel-check">${tick}</span></div>`).join("")}
      </div>
    </div>
  </div>`;
}
function glideSelect(root,onChange){
  var trig=root.querySelector(".gsel-trigger"),menu=root.querySelector(".gsel-menu"),list=root.querySelector(".gsel-list"),pill=root.querySelector(".gsel-pill"),lab=root.querySelector(".gsel-label");
  var opts=[].slice.call(root.querySelectorAll(".gsel-opt")),n=opts.length,sel=0,active=null,isOpen=false,timer=0,scrub=null,instant=false;
  var POP=180,POPOUT=120,GAP=2;
  var step=()=>opts[0].offsetHeight+GAP;
  function paint(){
    opts.forEach((o,i)=>{o.toggleAttribute("data-active",i===active);o.setAttribute("aria-selected",i===sel)});
    list.toggleAttribute("data-live",active!==null);
    if(active===null){pill.style.opacity="0";trig.removeAttribute("aria-activedescendant");return}
    var jump=instant||pill.style.opacity!=="1";
    pill.style.transitionDuration=jump?"0ms, 150ms":"";
    pill.style.transform="translateY("+active*step()+"px)";pill.style.opacity="1";instant=false;
    trig.setAttribute("aria-activedescendant","gsel-"+active);
  }
  function setActive(i){active=i;paint()}
  function open(viaKey){
    clearTimeout(timer);menu.hidden=false;isOpen=true;trig.setAttribute("aria-expanded","true");
    var r=root.getBoundingClientRect(),need=menu.offsetHeight+8;
    menu.dataset.side=r.bottom+need>innerHeight&&r.top-need>0?"top":"bottom";
    menu.style.transitionDuration="";menu.dataset.state="closed";void menu.offsetHeight;menu.dataset.state="open";
    pill.style.transition="none";pill.style.opacity="0";pill.style.transform="translateY("+sel*step()+"px)";void pill.offsetHeight;pill.style.transition="";
    instant=true;setActive(sel);
  }
  function close(inst){
    if(!isOpen)return;isOpen=false;trig.setAttribute("aria-expanded","false");clearTimeout(timer);
    if(inst){active=null;paint();menu.dataset.state="closed";menu.hidden=true;return}
    /* la bulle reste en place pendant le fondu de fermeture, pour éviter tout clignotement */
    menu.dataset.state="closed";timer=setTimeout(()=>{menu.hidden=true;active=null;paint()},POPOUT+60);
  }
  function setSel(i){sel=i;lab.textContent=opts[i].querySelector(".gsel-name").textContent;paint()}
  function pick(i,viaKey){
    if(i==null){close(true);return}
    if(i!==sel){setSel(i);onChange(opts[i].dataset.value,i);if(!viaKey){root.removeAttribute("data-swap");void root.offsetWidth;root.setAttribute("data-swap","")}}
    close(false);trig.focus({preventScroll:true});
  }
  var lastPD=0;
  trig.addEventListener("pointerdown",function(e){if(e.button!==0)return;lastPD=Date.now();e.preventDefault();trig.focus({preventScroll:true});isOpen?close(false):open(false)});
  trig.addEventListener("click",function(e){if(Date.now()-lastPD<800)return;isOpen?close(false):open(true)});
  trig.addEventListener("keydown",function(e){var k=e.key,cur=active==null?sel:active;
    if(!isOpen){if(k==="Enter"||k===" "||k==="ArrowDown"||k==="ArrowUp"){e.preventDefault();open(true)}return}
    var go=i=>{e.preventDefault();instant=true;setActive(Math.min(n-1,Math.max(0,i)))};
    if(k==="ArrowDown"||k==="ArrowUp")go(cur+(k==="ArrowDown"?1:-1));
    else if(k==="Home"||k==="End")go(k==="Home"?0:n-1);
    else if(k==="Enter"||k===" "){e.preventDefault();pick(cur,true)}
    else if(k==="Escape"||k==="Tab"){if(k==="Escape")e.preventDefault();close(true)}
  });
  /* fermeture au toucher/clic en dehors — pas au scroll, pour pouvoir parcourir la liste ouverte */
  window.addEventListener("click",function od(e){if(!root.isConnected){window.removeEventListener("click",od,true);return}if(isOpen&&!root.contains(e.target)){e.preventDefault();e.stopImmediatePropagation();close(false)}},true);
  document.addEventListener("keydown",function ok(e){if(!root.isConnected){document.removeEventListener("keydown",ok);return}if(isOpen&&e.key==="Escape")close(true)});
  var rowAt=y=>{if(!scrub)return null;var i=Math.floor((y-scrub.top)/step());return i>=0&&i<n?i:null};
  /* souris : glisser-relâcher ; tactile : un simple toucher choisit, un glissement fait défiler la page sans fermer */
  list.addEventListener("pointerdown",function(e){if(scrub)return;var touch=e.pointerType!=="mouse";
    if(!touch){try{list.setPointerCapture(e.pointerId)}catch(_){}}
    scrub={id:e.pointerId,top:list.getBoundingClientRect().top,touch:touch,y0:e.clientY,moved:false};if(!touch){instant=true;setActive(rowAt(e.clientY))}});
  list.addEventListener("pointermove",function(e){if(!scrub||scrub.id!==e.pointerId)return;
    if(scrub.touch){if(Math.abs(e.clientY-scrub.y0)>8){scrub.moved=true;setActive(sel)}return}
    var i=rowAt(e.clientY);if(i!==active)setActive(i)});
  /* le menu se ferme au relâchement : on avale le clic « fantôme » qui suit pour qu'il n'ouvre pas la carte projet située dessous */
  function swallow(){var t0=Date.now();function h(ev){window.removeEventListener("click",h,true);if(Date.now()-t0<600){ev.preventDefault();ev.stopImmediatePropagation()}}window.addEventListener("click",h,true);setTimeout(()=>window.removeEventListener("click",h,true),650)}
  function up(e){if(!scrub||scrub.id!==e.pointerId)return;var s=scrub;scrub=null;if(s.touch&&(s.moved||e.type!=="pointerup")){setActive(sel);return}
    s.top=list.getBoundingClientRect().top;scrub=s;var i=e.type==="pointerup"?rowAt(e.clientY):null;scrub=null;if(i===null)return;swallow();
    if(s.touch&&!reduce){instant=false;setActive(i);setTimeout(()=>pick(i,false),380)}else pick(i,false)}
  list.addEventListener("pointerup",up);list.addEventListener("pointercancel",up);list.addEventListener("lostpointercapture",up);
  list.addEventListener("pointerover",function(e){if(e.pointerType==="touch"||scrub)return;var r=e.target.closest("[data-index]");if(r&&+r.dataset.index!==active)setActive(+r.dataset.index)});
  root.addEventListener("animationend",e=>{if(e.animationName==="gs-swap")root.removeAttribute("data-swap")});
  return {set:function(i){setSel(i)}};
}

/* ===== RubberSegment (React Bits) porté en JS natif + GSAP ===== */
function rubberSegment(track,onChange){
  var INSET=4,DILATE=.19,HANDOFF=.15,FLICK=110,MAXV=2000,DEAD=4,SLOP=10,RUB=.55,SQUASH=2,GLIDE=60,SPEED=.75,STRETCH=.55;
  var items=[].slice.call(track.querySelectorAll("button.rseg-item")),thumb=track.querySelector(".rseg-thumb");
  var reduceM=matchMedia("(prefers-reduced-motion: reduce)").matches,G=window.gsap;
  var st={l:0,r:0},slots=[],innerW=0,committed=0,gen=0,hand=0,drag=null,box=null,tw=[];
  var clamp=(v,a,b)=>Math.min(b,Math.max(a,v)),T=s=>s/SPEED;
  var rubber=(o,d)=>(o*d*RUB)/(d+RUB*Math.abs(o));
  var project=v=>{var d=1-.1*Math.pow(.05,GLIDE/100);return((v/1000)*d)/(1-d)};
  function render(){thumb.style.clipPath="inset(0 "+Math.max(0,innerW-st.r)+"px 0 "+Math.max(0,st.l)+"px round 999px)"}
  function kill(){tw.forEach(x=>x&&x.kill());tw=[];clearTimeout(hand)}
  function jump(i){var s=slots[i];if(!s)return;kill();gen++;st.l=s.l;st.r=s.r;render()}
  function measure(){var rc=track.getBoundingClientRect();box=rc;innerW=rc.width-INSET*2;
    slots=items.map(el=>{var r=el.getBoundingClientRect();return{l:r.left-rc.left-INSET,r:r.right-rc.left-INSET}});
    if(!drag)jump(committed)}
  function to(k,v,dur,ease){if(!G){st[k]=v;render();return Promise.resolve()}
    return new Promise(res=>{tw.push(G.to(st,{[k]:v,duration:dur,ease:ease||"expo.out",onUpdate:render,onComplete:res,overwrite:false}))})}
  function setActive(i,focus){items.forEach((b,k)=>{b.setAttribute("aria-checked",k===i);b.tabIndex=k===i?0:-1});if(focus)items[i].focus({preventScroll:true});
    var sc=track.parentNode,b=items[i];if(sc.scrollWidth>sc.clientWidth){var x=b.offsetLeft-(sc.clientWidth-b.offsetWidth)/2;sc.scrollTo({left:x,behavior:reduceM?"auto":"smooth"})}}
  function commit(i,focus){var ch=i!==committed;committed=i;setActive(i,focus);if(ch)onChange(items[i].getAttribute("data-filter"),i)}
  function land(i,flick,sq){var b=slots[i];if(!b)return;var g=++gen;
    G&&tw.forEach(x=>x&&x.kill());tw=[];
    var dir=Math.sign((b.l+b.r)/2-(st.l+st.r)/2)||1,lead=dir>0?"r":"l",trail=dir>0?"l":"r";
    to(lead,b[lead],T(flick?.45:.4),flick?"back.out(1.2)":"power3.out");
    if(!sq||!SQUASH){to(trail,b[trail],T(.4),"power3.out");return}
    to(trail,b[trail]+dir*SQUASH,T(.4),"power3.out").then(()=>{if(gen===g)to(trail,b[trail],T(.2),"power2.out")})}
  function travel(a,b){a=slots[a];var bb=slots[b];if(!a||!bb)return;kill();gen++;
    if(reduceM||!G){st.l=bb.l;st.r=bb.r;render();return}
    to("l",bb.l+(Math.min(a.l,bb.l)-bb.l)*STRETCH,T(DILATE),"power2.out");to("r",bb.r+(Math.max(a.r,bb.r)-bb.r)*STRETCH,T(DILATE),"power2.out");
    hand=setTimeout(()=>land(b,false,true),T(HANDOFF)*1000)}
  var lx=e=>e.clientX-(box?box.left:0)-INSET;
  function velocity(h,now){var r=h.filter(p=>now-p[0]<=100);if(r.length<2)return 0;var a=r[0],b=r[r.length-1];return b[0]-a[0]>=8?((b[1]-a[1])/(b[0]-a[0]))*1000:0}
  function nearest(x){var best=0;for(var i=1;i<slots.length;i++)if(Math.abs((slots[i].l+slots[i].r)/2-x)<Math.abs((slots[best].l+slots[best].r)/2-x))best=i;return best}
  items.forEach(function(btn,i){
    btn.addEventListener("pointerdown",function(e){if(drag||e.button!==0)return;box=track.getBoundingClientRect();
      try{btn.setPointerCapture(e.pointerId)}catch(_){}
      var x=lx(e),onThumb=x>=st.l&&x<=st.r;
      drag={id:e.pointerId,x0:x,slot:i,onThumb:onThumb,live:false,off:0,w:0,h:[[e.timeStamp,x]],el:btn};
      if(onThumb){kill();gen++}else if(!reduceM)btn.dataset.pressed=""});
    btn.addEventListener("keydown",function(e){var last=items.length-1,n=null;
      if(e.key==="ArrowRight"||e.key==="ArrowDown")n=Math.min(last,committed+1);else if(e.key==="ArrowLeft"||e.key==="ArrowUp")n=Math.max(0,committed-1);
      else if(e.key==="Home")n=0;else if(e.key==="End")n=last;
      if(n===null)return;e.preventDefault();if(n===committed)return;var from=committed;commit(n,true);travel(from,n)});
  });
  track.addEventListener("pointermove",function(e){var d=drag;if(!d||e.pointerId!==d.id||!d.onThumb)return;var x=lx(e);
    d.h.push([e.timeStamp,x]);if(d.h.length>8)d.h.shift();
    if(!d.live){if(Math.abs(x-d.x0)<DEAD)return;d.live=true;d.off=x-st.l;d.w=st.r-st.l;track.dataset.held=""}
    var l=x-d.off,maxL=innerW-d.w;
    if(reduceM){var c=clamp(l,0,maxL);st.l=c;st.r=c+d.w}
    else if(l<0){st.l=0;st.r=d.w-rubber(-l,d.w)}
    else if(l>maxL){st.r=innerW;st.l=maxL+rubber(l-maxL,d.w)}
    else{st.l=l;st.r=l+d.w}
    render()});
  function release(){var d=drag;drag=null;delete track.dataset.held;if(d&&d.el)delete d.el.dataset.pressed;return d}
  track.addEventListener("pointerup",function(e){var d=drag;if(!d||e.pointerId!==d.id)return;release();var x=lx(e);
    if(!d.live){if(Math.abs(x-d.x0)<=SLOP&&d.slot!==committed){var from=committed;commit(d.slot);travel(from,d.slot)}return}
    var v=clamp(velocity(d.h,e.timeStamp),-MAXV,MAXV),flick=Math.abs(v)>FLICK;
    var n=nearest((st.l+st.r)/2+project(v));if(flick&&n===committed)n=clamp(n+Math.sign(v),0,items.length-1);
    commit(n);if(reduceM)jump(n);else land(n,flick,flick)});
  function cancel(e){var d=drag;if(!d||e.pointerId!==d.id)return;release();if(!d.live)return;if(reduceM)jump(committed);else land(committed,false,false)}
  track.addEventListener("pointercancel",cancel);track.addEventListener("lostpointercapture",cancel);
  measure();
  if(window.ResizeObserver)new ResizeObserver(measure).observe(track);
  if(document.fonts)document.fonts.ready.then(measure);
  return {set:function(i){committed=i;setActive(i,false);jump(i)}};
}

var ticking=false;
function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(function(){
    ticking=false;
    var vh=window.innerHeight;
    /* cartes empilées : la carte recouverte recule légèrement */
    if(!reduce){
      var cards=app.querySelectorAll(".stack-card");
      cards.forEach(function(c,i){
        var nxt=cards[i+1];
        if(!nxt){c.style.transform="";c.style.setProperty("--p",0);return}
        var a=c.getBoundingClientRect(),b=nxt.getBoundingClientRect();
        var p=Math.min(1,Math.max(0,1-(b.top-a.top)/a.height));
        c.style.transform="scale("+(1-p*.06).toFixed(4)+")";
        c.style.setProperty("--p",p.toFixed(3));
      });
    }
    /* récit : la couleur remplit chaque phrase au fil du scroll */
    app.querySelectorAll("[data-fill]").forEach(function(el){
      var r=el.getBoundingClientRect();
      var p=reduce?1:Math.min(1,Math.max(0,(vh*.88-r.top)/(vh*.45)));
      el.style.setProperty("--fill",p.toFixed(3));
      var ws=el.querySelectorAll(".w"),n=Math.round(p*ws.length);
      ws.forEach((w,i)=>w.classList.toggle("on",i<n));
    });
    /* frise : la ligne se remplit */
    app.querySelectorAll(".timeline").forEach(function(tl){
      var r=tl.getBoundingClientRect();
      var p=reduce?1:Math.min(1,Math.max(0,(vh*.6-r.top)/r.height));
      tl.style.setProperty("--p",p.toFixed(3));
      tl.querySelectorAll(".tl-item").forEach(function(it){it.classList.toggle("on",it.getBoundingClientRect().top<vh*.6||reduce)});
    });
    /* barre de lecture */
    var rp=app.querySelector(".read-progress");
    if(rp){
      var h=document.documentElement.scrollHeight-vh;
      rp.style.setProperty("--p",h>0?(window.scrollY/h).toFixed(4):0);
    }
  });
}
window.addEventListener("scroll",onScroll,{passive:true});
function sizeCta(){
  var c=app.querySelector(".cta-card"),p=app.querySelector(".feat-item .proj-cover");
  if(c&&p)c.style.minHeight=p.offsetHeight+"px";
}
window.addEventListener("resize",function(){sizeCta();onScroll()});

/* ============ EFFET DE REMPLISSAGE AU TOUCHER (mobile) ============
   Même retour visuel sur tous les boutons ronds et pilules : le remplissage citron
   reste visible au moins 450 ms, même pour un toucher très court. */
(function(){
  var cur=null,t0=0,timer=null;
  function off(){if(!cur)return;var el=cur;var wait=Math.max(0,450-(Date.now()-t0));clearTimeout(timer);timer=setTimeout(function(){el.classList.remove("tap")},wait);cur=null}
  document.addEventListener("pointerdown",function(e){
    if(e.pointerType==="mouse")return;
    var b=e.target.closest(".fill");if(!b){var tt=e.target.closest(".to-top");if(tt)b=tt.querySelector(".fill")}
    if(!b||b.closest(".cta-card,.mc"))return;
    clearTimeout(timer);if(cur&&cur!==b)cur.classList.remove("tap");
    cur=b;t0=Date.now();b.classList.add("tap");
  },{passive:true});
  ["pointerup","pointercancel"].forEach(function(n){document.addEventListener(n,off,{passive:true})});
})();

/* ============ ROUTEUR ============ */
var app=document.getElementById("app");
/* Chemin de la page courante, sans le préfixe de langue : "/", "/projets/nyro/"… */
function curPath(){
  var h=PATH_MODE?location.pathname.replace(/^\/en(?=\/|$)/,"").replace(/index\.html$/,""):(location.hash||"#/").replace(/^#/,"");
  if(h.charAt(0)!=="/")h="/";
  /* segments anglais -> chemins internes */
  return h.replace(/^\/(projects|about)(?=\/|$)/,function(m,x){return x==="projects"?"/projets":"/a-propos"});
}
/* Titre et description de chaque page (balises title et meta description) */
function clip(x,n){x=String(x||"").replace(/\s+/g," ").trim();if(x.length<=n)return x;x=x.slice(0,n-1);return x.slice(0,x.lastIndexOf(" ")).replace(/[,;.\s]+$/,"")+"\u2026"}
function pageMeta(parts,p){
  var who=t("metaWho"),d;
  if(parts.length===0)return {title:who+" | CD Projects",desc:t("metaHome")};
  if(parts[0]==="projets"&&parts.length===1)return {title:t("tProjects")+" | "+who,desc:t("metaProjects")};
  if(p){d=L(p.description);var c=L(p.category||CAT);return {title:p.name+", "+c.charAt(0).toLowerCase()+c.slice(1)+" | Clara Debarle",desc:clip(Array.isArray(d)?d[0]:d,158)}}
  if(parts[0]==="a-propos")return {title:t("tAbout")+" | "+who,desc:clip(t("aboutLead"),158)};
  if(parts[0]==="contact")return {title:t("tContact")+" | "+who,desc:t("metaContact")};
  return {title:t("nfTitle")+" | CD Projects",desc:t("metaHome")};
}
/* Contenu d'une page à partir de son chemin */
function resolve(path){
  var parts=path.split("/").filter(Boolean),html,nav="home",p=null;
  if(parts.length===0){html=pageHome()}
  else if(parts[0]==="projets"&&parts.length===1){html=pageProjects();nav="projets"}
  else if(parts[0]==="projets"&&parts[1]){
    p=PROJECTS.find(x=>x.slug===parts[1]);
    if(p){html=pageCase(p);nav="projets"}else{html=pageNotFound();nav=""}
  }
  else if(parts[0]==="contact"){html=pageContact();nav="contact"}
  else if(parts[0]==="a-propos"){html=pageAbout();nav="a-propos"}
  else{html=pageNotFound();nav=""}
  var m=pageMeta(nav===""?["404"]:parts,p);
  return {parts:parts,html:html,nav:nav,title:m.title,desc:m.desc};
}
function go(href){
  if(!PATH_MODE){location.hash=href;return}
  history.pushState(null,"",href);route();
}
function route(keepScroll){
  var wait=(window.__navAfter||0)-Date.now();
  if(keepScroll!==true&&wait>0){clearTimeout(route._t);route._t=setTimeout(route,wait);return}
  var r=resolve(curPath()),parts=r.parts,html=r.html,nav=r.nav,title=r.title;
  var md=document.querySelector('meta[name="description"]');if(md)md.setAttribute("content",r.desc);
  app.innerHTML=html;app.classList.remove("leaving");
  document.title=title;
  document.body.classList.toggle("on-contact",nav==="contact");document.body.classList.toggle("pg-home",parts.length===0);document.body.classList.toggle("pg-about",parts[0]==="a-propos");
  document.querySelectorAll("[data-nav]").forEach(a=>{if(a.getAttribute("data-nav")===nav)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(keepScroll===true){initPage();return}
  window.scrollTo(0,0);
  app.classList.remove("flip-in");
  initPage();
  if(pendingFlip)runFlip();
  else document.querySelectorAll(".flip-clone").forEach(function(c){if(!c.getAnimations().length)c.remove()});
  if(route.started)app.focus({preventScroll:true});
  route.started=true;
}

function copyText(x){
  if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(x);
  return new Promise(function(res,rej){
    var ta=document.createElement("textarea");ta.value=x;ta.setAttribute("readonly","");ta.style.position="fixed";ta.style.opacity="0";
    document.body.appendChild(ta);ta.select();
    try{document.execCommand("copy")?res():rej()}catch(e){rej(e)}finally{ta.remove()}
  });
}
document.addEventListener("click",function(e){
  var s=e.target.closest("[data-scroll]");
  if(s){var tg=document.getElementById(s.getAttribute("data-scroll"));if(tg)tg.scrollIntoView({behavior:reduce?"auto":"smooth"})}
  var c=e.target.closest("[data-copy]");
  if(c){
    var st=document.querySelector(".copy-status");
    copyText(c.getAttribute("data-copy")).then(function(){if(c.hasAttribute("data-copy-icon")){c.classList.add("is-copied");clearTimeout(c._t);c._t=setTimeout(()=>c.classList.remove("is-copied"),2200)}else c.textContent=t("copied");if(st)st.textContent=t("copyOk")},function(){if(st)st.textContent=t("copyFail")});
  }
  if(e.target.closest(".to-top"))window.scrollTo({top:0,behavior:reduce?"auto":"smooth"});
  if(e.target.closest(".lang-btn")){
    var here=curPath();
    LANG=LANG==="fr"?"en":"fr";
    try{localStorage.setItem("cd-lang",LANG)}catch(err){}
    if(PATH_MODE)history.pushState(null,"",u(here));
    applyStatic();route(true);
  }
});

/* Transition carte projet -> hero de la page projet */
var pendingFlip=null;
document.addEventListener("click",function(e){
  var a=e.target.closest("a.proj, a.skc-slide");
  if(!a||reduce||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
  var cv=a.querySelector(".proj-cover, .skc-card");if(!cv)return;
  e.preventDefault();
  /* une transition est déjà en cours (double clic) : on ignore le clic suivant */
  if(pendingFlip||document.querySelector(".flip-clone")){e.stopPropagation();return}
  var r=cv.getBoundingClientRect();
  var clone=cv.cloneNode(true);
  clone.className="flip-clone";
  clone.style.setProperty("--c",cv.style.getPropertyValue("--c"));
  clone.style.borderRadius=getComputedStyle(cv).borderTopLeftRadius;
  var img=clone.querySelector("img");if(img){img.style.transform="none";if(getComputedStyle(cv.querySelector("img")).objectFit==="contain")img.style.objectFit="contain"}
  Object.assign(clone.style,{left:r.left+"px",top:r.top+"px",width:r.width+"px",height:r.height+"px"});
  document.body.appendChild(clone);
  app.classList.add("leaving");
  var mkG=null;if(cv.classList.contains("is-mk")){var oi=cv.querySelector("img"),ir=oi.getBoundingClientRect();mkG={left:ir.left-r.left,top:ir.top-r.top,width:ir.width,height:ir.height}}
  if(mkG&&img)Object.assign(img.style,{position:"absolute",maxWidth:"none",margin:"0",objectFit:"fill",left:mkG.left+"px",top:mkG.top+"px",width:mkG.width+"px",height:mkG.height+"px"});
  pendingFlip={mk:cv.classList.contains("is-mk")?cv.dataset.mk:null,g0:mkG,clone:clone,from:r,fit:img&&img.naturalWidth&&getComputedStyle(cv.querySelector("img")).objectFit==="contain"?img.naturalWidth/img.naturalHeight:0};
  var href=a.getAttribute("href");
  setTimeout(function(){go(href)},240);
},true);
function runFlip(){
  var f=pendingFlip;pendingFlip=null;
  var hero=app.querySelector(".case-hero");
  document.querySelectorAll(".flip-clone").forEach(function(c){if(c!==f.clone)c.remove()});
  if(!hero){f.clone.remove();return}
  app.classList.add("flip-in");
  var to=hero.getBoundingClientRect(),fr=f.from;
  var anim=f.clone.animate([
    {left:fr.left+"px",top:fr.top+"px",width:fr.width+"px",height:fr.height+"px",borderRadius:f.clone.style.borderRadius},
    {left:to.left+"px",top:to.top+"px",width:to.width+"px",height:to.height+"px",borderRadius:getComputedStyle(hero).borderTopLeftRadius}
  ],{duration:1200,easing:"cubic-bezier(.5,0,.15,1)",fill:"forwards"});
  if(f.fit){ /* carrousel : l'image passe de « contain » (carte carrée) à « cover » (hero) */
    var im=f.clone.querySelector("img"),R=f.fit;
    var fitR=(W,H,cover)=>{var w,h;if((W/H<R)!==!!cover){w=W;h=W/R}else{h=H;w=H*R}return{left:(W-w)/2+"px",top:(H-h)/2+"px",width:w+"px",height:h+"px"}};
    Object.assign(im.style,{position:"absolute",maxWidth:"none",margin:"0",objectFit:"fill"});
    im.animate([fitR(fr.width,fr.height,false),fitR(to.width,to.height,true)],{duration:1200,easing:"cubic-bezier(.5,0,.15,1)",fill:"forwards"});
  }
  if(f.mk&&IMG[f.mk]){var ci=f.clone.querySelector("img"),g0=f.g0,g1=mkCrop(IMG[f.mk],to.width,to.height);
    Object.assign(ci.style,{position:"absolute",maxWidth:"none",margin:"0",objectFit:"fill",transform:"none"});
    ci.animate([{left:g0.left+"px",top:g0.top+"px",width:g0.width+"px",height:g0.height+"px"},{left:g1.left+"px",top:g1.top+"px",width:g1.width+"px",height:g1.height+"px"}],{duration:1200,easing:"cubic-bezier(.5,0,.15,1)",fill:"forwards"});
    var hi=hero.querySelector("img");if(hi)Object.assign(hi.style,{left:g1.left+"px",top:g1.top+"px",width:g1.width+"px",height:g1.height+"px"});}
  anim.onfinish=function(){hero.style.visibility="visible";f.clone.remove();
    setTimeout(function(){app.classList.remove("flip-in");hero.style.visibility=""},700)};
}
if(PATH_MODE){
  window.addEventListener("popstate",function(){LANG=/^\/en(\/|$)/.test(location.pathname)?"en":"fr";applyStatic();route()});
  /* liens internes : navigation sans rechargement */
  document.addEventListener("click",function(e){
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var a=e.target.closest("a[href]");if(!a||a.target==="_blank")return;
    var h=a.getAttribute("href");if(h.charAt(0)!=="/"||h.charAt(1)==="/")return;
    e.preventDefault();
    if(h===location.pathname){window.scrollTo({top:0,behavior:reduce?"auto":"smooth"});return}
    go(h);
  });
  /* anciens liens en #/… : redirection vers la vraie adresse */
  if(/^#\//.test(location.hash)){var oh=location.hash.slice(1);if(!/\/$/.test(oh))oh+="/";history.replaceState(null,"",u(oh))}
  else{var cp=curPath();if(/\/$/.test(cp)&&location.pathname!==u(cp))history.replaceState(null,"",u(cp))}
}
else window.addEventListener("hashchange",route);

/* ============ MENU « STAGGERED » (port JavaScript du composant React Bits, avec GSAP) ============ */
(function(){
  var G=window.gsap, root=document.documentElement;
  var btn=document.querySelector(".sm-toggle"), panel=document.getElementById("sm-panel");
  var pre=Array.from(document.querySelectorAll(".sm-prelayer"));
  var icon=btn.querySelector(".sm-icon"), inner=btn.querySelector(".sm-toggle-textInner"), wrap=btn.querySelector(".sm-toggle-textWrap");
  var open=false, tl=null, closeTw=null, textTw=null, spinTw=null;
  if(!G)root.classList.add("no-gsap");
  else{G.set([panel].concat(pre),{x:0,xPercent:100});G.set(icon,{rotate:0,transformOrigin:"50% 50%"})}
  function q(s){return Array.from(panel.querySelectorAll(s))}
  function resetInner(){
    if(!G)return;
    G.set(q(".sm-panel-itemLabel"),{yPercent:140,rotate:10});
    G.set(q(".sm-panel-item"),{"--sm-num-opacity":0});
    G.set(q(".sm-socials-title"),{opacity:0});
    G.set(q(".sm-socials-link"),{y:25,opacity:0});
  }
  resetInner();
  function playOpen(){
    if(!G)return;
    if(tl)tl.kill(); if(closeTw){closeTw.kill();closeTw=null}
    resetInner();
    tl=G.timeline();
    pre.forEach(function(el,i){tl.fromTo(el,{xPercent:100},{xPercent:0,duration:.5,ease:"power4.out"},i*.07)});
    var pt=(pre.length-1)*.07+.08, pd=.65;
    tl.fromTo(panel,{xPercent:100},{xPercent:0,duration:pd,ease:"power4.out"},pt);
    var is=pt+pd*.15;
    tl.to(q(".sm-panel-itemLabel"),{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},is);
    tl.to(q(".sm-panel-item"),{"--sm-num-opacity":1,duration:.6,ease:"power2.out",stagger:{each:.08,from:"start"}},is+.1);
    var ss=pt+pd*.4;
    tl.to(q(".sm-socials-title"),{opacity:1,duration:.5,ease:"power2.out"},ss);
    tl.to(q(".sm-socials-link"),{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:function(){G.set(q(".sm-socials-link"),{clearProps:"opacity"})}},ss+.04);
    if(reduce)tl.progress(1);
  }
  function playClose(){
    if(!G)return;
    if(tl){tl.kill();tl=null}
    if(closeTw)closeTw.kill();
    closeTw=G.to(pre.concat([panel]),{xPercent:100,duration:reduce?0:.32,ease:"power3.in",overwrite:"auto",onComplete:resetInner});
  }
  function animateIcon(o){
    if(!G)return;
    if(spinTw)spinTw.kill();
    spinTw=G.to(icon,o?{rotate:225,duration:reduce?0:.8,ease:"power4.out",overwrite:"auto"}:{rotate:0,duration:reduce?0:.35,ease:"power3.inOut",overwrite:"auto"});
  }
  function animateText(o){
    var cur=o?t("smMenu"):t("smClose"), target=o?t("smClose"):t("smMenu"), seq=[cur,target];
    inner.innerHTML=seq.map(function(l){return '<span class="sm-toggle-line">'+l+'</span>'}).join("");
    if(!G||reduce){inner.innerHTML='<span class="sm-toggle-line">'+target+'</span>';return}
    if(textTw)textTw.kill();
    G.set(inner,{yPercent:0});
    textTw=G.to(inner,{yPercent:-50,duration:.55,ease:"power3.inOut"});
  }
  function setOpen(o){
    if(o===open)return;
    open=o;
    root.classList.toggle("sm-open",o);
    btn.setAttribute("aria-expanded",o);
    btn.setAttribute("aria-label",o?t("menuClose"):t("menuOpen"));
    panel.setAttribute("aria-hidden",!o);
    if(o)panel.removeAttribute("inert");else panel.setAttribute("inert","");
    o?playOpen():playClose();
    animateIcon(o);animateText(o);
  }
  /* largeur fixe du libellé pour éviter les sauts entre « Menu » et « Fermer » */
  window.smRelabel=function(){
    if(textTw){textTw.kill();textTw=null}
    if(G)G.set(inner,{yPercent:0});
    inner.innerHTML='<span class="sm-toggle-line">'+(open?t("smClose"):t("smMenu"))+'</span>';
    var m=document.createElement("span");m.style.cssText="position:absolute;visibility:hidden;white-space:nowrap";
    btn.appendChild(m);var w=0;[T.fr.smMenu,T.fr.smClose,T.en.smMenu,T.en.smClose].forEach(function(l){m.textContent=l;w=Math.max(w,m.offsetWidth)});m.remove();
    wrap.style.setProperty("--sm-toggle-width",w+"px");
  };
  btn.addEventListener("click",function(){setOpen(!open)});
  /* clic sur un lien du menu : le panneau se referme d'abord, la nouvelle page s'affiche ensuite (évite les saccades) */
  panel.addEventListener("click",function(e){if(e.target.closest(".sm-panel-item")){window.__navAfter=Date.now()+(reduce?0:340);setOpen(false)}});
  document.addEventListener("mousedown",function(e){if(open&&!panel.contains(e.target)&&!btn.contains(e.target))setOpen(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&open){setOpen(false);btn.focus()}});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(window.smRelabel);
})();

/* Remplissage : part du point où la souris entre */
function fillOrigin(e){
  var el=e.target;
  if(!(el instanceof Element))return;
  var f=el.classList.contains("fill")?el:(el.classList.contains("to-top")?el.querySelector(".fill"):null);
  if(!f)return;
  var r=f.getBoundingClientRect();
  var cl=v=>Math.max(0,Math.min(100,v)).toFixed(1)+"%";
  f.style.setProperty("--fx",cl((e.clientX-r.left)/r.width*100));
  f.style.setProperty("--fy",cl((e.clientY-r.top)/r.height*100));
}
document.addEventListener("pointerenter",fillOrigin,true);
document.addEventListener("pointerleave",fillOrigin,true);

applyStatic();
route();
/* Écran de chargement : la jauge se remplit de 0 à 100 % (au moins 1,8 s, en attendant les polices), puis l'écran se retire vers le haut */
(function(){
  var d=document.documentElement,ld=document.querySelector(".loader");
  if(!ld||!d.classList.contains("is-loading"))return;
  var g=ld.querySelector(".loader-gauge"),pcts=ld.querySelectorAll(".lg-pct");
  var t0=performance.now()+300,ready=false,done=false,p=0,MIN=1800,MAX=3200;
  var fonts=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
  fonts.then(function(){ready=true});
  function show(v){g.style.setProperty("--p",v.toFixed(2));var tx=Math.round(v)+"%";pcts.forEach(function(e){e.textContent=tx})}
  function leave(){
    if(done)return;done=true;
    try{sessionStorage.setItem("cd-loaded","1")}catch(e){}
    setTimeout(function(){ld.classList.add("leaving")},180);
    setTimeout(function(){d.classList.remove("is-loading")},630);
    setTimeout(function(){ld.remove()},1500);
  }
  (function tick(now){
    var el=Math.max(0,now-t0),k=Math.min(1,el/MIN),target=100*(1-Math.pow(1-k,3));
    if(!ready&&el<MAX)target=Math.min(target,90);
    p+=(target-p)*.25;if(target>=100&&p>99.5)p=100;
    show(p);
    if(p>=100)leave();else requestAnimationFrame(tick);
  })(t0);
})();
window.__prerender=function(path){var r=resolve(path);return {html:r.html,title:r.title,desc:r.desc,lang:LANG}};

/* ===== Décors : motifs et formes en parallaxe pour animer le scroll ===== */
/* [sélecteur, type, couleur, position CSS, taille, vitesse de parallaxe, rotation au scroll] */

/* ===== Curseur personnalisé (desktop) : bulle citron, rétrécit sur les boutons ronds, bulle « Découvrir » sur les projets ===== */
(function(){
  if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
  var c=document.createElement("div");c.className="cur";c.setAttribute("aria-hidden","true");c.innerHTML='<span class="cur-l"></span>';document.body.appendChild(c);
  document.documentElement.classList.add("has-cur");
  var lab=c.querySelector(".cur-l"),x=-100,y=-100,tx=-100,ty=-100,shown=false;
  var BTN=".mc,.ct-chip,.fill,.brand,.rseg-item,.gsel-trigger,.skc-dot,.stp-bar,.chip,.ct-copy,.cta-card",CARD="a.proj,.skc-slide";
  function probe(el){var hit=el&&el.closest&&el.closest(CARD+","+BTN),card=hit&&hit.matches(CARD),btn=hit&&!card;
    c.classList.toggle("is-card",!!card);c.classList.toggle("is-btn",!!btn);
    if(card)lab.textContent=t("cursorCard")}
  window.addEventListener("pointermove",function(e){if(e.pointerType!=="mouse")return;tx=e.clientX;ty=e.clientY;if(!shown){shown=true;x=tx;y=ty;c.classList.add("on")}
    probe(e.target)},{passive:true});
  /* au scroll (souris immobile) ou après un changement de page, on revérifie ce qu'il y a sous le curseur */
  var pq=0;function reprobe(){if(!shown||pq)return;pq=requestAnimationFrame(function(){pq=0;probe(document.elementFromPoint(tx,ty))})}
  window.addEventListener("scroll",reprobe,{passive:true});window.addEventListener(PATH_MODE?"popstate":"hashchange",function(){setTimeout(reprobe,300)});document.addEventListener("click",function(){setTimeout(reprobe,300)});
  document.addEventListener("pointerleave",()=>{shown=false;c.classList.remove("on")});
  window.addEventListener("blur",()=>{shown=false;c.classList.remove("on")});
  document.addEventListener("pointerdown",()=>c.classList.add("down"));document.addEventListener("pointerup",()=>c.classList.remove("down"));
  (function loop(){var k=reduce?1:.22;x+=(tx-x)*k;y+=(ty-y)*k;c.style.transform="translate3d("+x+"px,"+y+"px,0)";requestAnimationFrame(loop)})();
})();
