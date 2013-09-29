/* 	SimpleTimelineJs by Trajan 2013 */
	
var simpleTimelineJs = simpleTimelineJs || {
    
	currentYear : function() {
		simpleTimelineJs.config.now.getFullYear();
	},
	
	currentMonth : function() {
		simpleTimelineJs.config.now.getMonth() + 1;
	},
	
	config : {
		yearPxWidth : 84,
		monthPxWidth : 7,
		basePxOffset : 42,
		timelineId : 0,
		now : new Date(),
		timelineStartYear : 0,
		timelineEndYEar : 0
	},
	
	element : {
		app : "#simpleTimelineJs",
		holder : "#simpleTimelineJs_FullWidthHolder",
		timelines : "#simpleTimelineJs_timelines",
		timeline : ".simpleTimelineJs_timeline",
		tooltip : ".simpleTimelineJs_Tooltip"
	},
	
	api :  {
		
		initTimeline : function(startYear, endYear) {
			
			simpleTimelineJs.api.prepareTimelineTemplate();
			simpleTimelineJs.api.prepareTimelineEvents();
			
			simpleTimelineJs.config.timelineStartYear = startYear;
			simpleTimelineJs.config.timelineEndYear = endYear;
			
			var yearCount = endYear - startYear;
			var width = $(document).width();
			
			$(simpleTimelineJs.element.holder).find("ul").children().remove();
		
			for (i = 0; i <= yearCount; i++) {
				$(simpleTimelineJs.element.holder).find("ul").append("<li>" + (+simpleTimelineJs.config.timelineStartYear + +i) +"</li>");
			}
			$(simpleTimelineJs.element.holder).css("width", (i * simpleTimelineJs.config.yearPxWidth) + "px");
		},
		
		prepareTimelineTemplate: function() { 	
			$(simpleTimelineJs.element.app).append("<div id='simpleTimelineJs_FullWidthHolder'></div>");
			
			$(simpleTimelineJs.element.holder).append("<ul class='simpleTimelineJs_years'></ul>");
			$(simpleTimelineJs.element.holder).append("<br style='clear:both;' />");
			
			$(simpleTimelineJs.element.holder).append("<div id='simpleTimelineJs_timelines'></div>")
			$(simpleTimelineJs.element.timelines).append("<div></div>");
			$(simpleTimelineJs.element.timelines).append("<br style='clear:both;' />");
					
			$(simpleTimelineJs.element.holder).append("<ul class='simpleTimelineJs_years simpleTimelineJs_yearsBottom'></ul>");
			$(simpleTimelineJs.element.holder).append("<br style='clear:both;' />");
		},
		
		prepareTimelineEvents: function() {
		
			$(simpleTimelineJs.element.app).on( "mouseenter", simpleTimelineJs.element.timeline, function() {
				var content = $(this).find("p").html();
				$("body").append("<div class='simpleTimelineJs_Tooltip'><p>" + content + "</p></div>")
				
				var parentTop = $(this).offset().top;
				var parentLeft = $(this).offset().left;
				var parentHeight = $(this).height();
				var height = $(".simpleTimelineJs_Tooltip").height();
				var monthPx = simpleTimelineJs.config.monthPxWidth;
				var top = parentTop - parentHeight - height - monthPx - 2;
				
				$(simpleTimelineJs.element.tooltip).css("left", parentLeft + monthPx  + "px");
				$(simpleTimelineJs.element.tooltip).css("top",  top + "px");
			});

			$(simpleTimelineJs.element.app).on( "mouseleave", simpleTimelineJs.element.timeline, function() {
				$(simpleTimelineJs.element.tooltip).remove();
			});
		
		},
		
		addTimelinePeriod : function(name, color, startYear, startMonth, endYear, endMonth, newTimeline) {
			var offset = simpleTimelineJs.config.basePxOffset;
			var yearPx = simpleTimelineJs.config.yearPxWidth;
			var monthPx = simpleTimelineJs.config.monthPxWidth;
			var timelineStartYear = simpleTimelineJs.config.timelineStartYear;
			var id = simpleTimelineJs.config.timelineId;
			
			var periodLeft = (offset + ((startYear - timelineStartYear) * yearPx)) + ((startMonth - 1) * monthPx);
			var periodRight = (offset + ((endYear - timelineStartYear) * yearPx)) + (endMonth * monthPx);
			var periodWidth = periodRight - periodLeft;
			
			$(simpleTimelineJs.element.timelines + " div").first()
				.append("<div class='simpleTimelineJs_timeline period" + id + "'></div>");
				
			if(newTimeline == true) {
				$("." + "period" + id).before("<br style='clear:both;' />");
				$("." + "period" + id).css("margin-left", periodLeft + "px");
			} else {
				var prevLeft = $("." + "period" + id).prev().offset().left;
				var prevWidth = $("." + "period" + id).prev().css("width").replace("px", "");
				var prevEnd = +prevLeft + +prevWidth;
				var holderLeft = $(simpleTimelineJs.element.holder).offset().left;
				periodLeft = +periodLeft + +holderLeft - +prevEnd;
				
				$("." + "period" + id).css("margin-left", periodLeft + "px");
			}	

			var yearString = (startYear == endYear ? startYear : startYear + " - " + endYear);
			
			$("." + "period" + id).append("<div></div>");
			$("." + "period" + id).append("<p>" + name + "<br /><span style='color:#" + color + "'>" 
				+ yearString +"</span></p");
			
			$("." + "period" + id).css("width", periodWidth + "px");
			$("." + "period" + id).find("div").css("background-color", "#" + color);
			
			simpleTimelineJs.config.timelineId++;
		}
	}
};



