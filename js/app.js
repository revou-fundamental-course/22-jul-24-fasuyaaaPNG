var urlPreview = [
    '/assets/preview/1.png',
    '/assets/preview/2.png',
    '/assets/preview/3.png',
    '/assets/preview/4.png',
    '/assets/preview/5.png',
];

var urlView = [
    '/assets/negara/1.png',
    '/assets/negara/2.png',
    '/assets/negara/3.png',
    '/assets/negara/4.png',
    '/assets/negara/5.png',
];

var currentImageIndex = 0;
var currentImageIndex = 0;

function updateImagePreview() {
    var preview = document.querySelector('.preview');
    preview.style.backgroundImage = "url('" + urlPreview[currentImageIndex] + "')";
    currentImageIndex = (currentImageIndex + 1) % urlPreview.length;
}

function updateImageView() {
    var view = document.querySelector('.imgSosmed');
    view.style.backgroundImage = "url('" + urlView[currentImageIndex] + "')";
    currentImageIndex = (currentImageIndex + 1) % urlView.length;
}

function toggleBgm() {
    const buttonBgm = document.querySelector('.buttonBgm');
    const bgmAudio = document.getElementById('bgmAudio');

    if (buttonBgm.classList.contains('bgmActive')) {
        buttonBgm.classList.remove('bgmActive');
        bgmAudio.pause();
        // bgmAudio.currentTime = 0;
    } else {
        buttonBgm.classList.add('bgmActive');
        bgmAudio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }
}

setInterval(updateImagePreview, 7000);
setInterval(updateImageView, 7000);