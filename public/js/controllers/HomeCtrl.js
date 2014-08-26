innovativeDesign.controller('HomeController', function($scope, HomeService) {
  var facebookEvents = [];
  var i = 0;
  $scope.eventShow = false;
  $scope.fbevent;
  $scope.fbname;
  $scope.fbday;
  $scope.fbtime;
  $scope.fblocation;

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

  var getDate = function(date) {
    var arr = date.split('-');
    var month;
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
  };
  var getTime = function(time) {
    var arr = time.split(':');
    var hour;
    var designation = 'am';
    if (arr[0] >= 12) {
      designation = 'pm'
    }
    if (arr[0] > 12) {
      hour = (parseInt(arr[0]) - 12).toString();
    } else {
      hour = arr[0].toString();
    }
    return hour + ':' + arr[1] + ' ' + designation;
  }
  var interval = function() {
    setInterval(function() {
      i = (i + 1) % facebookEvents.length;
      $scope.$apply(function() {
        $scope.fbevent = facebookEvents[i];
        $scope.fbname = $scope.fbevent.name;
        $scope.fbday = getDate($scope.fbevent.start_time.substring(0,10));
        $scope.fbtime = getTime($scope.fbevent.start_time.substring(11,16));
        $scope.fblocation = $scope.fbevent.location;
        $scope.eventShow = true;
      })
    }, 5000);
  };
  var routeFbCall = function() {
    facebookEvents = HomeService.get();
    $scope.fbevent = facebookEvents[i];
    if ($scope.fbevent) {
      $scope.fbname = $scope.fbevent.name;
      $scope.fbday = getDate($scope.fbevent.start_time.substring(0,10));
      $scope.fbtime = getTime($scope.fbevent.start_time.substring(11,16));
      $scope.fblocation = $scope.fbevent.location;
      interval();
      $scope.eventShow = true;
    } else {
      $scope.eventShow = false;
    }
  }
  var fbcall = function() {
    FB.api(
      "/118333034872164/events?access_token=CAAUzUVdRbZAcBACFfGkQ4NgbywC4gW5KZAlWuggoKz1emZCRsTaaCkRaw2TLkFvrtwiGLr8PTkj2ZAy16bhmhVn440HlODvcp2ZABbuZC8ZBZCCB44Rtvhm7JlTYc0nOk1XXrnldCP3CIeY2UIdv4VPkWpKFCbPovQUZCkXFKa6Po4hoPAKUHShIWtZB7YHJ5VPXRXYSMYldZB3q2E75eGH3pXx&since=1389953321",
      function(response) {
        $scope.$apply(function() {
          HomeService.set(response.data);
          facebookEvents = response.data;
          $scope.fbevent = facebookEvents[i];
          $scope.fbname = $scope.fbevent.name;
          $scope.fbday = getDate($scope.fbevent.start_time.substring(0,10));
          $scope.fbtime = getTime($scope.fbevent.start_time.substring(11,16));
          $scope.fblocation = $scope.fbevent.location;
          $scope.eventShow = true;
          interval();
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

  if (facebookEvents.length == 0) {
    routeFbCall();
  }
});