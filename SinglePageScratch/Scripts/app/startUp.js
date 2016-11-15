agencyManager = angular.module('agencyManager', ['ngComponentRouter'])
.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});