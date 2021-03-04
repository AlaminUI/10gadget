

function jQueryCode(){
    var template = `
<div class="progress-header">
<div class="progress-container">
<div class="progress-bar" id="myBar"></div>
</div>
</div>
      `;
var cssTemplate = `
.progress-header {
position: fixed;
top: 0;
z-index: 1;
width: 100%;
background-color: #f1f1f1;
}

/* The progress container (grey background) */
.progress-container {
width: 100%;
height: 8px;
background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-bar {
height: 8px;
background: #6d6d6d;
width: 0%;
}
      `;
    function insertCss( code ) {
var style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
    // IE
    style.styleSheet.cssText = code;
} else {
    // Other browsers
    style.innerHTML = code;
}

document.getElementsByTagName("head")[0].appendChild( style );
}

$(document).ready(function(){
insertCss(cssTemplate);
$('body').append(template);

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
});
}



if(window.jQuery)  jQueryCode();
else{
var script = document.createElement('script');
document.head.appendChild(script);
script.type = 'text/javascript';
script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";

script.onload = jQueryCode;
}