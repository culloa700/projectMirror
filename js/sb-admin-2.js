(function($) {
  "use strict"; // Start of use strict
  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  }); 
   
  $('#cardBano').on('click',mostrarModalBano);
  $('#cardPelo').on('click',mostrarModalPelo);
  $('#cardUnas').on('click',mostrarModalUnas);
  $('#cardDientes').on('click',mostrarModalDientes);
  $('#cardOidos').on('click',mostrarModalOidos);
  $('#cardDesparacitacion').on('click',mostrarModalDesparacitacion);
  
  $('#aceptarBano').on('click',botonBano);
  
  document.addEventListener('DOMContentLoaded', function() { //parametrizacion de plugin calendar
       var calendarEl = document.getElementById('calendar');

       var calendar = new FullCalendar.Calendar(calendarEl, {
         plugins: [ 'dayGrid', 'interaction' ],
         locale:'es',
         header:{
             left:'title',
             center:'',
             rigth:'next,prev'
         },        
         dateClick: function(info) {                         

                var fun = mostrarModalBano(info.dateStr);
                console.log(fun);
            
//            alert('Clicked on: ' + info.dateStr);
//            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//            alert('Current view: ' + info.view.type);
//            // change the day's background color just for fun
//            info.dayEl.style.backgroundColor = 'red';

          }
         
         
       });

       calendar.render();
     });
  

})(jQuery); // End of use strict

function botonBano(){
   var value = $('#inputBano').val();
   $('#textBano').text(value);
   $('#modalBano').modal('hide');

}

function mostrarModalBano(s){
    
    $('#modalBano').modal('show');
    $('#inputBano').text(s);
    $('#dateBano').datetimepicker();
}

function mostrarModalPelo(){
    $('#modalPelo').modal('show');
    $('#datePelo').datetimepicker();
}

function mostrarModalUnas(){
    $('#modalUnas').modal('show');
    $('#dateUnas').datetimepicker();
}

function mostrarModalDientes(){
    $('#modalDientes').modal('show');
    $('#dateDientes').datetimepicker();
}

function mostrarModalOidos(){
    $('#modalOidos').modal('show');
    $('#dateOidos').datetimepicker();
}

function mostrarModalDesparacitacion(){
    $('#modalDesparacitacion').modal('show');
    $('#dateDesparacitacion').datetimepicker();
}

