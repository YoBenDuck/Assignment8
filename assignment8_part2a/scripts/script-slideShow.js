$(document).ready(function () {
    var pic1, pic2, pic3, pic4, pic5;
    var image1 = $("#image1");
    var image2 = $("#image2");
    var image3 = $("#image3");
    var image4 = $("#image4");
    var image5 = $("#image5");
    
    var gallery = {pic1: image1,
                   pic2: image2,
                   pic3: image3,
                   pic4: image4,
                   pic5: image5
                  };
    
   
    var activePic = "pic1";
    var activeLink = $("#pic1");
    activeLink.css("background-color", "lightgrey");
    
    var selectedPic;    
    var selectedLink;  
    
    $("li").css("text-decoration","underline").css("font", "2.5em bold").css("color", "blue");    
    $("li").on("click", function (event) {
        selectedLink = $(this).css("background-color", "lightgrey");             
        selectedPic = event.target.id;
        if (activePic !== selectedPic) { 
            gallery[activePic].css("display", "none"); 
            gallery[selectedPic].fadeIn(2000);
            activeLink.css("background-color", "white");
            activePic = selectedPic;
            activeLink = $(this).css("background-color", "lightgrey");
        }
     }); 
});