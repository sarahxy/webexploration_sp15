document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.
        var to_about = document.getElementsByClassName("about-container");
        var to_pictures = document.getElementsByClassName("picture-container");
        var to_members = document.getElementsByClassName("member-container");


        document.getElementById("about").click(function() {
            window.scroll(0, findPos(document.getElementById("about-container")));  
        });

        document.getElementById("pictures").click(function() {
            window.scroll(0, findPos(document.getElementById("picture-container")));
        });

        document.getElementById("members").click(function() {
            window.scroll(0, findPos(document.getElementById("member-container");)); 
        });
    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}
