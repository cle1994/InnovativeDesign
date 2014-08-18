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