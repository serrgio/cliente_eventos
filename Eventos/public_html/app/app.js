/* variáveis globais */
var app = angular.module('Eventos', ['ui.router','appFilereader','ui.bootstrap']);
var webservice = "http://localhost:8084/service_eventos/";
var Usuario = {id: null, nome: null, senha: null, email: null, dtNascimento: null, endereco: null, perfil:null};
var Endereco = {"id":null, "cep":null, "logradouro":null, "complemento":null, "bairro":null, "localidade":null, "uf": null};
var Categoria = {"id":null,"nome":null,"descricao":null,"dtCadastro":null};

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'Controller'
        })
        .state('sobre', {
            url: '/sobre',
            templateUrl: 'app/views/sobre.html',
            controller: 'Controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'Controller'
        })
        .state('cadpessoa', {
            url: '/cadpessoa',
            templateUrl: 'app/views/cadpessoa.html',
            controller: 'Controller'
        })
        .state('cadcategoria', {
            url: '/cadcategoria',
            templateUrl: 'app/views/cadcategoria.html',
            controller: 'Controller'
        })
        .state('cadevento', {
            url: '/cadevento',
            templateUrl: 'app/views/cadevento.html',
            controller: 'Controller'
        })        
        .state('meusdados', {
            url: '/meusdados',
            templateUrl: 'app/views/meusdados.html',
            controller: 'Controller'
        })
        .state('adm', {
            url: '/adm',
            templateUrl: 'app/views/adm.html',
            controller: 'Controller'
        });
});