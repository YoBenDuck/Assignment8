$(function(){

	function closeSection(){
		$('.accordion a').removeClass("minus");
		$('.accordion div').slideUp(700).removeClass("open");
	}	

	$('.accordion a').click(function(e){
		e.preventDefault();
		var selection = $(this).attr("href");		

		if($(e.target).is(".minus")){
			closeSection();
		}
		else{
			closeSection();
			$(this).addClass("minus");
			$('.accordion ' + selection).slideDown(700).addClass("open");
		}
	}); 
}); 