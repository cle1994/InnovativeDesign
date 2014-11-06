app.factory('RequestService', ['$http', function($http) {
    return {
        send: function(request) {
            return $http.get('http://api.innovativedesign.club/api/requests/', request);
        }
    };
}]);