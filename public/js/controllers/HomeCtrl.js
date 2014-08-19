innovativeDesign.controller('HomeController', function($scope, HomeService) {
  var facebookEvents = [];
  var i = 0;
  $scope.eventShow = false;
  $scope.fbevent;
  $scope.fbname;
  $scope.fbday;
  $scope.fbtime;
  $scope.fblocation;

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
        console.log($scope.eventShow);
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