(function(){
  'use strict'
   angular.module('LunchCheck',[])
   .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject = ['$scope','$filter'];
   function LunchCheckController($scope,$filter){
     $scope.listdishes = "";
     $scope.message = "";
     $scope.checkDishCount = function()
     {
       $scope.listdishes = $scope.listdishes.trim();

       if($scope.listdishes === "")
       {
         $scope.message = "Please enter data first";
       }
       else
       {
         var $dishItemArray = $scope.listdishes.split(",");
         var $dishLength = $dishItemArray.length;
         if ($dishLength<=3)
         {
           $scope.message = "Enjoy!";
         }
         else
          {
             $scope.message = "Too Much!";
          }
       }
       $scope.getStyle = function(message)
       {
          if(message == "Please enter data first")
            return {'color':'red'};
          if((message == "Enjoy!") || (message == "Too Much!"))
            return {'color':'green'};
      }
     };
   }

})();
