jQuery(document).ready(function($){
		// Trajanje animacije
		scroll_top_duration = 700,
		//linkanje varijable sa klasom u htmlu
		$back_to_top = $('.top');

	//funkcija za scroll, animira se body i html jer je to stvari top i bottom stranice
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
		scroll_bot_duration = 700,
		$bot = $('.bot');
		
	$bot.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
		//ako se postavi visina dokumenta, premašit će kraj stranice, pa se height dokumenta oduzima od visine windowa da se dobije stvarna vrijednost
			 scrollTop: $(document).height()-$(window).height(),
		 	}, scroll_bot_duration
		);
	});
});

