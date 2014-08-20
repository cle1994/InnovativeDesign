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
    var url = '';
    if ($scope.sketch) {
      url = $scope.sketch;
    }
    $.ajax({
      crossDomain: true,
      url: 'https://docs.google.com/forms/d/1Zf9M66jjuY7yJ3PTKJP4oUDwXcvri-pS7I2LEltPSJQ/formResponse',
      data: {
        'entry.974201369': $scope.serviceType,
        'entry.1441180541': $scope.orgName,
        'entry.1340590017': $scope.contactName,
        'entry.1207355047': $scope.contactNum,
        'entry.707655010': $scope.contactEmail,
        'entry.1750538565': $scope.orgInfo,
        'entry.772251149': $scope.orgType,
        'entry.1573531540': $scope.addInfo,
        'entry.1166413721': $scope.date,
        'entry.1974570456': $scope.sketch
      },
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function() {
          $scope.submitted = true;
        },
        200: function() {
          $scope.submitted = true;
        }
      }
    });
  };
});