console.log(angular)

angular.module('Zordon', [ ])


angular.module('Zordon')
    .controller('alpha', [ 
        '$scope', '$http', alphaCtrl
    ]);
    
     function alphaCtrl($scope , $http){
        
      $scope.fightPutty = function() {
        console.log('putty dissapears');
        $scope.greeting = "Welcome to the command center";

    }  
    
    $scope.showMe = false;
    
    $scope.clickList = function() {
        $scope.showMe = !$scope.showMe;
    
    }

    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }   
                
    }
   
    
   