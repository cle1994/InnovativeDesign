app.controller('RequestController', ['$scope', '$state', '$stateParams', '$timeout', '$http', function($scope, $state, $stateParams, $timeout, $http) {
    $scope.submitted = false;
    $scope.isError = false;
    $scope.done = false;
    $scope.typeSelected = false;
    $scope.dateText = 'Proposed Deadline - please give us at least 2 weeks advance notice!';
    $scope.infoText = 'Describe your project';
    $scope.infoPlaceholder = 'Any color preferences? Do you want a t-shirt, logo, poster? What do you want in your design?';
    $scope.response = 'We\'ve received your request! Look for an email from our VP of Design Services soon.';
    $scope.timer = 10;

    $scope.select = function(serviceType) {
        $scope.service = serviceType;
        $scope.typeSelected = true;

        if (serviceType === 'Photography' || serviceType === 'Videography') {
            $scope.dateText = 'Proposed time and location of your shoot';
            $scope.infoText = 'Request details';
            $scope.infoPlaceholder = 'Please describe your request in detail here. What type of work do you need? For example, headshots, portraits, event photography, etc. Link sample images if necessary.';
            $scope.response = 'We\'ve received your request! Look for an email from our VP of Photo Services soon.';
        }
    };

    $scope.timeRefresh = function() {
        $scope.timer -= 1;

        if ($scope.timer === 0) {
            $scope.refresh();
        }

        $timeout($scope.timeRefresh, 1000);
    };

    $scope.refresh = function() {
        $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
    };

    $scope.send = function() {
        var dict = {
            serviceType: $scope.service,
            orgName: $scope.organization,
            contactName: $scope.contact,
            contactNum: $scope.number,
            contactEmail: $scope.email,
            orgType: $scope.campus,
            orgInfo: $scope.orgInfo,
            addInfo: $scope.addInfo,
            date: $scope.date,
            sketch: $scope.sketch,
            eventDesc: $scope.eventDesc
        };

        $scope.submitted = true;

        var errorf = function() {
            $scope.done = true;
            $scope.isError = true;
            $scope.timeRefresh();
            $scope.response = 'We\'re sorry but there was a problem the request. Please try again!';
        };

        var successf = function() {
            $scope.done = true;
            $scope.timeRefresh();
        };

        $http({
                method: 'POST',
                url: $scope.service !== 'Photography' ? 'https://script.google.com/macros/s/AKfycbxdojPHoUa20lgOmGHn7P1hRlruqY8XBtUgoXwgXkSehIwFs9ro/exec' : 'https://script.google.com/macros/s/AKfycbxdmUKA9w4RODF3R45d2sYMzDVP8xNSxgEbAJxw-o5nu1kMRmE/exec',
                data: dict
            })
            .success(successf)
            .error(errorf);
    };

  // $scope.googleSheet = function() {
  //   var serializedData = $('.request').serialize();
  //   $scope.loading = true;
  //   $scope.submitted = true;

  //   $.ajax({
  //     url: 'https://script.google.com/macros/s/AKfycbzr86BBj3C_i8m2dm_Erdsy7-T-afJAdd4WcLDP8uKWVjOoYTFg/exec',
  //     type: 'POST',
  //     data: serializedData
  //   })
  //   .done(function() {
  //     $scope.$apply(function() {
  //       $scope.submitted = true;
  //       $scope.loading = false;
  //     })
  //   })
  //   .fail(function() {
  //     $scope.$apply(function() {
  //       $scope.submitted = true;
  //       $scope.loading = false;
  //     })
  //   });
  // };


  //   $scope.isError = false;
  //   $scope.response = null;
  //   $scope.typeSelected = false;
  //   $scope.typeTitle = 'Design';
  //   $scope.dateText = 'Proposed Deadline';
  //   $scope.submitted = false;
  //   $scope.done = false;
  //   $scope.response = 'We\'ve received your request! Look for an email from our VP of Design Services soon.';
  //   $scope.timer = 10;

  //   $scope.select = function(type) {
  //       $scope.typeSelected = true;
  //       $scope.typeTitle = type;

  //       if (type === 'Photography' || type === 'Videography') {
  //           $scope.dateText = 'Proposed Shoot Date';
  //       }
  //   };



  //   $scope.send = function() {
  //       var newRequest = {
  //           service: $scope.typeTitle,
  //           organization: $scope.organization,
  //           campus: $scope.campus,
  //           contact: $scope.contact,
  //           number: $scope.number,
  //           email: $scope.email,
  //           orgInfo: $scope.orgInfo,
  //           addInfo: $scope.addInfo,
  //           date: $scope.date,
  //           time: $scope.time,
  //           sketch: $scope.sketch
  //       };

  //       $scope.submitted = true;

  //       RequestService.send(newRequest)
  //           .success(function(data) {
  //               $scope.isError = false;
  //               $scope.done = true;
  //               $scope.timeRefresh();
  //           })
  //           .error(function(data) {
  //               $scope.done = true;
  //               console.log('Error: ' + data);
  //               $scope.isError = true;
  //               $scope.response = 'We\'re sorry but there was a problem the request. Please try again!';
  //               $scope.timeRefresh();
  //           });
  //   };
}]);
