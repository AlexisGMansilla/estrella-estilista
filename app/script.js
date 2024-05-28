// Menú Responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuResponsive = document.querySelector('.menu-responsive');
    const navLinks = document.querySelector('.nav-links');

    menuResponsive.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Cambia la imagen del service item 'Colorimetria'
document.addEventListener('DOMContentLoaded', function() {
    var serviceItemColor = document.querySelectorAll('.service-item')[1];
    var imgElement = serviceItemColor.querySelector('img');
    var originalSrc = imgElement.src;
    var newSrc = '../assets/services-hair-color-2.webp';

    serviceItemColor.addEventListener('mouseover', function() {
        imgElement.src = newSrc; 
    });

    serviceItemColor.addEventListener('mouseout', function() {
        imgElement.src = originalSrc; 
    });
});
