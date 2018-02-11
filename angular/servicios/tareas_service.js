var app = angular.module('facturacionApp.tareas', []);

app.factory('Tareas', ['$http', '$q', function ($http, $q) {

    var self = {

        'tareas': [],
        cargarPagina: function () {
            var d = $q.defer();

            $http.get("http://localhost:3000/tareas?estado=false")
                .success(function(data){
                    self.tareas = data
                    return d.resolve();
                })
                .error(function(err){

                });

            return d.promise;
        }

    };

    return self;
}]);