/* global app */

app.controller('CadCategoriaController', ["$scope", function ($scope, $state, $http) {
        $scope.token = sessionStorage.getItem("token");
        if ($scope.token !== null) {
            $scope.insertCategoria = function () {

            };
            $scope.updateCategoria = function () {

            };
            $scope.getCategoria = function () {

            };
            $scope.deleteCategoria = function () {

            };
        } else {
            $state.go('login');
        }
    }]);