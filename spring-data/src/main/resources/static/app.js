function Table(props) {
    return '<table class="person" cellspacing="0" cellpadding="0">'+
			'<tr>'+
				'<th align="left">Name</th>'+
				'<th align="left">Age</th>'+
			'</tr>'+
			'<tr>'+
				'<td>{{person.name}}</td>'+
				'<td>{{person.age}}</td>'+
			'</tr>'+
		'</table>';
}

ReactDOM.render(
		'<Table/>',
		  document.getElementById('root')
		);


/*var personModule = angular.module('personApp', [ 'ngAnimate' ]);
personModule.controller('personController', personController);

function personController($scope, $http) {
	var urlBase = "api";
	$http.defaults.headers.post["Content-Type"] = "application/json";
	function findAll() {
		$http.get(urlBase + '/persons').success(function(data) {
			if (data._embedded != undefined) {
				$scope.persons = data._embedded.persons;
			} else {
				$scope.persons = [];
			}
		});
	}
	findAll();
}
*/