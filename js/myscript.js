const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http) =>{
    $scope.title = "Stay home, stay safe";
    // $scope.lastName = "Doe";
    console.log("Hello World");
    $http.get(URL).then((response)=>{
        console.log(response.data);
        $scope.all_data = response.data;
    },(error)=>{
        console.log(error);
    });


    $scope.getCountryData = () =>{
        let country = $scope.country;
        if(country == ''){
            $scope.country_data = undefined;
            return;
        }
       $http.get(URL+"/countries/"+country).then(
           (response)=>{
                $scope.country_data = response.data;
               
           },(error)=>{
            console.log(error);
           }
       )
        
    }
    
}); 