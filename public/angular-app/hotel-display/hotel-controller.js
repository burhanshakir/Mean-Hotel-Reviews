angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route,$window,hotelDataFactory, $routeParams){
  var vm = this;
  var params = $routeParams.id;

  hotelDataFactory.hotelDisplay(params).then(function(response) {
    console.log(response);
    vm.hotel = response.data;
    vm.stars = _getStarRating(response.data.stars);
  });

  function _getStarRating(stars) {

    return new Array(stars);

  }

  vm.addReview = function() {

    // var token = jwtHelper.decodeToken($window.sessionStorage.token);
    // var username = token.username;

    var postData = {
      name: 'Burhan',
      rating: vm.rating,
      review: vm.review
    };

    if (vm.reviewForm.$valid) {
      hotelDataFactory.postReview(params, postData).then(function(response) {
        console.log(response);
        if (response.status === 201) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };
}
