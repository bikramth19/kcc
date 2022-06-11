jQuery(document).ready(function() {
	
	if (jQuery('.remove-row-class').length) {
		jQuery('.remove-row-class').each(function(){
			//jQuery(this).children(".container").removeClass("container");
			jQuery(this).children(".container").children(".content-block-section").children(".row").removeClass("row");
		});
		
		
	}
	
	if (jQuery('.remove-container-class').length) {
		jQuery('.remove-container-class').each(function(){
			jQuery(this).children(".container").removeClass("container");
		});
		
	}
	if (jQuery('.remove-content-block-section').length) {
		jQuery('.remove-content-block-section').each(function(){
			jQuery(this).children(".container").children(".content-block-section").removeClass("content-block-section");
		});
		
	}
	
	
	if (jQuery('.item .bg-image-services-block').length) {
		
		jQuery('.item .bg-image-services-block').each(function(){
			var bg = jQuery(this).attr("bgservices");
			jQuery(this).css('background-image', 'url(' + bg + ')');
		  });
	}
	if (jQuery('.bg-image-services-block-hp').length) {
		
		jQuery('.bg-image-services-block-hp').each(function(){
			var bg = jQuery(this).attr("bgservices");
			jQuery(this).css('background-image', 'url(' + bg + ')');
		  });
	}
	
	
});
