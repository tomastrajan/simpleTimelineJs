SimpleTimelineJs
================
SimpleTimelineJs is my effort to create simple easily configurable
timeline to visualise duration of various periods. Timeline can be configured
with custom year range and you can add arbitrary number of timelines 
with relevant periods displayed inline.


SimpleTimelineJs uses `simpleTimelineJs` namespace implemented 
as Object literal notation to prevent collisions with other objects 
or variables in the global namespace.

Live demo
---------
Check out SimpleTimelineJs [Live demo](http://htmlpreview.github.io/?https://github.com/tomastrajan/simpleTimelineJs/blob/master/index.html)

Configuration
-------------
Timeline visualises data stored in timeline_data.js. Data is stored
as JavaScript function parameters. 

To use timeline you simply specify year range by calling function `simpleTimelineJs.api.initTimeline(2003, 2014);`

To add period to the timeline call function `simpleTimelineJs.api.addTimelinePeriod(
    "name of period", 
    "color", 
    startYear,
    startMonth, 
    endYear, 
    endMonth, 
    newTimeline);` 

   * color parameter accepts color in hexadecimal format e.g.: `#ff0000`
   * newTimeline parameter accepts boolean `true` or `false` values (when `true` period will start new timeline, `false` periods are displayed inline in current timeline)
   * endYear parameter accepts number (e.g.: `2012`) or `simpleTimelineJs.currentYear()` values
   * endMonth parameter accepts number (e.g.: `10`) or `simpleTimelineJs.currentMonth()` values



