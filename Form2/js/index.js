$(document).ready(function(){
    $("#loginForm").hide();
    $("#features2").hide();
    $("#loginrow").hide();
    $("#welcome").addClass("animated fadeInDown");
    $("#signupForm").addClass("animated fadeInLeft");
    $("#btn-signup-s").addClass("animated fadeInLeft");
    $("#features1").addClass("animated fadeInRight");
    $("#btn-login-s").addClass("animated fadeInRight");
    
    $("#btn-login-s").click(function(){
        $("#signupForm").hide();
        $("#features1").hide();
        $("#signuprow").hide();
        $("#loginForm").show();
        $("#features2").show();
        $("#loginrow").show();
        
        $("#loginForm").addClass("animated fadeInLeft");
        $("#features2").addClass("animated fadeInRight");
        $("#btn-signup-l").addClass("animated fadeInRight");
        $("#btn-login-l").addClass("animated fadeInLeft");
    });
    
    $("#btn-signup-l").click(function(){
        $("#loginForm").hide();
        $("#features2").hide();
        $("#loginrow").hide();
        
        $("#signupForm").show();
        $("#features1").show();
        $("#signuprow").show();
    });
});