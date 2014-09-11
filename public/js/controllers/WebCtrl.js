// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

innovativeDesign.controller('WebController', function($scope) {

  $scope.submitted = false;

  $scope.googleSheet = function() {
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
  };

});