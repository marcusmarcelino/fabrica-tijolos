$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   if (scroll >= 1) {               
         $("#nav-top-fixed").addClass("ativo");    
   } else {
         $("#nav-top-fixed").removeClass("ativo");
   }
});