var app = angular.module("portfolioApp", []);

app.controller("appController", ($scope) => {

$scope.fullName = "JOEL ANTO";

$scope.aboutMe = "Programming enthusiast with robust problem solving skills. Constant learner with a quick grasp of new technologies and who embraces challenges as opprotunities to learn and grow.";

$scope.thumbNails = ["aurora.jpg","startrail.jpg","milkyway.jpg"];

$scope.emailID = "joelantochan@gmail.com"; 







//  webpage functions


// When the user scrolls the page, execute myFunction
window.onscroll = function() {navSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navSticky() {
  if (window.pageYOffset >= sticky ) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

});