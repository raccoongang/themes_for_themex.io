$(function () {
    let fs = document.getElementById('fullscreen');
    let main = document.getElementById('course-content');

    function toggleFullScreen() {
        let fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        console.log(fs);
        if (!fullscreen) {
            if (main.msRequestFullscreen) {main.msRequestFullscreen()}
            if (main.webkitRequestFullscreen) {main.webkitRequestFullscreen()}
            if (main.mozRequestFullScreen) {main.mozRequestFullScreen()}
            cahngeXlink('#ico-fs-shrink');
        } else {
            if(document.msExitFullscreen) {document.msExitFullscreen()}
            if(document.mozCancelFullScreen) {document.mozCancelFullScreen()}
            if(document.webkitExitFullscreen) {document.webkitExitFullscreen()}
            cahngeXlink('#ico-fs-expand');
        }
    }

    let cahngeXlink = (val) => {
        document.querySelector('use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', val);
    };

    fs.addEventListener('click', () => {
        toggleFullScreen();
    })
});
