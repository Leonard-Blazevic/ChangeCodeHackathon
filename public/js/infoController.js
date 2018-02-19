angular.module('myApp').controller('infoController', function ($scope, $http, $window) {
    var vm = this;
    vm.data = {};
    let query = [];
    query = $window.location.search.split('&');
    query[0] = query[0].split('?token=');
    query[1] = query[1].split('id=');
    getData = function () {
        $http({
            method: 'GET',
            url: '/info/' + query[0][1] + '/' + query[1][1]
        }).then(function successCallback(response) {
            if (response.data.Errors.length == 0) {
                vm.data = JSON.parse(response.data.Result);
            } else {
                alert(JSON.stringify(response.data.Errors));
            }
        }, function errorCallback(response) {
            console.log("Error!");
        });
    };

    getData();
});