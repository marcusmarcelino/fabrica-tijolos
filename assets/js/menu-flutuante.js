$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   if (scroll >= 1) {               
         $("#menu").addClass("ativo");   
   } else {
         $("#menu").removeClass("ativo");
   }
});