

jQuery(document).ready(function(){

	function size() {
	    if($(window).width() < 768)
	    {   
	        $("#main_col").removeClass("affix");
	    }
	    else
	    {
	       $("#main_col").addClass("affix");
	    }
	}
size();

	$(window).resize(function(){
	   	var windowWidth = $(window).width();
	    if(windowWidth > 767)$("#main_col").addClass("affix");
	    else $("#main_col").removeClass("affix");
	}); 


	$(".main_menu ul li").click(function(e) {
	  e.preventDefault();
	  $(".main_menu ul li").removeClass('active');
	  $(this).addClass('active');
	});

	$(".main_menu ul li").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	

	$( '[data-fancybox]' ).fancybox({

	  caption : function( instance, item ) {
	    var caption = $(this).data('caption') || '';
	    
	    return ( caption.length ? ' ' + caption : '' );
	  }
	});


});