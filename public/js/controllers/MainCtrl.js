innovativeDesign.controller('MainController', function($scope) {
  $scope.menuToggle = function() {
    $('#wrapper').toggleClass('toggled');
  }
  $scope.menuClose = function() {
    $('#wrapper').removeClass('toggled');
  }

  $scope.facebookEvents = [];
  $scope.fbevent;
  $scope.i = 0;

  setInterval(function() {
    $scope.i = ($scope.i + 1) % $scope.facebookEvents.length;
    $scope.$apply(function() {
      $scope.fbevent = $scope.facebookEvents[$scope.i];
    })
  }, 5000);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '118333034872164',
      xfbml      : true,
      version    : 'v2.1'
    });

    FB.api(
      "/118333034872164/events?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx&since=1389953321",
      function(response) {
        $scope.$apply(function() {
          $scope.facebookEvents = response.data;
          $scope.fbevent = $scope.facebookEvents[$scope.i];
        })
      }
    )

    console.log(
      
    );
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});