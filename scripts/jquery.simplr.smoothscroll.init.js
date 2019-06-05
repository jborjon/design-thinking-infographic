(function () {
    "use strict";

    var platform = navigator.platform.toLowerCase();

    if (platform.indexOf('win') !== -1 || platform.indexOf('linux') !== -1) {
        if ($.browser.webkit) {
            // Include mousewheel
            var mousewheelScript = document.createElement("script");
            mousewheelScript.setAttribute("src", "scripts/jquery.mousewheel.min.js");
            document.body.appendChild(mousewheelScript);

            // Include smoothscroll
            var smoothscrollScript = document.createElement("script");
            smoothscrollScript.setAttribute("src", "scripts/jquery.simplr.smoothscroll.js");
            document.body.appendChild(smoothscrollScript);

            // Initialize smoothscroll
            window.onload = function () {
                $.srSmoothscroll();
            };
        }
    }
}());
