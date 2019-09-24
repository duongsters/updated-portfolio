// event handler captures the window width of browser as you use the scrollbar to go up/down page
var width = $(window).width();
//as you use the scrollbar element to scroll through the webpage...the .onscroll event handle will then then run this function below that will run this..
window.onscroll = function () {
    // if, else loop where it will check the element's width is greater than 1000px, it will then go and and see...
    if ((width >= 1000)) {
        //if the body OR the element's content is vertically scroll upwards the page is greather than 80px, then...
        //source: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            //change the css stylings of the header 'animateHeader' make the background transparent as you scroll 
            $("#animateHeader").css("background", "transparent");
            //change the css stylings of the header 'animateHeader'--specifically change the font color black as you scroll 
            $("#animateHeader").css("color", "black");
            //change the box-shadow property of 'animateHeader' to changed pixel orientation of 0px for the top and right and 20px for the left and then change the color to light grey-ish
            // source: https://css-tricks.com/the-power-of-rgba/
            $("#animateHeader").css("box-shadow", "0px 0px 20px rgba(0, 0, 0, 0.085)");
            //change the padding property of 'animateHeader' to 
            //source: https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/
            $("#animateHeader").css("padding", "3vh 3vw");
            //change the css stylings of the navBar 'a' tags within
            $("#navBar a").hover(function () {
                //when this function runs, it will change the border-bottom property of the navBar 'a' tags to blue when mouse is hovered of it to create the underline effect to alert the user the section of the webpage they are in
                $(this).css("border-bottom", "2px solid rgb(89, 45, 255)");
                //then the 2nd function is ran and changes the blue navbar to transprent colored with a dissapearing effect as user clicks
            }, function () {
                $(this).css("border-bottom", "2px solid transparent")
            });
        }
        else {
            $("#animateHeader").css("background", "transparent");
            $("#animateHeader").css("color", "#fff");
            $("#animateHeader").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0)");
            $("#animateHeader").css("padding", "5vh 3vw");
            $("#navBar a").hover(function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}


setTimeout(function () {
    //dynamically created class ID 'renderBrowser' that will store the callout
    $("#renderBrowser").addClass("animated zoomOut");
    setTimeout(function () {
        $("#renderBrowser").removeClass("animated zoomOut");
        $("#renderBrowser").css("display", "none");
        //the 2nd function on line 63 will run and will remove the animations once it hits 800px
    }, 800);
    //the first function on line 61 will be executed once it hits the 1650px barrier as they scroll down
}, 1645);


// calls this function to run after webpage is loaded
$(document).ready(function () {
    //uses the on click event handle that will check on the changes within the 'a' tag of my social media links
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("body, html").animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                hash = window.location.hash;
            });
        }
    });
});





