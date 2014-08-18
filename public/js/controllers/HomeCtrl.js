innovativeDesign.controller('HomeController', function($scope, HomeService) {
  var facebookEvents = [];
  var i = 0;
  $scope.eventShow = false;
  $scope.fbevent;

  var interval = function() {
    setInterval(function() {
      i = (i + 1) % facebookEvents.length;
      $scope.$apply(function() {
        $scope.fbevent = facebookEvents[i];
        $scope.eventShow = true;
      })
    }, 5000);
  };
  var routeFbCall = function() {
    facebookEvents = HomeService.get();
    $scope.fbevent = facebookEvents[i];
    interval();
    $scope.eventShow = true;
  }
  var fbcall = function() {
    FB.api(
      "/118333034872164/events?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx&since=1389953321",
      function(response) {
        $scope.$apply(function() {
          HomeService.set(response.data);
          facebookEvents = response.data;
          $scope.fbevent = facebookEvents[i];
          $scope.eventShow = true;
        })
      }
    )
  };

  // Facebook Graph API
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '118333034872164',
      xfbml      : false,
      version    : 'v2.1'
    });

    fbcall();
  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // End Facebook Graph API Calls

  if (facebookEvents == 0) {
    routeFbCall();
  }
});