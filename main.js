$(document).ready(function() {
    let navigationPanelFlag = 0;
    $(".Hamburger").click(function() {
        let navigationPanel = document.querySelector(".Navigation-Panel");
        
        if (navigationPanelFlag === 0) {
            navigationPanel.style.left = "0px";
            navigationPanelFlag = 1;
        } else if (navigationPanelFlag === 1) {
            navigationPanel.style.left = "-300px";
            navigationPanelFlag = 0;
        }
    });

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