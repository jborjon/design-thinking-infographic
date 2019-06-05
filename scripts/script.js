(function () {
    "use strict";

    var isFirstRun = true;   // is this the first time we
                             //   create an instance of obj?

    var obj = new eE(function () {
        var randomNum = Math.floor(Math.random() * 8);
        var imageURL = "";

        if (isFirstRun) {
            // Insert stylesheet for the dialog at the end of the <head>
            var linkTag = document.createElement("link");
            linkTag.setAttribute("rel", "stylesheet");
            linkTag.setAttribute("href", "styles/tinybox2.css");
            document.head.appendChild(linkTag);

            isFirstRun = false;   // never true again... :(
        }

        // Pick a random image
        switch (randomNum) {
            case 0:
                imageURL = "images/clap-your-oh.jpg";
                break;
            case 1:
                imageURL = "images/dino-ark.jpg";
                break;
            case 2:
                imageURL = "images/exercise.jpg";
                break;
            case 3:
                imageURL = "images/t-rex-airplane.jpg";
                break;
            case 4:
                imageURL = "images/t-rex-lamp.jpg";
                break;
            case 5:
                imageURL = "images/velociraptor-karl-addison.jpg";
                break;
            case 6:
                imageURL = "images/velociraptorfree.jpg";
                break;
            case 7:
                imageURL = "images/villanous-victorian-velociraptor.jpg";
                break;
        }

        // Create the dialog box
        TINY.box.show({
            image: imageURL,
            boxid: "frameless",
            animate: true,
            opacity: 50
        });

    });   // end of anonymous function in obj

}());
