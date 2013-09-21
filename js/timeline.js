/* 	SIMPLE TIMELINE  by Trajan 2013 */
	
var id = 0;
var yearPx = 84;
var monthPx = 7;
var baseOffset = 42;

var date = new Date();
var currentYear = date.getFullYear(); 
var currentMonth = date.getMonth() + 1;

var timelineStartYear;
var timelineEndYear;

function generateYears(startYear, endYear) {
	timelineStartYear = startYear;
	timelineEndYear = endYear;
	var yearCount = timelineEndYear - timelineStartYear;
	
	$(".timelineYears").children().remove();
	var width = $(document).width();
	for (i = 0; i <= yearCount; i++) {
		$(".timelineYears").append("<li>" + (+timelineStartYear + +i) +"</li>");
	}
	$("#timelineFullWidthHolder").css("width", (i * yearPx) + "px");
}

function setTimelineElement(name, color, startYear, startMonth, endYear, endMonth, newTimeline) {
	
	var elemLeft = (baseOffset + ((startYear - timelineStartYear) * yearPx)) + ((startMonth - 1) * monthPx);
	var elemRight = (baseOffset + ((endYear - timelineStartYear) * yearPx)) + (endMonth * monthPx);
	var elemWidth = elemRight - elemLeft;
	
	$("#timelines div").first().append("<div class='timeline " + "elem" + id + "'></div>");
		
	if(newTimeline == true) {
	
		$("." + "elem" + id).before("<br class='clearFix' />");
		$("." + "elem" + id).css("float", "left");
		$("." + "elem" + id).css("margin-left", elemLeft + "px");
		
	} else {
		
		var prevLeft = $("." + "elem" + id).prev().offset().left;
		var prevWidth = $("." + "elem" + id).prev().css("width").replace("px", "");
		var prevEnd = +prevLeft + +prevWidth;
		var holderLeft = $("#timelineFullWidthHolder").offset().left;
		elemLeft = +elemLeft + +holderLeft - +prevEnd;
		
		$("." + "elem" + id).css("margin-left", elemLeft + "px");
		$("." + "elem" + id).css("float", "left");
	}
	
	var yearString;
	if(startYear == endYear) {
		yearString = startYear;
	} else {
		yearString = startYear + " - " + endYear
	}
	
	/* ADD BACKGROUND AND LABEL */
	$("." + "elem" + id).append("<div></div>");
	$("." + "elem" + id).append("<p>" + name + "<br /><span style='color:#" + color + "'>" 
		+ yearString +"</span></p");
	
	/* APPLY CSS STYLES */
	$("." + "elem" + id).css("width", elemWidth + "px");
	$("." + "elem" + id).find("div").css("background-color", "#" + color);
	
	id++;
}

$( document ).on( "mouseenter", ".timeline", function() {
	var content = $(this).find("p").html();
	$("body").append("<div class='timelineTooltip shadow'><p>" + content + "</p></div>")
	
	var parentTop = $(this).offset().top;
	var parentLeft = $(this).offset().left;
	var parentHeight = $(this).height();
	var height = $(".timelineTooltip").height();
	var top = parentTop - parentHeight - height - monthPx - 2;
	
	$(".timelineTooltip").css("left", parentLeft + monthPx  + "px");
	$(".timelineTooltip").css("top",  top + "px");
});

$( document ).on( "mouseleave", ".timeline", function() {
	$(".timelineTooltip").remove();
});


