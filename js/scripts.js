/*!             CONFIGURATION
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


//-------Show section scrolling-----

ScrollReveal().reveal('#about');
ScrollReveal().reveal('#experience', {delay: 500});
ScrollReveal().reveal('#education', {delay: 500});
ScrollReveal().reveal('#oeducation', {delay: 500});
ScrollReveal().reveal('#skills', {delay: 500});

//Open animation left-right
var id = null;
function InSlideLeft() {
  var elem = document.getElementById("animateleft");   
  elem.style.visibility = "visible"
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

//Close animation left-right
$("#animateleft").click(function() {
  
  $("#animateleft").animate({
    position: 'center',
    opacity: '0',
    height:'100px',
    width: '100px',
    visibility: 'hidden'
  });
  $("#animateleft").delay(2000);
});
//LinkedIn Window
function fLinkedIn (url){
    window.open(url, "LinkedIn", "width=600, height=400")
}

//Show modal for game

  $("#skills").mouseover(function(){
    $("#exampleModal").show();
  
  });
  $("#closeGame").click(function(){
    $("#exampleModal").animate({
      position: 'center',
      opacity: '0',
      height:'10px',
      width: '10px',
      visibility: 'hidden'
    });
  });
//Show PopUps
$(document).ready(function(){
	 $('[data-toggle="popover1"]').popover({
        placement:'top',
		    trigger: 'hover',
        html: true,
        content: 'This is a webside based on the users needs in order to increase the number of clients in his restaurant. Also I dedicated some activities about social network (Instagram) to improve the status of the restaurant.' ,
        opacity: '0',
        mouse : 'active'
    });
    $('[data-toggle="popover1"]').delay(2000);  
});
$(document).ready(function(){
  $('[data-toggle="popover2"]').popover({
       placement:'top',
       trigger: 'hover',
       html: true,
       content: 'This is a landing page where the clients are given an overview of the company and it`s services. Furthermore the clients can book an apointment and be informed about new laws.',
       opacity: '0',
       mouse : 'active'
   });
   $('[data-toggle="popover2"]').delay(2000); 
});

//ButtonNight
function changeMode(){
  var element = document.body;
  element.classList.toggle("darkmode");
  element.classList.toggle("image-body");
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

