
/////////////////////////
// Hamburger Menu //////
/////////////////////////

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger-menu').slideToggle('slow');
  });
});

//Styling for FAQ accordian questions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

// Styling for Random Image in main header
// Not working yet.. will keep trying to figure out this afternoon
var images = [
  'images/header-images/dog1.jpg',
  'images/header-images/dog2.jpg',
  'images/header-images/dog3.jpg',
  'images/header-images/dog4.jpg',
]
var which = Math.floor(Math.random() * images.length);
var img = document.getElementsByClassName(.'theimage');
img.src = images[which];
img.title = images[which];
