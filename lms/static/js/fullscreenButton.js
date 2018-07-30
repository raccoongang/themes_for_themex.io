'use strict';

$(function () {
    var fs = document.getElementById('fullscreen');
    var main = document.getElementById('course-content');

    function toggleFullScreen() {
        var fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        console.log(fs);
        if (!fullscreen) {
            if (main.msRequestFullscreen) {
                main.msRequestFullscreen();
            }
            if (main.webkitRequestFullscreen) {
                main.webkitRequestFullscreen();
            }
            if (main.mozRequestFullScreen) {
                main.mozRequestFullScreen();
            }
            cahngeXlink('#ico-fs-shrink');
        } else {
            if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            cahngeXlink('#ico-fs-expand');
        }
    }

    var cahngeXlink = function cahngeXlink(val) {
        document.querySelector('use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', val);
    };

    if (fs) {
        fs.addEventListener('click', function () {
            toggleFullScreen();
        });
        $(document).keyup(function(e) {
            var fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (fullscreen && e.keyCode == 27) {
                toggleFullScreen();
                cahngeXlink('#ico-fs-expand');
            }
        });
    }
})
