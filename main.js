//$('#user-email').on('input',function() {
        //var email = $('#user-email').val()
        //var message = 'Welcome Back, ' + email;
        //$('.welcome-message').text(message);
    //});
	
	var foodieApp = angular.module('foodieApp',['ngRoute']);   // initialize our Angular app and ngRoute module helps  application to become a Single Page Application.
	                                                           // function is called angular.module() - it helps us add a list of modules that our app is dependent on
	console.log(foodieApp);                                     
	
	
	foodieApp.config(function ($routeProvider) {    //.config() is a function that allows us to set-up our app 
	$routeProvider        //$routeProvider is an object defined in ngRoute,It allows us to set-up routes
	.when('/',{         //when() function defined in the $routeProvider object
		templateUrl: 'pages/login.html',  // The first parameter :- URL of the route
		controller: 'loginController'
	})
	.when('/home',{                         //$routeProvider.when().when() :- it is concept of Chaining
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'aboutcontroller'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
	
	
	foodieApp.controller('mainController',function($scope) {                    
	                                                       //using controllers, we divide our application into different parts
														   //control for main.html

	$scope.restaurants = [{            //$scope is the Model part of the MVC
	                                   //it is an object to which we can add a list of properties and functions
	name: 'The Saffron Restaurant',
	address: 'MDR 7, Dist Solan, Baddi, Himachal Pradesh 173205',
	location: 'Baddi,himachal pradesh',
	category: 'Casual Good For Kids',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '200',
	id: '1',
	hours: '10 AM to 10PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOonmAAjwhEObkf2aqzRpf938VbRC2ykcvd9WRiU13NO_-mcd'
                         },
						 
	{
	name: 'The Big Chef',
	address: 'Near Amartex, Baddi, Sai Rd',
	location: 'Baddi,himachal pradesh',
	category: 'Casual, Groups',
	vote: '5.0',
	cuisines: 'North Indian',
	cost: '400',
	id: '2',
	hours: '9 AM to 10PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
                         },
	{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id: '3',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?h=350&auto=compress&cs=tinysrgb'
                         },
	{
	name: 'Bukhara',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'New Delhi, Delhi',
	category: 'Cosy Good For Kids',
	vote: '4.4',
	cuisines: 'Modern Indian',
	cost: '2000',
	id: '4',
	hours: '12 Noon to 11:30 PM (Mon-Sun)',
	image: 'https://cdn.pixabay.com/photo/2014/10/22/17/45/sandwich-498379_960_720.jpg'
                         },
	{
	name: 'Indian Accent',
	address: '77, Friends colony West, New Delhi, Delhi 110065',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.6',
	cuisines: 'South Indian',
	cost: '5000',
	id: '5',
	hours: ' 12–2:30PM, 7–11:30PM',
	image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?h=350&auto=compress&cs=tinysrgb'
                         },
	{
	name: 'The Great Indian Thali',
	address: '612/1, Lotus Building, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
	location: 'Bengaluru, Karnataka',
	category: 'All you can eat · Quiet · Casual',
	vote: '4.2',
	cuisines: 'Vegetarian',
	cost: '3200',
	id: '6',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_BaconBaconCheeseburger.jpg'
                         },
	{
	name: 'Oriental Octopus',
	address: '5th Floor, India Habitat Centre, Lodi Road, New Delhi, Delhi 110003',
	location: 'Connaught Place',
	category: 'Casual , Good for kids , Groups',
	vote: '3,8',
	cuisines: 'Chinese',
	cost: '1500',
	id: '7',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh4i8pKvrDvW2i1iW7ouqppFNykJ1hKQ_tIB_KtClPt3MifiF'
                         },
	{
	name: 'Desi Khana',
	address: 'rajendra nagar,patna Bihar',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id: '8',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://wowreads.com/wp-content/uploads/2016/01/biryani-1024x647.jpg'
                         }]
	
	
 })

 
 
foodieApp.controller('loginController',function($scope,$location) {
	                                                               //using controllers, we divide our application into different parts
														   //control for login.html
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home'); //change the url of the browser to the 'home' route
	}	
})

foodieApp.controller('aboutcontroller',function($scope,$location) {
	                                                              //control for about.html
	$scope.about = function() {
		// console.log('Do Something')
		$location.url('about'); //change the url of the browser to the 'About' route
	}	
})


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	                                                                           //control for restaurant.html
																			   //The $http object that AngularJS provides make it easy to use the functionality of making																			   HTTP requests without jQuery
	$scope.restaurantId = $routeParams.id;
	var diabetes=['sweet', 'chocolate', 'brownie', 'rice', 'french fries', 'pasta', 'cookies', 'chicken', 'nachos', 'pie', 'yogurt','smoothie',
	               'hamburger','cake','pizza','muffins','eggs','nuts','beer','soda','croissants','butter','lard']
				                     
									 //create a variable which contains the item which is harmful for diabetes patient
									 
	var restaurants = [{
	name: 'The Saffron Restaurant',
	address: 'MDR 7, Dist Solan, Baddi, Himachal Pradesh 173205',
	location: 'Baddi,himachal pradesh',
	category: 'Casual Good For Kids',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '200',
	id: '1',
	bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOonmAAjwhEObkf2aqzRpf938VbRC2ykcvd9WRiU13NO_-mcd'
              },
	hours: '10 AM to 10PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOonmAAjwhEObkf2aqzRpf938VbRC2ykcvd9WRiU13NO_-mcd'
                         },
						 
	{
	name: 'The Big Chef',
	address: 'Near Amartex, Baddi, Sai Rd',
	location: 'Baddi,himachal pradesh',
	category: 'Casual, Groups',
	vote: '5.0',
	cuisines: 'North Indian',
	cost: '400',
	id: '2',
	bestDish: {
	name: 'maize dishes',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
              },
	hours: '9 AM to 10PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
                         },
	{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id: '3',
	bestDish: {
	name: 'pasta',
	image: 'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?h=350&auto=compress&cs=tinysrgb'
              },
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?h=350&auto=compress&cs=tinysrgb'
                         },
	{
	name: 'Bukhara',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'New Delhi, Delhi',
	category: 'Cosy Good For Kids',
	vote: '4.4',
	cuisines: 'Modern Indian',
	cost: '2000',
	id: '4',
	hours: '12 Noon to 11:30 PM (Mon-Sun)',
	bestDish: {
	name: 'raw fish dishes',
	image: 'https://cdn.pixabay.com/photo/2014/10/22/17/45/sandwich-498379_960_720.jpg'
              },
	image: 'https://cdn.pixabay.com/photo/2014/10/22/17/45/sandwich-498379_960_720.jpg'
                         },
	{
	name: 'Indian Accent',
	address: '77, Friends colony West, New Delhi, Delhi 110065',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.6',
	cuisines: 'South Indian',
	cost: '5000',
	id: '5',
	bestDish: {
	name: 'Corn Pizza',
	image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?h=350&auto=compress&cs=tinysrgb'
              },
	hours: ' 12–2:30PM, 7–11:30PM',
	image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?h=350&auto=compress&cs=tinysrgb'
                         },
	{
	name: 'The Great Indian Thali',
	address: '612/1, Lotus Building, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
	location: 'Bengaluru, Karnataka',
	category: 'All you can eat · Quiet · Casual',
	vote: '4.2',
	cuisines: 'Vegetarian',
	cost: '3200',
	id: '6',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
	name: 'pasta',
	image: 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_BaconBaconCheeseburger.jpg'
              },
	image: 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_BaconBaconCheeseburger.jpg'
                         },
	{
	name: 'Oriental Octopus',
	address: '5th Floor, India Habitat Centre, Lodi Road, New Delhi, Delhi 110003',
	location: 'Connaught Place',
	category: 'Casual , Good for kids , Groups',
	vote: '3,8',
	cuisines: 'Chinese',
	cost: '1500',
	id: '7',
	bestDish: {      //bestDishis an object
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh4i8pKvrDvW2i1iW7ouqppFNykJ1hKQ_tIB_KtClPt3MifiF'
              },
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh4i8pKvrDvW2i1iW7ouqppFNykJ1hKQ_tIB_KtClPt3MifiF'
                         },
	{
	name: 'Desi Khana',
	address: 'rajendra nagar,patna Bihar',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id: '8',
	bestDish: {
	name: 'rice dishes',
	image: 'http://wowreads.com/wp-content/uploads/2016/01/biryani-1024x647.jpg'
              },
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://wowreads.com/wp-content/uploads/2016/01/biryani-1024x647.jpg'
                         }]
	$scope.restaurant = restaurants[$routeParams.id - 1];   //storing the value of the restaurant in the ith position in $scope.restaurant
	                                                        // array index start from 0, hence the -1
	 
	console.log($scope.restaurant);
	
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({         //we'll have to send a HTTP request - we'll use Clarifai here
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key e6275dabd63f4d7299f4623aef877772', //api key
			'Content-Type': 'application/json'
		},
		'data': data,
	}).then(function success(response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredients = [];
			$scope.ingredient_list=[];
			console.log(response);
			
  			for (var i =0;i < ingredients.length;i++) {
			$scope.ingredients.push(ingredients[i].name);
			}
			for(var j=0;j< $scope.ingredients.length;j++)
			{
				if(ingredients[j].value>0.7)
				{
					$scope.ingredient_list.push(ingredients[j].name);
				}
			}
			for(var k=0;k<$scope.ingredient_list.length;k++)
			{
			var x=diabetes.indexOf($scope.ingredient_list[k]);
			console.log(x);
			
					if(x>=0)
					{
						$scope.msg = "This food is not for diabetes patient";
					}
					else{
												$scope.msg = "This food is for diabetes patients also";
					}
			}
			
    		// $('.ingredients').html(list);
			
        }, function error(xhr) {
        	console.log(xhr);
        });
	
     
}
})