jQuery(document).ready(function(){

	jQuery(".scrolltotop").click(function(){
	jQuery("html").animate({
		"scrollTop" : "0"
	},1500);
	return false;
	});

	jQuery(window).scroll(function(){
	var utd=jQuery(window).scrollTop();

	if (utd >400) {
		jQuery(".scrolltotop").show();
	}
	else {
		jQuery(".scrolltotop").hide();
	}
	});
	jQuery(".owl-carousel").owlCarousel({
		items   : 4,
		margin  : 10,
		loop    : true,
		autoplay : true,
		autoplaySpeed : 1200,
		autoplayTimeout :1500,
		autoplayHoverPause : true,
		smartSpped : 2000,

	});
})