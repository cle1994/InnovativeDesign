// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994 
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.factory('HomeService', function() {
  var fbEvents = [];
  var fbEventsServices = {};

  fbEventsServices.set = function(data) {
    fbEvents = data;
  };

  fbEventsServices.get = function() {
    return fbEvents;
  };

  return fbEventsServices;
});