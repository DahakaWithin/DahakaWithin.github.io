// NAVIGACIJA
$(document).ready(function () {
	//Append za div sa hover klasom
	$('#bg li').append('<div class="hover"><\/div>');
	$('#bg li').hover(		
		//Mouseover, fadeIn za hover	
		function() {			
			$(this).children('div').stop(true, true).fadeIn('1000');			
		}, 		
		//Mouseout, fadeOut za hover
		function() {		
			$(this).children('div').stop(true, true).fadeOut('1000');	
		
	})
});
