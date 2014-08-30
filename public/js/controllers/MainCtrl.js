// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.controller('MainController', function($scope, HomeService) {
  $scope.menuToggle = function() {
    $('#wrapper').toggleClass('toggled');
    $('.hamburger').toggleClass('active');
  }
  $scope.menuClose = function() {
    $('#wrapper').removeClass('toggled');
    $('.hamburger').removeClass('active');
  }

  var randomColorLogo = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Used to get cover photo from events: isn't including in facebook event object
  var getCover = function(events) {
    for (var i = 0; i < events.length; i += 1) {
      FB.api(
        events[i].id + '?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx&fields=cover',
        function(response) {
          if (response.cover) {
            HomeService.pushPhoto(response.cover.source);
          } else {
            HomeService.pushPhoto('../img/innovative-' + randomColorLogo(1, 4) + '.png');
          }
        }
      )
    }
  };

  // Get Facebook events
  var fbEndpoint = function() {
    FB.api(
      "/118333034872164/events?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx",
      function(response) {
        getCover(response.data);
        HomeService.set(response.data);
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

    fbEndpoint();
    HomeService.clearPhoto();
  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // -- Facebook Graph API --

});