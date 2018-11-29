var max = 3;
var x = max;


$(document).ready(function() {
	$(".slider-item").hide();
	startSlider();
});

function showItem(showIndex) {
	$(".slider-item").hide();
	$("#slider-item" + showIndex).show();
	x = showIndex;
	$(".indicator-item").removeClass("indicator-choosed");
	$("#indicator-item" + showIndex).addClass("indicator-choosed");
}

function nextItem(){
	if(x == max) x = 0;
	else x = x + 1;
	showItem(x);
}

function preItem() {
	if(x == 0) x = max;
	else x = x - 1;
	showItem(x);
}

function startSlider() {
	nextItem();
	setTimeout(startSlider, 2000);
}