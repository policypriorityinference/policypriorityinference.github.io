jQuery(document).on("click keypress", ".lightboxable", function(){
	$source = $(this).attr("src");
	$alt = $(this).attr('alt');
	$("#lightbox-image").find("img").attr("src", $source);
	$("#lightbox-image").find("img").attr("alt", $alt);
	$(".lightbox").fadeIn();
	$("body").css("overflow","hidden");
	// Allow keyboard users to X out of the lightbox
	$(".lightbox").find("button").focus();
	// Mark the div they should be able to get back to.
	$(this).addClass("lightboxed-image");
});

jQuery(document).on("click keypress", ".close-lightbox", function(){

	$("body").css("overflow","visible");
	$("#lightbox-image").find("img").attr("src", "");
	$("#lightbox-image").find("img").attr("alt", "");
	$(".lightbox").fadeOut();
	// Allow keyboard users to get back to the image.
	$(".lightboxed-image").focus();
	$(".lightboxed-image").removeClass("lightboxed-image");

});

