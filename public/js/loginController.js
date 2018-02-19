angular.module('myApp').controller('loginController', function ($http,$window) {
    var vm = this;
    vm.data = {
        "Teamname": "",
        "Password": ""
    };

    vm.submit = function () {
        $http({
            url: '/login',
            method: 'POST',
            data: JSON.stringify(vm.data),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (success) {
            if (success.data.Errors.length == 0) {
                let data=JSON.parse(success.data.Result);
                $window.location.href = "/info?token="+data.AuthorizationToken+"&id="+data.TeamId;
            } else {
                alert(JSON.stringify(success.data.Errors));
            }
        }, function (error) {

        });
    }
});