var app = angular.module('adminTareasApp', [
    'ngRoute',
    'adminTareasApp.configuracion',
    'facturacionApp.tareas',
    'facturacionApp.tareasCtrl'
]);


app.controller('mainCtrl', [
    '$scope',
    'Configuracion',
    function ($scope, Configuracion ) {

    $scope.config = {};

    $scope.titulo = "";
    $scope.subtitulo = "";

    $scope.usuario = {
        nombre: "Miguel Sanchez"
    }

    Configuracion.cargar().then( function(){
        $scope.config = Configuracion.config
    });

    /*Functiones del scope*/
    $scope.activar = function ( menu, submenu, titulo, subtitulo ) {

        $scope.titulo = titulo;
        $scope.subtitulo = subtitulo;

        $scope.mDashboard = "";
        $scope.mClientes = "";

        $scope[menu] = 'active';
    }

}]);


// Enrutador
app.config([ '$routeProvider', function ($routeProvider) {

    $routeProvider
        /*.when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })*/
        .when('/tareas', {
            templateUrl: 'tareas/tareas.html',
            controller: 'tareasCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

}]);


// Filtros
app.filter('quitarletra', function () {
   return function(palabra) {
       if (palabra) {
           if (palabra.length > 1) {
               return palabra.substr(1)
           } else {
               return palabra
           }
       }
   }
})

.filter('mensajecorto', function () {
    return function(mensaje) {
        if (mensaje) {
            if (mensaje.length > 30) {
                return mensaje.substr(0,30) + '...'
            } else {
                return mensaje
            }
        }
    }
});



