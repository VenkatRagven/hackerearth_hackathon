hackerHack.controller("homeController", ['$scope', '$http', '$window', '$timeout', '$location', '$anchorScroll',
    '$stateParams', '$state',
    '$filter',
    function ($scope, $http, $window, $timeout,
        $location, $anchorScroll, $stateParams,
        $state, $filter) {

        //alert('inside controller');
        //$scope.scoreData = {};
        $scope.quantity = [1,1,1,1,1,1,1,1];
  
  
      $scope.Increment = function(index) {
        if(!$scope.quantity[index]) {
          $scope.quantity[index] = 0;
        }
        $scope.quantity[index]++;
      };

      $scope.Decrement = function(index) {
        if(!$scope.quantity[index]) {
          $scope.quantity[index] = 0;
        }
        $scope.quantity[index]--;
      };

        console.log('loading controller');
        $http.get("resources/data.json").then(function (response) {
            console.log(response);
            $scope.myData = response.data.Data;
            // $scope.output = {};
            // $scope.myData.forEach(function (entry) {
            //     var language = entry.language;
            //     if (language) {
            //         var count = $scope.output[language];
            //         if (!count) {
            //             count = 0;
            //         }
            //         $scope.output[language] = count + 1;
            //     }
            // });
        });

        $scope.getTotal = function(){
        var qty = document.getElementById("qty").value;
        var total = 0;
            for(var i = 0; i < $scope.myData.length; i++){
                var product = $scope.myData[i];
                total += (product.price );
            }
            return total;
        }

    }
]);





