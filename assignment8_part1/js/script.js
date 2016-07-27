//***Practice with jQuery Events	


$(document).ready(function () {

//***Part1
    $("button").click(function (event) {
        window.alert("You clicked my button");
    });

//***Part2
    $("button").bind("click", function (event) {
    window.alert("Now you clicked my button");
    });

//Part3	
    $("button").on("click", function (event) {
        window.alert("You just clicked my button");
    });      

//Part4	
    $("#button1, #button2").on("click", function (event) {
        window.alert("One of my two buttons was clicked");
    }); 

//Part5	
    $("div").css("width", 400).css("height", 400).css("background-color", "blue");
    $("div").on("mouseenter mouseleave click", function() {
        window.alert("The mouse hovered over, or the mouse left the div or the div was clicked");
    });
    
//Part6	
    $("div").css("width", 400).css("height", 400).css("background-color", "blue");
    $("div").on({
        mouseenter: function() {$("span").text("You hovered over the Div");},
        mouseleave: function() {$("span").text("You left the Div");},
        click: function() {$("span").text("You clicked on the Div");}
    });

//Part7
    $("a").on("click", function(event) {
        event.preventDefault();
        $("a").css("color", "red");
        window.alert(event.currentTarget.tagName);
    });


//Part8	
    $(window).resize(function() {
        $("div").text($(window).width());
    });    

//Part9	
    $("input#input1").on({
        mouseenter: function() { $("input#input1").css("background-color", "lightblue");},
        mouseleave: function() { $("input#input1").css("background-color", "blue");}
    });


//Part10
    $("button").on("click", function(event) {
        event.preventDefault();
        var name = $("[name=name").val();
        var email = $("[name=email").val();  
        if (name !== "" && email !=="") {
            $("[name=name]").css("border", "1px solid green");
            $("[name=email]").css("border", "1px solid green");          
        } else { 
            $("#errorMsgs").append("ERROR MESSAGE(S): </br>").css("font", "1.5em bold").css("color", "red"); 
            if (name == "") {
                $("#errorMsgs").append("-> Name cannot be blank </br>");
                $("[name=name").css("border", "1px solid red");        
            } 
            if (email == "") {
                $("#errorMsgs").append("-> Email cannot be left blank </br> ");
                $("[name=email").css("border", "1px solid red");
            }
        }
    });
    
//Part1: The Calculator III

var maxButtonCountPerRow = 4;
var numMarginsBetweenButtons = maxButtonCountPerRow - 1;
var buttonHeightVal = 125;
var buttonWidthVal = 125;
var marginVal = 15;
var totalMarginBetweenButtons = marginVal * 2;
$("[type=button]").height(buttonHeightVal).width(buttonWidthVal).css("margin", marginVal).css("background-color", "lightBlue").css("border", "10px grey groove").css("font", "2em darkblue");

var buttonWidth = $("[type=button]").outerWidth();
var setTextWidth = (buttonWidth * maxButtonCountPerRow) + ((maxButtonCountPerRow - 1) * (totalMarginBetweenButtons));
window.console.log("ButtonWidth = " + buttonWidth);
window.console.log("Calculated text width = " + setTextWidth);

$("#result").height(125).width(setTextWidth).css("margin", marginVal).css("background-color", "lightgreen").css("border", "15px darkgreen double").css("font", "3em darkgreen").css("padding", "10px");

var evaluated = false;
var isNumValue = /[0-9]/;
var displayString = "";
var currInputValue = "";
var prevInputValue = "";
    $("input").on("click", function (event) {
        currInputValue = event.target["value"];
        window.console.log("Current Input: " + currInputValue);
        window.console.log("Display String: " + typeof displayString);
        if (isValidInput(displayString, currInputValue)) {
            window.console.log("Value entered isValid");
            if (currInputValue == "=") {
                $("#result").val(eval(displayString)).css("text-align", "right");
                displayString = eval(displayString).toString();
                evaluated = true;
            } else { 
                window.console.log("Value entered isValid but currInputValue is not equal sign "); 
                    if (evaluated && (isNumValue.test(currInputValue) || currInputValue == ".")) {
                        window.console.log("Evaluated and next value is a number or decimal");
                        displayString = currInputValue;
                        $("#result").val(displayString).css("text-align", "right");
                        evaluated = false;
                    } else { /* continue building the string to be evaluated */
                        displayString = displayString + event.target["value"];
                        $("#result").val(displayString).css("text-align", "right");
                        evaluated = false;
                    }
                }
            } else { 
                if (displayString.length > 0) {                   
                    prevInputValue = getPrevInputValue(displayString);
                    window.console.log("displayString: " + displayString);
                    window.console.log("currInputValue: " + currInputValue);
                    window.console.log("prevInputValue: " + prevInputValue); 
                    if (isOperator(currInputValue) && isOperator(prevInputValue)) {
                        window.console.log("Replace Operator");
                        window.console.log("displayString BEFORE Replace: " + displayString);
                        if (currInputValue !== "=") { 
                            displayString = displayString.replace(prevInputValue, currInputValue);
                            window.console.log("displayString AFTER Replace: " + displayString); 
                            $("#result").val(displayString).css("text-align", "right");                            
                        } else { 
                            $("#result").val(displayString).css("text-align", "right");                           
                        }
                    } else { 
                        if (prevInputValue == "-" && isOperator(currInputValue)) {  
                           $("#result").val(displayString).css("text-align", "right");  
                        } 
                    }
                } else { 
                    window.console.log("Invalid input and string length = 0");
                    if ( isOperator(currInputValue) ) {
                        displayString = "";
                         $("#result").val(displayString).css("text-align", "right");    
                    }
                }
            }        
      
        function isValidInput(str, inputValue) {
    return true;
    window.console.log("Str value: " + str + " String length: " + str.length);
    var isValidInput = true;
    var twoPriorInput = "";
    var moreThanTwoOperands = false;
    if (str.length == 0) {
    if (isOperator(inputValue)) {
    return isValidInput = false;
    } else {
    return isValidInput = true;
    }
    } else { str.length > 0 
    var prevInputPosition = str.length - 1;
        prevInput = str.substring(prevInputPosition);
        if (str.length >= 2) {
    moreThanTwoOperands = true; 
    twoPriorInput = str.substring((str.length - 2), (str.length - 1));                     
    }
               
        window.console.log("***** Debug for isValidInput ********"); 
        window.console.log("isValidInput-> str: " + str);
        window.console.log("isValidInput-> str.length: " + str.length);
        window.console.log("isValidInput->inputValue : " + inputValue);
        window.console.log("isValidInput->prevInputValue : " + prevInput);
        window.console.log("isValidInput-> moreThanTwoOperands: " + moreThanTwoOperands); 
        if (moreThanTwoOperands) {
    window.console.log("twoPriorInput : " + twoPriorInput); 
    };
        window.console.log("isValidInput->inputValue is operator: " + isOperator(inputValue));
        window.console.log("isValidInput->prevInput is operator: " + isOperator(prevInput));
        switch (inputValue) {
    case '=':
        if (prevInput == ".") {
    if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
    isValidInput = false; 
    }
    }
        if (prevInput == "-") {
    isValidInput = false
    }
        if (prevInput == "-" || isOperator(prevInput)) {
    isValidInput = false;
    }
        return isValidInput;
        break;
    case '-':
        if (prevInput == "-" ) {
    isValidInput = false;
    }
        if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
    isValidInput = false; 
    }
        return isValidInput;
        break; 
    case '.':
        window.console.log("Decimal Case Statement");
        window.console.log("prevInput = " + prevInput); 
        if (prevInput == ".") {
            isValidInput = false;
                            window.console.log("Decimal Case: isValidInput false because prevInput is a decimal");
                        }
//                }
                        window.console.log("isValidInput = " + isValidInput);
                        return isValidInput;
                        break;  
                       
    case '*':
    case '/':
    case '+':
        window.console.log("Case statement for operator"); 
        if (isOperator(prevInput)) {
    isValidInput = false;
    }
        if (prevInput == "-") {
    isValidInput = false;
    }
        if (prevInput == ".") {
    isValidInput = false; 
    }
        if (moreThanTwoOperands && (isOperator(twoPriorInput) || twoPriorInput == "-") ) {
    isValidInput = false; 
    }
        window.console.log("isValidInput: " + isValidInput)
    return isValidInput;
        break; 
    default:
        return isValidInput;
    }             

        function isOperator(strValue) {
           switch (strValue) {
           case '/':
                return true;
               break;
            case '*':
               return true;
                break;
            case '+':
                return true;
                break;
           case '=':
               return true;
                break;
           default:
                return false;
            }
       }

        function getPrevInputValue(str) {
            var prevInputValue;            
           var prevInputPosition;
           window.console.log("***GPIV: str value: " +  str);
            if (str.length > 0) {
               prevInputPosition = str.length - 1;
               prevInputValue = str.substring(prevInputPosition);
                window.console.log("***GPIV: prevInputValue: " + prevInputValue); 
               return prevInputValue;  
            } else {
               return null;
           }

       }
    });

});