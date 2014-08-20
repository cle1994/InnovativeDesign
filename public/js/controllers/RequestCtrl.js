innovativeDesign.controller('RequestController', function($scope) {
  $('#date').datetimepicker({
    pickTime: false
  });

  $scope.submitted = false;

  // url = https://docs.google.com/forms/d/1Zf9M66jjuY7yJ3PTKJP4oUDwXcvri-pS7I2LEltPSJQ/formResponse
  // Service Type = entry.974201369
  // Organization Name = entry.1441180541
  // Contact Name = entry.1340590017
  // Contact Phone = entry.1207355047
  // Contact Email = entry.707655010
  // Organization Info = entry.1750538565
  // Organization Type = entry.772251149
  // Additional Info = entry.1573531540
  // Proposed Deadline = entry.1166413721
  // Sketch = entry.1974570456

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