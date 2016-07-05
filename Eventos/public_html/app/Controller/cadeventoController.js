/* global app */

app.controller('CadEventoController', ["$scope", function ($scope, $state, $http) {
        $scope.token = sessionStorage.getItem("token");
        if ($scope.token !== null) {
            $scope.insertEvento = function () {

            };
            $scope.updateEvento = function () {

            };
            $scope.getEvento = function () {

            };
            $scope.deleteEvento = function () {

            };
        } else {
            $state.go('login');
        }
    }]);