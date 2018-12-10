src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

/* Load Content */
let selection = ("article0.txt");
$("form").val(selection);
$("article").load(selection);

/* close/open menu */
$(".menubox").click(function() {
    $(this).find(".list").slideToggle();
});