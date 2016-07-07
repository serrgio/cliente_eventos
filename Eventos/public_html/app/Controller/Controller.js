/* global app, Usuario, webservice, calcMD5, Endereco, Categoria, Evento, EnderecoEvento, Foto */


app.controller('Controller', function ($scope, $state, $http) {
    $scope.usuario = Usuario;
    $scope.usuario.endereco = Endereco;
    $scope.evento = Evento;
    $scope.evento.foto = Foto;
    $scope.evento.Endereco = EnderecoEvento;

    $scope.lstcategorias = function () {
        $http.get(webservice + 'evento/getLstCategorias').success(function (data) {
            $scope.categorias = data;
        }).error(function () {
        });
    };

    $scope.getLstEventos = function () {

    };

    $scope.insertCategoria = function () {
        var strCategoria = JSON.stringify($scope.categoria);
        $http.post(webservice + 'evento/insertCategorias', strCategoria).success(function () {
            $state.go('adm');
        }).error(function () {
            $state.go('cadcategoria');
        });
    };
    $scope.updateCategoria = function () {

    };

    $scope.deleteCategoria = function () {

    };
    $scope.insertEvento = function () {
        $scope.evento.idUsuario = $scope.usuario.id;
        var strEvento = JSON.stringify($scope.evento);
        $http.post(webservice + 'evento/insert', strEvento).success(function () {
            $state.go('adm');
            getEvento();
        }).error(function () {
            $state.go('cadevento');
        });
    };
    $scope.updateEvento = function () {

    };
    $scope.getEvento = function () {
        $http.get(webservice + 'evento/getLst').success(function (data) {
            $scope.lsteventos = data;
        }).error(function () {
        });
    };
    $scope.deleteEvento = function () {

    };

    $scope.logoff = function () {
        window.sessionStorage.clear();
        $state.go('home');
    };

    $scope.enviarLogin = function () {
        var senha = calcMD5($scope.usuario.senha).toUpperCase();
        $scope.usuario.senha = senha;
        var strUsuario = JSON.stringify($scope.usuario);
        $http.post(webservice + 'usuario/login', strUsuario).success(function (data) {
            sessionStorage.setItem("token", data);
            loadPessoa(data);
            $state.go('adm');
        }).error(function () {
            $state.go('login');
        });
    };
    loadPessoa = function (token) {
        var objToken = {"valor": token};
        var strToken = JSON.stringify(objToken);
        $http.post(webservice + 'usuario/buscar', strToken).success(function (data) {
            $scope.usuario = data;
            $state.go('meusdados');
        }).error(function () {
            $state.go('adm');
        });
    };
    
    $scope.insertPessoa = function () {
        var senha = calcMD5($scope.usuario.senha).toUpperCase();
        $scope.usuario.senha = senha;
        var strUsuario = JSON.stringify($scope.usuario);
        $http.post(webservice + 'usuario/insert', strUsuario).success(function () {
            $state.go('login');
        }).error(function () {
            $state.go('cadpessoa');
        });
    };
    $scope.updatePessoa = function () {
        var strUsuario = JSON.stringify($scope.usuario);
        $http.post(webservice + 'usuario/update', strUsuario).success(function () {
            $state.go('cadpessoa');
        }).error(function () {
            $state.go('cadpessoa');
        });
    };
    $scope.getPessoa = function () {
        var token = {"valor": sessionStorage.getItem("token")};
        var strToken = JSON.stringify(token);
        $http.post(webservice + 'usuario/buscar', strToken).success(function (data) {
            $scope.usuario = data;
            $state.go('meusdados');
        }).error(function () {
            $state.go('adm');
        });
    };
    $scope.deletePessoa = function () {
        var token = {"valor": sessionStorage.getItem("token")};
        var strToken = JSON.stringify(token);
        $http.post(webservice + 'usuario/delete', strToken).success(function () {
            $state.go('home');
        }).error(function () {
            $state.go('adm');
        });
    };
});

