
function hide_all(unhide) {
    $(".home").hide();
    $("#indexbox").hide();
    $(`${unhide}`).fadeIn("slow");
}

$(".indexbutton").on("click", function(){
    hide_all('#indexbox');
}); 

$(".indexclose").on("click", function(){
    hide_all('.home');
}); 

$(".index").on("click", function(){
    hide_all('.home');
}); 

/*
$("#menu_api").on("click", function(){
    hide_all('.screen_api');
}); 

$("#menu_mods").on("click", function(){
    hide_all('.screen_mods');
}); 

$("#menu_utilities").on("click", function(){
    hide_all('.screen_utilities');
}); 

$(".back").on("click", function(){
    hide_all('.screen_home');
}); 
*/