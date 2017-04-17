$(".cosby").on("click", function() {
	var $cosbyHTML = '<p class="lead">This is a picture in Cosby, Tennessee.</p>';
	$(".first").append($cosbyHTML);
}); 
$(".colorado").on("click", function() {
	var $coloradoHTML = '<p class="lead">This is a picture in Fairplay, Colorado.</p>';
	$(".second").append($coloradoHTML);
}); 

$(".project-1").hide();
$(".img-1").on("mouseout", function() {
	var $projectOne = $(".project-1");
	$projectOne.hide();
});
$(".img-1").on("mouseover", function() {
	var $projectOne = $(".project-1");
	$projectOne.show();
});


$(".project-2").hide();
$(".img-2").on("mouseout", function() {
	var $projectTwo = $(".project-2");
	$projectTwo.hide();
});
$(".img-2").on("mouseover", function() {
	var $projectTwo = $(".project-2");
	$projectTwo.show();


});$(".project-3").hide();
$(".img-3").on("mouseout", function() {
	var $projectThree = $(".project-3");
	$projectThree.hide();
});
$(".img-3").on("mouseover", function() {
	var $projectThree = $(".project-3");
	$projectThree.show();
});

$(".project-4").hide();
$(".img-4").on("mouseout", function() {
	var $projectFour = $(".project-4");
	$projectFour.hide();
});
$(".img-4").on("mouseover", function() {
	var $projectFour = $(".project-4");
	$projectFour.show();
});

$(".project-5").hide();
$(".img-5").on("mouseout", function() {
	var $projectFive = $(".project-5");
	$projectFive.hide();
});
$(".img-5").on("mouseover", function() {
	var $projectFive = $(".project-5");
	$projectFive.show();
});

$(".project-6").hide();
$(".img-6").on("mouseout", function() {
	var $projectSix = $(".project-6");
	$projectSix.hide();
});
$(".img-6").on("mouseover", function() {
	var $projectSix = $(".project-6");
	$projectSix.show();
});

