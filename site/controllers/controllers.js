angular
  .module("RFG2020", ["ngSanitize", "ngMasonry", "angular.filter"])
  .controller("Controller", function($scope, $sce, $window) {
    $scope.shortdates = [
      "Monday, October 26",
      "Tuesday, October 27",
      "Wednesday, October 28"
    ];
    $scope.eveningdates = [
      "Sunday, October 25",
      "Tuesday, October 27",
      "Thursday, October 29"
    ];

    $window.shortdates = $scope.shortdates;
    $window.myeveningdates = $scope.eveningdates;
    $scope.evening = [
      {
        id: 1,
        title: "Evening at Castello degli Schiavi",
        eveningdatetwo: $scope.eveningdates[1]
      },
      {
        id: 2,
        title: "Farewell Group Dinner",
        eveningdatethree: $scope.eveningdates[2]
      },
      {
        id: 3,
        title: "Welcome Dinner on the Beach",
        eveningdateone: $scope.eveningdates[0]
      }
    ];

    $scope.activities = [
      {
        id: 1,
        title: "Alcantara Area Buggy Tour",

        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      },
      {
        id: 2,
        title:
          "Classic Mount Etna by Cable car and four-wheel drive minivans with lunch at Gambino Winery",

        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      },

      {
        id: 3,
        title: "Catania and Cyclops Tour",

        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      },
      {
        id: 4,
        title: "Sicily&rsquo;s Old-World Beauty Tour",
        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      },
      {
        id: 5,
        title:
          "Spa Treatment at Belmond Villa Sant&rsquo;Andrea Wellness Centre",

        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      },

      {
        id: 6,
        title: "Syracuse and Ortigia  Adventure with lunch",

        days: "day3",
        timeday3: $scope.shortdates[2]
      },
      {
        id: 7,
        title: "Taormina Amazing Race",

        days: "day1",
        timeday1: $scope.shortdates[0]
      },
      {
        id: 8,
        title:
          "The Secret of Sicilian Cuisine (Villa Britannia cooking school)",

        days: "day2 day3",
        timeday2: $scope.shortdates[1],
        timeday3: $scope.shortdates[2]
      }
    ];
  });
