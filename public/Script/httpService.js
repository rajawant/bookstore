var myApp=angular.module('myModule',[])
					.controller('myController', function($scope,$http){
						$http.get('/api/books/')
							.then(function(response){
								$scope.books=response.data;							
						});
					});