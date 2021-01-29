var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Camaro SS");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 2) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Camaro LS");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 3) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Camaro ZL1");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 4) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Dodge Challenger");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 5) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Dodge Hellcat");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 6) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Dodge Demon");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 7) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Mustang GT");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 8) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Mustang Roush");
        document.getElementById("hallo").innerHTML = res;
    }
    if (n == 9) {
        var str = document.getElementById("hallo").innerHTML; 
        var res = str.replace(str, "Mustang Shlby GT500");
        document.getElementById("hallo").innerHTML = res;
    }
}