$(document).ready(function() {
    $(".Navigate").click(function(event) {
        event.preventDefault();

        if ($(this).hasClass("Header-Title")) {
            $("html, body").animate({
                scrollTop: 0
            }, 0); 
        } else {
            var navigationLinkHREF = $(this).attr("href");
            var headerHeight = $("header").outerHeight();
            var sectionTopMargin = parseInt($("section").css("marginTop"));

            $("html, body").animate({
                scrollTop: $(navigationLinkHREF).offset().top - headerHeight - sectionTopMargin
            }, 0);   
        }
    });
});
