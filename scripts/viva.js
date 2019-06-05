(function () {
    "use strict";

    var chile = document.getElementById("viva");

    var vivaChile = function () {
        window.open("http://www.google.cl/#q=chileno+de+corazon", "_blank");
	};

    if (chile.addEventListener) {
        chile.addEventListener("dblclick", vivaChile, false);
    } else if (chile.attachEvent) {
        chile.attachEvent("ondblclick", vivaChile);
    }
}());
