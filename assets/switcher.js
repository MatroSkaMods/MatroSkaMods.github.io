
function hide_all(unhide) {
    $(".screen_home").hide();
    $(".screen_api").hide();
    $(".screen_mods").hide();
    $(".screen_utilities").hide();
    $(`${unhide}`).fadeIn("slow");
}

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