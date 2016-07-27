$(document).ready(function () {
    
    var fourSeasonsPanel, warmSeasonsPanel, coldSeasonsPanel;

    var fourSeasons = $("#fourSeasonsText"); 
    var warm = $("#warmSeasonsText");
    var cold = $("#coldSeasonsText");
      
    var mySeasons = {fourSeasonsPanel: seasons,
                warmSeasonsPanel: warm,
                coldSeasonsPanel: cold,
                };   

    var selectedPanelId;   
    var selectedPanel;  
    var season; 
     
    $("h3").on("click", function (event) {
        selectedPanel = $(this);
        if (selectedPanel.hasClass("open")) {
             selectedPanel.css("background-color", "darkgreen").css("border-radius", "1em").toggleClass("open");            
            season = selectedPanel.text();
            selectedPanel.empty().prepend("<i class='fa fa-plus-circle'></i>").append(season);
        } else { 
             selectedPanel.css("background-color", "orange").css("border-radius", "1em 1em 0 0").toggleClass("open");
            season = selectedPanel.text();
            selectedPanel.empty().prepend("<i class='fa fa-minus-circle'></i>").append(season); 
        }
        selectedPanelId = event.target.id;
        mySeasons[selectedPanelId].slideToggle();
     }); 
});