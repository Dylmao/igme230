src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

/* close/open menu */
$(".menubox").click(function() {
    $(this).find(".submenu").slideToggle();
});