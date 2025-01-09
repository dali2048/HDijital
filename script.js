document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
});


// Show fullscreen image
function showFullscreen(img) {
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImg = document.getElementById('fullscreenImage');
    fullscreenImg.src = img.src; // Set the clicked image's source
    modal.classList.add('active'); // Show the modal
}

// Hide fullscreen image
function hideFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('active'); // Hide the modal
}