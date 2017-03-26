// $scopeに様々なプロパティを設定すると、それがhtmlの方で使える

var todayCtrl = function($scope) {
  $scope.today = new Date();
}

var mainCtrl = function($scope) {
  $scope.users = [
    {"name":"taguchi", "score": 8.44},
    {"name":"yoshida", "score": 11.66},
    {"name":"tanaka",  "score": 13.55},
    {"name":"kaneko",  "score": 14.33},
    {"name":"matsui",  "score": 17.88},
  ];

  $scope.addUser = function($scope) {
    alert("name & score:" + myForm.name.value + "/" +  myForm.score.value);
  }
}


var UserItemCtrl = function($scope) {
  $scope.increment = function() {
    $scope.user.score++;
  }
}