(function () {

    var agencyManager = angular.module("agencyManager");

    agencyManager.component('agency', {
        bindings: {},
        templateUrl: '/Scripts/app/views/agency.html',
        controllerAs: 'ctrl',
        controller: ['$scope', 'agencyService',
          function ($scope, agencyService) {
              var ctrl = this;

              ctrl.agencies = [];
              ctrl.msg = 'agency view component rendered correctly';

              ctrl.$routerOnActivate = function () {
                  ctrl.load();
              }

              ctrl.load = function () {
                  var _agencies = agencyService.getAll();
                  _agencies.then(function (response) {
                      ctrl.agencies = response.data;
                  },
                  function (error) {
                      console.log('error occured retrieving agencies: ' + error);
                  });
              }
          }
        ],
    });
})();