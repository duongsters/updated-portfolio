// event handler captures the window width of browser as you use the scrollbar to go up/down page
var scrolling = $(window).width()
//as you use the scrollbar element to scroll through the webpage, the .onscroll event handle will then then run this function below that will run this..
//source: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
window.onscroll = function() {
    // if, else loop where it will check the element's width is greater than 1000px, it will then go and and see...
    if ((width>=1000)){
        //if the body OR the element's content is vertically scroll is greather than 80px, then...
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            //change the css stylings of the header 'animateHeader' make the background transparent as you scroll 
            $("#animateHeader").css("background", "transparent");
            //change the css stylings of the header 'animateHeader'--specifically change the font color black as you scroll 
            $("#animateHeader").css("color", "#000");
            //change the box-shadow property of 'animateHeader' to changed pixel orientation of 0px for the top and right and 20px for the left and then change the color to light grey-ish
            // source: https://css-tricks.com/the-power-of-rgba/
            $("#animateHeader").css("box-shadow", "0px 0px 20px rgba(0, 0, 0, 0.085)");
            //change the padding property of 'animateHeader' to 
            //source: https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/
            $("#animateHeader").css("padding", "5vh 5vw");
            //change the css stylings of the navbar, along with the 'a' tags within
            $("#navBar a").hover(function(){
                //when this function runs, it will change the border-bottom property of the navBar to blue
                $(this).css("border-bottom", "2px solid rgb(89, 45, 255)");
                //then the 2nd function is ran and changes the blue navbar to transprent
            }, function (){
                $(this).css("border-bottom", "2px solid transparent")
            }
            });

        }
    }

}