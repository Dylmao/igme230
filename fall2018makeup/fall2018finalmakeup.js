src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

/* close/open menu */
$("nav > div").click(function() {
    $(this).find(".submenu").slideToggle();
});

/* Load Content */
let init = ("story0.txt");
$("#story").load(init);

/* Change selection title and content to current selection */
$("#story0.txt").click(function() {
    $("#story").load(init);
});

let smallFortune = ("story1.txt");
$("#story1.txt").click(function() {
    $("#story").load(smallFortune);
});

let myMasterpiece = ("story2.txt");
$("#story2.txt").click(function() {
    $("#story").load(myMasterpiece);
});

/* Change color of Source element*/
$( "#lightpink" ).click(function() {
    $( "#source" ).css( "background", "lightpink" );
});

$( "#lightsalmon" ).click(function() {
    $( "#source" ).css( "background", "lightsalmon" );
});


const colorSelect = document.querySelector("#colors");
const colorKey = prefix + "color";
const storedColor = localStorage.getItem(colorKey);

// if we find a previously set color value, display it
if (storedColor) {
    colorSelect.querySelector(`option[value='${storedColor}']`).selected = true;
}

