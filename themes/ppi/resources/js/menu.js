document.onkeyup = PresTab;

function PresTab(e)
{
   var keycode = (window.event) ? event.keyCode : e.keyCode;
   if (keycode == 9){
	   $("body").addClass("user-is-tabbing");
   }
   
}

jQuery(document).on("click keypress", "#main_menu .search-button", function(){
	jQuery("#main_menu").find(".menu-main_menu-container").fadeOut(500);
	jQuery(this).fadeOut(500);
	setTimeout(function() { 
	jQuery("#main_menu").find(".searchform").fadeIn();
	jQuery("#main_menu").find(".searchform").addClass("open-search-form");
	jQuery("#main_menu").find(".back-to-menu-button").fadeIn();
	}, 100);
});	

jQuery(document).on("click keypress", ".back-to-menu-button", function(){
	jQuery("#main_menu").find(".searchform").fadeOut(500);
	jQuery(this).fadeOut(500);
	jQuery("#main_menu").find(".searchform").removeClass("open-search-form");
	setTimeout(function() { 
	jQuery(".menu-main_menu-container").fadeIn();
	jQuery("#main_menu").find(".search-button").fadeIn();
	}, 100);
});	
jQuery(document).ready(function(){
	$(document).on("click", ".menu-closed", function(){
		
				$(".menu-line-1").addClass("disappear");
				$(".menu-line-3").addClass("disappear");
				$(".menu-line-2a").addClass("rotate45");
				$(".menu-line-2b").addClass("rotateminus45");
				$(this).removeClass("menu-closed");
				$(this).addClass("menu-open");
				$("#main").addClass("menu-open");
				$("#mobile-menu-data").fadeIn(300);
				$("body").css("overflow","hidden");

			})
			$(document).on("click", ".menu-open", function(){
		
				$(".menu-line-1").removeClass("disappear");
				$(".menu-line-3").removeClass("disappear");
				$(".menu-line-2a").removeClass("rotate45");
				$(".menu-line-2b").removeClass("rotateminus45");
				$(this).removeClass("menu-open");
				$(this).addClass("menu-closed");
				$("#main").removeClass("menu-open");
				$("#mobile-menu-data").fadeOut(300);
				$("body").css("overflow","visible");
			})

});	
