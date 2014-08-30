// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.controller('HomeController', function($scope, HomeService) {
  $scope.marketing = true;
  $scope.blue = true;
  $scope.gold = true;
  $scope.photo = true;
  $scope.web = true;
  $scope.data = [
    [ '../img/portfolio/Blue/chemisense.png', $scope.blue, [4, 7] ],
    [ '../img/portfolio/Blue/markhor.png', $scope.blue, [4, 5] ],
    [ '../img/portfolio/Blue/transport.png', $scope.blue, [4, 6] ],
    [ '../img/portfolio/Blue/transport2.png', $scope.blue, [6, 6] ],
    [ '../img/portfolio/Gold/bbjj.png', $scope.gold, [3, 5] ],
    [ '../img/portfolio/Gold/bbjj2.png', $scope.gold, [3, 7] ],
    [ '../img/portfolio/Gold/che.png', $scope.gold, [4, 6] ],
    [ '../img/portfolio/Gold/paws.png', $scope.gold, [3, 6] ],
    [ '../img/portfolio/Gold/paws2.png', $scope.gold, [5, 4] ],
    [ '../img/portfolio/Gold/smartbod.png', $scope.gold, [6, 8] ],
    [ '../img/portfolio/Gold/smartbod2.png', $scope.gold, [6, 8] ],
    [ '../img/portfolio/Marketing/bear.png', $scope.marketing, [4, 4] ],
    [ '../img/portfolio/Marketing/card1.png', $scope.marketing, [4, 4] ],
    [ '../img/portfolio/Marketing/card2.png', $scope.marketing, [4, 4] ],
    [ '../img/portfolio/Marketing/card3.png', $scope.marketing, [5, 4] ],
    [ '../img/portfolio/Marketing/obsession.png', $scope.marketing, [7, 6] ],
    [ '../img/portfolio/Marketing/panel.png', $scope.marketing, [7, 6] ],
    [ '../img/portfolio/Marketing/rgb.png', $scope.marketing, [5, 4] ],
    [ '../img/portfolio/Marketing/valentine1.png', $scope.marketing, [4, 8] ],
    [ '../img/portfolio/Photo/bb1.jpg', $scope.photo, [4, 6] ],
    [ '../img/portfolio/Photo/bb2.jpg', $scope.photo, [4, 6] ],
    [ '../img/portfolio/Photo/bw.jpg', $scope.photo, [6, 5] ],
    [ '../img/portfolio/Photo/eliz.jpg', $scope.photo, [6, 7] ],
    [ '../img/portfolio/Photo/group.jpg', $scope.photo, [7, 7] ],
    [ '../img/portfolio/Photo/isco.jpg', $scope.photo, [5, 5] ],
    [ '../img/portfolio/Photo/jordan.jpg', $scope.photo, [5, 6] ],
    [ '../img/portfolio/Photo/jordan2.jpg', $scope.photo, [7, 6] ],
    [ '../img/portfolio/Web/celli.png', $scope.web, [5, 4] ],
    [ '../img/portfolio/Web/header.png', $scope.web, [7, 8] ]
  ]

  $scope.popup = false;
  $scope.arrayLength = $scope.data.length;

  $scope.fullImage = function(picture) {
    $scope.ind = picture;
    $scope.popup = true;
  }
  $scope.close = function() {
    $scope.popup = false;
  }
  $scope.keyClose = function(key) {
    console.log(key.keyCode);
    if (key.keyCode == 27) {
      $scope.popup = false;
    }
  }
  $scope.scrollPortfolio = function() {
    $('html, body').animate({
        scrollTop: $("div.portfolio").offset().top
    }, 1000);
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