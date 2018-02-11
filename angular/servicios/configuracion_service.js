var app = angular.module('adminTareasApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function ($http, $q) {

    var self = {

        config: {},
        cargar: function () {

            var d = $q.defer();

            $http.get('configuracion.json')
                .success(function (data) {
                    self.config = data;
                    d.resolve();
                })
                .error(function () {
                    console.log('No se pudo cargar el archivo de configuración');
                    d.reject();
                });

            return d.promise;
        }

    }

    return self;
}]);