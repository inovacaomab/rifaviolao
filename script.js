document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            window.open(image.src, '_blank');
        });
    });
});
