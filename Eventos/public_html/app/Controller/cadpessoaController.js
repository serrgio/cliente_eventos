/* global app */

app.controller('CadPessoaController', ["$scope", function ($scope, $state, $http) {
        $scope.token = sessionStorage.getItem("token");
        if ($scope.token !== null) {
            $scope.insertPessoa = function () {

            };
            $scope.updatePessoa = function () {

            };
            $scope.getPessoa = function () {

            };
            $scope.deletePessoa = function () {

            };
        } else {
            $state.go('login');
        }
    }]);

