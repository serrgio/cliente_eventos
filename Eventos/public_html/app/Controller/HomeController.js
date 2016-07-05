/* global app */

app.controller('HomeController', ["$scope", function ($scope, $state, $http) {
        $scope.head = {
            titulo: "iEventos",
            lstMenu: [
                {
                    titulo: "",
                    link: ""
                }
            ]
        };
        $scope.footer = {
            titulo: "iEventos",
            copright: ""
        };
        $scope.getLstEventos = function () {

        };
    }]);