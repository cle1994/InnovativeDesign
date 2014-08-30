// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.filter('dateFilter', function() {
  return function(date) {
    var arr = date.substring(0,10).split('-');
    var month = '';
    if (arr[1] == '01') {
      month = 'Jan'
    } else if (arr[1] == '02') {
      month = 'Feb'
    } else if (arr[1] == '03') {
      month = 'Mar'
    } else if (arr[1] == '04') {
      month = 'Apr'
    } else if (arr[1] == '05') {
      month = 'May'
    } else if (arr[1] == '06') {
      month = 'Jun'
    } else if (arr[1] == '07') {
      month = 'Jul'
    } else if (arr[1] == '08') {
      month = 'Aug'
    } else if (arr[1] == '09') {
      month = 'Sep'
    } else if (arr[1] == '10') {
      month = 'Oct'
    } else if (arr[1] == '11') {
      month = 'Nov'
    } else if (arr[1] == '12') {
      month = 'Dec'
    }
    return month + ' ' + arr[2] + ', ' + arr[0];
  }
});