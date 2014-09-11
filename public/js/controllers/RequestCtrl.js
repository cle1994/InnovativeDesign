// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.controller('RequestController', function($scope, HomeService) {
  $('#date').datetimepicker({
    pickTime: false
  });

  $scope.submitted = false;

  $scope.googleSheet = function(enable) {
    if (enable) {
      var serializedData = $('.request').serialize();
      $scope.loading = true;
      $scope.submitted = true;

      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzr86BBj3C_i8m2dm_Erdsy7-T-afJAdd4WcLDP8uKWVjOoYTFg/exec',
        type: 'POST',
        data: serializedData
      })
      .done(function() {
        $scope.$apply(function() {
          $scope.submitted = true;
          $scope.loading = false;
        })
      })
      .fail(function() {
        $scope.$apply(function() {
          $scope.submitted = true;
          $scope.loading = false;
        })
      });
    } else {
      console.log('Sorry Applications are closed right now.');
    }
  };

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