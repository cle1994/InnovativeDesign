app.factory('RequestService', ['$http', function($http) {
    return {
        send: function(requestData) {
            return $http.post('http://api.innovativedesign.club/api/requests', requestData);
        }
    };
}]);
