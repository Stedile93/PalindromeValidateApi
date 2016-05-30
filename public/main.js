var palindromeAPI = angular.module('palindromeAPI', []);

function mainController($scope, $http) {
    $scope.listInputs = [];

    $scope.verifyPalindromeInput = function() {

        //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        // $http({
        //        url: 'http://localhost:7000/api/palindrome',
        //        method: "POST",
        //        data: { 'value' : $scope.formPalindrome.value }
        //    })
        //    .then(function(response) {
        //        $scope.formPalindrome = {};
        //        $scope.listInputs = response;
        //        console.log(response);
        //    },
        //    function(response) { // optional
        //            // failed
        //    });

        // var settings = {
        //   "async": true,
        //   "crossDomain": true,
        //   "url": "http://localhost:7000/api/palindrome?value="+$scope.formPalindrome.value,
        //   "method": "POST"
        // }
        //
        // $.ajax(settings).done(function (response) {
        //     $scope.formPalindrome = {};
        //     $scope.listInputs = response;
        //     console.log(response);
        // }).error(function(data) {
        //     $scope.formPalindrome = {};
        //     $scope.listInputs = data;
        //     console.log(data);
        // });

        // $http({
        //     url: 'http://localhost:7000/api/palindrome',
        //     method: "POST",
        //     data: serialize('value=' + $scope.formPalindrome.value),
        //     headers: {'Content-Type': 'x-www-form-urlencoded; charset=UTF-8'}
        // }).success(function (data, status, headers, config) {
        //     $scope.formPalindrome = {};
        //     $scope.listInputs = data;
        //     console.log(data);
        //
        // }).error(function (data, status, headers, config) {
        //     console.log('Error: ' + data);
        // });


        console.log($scope.formPalindrome)

        $http.post("http://localhost:7000/api/palindrome", $scope.formPalindrome)
            .success(function(data, status) {
                $scope.formPalindrome = {};
                $scope.listInputs.push(data);
                console.log(data);
            })
            .error(function(data) {
                $scope.formPalindrome = {};
                $scope.listInputs.push(data);
                console.log(data);
            });

    };

}
