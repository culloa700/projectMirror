 
(function($) {
var calendar;
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
  var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid', 'interaction' ],
  locale:'es',
  header:{
      left:'title',
      center:'',
      rigth:'next,prev'
  },        
  dateClick:function(info){ 
      
        $('#modalNewNote').modal('show'); // muestra el modal donde se asigna la nota        
        $('#buttonAccept').off('click'); //inizializa el evento click del boton del modal
        $('#buttonAccept').click(function(){ // evento click del boton aceptar del modal
            
            var note = $('#textAreaNote').val(); 
             
            calendar.addEvent({ // debe insertar la nota y despues traer el id asignado para poner de id a la nota
               id: 190,
               title: note,
               start: info.dateStr,
               allDay: true,
               textColor: '#FFFFFF',
               color:'#6290A0'
            });
            $('#modalNewNote').modal('hide');
        }); 
  },
  eventClick: function(info){ // debe traerse el contenido de la nota y el tipo para mostrar
//     info.event.remove();
    console.log(info.event._def.publicId);
    console.log(calendar.getEventById(190));
    console.log(info.event._def.title);
    $('#modalUpdateNote').modal('show');
    $('#textAreaNoteUpdate').val(info.event._def.title);
    $('#buttonDelete').off('click');
    $('#buttonDelete').click(function(){ // evento click del boton aceptar del modal
        info.event.remove();   
        $('#modalUpdateNote').modal('hide');
    }); 
     
     
  }
});
calendar.render();
  
$('#modalNewNote').on('hidden.bs.modal', function (e) { // evento que se ejecuta al cerrar el modal
      $('#textAreaNote').val("");
      $('#selectType').val(0);
})
$('#modalNewNote').on('shown.bs.modal', function (e) { // evento que se ejecuta al cerrar el modal    
    $('#textAreaNote').trigger('focus');
})
 
 
 
 $('#buttonRegister').on('click', function(){
     var form = $('#formRegister').serialize();
     console.log(form);
 })
 
})(jQuery); // End of use strict

