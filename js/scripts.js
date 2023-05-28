

//-------Show section scrolling-----

ScrollReveal().reveal('#about');
ScrollReveal().reveal('#meanstacks', {delay: 500});
ScrollReveal().reveal('#experience', {delay: 500});
ScrollReveal().reveal('#education', {delay: 500});
ScrollReveal().reveal('#oeducation', {delay: 500});
ScrollReveal().reveal('#skills', {delay: 500});


//ButtonNight
function changeMode(){
  var element = document.body;  
  element.classList.toggle("darkmode");



}


//-----Languages------

// Create a function to change the hash 
// value of the page and reload it
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}
  
// Define the language reload anchors
var language = {
  es: {
    nav1:
      "Sobre",
    nav2:
    "Experiencia",
    nav3:
    "Educacion",
    nav4:
    "Otros Cursos",
    nav5:
    "Habilidades",
    intro:
    "Persona organizada, resolutiva, empática y activa, siempre trato de adquirir nuevos conocimientos para mejorar mi producción. Pasión por el desarrollo y la tecnología",
    title1:
    "Experiencia",
    subtitle1_1:
    "Soporte IT & Desarrollador Web Junior",
    subtitle1_2:
    "Desarrollador Web",
    subtitle1_3:
    "Desarrollador Front-End Junior",
    subtitle1_4:
    "Becario",
    subtitle1_5:
    "Becario",
    title2:
    "Educacion",
    title3:
    "Otros Cursos",
    subtitle1:
    "Soporte IT & Desarrollador Web Junior",
    title4:
    "Habilidades",
    subtitle1:
    "Soporte IT & Desarrollador Web Junior",
    duties:
    "Cargos",
    proyects:
    "Proyectos",
    dembarba:
    "Estoy a cargo de un proyecto donde tengo que actualizar la aplicación web, ayudar a los empleados con problemas técnicos sobre los softwares que utilizan en la empresa y gestionar los servidores."
  }
};
  
// Check if a hash value exists in the URL
if (window.location.hash) {
  
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#es") {
    sitenav1.textContent = language.es.nav1;
    sitenav2.textContent = language.es.nav2;
    sitenav3.textContent = language.es.nav3;
    sitenav4.textContent = language.es.nav4;
    sitenav5.textContent = language.es.nav5;
    intro.textContent = language.es.intro;
    title1.textContent = language.es.title1;
    subtitle1_1.textContent = language.es.subtitle1_1;
    subtitle1_2.textContent = language.es.subtitle1_2;
    subtitle1_3.textContent = language.es.subtitle1_3;
    subtitle1_4.textContent = language.es.subtitle1_4;
    subtitle1_5.textContent = language.es.subtitle1_5;
    title2.textContent = language.es.title2;
    title3.textContent = language.es.title3;
    title4.textContent = language.es.title4;

    duties.textContent = language.es.duties;
    proyects.textContent = language.es.proyects;
    dembarba.textContent = language.es.dembarba;
  } 
  
}

function downloadCV(){
  window.location.href = "https://drive.google.com/file/d/1MNYWqJVx4sxTAFDj8u-AGNFDkxQ0udhf/view?usp=sharing"
}