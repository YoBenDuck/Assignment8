$(document).ready(function () {
    
    var fourSeasonsTab, warmSeasonsTab, coldSeasonsTab;
    
    var fourSeasons = $("#fourSeasonsText");
    var warmSeason = $("#warmSeasonsText");
    var coldSeason = $("#coldSeasonsText");
 
    var mySeasons = {fourSeasonsTab: seasons,
                warmSeasonsTab: warm,
                coldSeasonsTab: cold,
                };
    
    var activeTabId = "fourSeasonsTab";
    var activeTab = $("#fourSeasonsTab");
    activeTab.css("background-color", "white").css("border-bottom-color", "white").css("color", "red");

    var selectedTabId;    
    var selectedTab; 

    $("li").on("click", function (event) {
        
        selectedTab = $(this).css("background-color", "white").css("border-bottom-color", "white");
               
        selectedTabId = event.target.id;
         
        if (activeTabId !== selectedTabId) { 

            mySeasons[activeTabId].css("display", "none"); 
            
            mySeasons[selectedTabId].css("display", "block");                            
            
            activeTab.css("background-color", "lightgrey").css("border-bottom-color", "grey").css("color","grey");  
            
            activeTabId = selectedTabId;
            activeTab = $(this).css("background-color", "white").css("border-bottom-color", "white").css("color", "red");
            
        }
     }); 
});