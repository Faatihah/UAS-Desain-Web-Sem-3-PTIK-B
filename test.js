const slideshowImages = document.querySelectorAll(".slide .slideshow-img");
console.log(slideshowImages)

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage(){
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.display = "block";
}

$(document).ready(function(){
    $(".header").height($(window).height());
})

$(function(){
    $('.to_top').hide().on('click', function(){
        $('body,html').animate({scrollTop : 0}, 800);
    });
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.to_top').show();
        }else{
            $('.to_top').hide();
        }
    });
})
