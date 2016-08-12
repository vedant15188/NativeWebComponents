$(document).ready(function(){
    
    $("#loginform").hide();
    $("#BP").addClass("animated fadeIn");
    
    $("#logintab").hover(function(){
        $("#logintab").addClass("animated shake");
    }, function() {
        $("#logintab").removeClass("animated shake");
    });
    
    $("#signuptab").hover(function(){
        $("#signuptab").addClass("animated shake");
    }, function() {
        $("#signuptab").removeClass("animated shake");
    });
    
    $("#logintab").click(function(){
        $("#signupform").hide();
        $("#loginform").show();
        $("#loginform").addClass("animated fadeInRight");
        $("#signuptab").removeClass("active");
        $("#logintab").addClass("active");
    });
    
    $("#signuptab").click(function(){
        $("#loginform").hide();
        $("#signupform").show();
        $("#signupform").addClass("animated fadeInLeft");
        $("#logintab").removeClass("active");
        $("#signuptab").addClass("active");
    });
    
});