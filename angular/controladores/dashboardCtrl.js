var app = angular.module('facturacionApp.dashboardCtrl', []);


/*Controlador de dashboard*/
app.controller('dashboardCtrl', ['$scope', function ($scope) {

    $scope.activar('mDashboard','','Dashboard','Informacion');

}]);