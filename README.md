
# Title: Updated-Portfolio
## Site Picture:
![My Site](/images/Screenshot.png)

## Technologies Used:
- HTML: Used to create needed object elements 
- jQuery: Allowed me to dynamically create elements that could be appended/prepended to the html files
- JavaScript: Used in the HTLM files and JS files
- FontAwesome: Used logos/images from their website to make my webpage more animate with the help of CSS as well.
- Bootstrap: Navbar, button(s) and form were mainly used with the help of the resources of Bootstrap's preset codes
- CSS: Used to make to make the styling of the background image and colors & sizes
- Git: Used to document the changes of the source code
- GitHub: Used to create the repository for the html and css in which that can be pushed to GitHub domain

## Summary:
    In my updated portfolio, I was able to manage in using Bootstrap, Media Queries, and jquery to create my portfolio webpage. Using the mainly the .on, .onscroll .scrollTop, .animate and the .hash DOM event handles were a huge proponent in getting my portfolio page to me all within one webpage instead of creating separate pages for my about me, projects, blog/journal and contact pages. And for the vistors to scroll up and down the webpage smoothly using the .hash & .animate DOM methods specifically.

## Code Snippet:
```html
<body>
    <div class="mainContainer">

        <!--------------- Bootstrap Header section of the page ------------------------------------------------------------------------------------------------------------------------------------------->
        <header id="animateHeader" class="animated slideInDown" style="animation-delay: 2.3s;">
            <!-- My navBar section is within the header -->
            <table>
                <tr>
                    <td id="myName">Andrew Duong</td>
                    <td id="navBar">
                        <a href="#myPortfolio">Projects</a>
                        <a href="#aboutMe">About Me</a>
                        <a href="#blogPosts">Blog</a>
                        <a href="#contactMe">Contact</a>
                    </td>
                </tr>
            </table>
        </header>

        <!-------------------- my intro page welcoming vistors and where my social media links/logos are located on the page -------------------------------------------------------------------------------------------------------------------------->
        <table id="pageIntro">
            <tr>
                <td id="intro" class="animated slideInLeft" style="animation-delay: 2.1s;">
                    <!-- my intro page when vistors first step into the webpage-->
                    <h1>Greetings and welcome to my personal webpage first and foremost. Enjoy navigating though the
                        page. If you have any questions/concerns, don't hesistate in contacting me and I will get back
                        to you shortly!
                        Interested with my work?
                    </h1>
                    <table>
                        <tr>
                            <td class="animated bounceIn" style="animation-delay: 2s;"><a class="socialMedias"
                                    href="https://www.twitter.com/TheAndrewDuong"><i class="fab fa-twitter"></i></a>
                            </td>
                            <td class="animated bounceIn" style="animation-delay: 2s;"><a class="socialMedias"
                                    href="https://www.instagram.com/theandrewduong"><i class="fab fa-instagram"></i></a>
                            </td>
                            <td class="animated bounceIn" style="animation-delay: 2s;"><a class="socialMedias"
                                    href="https://www.facebook.com/andrew.duong1989"><i class="fab fa-facebook"></i></a>
                            </td>
                        </tr>
                    </table>
                </td>
                <!-- Where my own person picture is placed...with Bootstrap, i will make the logo animate as the administrator scrolls down the page -->
                <td id="myImg" class="animated zoomInUp" style="animation-delay: 2s;"></td>
            </tr>
        </table>

        <!------------------------- my projects section within the webpage -------------------------------------------------------------------------------------------------------------------------------------->
        <div id="myPortfolio">
            <h1>Projects</h1>
            <!-- where the user is able to see and click through my projects -->
            <div id="projectImgs">
                <a href="https://duongsters.github.io/Psychic-Game/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p1.png"></a>
                <a href="https://duongsters.github.io/unit-4-game/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p2.png"></a>
                <a href="https://duongsters.github.io/project1-team1/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p3.png"></a>
                <a href="https://duongsters.github.io/firebased-train-scheduler/"></a><img
                    onclick="zoomImg($(this).attr('src'))" src="./images/p4.png"></a>
                <a href="https://duongsters.github.io/TriviaGame/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p5.png"></a>
                <a href="https://duongsters.github.io/GIFTastic/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p6.png"></a>
                                        <a href="https://duongsters.github.io/GIFTastic/"><img onclick="zoomImg($(this).attr('src'))"
                        src="./images/p6.png"></a>
            </div>
        </div>
        <!------------------- my about me section within the webpage ----------------------------------------------------------------------------------------------------------------------------------------------->
        <div id="aboutMe">
            <h1>About</h1>
            <p>
                My name is Andrew Duong. I am a Vietnamese-American born in San Jose, California and raised in
                Cupertino, California for majority of my life. I graduated at San Jose State
                University and majored in Management Information Systems and Computer Science. Being into the art of Taekwondo for over 8 years of my life, being active, outside of coding of course, is important to me. I enjoy fishing and teaching basketball whenever I can--oh yea, can't forget about squeezing in family time!
            </p>
        </div>
        <!--------------------my Medium blog posts are embded within the webpage ------------------------------------------------------------------------------------------------------------------------------->
        <div id="blogPosts">
            <h1>Journal</h1>
            <div id="retainable-rss-embed" data-rss="https://medium.com/feed/@duongsters" data-maxcols="3"
                data-layout="grid" data-poststyle="inline" data-readmore="Read the rest"
                data-buttonclass="btn btn-primary" data-offset="-100"></div>
        </div>

        <!-------------------- my contact location within the webpage ----------------------------------------------------------------------------------------------------------------------------------------->
        <div id="contactMe">
            <h1>Contact</h1>
            <table>
                <tr>
                    <td>
                        <div id="miniContainer">
                            <!-- contact table -->
                            <table id="contactTable">
                                <!-- my phone contact row -->
                                <tr>
                                    <td><i class="fas fa-mobile-alt"></i> &nbsp; +1(408)605-8973</td>
                                </tr>
                                <!-- my email contact row-->
                                <tr>
                                    <td><i class="fas fa-envelope-open-text"></i> &nbsp; Andrewqduong@gmail.com</td>
                                </tr>
                                <!-- my address contact row -->
                                <tr>
                                    <td><i class="fas fa-map-pin"></i>
                                        <div id="myAddress">
                                            10700 Castine Avenue,
                                            <br>
                                            Cupertino, California
                                            <br>
                                            95014, USA
                                        </div>
                                    </td>
                                </tr>
                                <!-- my social medias row -->
                                <tr>
                                    <td>
                                        <a class="socialMedias" href="https://www.twitter.com/TheAndrewDuong"><i
                                                class="fab fa-twitter"></i></a>
                                        <a class="socialMedias" href="https://www.instagram.com/theandrewduong"><i
                                                class="fab fa-instagram"></i></a>
                                        <a class="socialMedias" href="https://www.facebook.com/andrew.duong1989"><i
                                                class="fab fa-facebook"></i></a>
                                        <a class="socialMedias" href="https://dribbble.com/Duongsters"><i
                                                class="fab fa-dribbble"></i></a>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </td>
                    <td>
                        <!-- form page portion of the webpage for vistors who want to contact me ... located at the bottom of my contact page -->
                        <form>
                            <!-- Vistor's name input box-->
                            <input type="text" placeholder="First and Last name" required>
                            <!-- Vistor's phone input box -->
                            <input type="text" placeholder="#-(###)-###-####" required>
                            <!-- Vistor's email input box -->
                            <input type="email" placeholder="email@email.com" required>
                            <br>
                            <!-- Vistor's custom message input box -->
                            <textarea placeholder="Your custom message for me" required rows="6">
                                    </textarea>
                            <br>
                            <!-- Submit button for the vistor's contact form -->
                            <button class="btnContact">Send</button>
                        </form>
                    </td>
                </tr>
            </table>
        </div>

        <!----------------------- my footer section at the end of the webpage -------------------------------------------------------------------------------------------------->
        <div id="footer">
            Andrew Duong &#169 2019.
            <!-- my privacy policy -->
            <a href="https://www.termsfeed.com/privacy-policy/dea6d12a2dd09ca19faebf9b85139e89/"
                style="float: right;">Privacy Policy</a>
            <br>
            <!-- my user terms and conditions -->
            <a href="https://www.termsfeed.com/terms-conditions/41b0874cb2d4faccf4bec37c306183d5/"
                style="float: right;">Terms and Conditions</a>
        </div>

        <!-- end of 'mainContainer' class div -->
    </div>
    <!-- link ref to app.js file -->
    <script src="./javascript/app.js" type="text/javascript"></script>
    <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
</body>
  
```


## Author Links:
[GitHub](https://github.com/duongsters)