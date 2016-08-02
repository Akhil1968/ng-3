angular.module('inbuiltServices', [])
.controller('InbuiltServicesCotroller', ['$http', function($http) {
    var self = this;
    self.content = "Click submit to bring content from server";

    self.submit = function(){
        console.log("Submit clicked");
        $http({method: 'get',
            url: '/data' 
        }).then( function successFn(response) {
            //this function handles success
            self.content =   response.data; //JSON.stringify(response.data);
            console.log("Data received from server is [%s]", response.data);
        }, function errorFn(response) {
            //this function handles error
            self.content = "Something went wrong";
        });
    };

    
}]);
