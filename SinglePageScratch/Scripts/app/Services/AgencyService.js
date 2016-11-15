agencyManager.service('agencyService', ['$http', '$q', function ($http, $q) {

    var agencyService = {};

    agencyService.getAll = function () {
        return $http.get('/api/agency');
    }

    return agencyService;

}]);