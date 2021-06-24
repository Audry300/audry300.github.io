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

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay()===7)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

// Jquery is listening
$(document).ready(function(){


    $("#floatingNumber").on("change", function(){
        if (!validePhone("floatingNumber")){
            alert("Wrong format for phone");
            $("#floatingNumber").val("(xxx-xxxx-xxxx)");
            $("#floatingNumber").addClass("error");
        }
        else {
            $("#floatingNumber").removeClass("error");
        }
    });

    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


});