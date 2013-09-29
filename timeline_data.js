$(document).ready(function(){
	
	/* 
		Initialize timeline and set year range
		
		simpleTimelineJs.api.initTimeline(timelineStartYear, timelineEndYear)
	*/
	
	simpleTimelineJs.api.initTimeline(2003, 2014);
	
	/*
		Add timeline periods
		
		simpleTimelineJs.api.addTimelinePeriod(
			"name of period", 
			"color", 			- hexadecimal color representation e.g.: #ff0000
			startYear, 			- number (eg: 2005)
			startMonth,			- number (eg: 11)
			endYear, 			- number (eg: 2012)	or simpleTimelineJs.currentYear()
			endMonth, 			- number (eg: 5) 	or simpleTimelineJs.currentMonth()
			newTimeline			- boolean	true 	- 	period will start new timeline
		);							false 	- 	period will be displayed inline 
											with other periods in current timeline						
	*/
	
	simpleTimelineJs.api.addTimelinePeriod("GOOD TIMES", 		"52af40", 2004, 01, 2006, 06, true);
	simpleTimelineJs.api.addTimelinePeriod("THIS WAS AWESOME",	"27b3d1", 2006, 09, 2008, 04, false);
	simpleTimelineJs.api.addTimelinePeriod("SOME PERIOD", 		"d18e2e", 2008, 09, 2011, 05, false);
	simpleTimelineJs.api.addTimelinePeriod("FLASH EVENTS", 		"52af40", 2011, 07, 2011, 09, false);
	
	simpleTimelineJs.api.addTimelinePeriod("TROUBLE TIMES",		"5f6ddf", 2007, 04, 2008, 08, true);
	simpleTimelineJs.api.addTimelinePeriod("AFTERMATH",		"bd2e78", 2008, 10, 2009, 11, false);
	simpleTimelineJs.api.addTimelinePeriod("REVIVAL",		"cf1e1e", 2013, 10, 2014, 02, false);
	
	simpleTimelineJs.api.addTimelinePeriod("INTERLUDE",		"d18e2e", 2003, 03, 2007, 11, true);
	simpleTimelineJs.api.addTimelinePeriod("CONCURRENT EVENTS",	"474747", 2007, 12, 2010, 01, false);
	
	simpleTimelineJs.api.addTimelinePeriod("AGE OF STUFF",		"cf1e1e", 2005, 10, 2006, 12, true);
	simpleTimelineJs.api.addTimelinePeriod("NEW ERA",		"52af40", 2007, 03, simpleTimelineJs.currentYear(), simpleTimelineJs.currentMonth(), false);
	
	/*
		Some nice colors
		
		#52af40 - green
		#27b3d1 - cyan
		#d18e2e - orange
		#5f6ddf - blue
		#bd2e78 - magenta
		#474747 - grey
		#cf1e1e - red
	*/
	
});