/* Don't use <script> tags in a linked js file! */
src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
/* Load Content */
let selection = ("content1.txt");
$("#choose-content").val(selection);
$("#content").load(selection);

/* Change selection title and content to current selection */
$("#choose-content").change(function() {
    selection = $(this).val();
    $("#content").load(selection);
});

/* close/open menu */
$(".menubox").click(function() {
    $(this).find(".submenu").slideToggle();
});