angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($http, $routeParams){
  var vm = this;
  var params = $routeParams.id;

  $http.get('/api/hotels/' + params).then(function(response) {
    console.log(response);
    vm.hotel = response.data;
  });
}
