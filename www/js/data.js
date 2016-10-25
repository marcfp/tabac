Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
 // document.write("date1_ms = "+date1_ms+"<br/>");
  var date2_ms = date2.getTime();
//  document.write("date2_ms = "+date2_ms+"<br/>");
  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
//  document.write("difference_ms = "+difference_ms+"<br/>");
  
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);
//  document.write(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds');
 // return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
}
var datax  = new Date(2015, 3, 27); //Month is 0-11 in JavaScript
datax.setDate(30);
console.log(datax.toDateString()); //displays Tue Mar 2 2010
var data_actual = new Date();
console.log(data_actual.toDateString());
Date.daysBetween(datax, data_actual);
