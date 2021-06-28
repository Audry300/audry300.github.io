// This function validePhone checks if a phone number provided is correct by checking if the input has 9 digits

function validePhone(phoneInput){
    var phoneTxt=document.getElementById(phoneInput).value;

    var filter=/^\d{10}$/;
    if (filter.test(phoneTxt)) {
        return true;
    }
    else {
        return false;
    }
}


function valideCard(floatingCard){
    var card=document.getElementById(floatingCard).value;

    var filter=/^\d{16}$/;
    if (filter.test(card)) {
        return true;
    }
    else {
        return false;
    }
}

var radio=document.getElementsByName('expert');



/* if (radio[0].checked){
    var unavailableDates = ["06/29/2021","07/01/2021","07/10/2021"];

}
else{
    var unavailableDates = ["06/30/2021","07/02/2021","07/4/2021"];
} */
var unavailableDates = ["07/01/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay()===6){
        return [false];
        
    }
    
    // if the user selects Dr Rachel Dorval, mondays and wednesdays will be deactivated
    if(radio[0].checked){
        if(date.getDay()===1 || date.getDay()===3){
            return [false];
        }
    }
    // if the user selects Dr Sang Ye, even days will be deactivated
    else{
        if(date.getDay()===2 || date.getDay()===4){
            return [false];
        }
    }
        
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

// Jquery is listening
$(function(){


    $("#floatingNumber").on("change", function(){
        if (!validePhone("floatingNumber")){
            alert("Wrong format for phone, the correct form is xxxxxxxxxx");
            $("#floatingNumber").val("(xxxxxxxxxx)");
            $("#floatingNumber").addClass("error");
        }
        else {
            $("#floatingNumber").removeClass("error");
        }
    });

    $("#floatingCard").on("change", function(){
        if (!validePhone("floatingCard")){
            alert("Wrong format for credit card, the correct form is xxxxxxxxxxxxxxxx");
            $("#floatingCard").val("(xxxxxxxxxxxx)");
            $("#floatingCard").addClass("error");
        }
        else {
            $("#floatingCard").removeClass("error");
        }
    });

    $("#final").on("click",function(){

        alert("Thank you for booking an appointment with us, you should be receiving shortly an email with all the informations regarding the appointment.");

    });


    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/28/2021'),
            maxDate: '+1Y',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    $("#final").on

    


});
