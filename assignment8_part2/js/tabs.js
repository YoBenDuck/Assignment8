$(function(){	

	$('.tabs a').click(function(e){
		var tabChoice = $(this).attr("href");
		var parentLi = $(this).parent('li');
		e.preventDefault();

		function tabSwitch(){
			parentLi.addClass("selected").siblings().removeClass("selected");
			$(tabChoice).removeClass("hidden").siblings().addClass("hidden");
		}

		if(tabChoice === "#tab1"){
			tabSwitch();
		}else if(tabChoice === "#tab2"){
			tabSwitch();
		}else if(tabChoice === "#tab3"){
			tabSwitch();
		}
	}); 
}); 