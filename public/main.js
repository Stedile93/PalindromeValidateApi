var palindromeAPI = angular.module('palindromeAPI', []);

function mainController($scope, $http) {
    $scope.listInputs = [];

    $scope.verifyPalindromeInput = function() {

        $http.post("http://localhost:7000/api/palindrome", $scope.formPalindrome)
            .success(function(data, status) {
                $scope.formPalindrome = {};
                $scope.listInputs.push(data);
            })
            .error(function(data) {
                $scope.formPalindrome = {};
                $scope.listInputs.push(data);
            });

    };

}
