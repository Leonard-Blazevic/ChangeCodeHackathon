angular.module('myApp').controller('registrationController', function ($http, $window) {
    var vm = this;
    vm.data = {
        "Teamname": "",
        "Password": "",
        "Members": []
    };

    vm.submit = function () {
        $http({
            url: '/registration',
            method: 'POST',
            data: vm.data,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (success) {
            if (success.data.Errors.length == 0) {
                $window.location.href = "/login";
            } else {
                alert(JSON.stringify(success.data.Errors));
            }
        }, function (error) {

        });
    }
});