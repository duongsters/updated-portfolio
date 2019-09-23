// event handler captures the window width of browser as you scroll down webpage
var scrolling = $(window).width()
//as you use the scroll element to scroll through the webpage, the .onscroll event handle will then then run this function below that will run this..
window.onscroll = function() {
    // if, else loop where it will check the element's width is greater than 1000px, it will then go and and see...
    if ((width>=1000)){
        //if the body OR the element's content is vertically scroll is greather than 80px, then...
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            //change the css stylings of the header 'animateHeader'
            $()
        }
    }

}