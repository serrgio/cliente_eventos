/* variáveis globais */
var app = angular.module('Eventos', ['ui.router','appFilereader','ui.bootstrap']);
var webservice = "http://localhost:8084/webservice/";

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })
        .state('sobre', {
            url: '/servicos',
            templateUrl: 'app/views/servicos.html',
            controller: 'SobreController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'loginController'
        })
        .state('cadpessoa', {
            url: '/cadpessoa',
            templateUrl: 'app/views/cadpessoa.html',
            controller: 'CadPessoaController'
        })
        .state('cadcategoria', {
            url: '/cadcategoria',
            templateUrl: 'app/views/cadcategoria.html',
            controller: 'CadCategoriaController'
        })
        .state('cadevento', {
            url: '/cadevento',
            templateUrl: 'app/views/cadevento.html',
            controller: 'CadEventoController'
        });        
});