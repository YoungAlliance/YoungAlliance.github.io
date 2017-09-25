$(function() {
	jQuery('.twitter-block').on('DOMSubtreeModified propertychange',"#twitter-widget-0", function() {
	  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
	  jQuery(".twitter-block").css("height", "100%");
	console.log("test");
	});
});
