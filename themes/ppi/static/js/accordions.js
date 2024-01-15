jQuery(document).on("click keypress", ".accordion-closed", function(){
	jQuery(this).next('.accordion-row-text').slideDown();
	jQuery(this).removeClass('accordion-closed');
	jQuery(this).addClass('accordion-open');
});		 
jQuery(document).on("click keypress", ".accordion-open", function(){
	jQuery(this).next('.accordion-row-text').slideUp();
	jQuery(this).removeClass('accordion-open');
	jQuery(this).addClass('accordion-closed');
});	  
