var UserService = angular.module('UserService',[]);
UserService.factory('UserService', function() {
  return {
      connected : false,
      name : ""
  };
});
