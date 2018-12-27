$(document).ready(function() {
	init();

	if($(window).width() >= 768)
	{
		$(window).scroll(function()
		{ 
			init();
	    }); 		
	}

	if($(window).width() >= 992)	
	{
	    $("#goTop").hover(function(){
	    	$(".popup-text").fadeIn();
	    }, function(){
	    	$(".popup-text").fadeOut();
	    });  		
	}    
    $("#goTop").click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });	
});

function init()
{
    if ($(this).scrollTop() > 600)
    {
    	$("#goTop").fadeIn();
    } 
    else 
    {
    	$("#goTop").fadeOut(); 
    	$(".popup-text").fadeOut();
    }
}

