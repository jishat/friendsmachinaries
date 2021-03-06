//Typing Effect active

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
//Typing Effect End

// Scroll Menu effect start
$(window).on('scroll', function(){
	if($(window).scrollTop()){
	  $('.top_bar').addClass('menu_bar_effect');
	} 
	else {
	  $('.top_bar').removeClass('menu_bar_effect');    
	}
})
// Scroll Menu effect start



