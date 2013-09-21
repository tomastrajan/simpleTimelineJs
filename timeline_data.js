$(document).ready(function(){
	
	/*
		SOME NICE COLORS
		
		#52af40 - green
		#27b3d1 - cyan
		#d18e2e - orange
		#5f6ddf - blue
		#bd2e78 - magenta
		#474747 - grey
		#cf1e1e - red
	*/
	
	
	/* 
		SET TIMELINE YEAR RANGE
		
		generateYears(timelineStartYear, timelineEndYear)
	*/
	generateYears(2001, 2016);
	
	
	
	/*
		ADD TIMELINE EVENTS
		
		setTimelineElement("name of period", "color", startYear, startMonth, endYear, endMonth, newTimeline);
	
		@color 			- hexadecimal color representation e.g.: #ff0000
		@newTimeline 	- boolean	true 	- 	element will start new timeline
									false 	- 	element will be displayed inline 
												with other elements in current timeline
		@endYear 		- number (e.g.: 2012) or currentYear
		@endMonth 		- number (e.g.: 5) or currentMonth	
											
	*/
	setTimelineElement("GOOD TIMES", 		"52af40", 2004, 01, 2006, 06, true);
	setTimelineElement("THIS WAS AWESOME",	"27b3d1", 2006, 09, 2008, 04, false);
	setTimelineElement("SOME PERIOD", 		"d18e2e", 2008, 09, 2011, 05, false);
	setTimelineElement("FLASH EVENTS", 		"52af40", 2011, 07, 2011, 09, false);
	
	setTimelineElement("TROUBLE TIMES", 	"5f6ddf", 2007, 04, 2008, 08, true);
	setTimelineElement("AFTERMATH",			"bd2e78", 2008, 10, 2009, 11, false);
	setTimelineElement("REVIVAL",			"cf1e1e", 2013, 10, 2014, 02, false);
	
	setTimelineElement("INTERLUDE",			"d18e2e", 2003, 03, 2007, 11, true);
	setTimelineElement("CONCURRENT EVENTS",	"474747", 2007, 12, 2010, 01, false);
	
	setTimelineElement("AGE OF STUFF",		"cf1e1e", 2005, 10, 2006, 12, true);
	setTimelineElement("NEW ERA",			"52af40", 2007, 03, currentYear, currentMonth, false);
	
});