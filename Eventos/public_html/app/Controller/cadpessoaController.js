/* global app, Usuario, webservice */


app.controller('CadPessoaController', function ($scope, $state, $http) {
    $scope.usuario = Usuario;
    $scope.insertPessoa = function () {
        var strUsuario = JSON.stringify($scope.usuario);
        $http.post(webservice + 'usuario/insert', strUsuario).success(function (data) {
            sessionStorage.setItem("token", data);
            $state.go('login');
        }).error(function () {
            $state.go('cadpessoa');
        });
    };
    $scope.updatePessoa = function () {

    };
    $scope.getPessoa = function () {

    };
    $scope.deletePessoa = function () {

    };
});

