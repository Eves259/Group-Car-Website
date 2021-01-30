var slideIndex = 1;
var slidesNum = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
    if (slideNum > 0 && slideNum < 10) {
        replaceText(slidesNum += n);
    }
    else if (slideNum <= 10){
        slidesNum = 1;
        replaceText(slidesNum += n);
    }
    else if (slideNum >= 0) {
        slidesNum = 9;
        replaceText(slidesNum += n);
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    replaceText(n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function replaceText(n) {
    if (n == 1) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Camaro SS");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 2) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Camaro LS");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 3) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Camaro ZL1");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 4) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Dodge Challenger");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 5) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Dodge Hellcat");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 6) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Dodge Demon");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 7) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Mustang GT");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 8) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Mustang Roush");
        document.getElementById("slideShowText").innerHTML = res;
    }
    if (n == 9) {
        var str = document.getElementById("slideShowText").innerHTML; 
        var res = str.replace(str, "Mustang Shlby GT500");
        document.getElementById("slideShowText").innerHTML = res;
    }
}