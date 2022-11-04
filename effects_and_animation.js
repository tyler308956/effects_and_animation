$(document).ready(function () {
    //hide newsSignUp when page loads
    $("#newsSignup").hide();
    /*Use the slideToggle function to show or hide the 
    newsSignup form*/
    $("#signuplink").click(function (evt) {
        evt.preventDefault();
        $("#newsSignup").slideToggle(300);
    });

    // hover action to slogan //
    $("#slogan").hover(function () {
        $("#slogan").fadeOut(1000, function () {
            $(this).html('Hand Picked Just for You').fadeIn(3000, function () {
                $(this).fadeOut(100, function () {
                    // fade in fast
                    $(this).html('The Power of Flowers').fadeIn(100);
                });
            });
        });
    });

    // Have Rose picture come in slowly
    $("#rose").animate(
        {
            right: 100,
            opacity: 1,
        }, 1500);

    $("#openclose").html('-');

    $("#newsSignup").submit(function (evt) {
        alert(`Thank you for registering`);
        evt.preventDefault();
        $("#newsSignup").hide(1000);
    });
}); //end ready