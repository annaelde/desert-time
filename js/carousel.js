// Anna Elde
// August 1, 2017
// This script creates a slideshow with controls on a page

(function() {
    // Get the required elements
    var slideshow = document.getElementById('slideshow')
    var images = slideshow.querySelectorAll('.images img')
    var currentImage = 0

    // Assign event handlers
    slideshow.getElementsByClassName('next')[0].addEventListener('click', function() {
        images[currentImage].style.display = 'None'
        if (currentImage < images.length - 1) currentImage++
        else currentImage = 0
        images[currentImage].style.display = 'block'
    })

    slideshow.getElementsByClassName('prev')[0].addEventListener('click', function() {
        images[currentImage].style.display = 'none'
        if (currentImage > 0) currentImage--
        else currentImage = images.length - 1
        images[currentImage].style.display = 'block'
    })

    // Initialize the slideshow
    initSlides()
    function initSlides() {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = 'none'
        }

        images[currentImage].style.display = 'block'
    }
})();