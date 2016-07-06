/* global app, webservice, Usuario */

app.controller('LoginController', ["$scope", function ($scope, $state, $http) {
        $scope.usuario = Usuario;
        $scope.enviarLogin = function () {
            var strUsuario = JSON.stringify($scope.usuario);
            $http.post(webservice + 'login', strUsuario).success(function (data) {
                sessionStorage.setItem("token", data);
                $state.go('');
            }).error(function () {
                $state.go('login');
            });
        };
    }]);