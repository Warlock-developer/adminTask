var app = angular.module('facturacionApp.tareasCtrl', []);


/*Controlador de tareas*/
app.controller('tareasCtrl', ['$scope', 'Tareas' ,function ($scope, Tareas) {

    $scope.activar('mTareas','','Tareas pendientes','Listado');
    $scope.tareas = {};

    Tareas.cargarPagina().then( function () {
        $scope.tareas = Tareas.tareas;
    });

}]);