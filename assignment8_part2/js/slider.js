$(function(){

	$('html').css("height", "100%");
	$('body').css("min-height", "100%");
	$('main').css("margin", "0 20px");
	$('#slideNavigation').css("padding-bottom", "20%");

	$('main img').css({
		width: "95%",
		margin: "0 auto",
		height: "auto",
		border: "10px solid #1C1C1B",
		backgroundColor: "#1C1C1B"
	});
	$('#slides img').css("display", "none");
	
	var image, imageCounter = 0, imageCache = [];
	$('#slides img').each(function(){
		image = new Image();
		image.src = $(this).attr("src");
		imageCache[imageCounter] = image;
		imageCounter ++;
	});

	for(var i = 1; i <= imageCounter; i++) {
		var span = "<span>" + "0" + i + "</span>";
		$('#slideNavigation').append(span);
	};
	$('#slideNavigation span').css("padding", "0 5px");
	$('span:eq(0)').css({
		color: "#E05818",
		fontStyle: "bold",
		fontSize: "2em",
		textDecoration: "underline"
	});
	
	$('span').css("cursor", "pointer");
		
	$('#slideNavigation span').on("click mouseover", function(e){
		var btnChoice = $(this).text();
		var slideNumber = parseInt(btnChoice) - 1;
		var slideSelect = imageCache[slideNumber].src;

		if(e != this){$("span").css({
			color: "#1C1C1B",
			fontStyle: "regular",
			fontSize: "1.50em",	
			textDecoration: "none"
		})};
		if(this){  
			$(this).css({
				color: "#E05818",
				fontStyle: "bold",
				fontSize: "2em",	
				textDecoration: "underline"
		})};

		$('#slide').fadeOut(1000, function(){
			$('#slide').attr("src", slideSelect).fadeIn(1000);
		});
	});
}); 