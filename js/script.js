


$(document).ready(function () {
$('.customer-logos').slick({
       slidesToShow: 6,
       slidesToScroll: 2,
       autoplay: true,
       autoplaySpeed: 1500,
       arrows: false,
       dots: false,
       pauseOnHover: false,
       responsive: [{
           breakpoint: 768,
           settings: {
               slidesToShow: 4
           }
       }, {
           breakpoint: 520,
           settings: {
               slidesToShow: 3
           }
       }]
});});



let numbers = document.querySelectorAll("[countTo]");

  numbers.forEach((number) => {
    let ID = number.getAttribute("id");
    let value = number.getAttribute("countTo");

    let options = {
      duration: 6, // Adjust the duration to slow down or speed up the animation
    };

    let countUp;

    if (number.hasAttribute("data-decimal")) {
      options.decimalPlaces = 1;
      countUp = new CountUp(ID, 2.8, options);
    } else {
      countUp = new CountUp(ID, value, options);
    }

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
      number.innerHTML = value;
    }
  });



  var i = 0;
  var texts = ['Digital Marketing!', 'Web Designer!', 'Graphic Designer!', 'Video Editing!'];
  var currentTextIndex = 0;
  var speed = 150;

  function typeWriter() {
    var currentText = texts[currentTextIndex];
    if (i < currentText.length) {
      document.getElementById("demo").innerHTML += currentText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      i = 0;
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Cycle to the next text
      document.getElementById("demo").innerHTML = '';
      setTimeout(typeWriter, speed);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
  });



  document.addEventListener("DOMContentLoaded", function() {
  // Hide the default cursor
  document.body.style.cursor = "none";

  // Get custom cursor element
  const customCursor = document.getElementById("custom-cursor");

  // Add event listener for mousemove
  document.addEventListener("mousemove", function(e) {
    // Update custom cursor position based on mouse movement
    customCursor.style.left = e.pageX + "px";
    customCursor.style.top = e.pageY + "px";
  });
 });





(function () {
    var setStyle = function () {
        var windowHeight = (function () {
            var o = window;
            if (o.innerHeight) {
                return o.innerHeight;
            }
            else {
                o = document;
                if (o.documentElement.clientHeight == 0) {
                    return o.body.clientHeight;
                }
                else {
                    return o.documentElement.clientHeight;
                }
            }
        })();
        var offset = (function () {
            var o = window;
            if (o.pageYOffset) {
                return o.pageYOffset;
            }
            else {
                o = document;
                if (o.documentElement.scrollTop == 0) {
                    return o.body.scrollTop;
                }
                else {
                    return o.documentElement.scrollTop;
                }
            }
        })();
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var divs = document.getElementsByClassName("animate-on-scroll");
        for (var i = 0; i < divs.length; i++) {
            var x = divs[i];
            var ratio = parseFloat(x.getAttribute("animate-page-ratio") || 0.8);
            if (isNaN(ratio)) {
                ratio = 0.8;
            }
            var top = Math.round(x.parentNode.getBoundingClientRect().top || 0);
            var animateClass = (x.getAttribute("animate-class") || "");
            if (windowHeight + offset >= docHeight || top <= windowHeight * ratio) {
                if (x.className.indexOf(" " + animateClass) < 0) {
                    x.className += " " + animateClass;
                }
            }
            else if (top > windowHeight * ratio) {
                x.className = x.className.replace(" " + animateClass, "");
            }
        }
    };
    var addHandler = function (type) {
        var w = window;
        if (w.addEventListener) {
            w.addEventListener(type, setStyle, false);
        } else if (w.attachEvent) {
            w.attachEvent("on" + type, setStyle);
        } else {
            window["on" + type] = setStyle;
        }
    };
    addHandler("load");
    addHandler("resize");
    addHandler("scroll");
})();