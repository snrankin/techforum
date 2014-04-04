
//Current Page Highlight
$(document).ready(function () {
	$('#menu a').each(function (index) {
		if (this.href.trim() == window.location)
			$(this).addClass("selected");
	});
});

//Accordion
$(document).ready(function () {
	//hide all drop downs
	$(".AccordionPanelContent").css("display", "none");
	//if the div is hidden reveal it with a slide animation
	//if not hidden then hide it with a slid animation
	$(".AccordionPanel").click(function () {
		if ($(this).children(".AccordionPanelContent").css("display") == "none") {
			$(this).children(".AccordionPanelContent").slideDown();
		} else {
			$(this).children(".AccordionPanelContent").slideUp();
		}
	});
});

//Mobile Menu
(function ($) {
	$.fn.collapsable = function (options) {
		// iterate and reformat each matched element
		return this.each(function () {
			// cache this:
			var obj = $(this);
			var tree = obj.next('.navigation');
			obj.click(function () {
				if (obj.is(':visible')) { tree.slideToggle(); }
			});
			$(window).resize(function () {
				if ($(window).width() <= 640) { tree.attr('style', ''); };
			});
		});
	};
})(jQuery);

$(document).ready(function () {
	$('.slide-trigger').collapsable();
});