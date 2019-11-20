	//Mjenja on mouseoveru i mouseleaveu proporcije tako da se dobije dojam zooma, u cssu su slike s marginama -20 da se postigne ovaj dojam
    $(document).ready(function() {
        $('.viewport').mouseenter(function(e) {
            $(this).children('a').children('img').animate({ height: '371', left: '0', top: '0', width: '499'}, 100);
            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {
            $(this).children('a').children('img').animate({ height: '401', left: '-20', top: '-20', width: '549'}, 100);
            $(this).children('a').children('span').fadeOut(200);
        });
  });