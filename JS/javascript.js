//Allows the text and div box with the images to be replaced 
var slideIndex = 1;
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    replaceText(slideIndex);
}

//Uses the dots to change the slides
function currentSlide(n) {
    showSlides(slideIndex = n);
    replaceText(n);
}

//Used to know which slide is the chosen slide
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

//Replaces the current text in the box with a new set of text depending on the number chosen
function replaceText(n) {
    if (n == 1) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Camaro SS");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 455 HP / 455 Pound-Feet <br>
        Price: $25,000 <br><br>

        The star of the Chevrolet performance lineup, the 6.2L LT1 V8 with the capability of 455 horsepower and 455 lb.-ft. of torque, will accelerate the 8-speed automatic Camaro SS from 0 to 60 in 4.0 seconds flat. With Direct Injection, Variable Valve Timing and, on the 8-speed automatic, Active Fuel ManagementTM, it offers efficiency when you want it, power when you need it.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 2) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Camaro LS");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 295 HP / 295 Pound-Feet <br>
        Price: $25,000 <br><br>

        Few affordable cars offer both these satisfying sensations, but the Chevy Camaro is one of them. It's not focused solely on being loud and going fast, however—even though it does both of those tasks very well. Chevy's two-door pony car comes as a coupe or convertible, and it offers copious features and countless personalization options.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 3) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Camaro ZL1");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 650 HP / 650 Pound-Feet <br>
        Price: $72,195 <br><br>

        The Camaro perfects the front-engine, rear-drive formula inherent to muscle cars. While both the coupe and convertible have a remarkable chassis that's more clairvoyant than Miss Cleo, unleashing the ultimate Camaro requires the transformative 1LE track package, but beware that it makes the suspension very stiff.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 4) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Dodge Challenger");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 485 HP / 475 Pound-Feet <br>
        Price: $29,790 <br><br>

        History tells us the 2021 Dodge Challenger competes with the Chevy Camaro and Ford Mustang, but reality tells us it has a totally different personality. While all three American muscle cars are headlined by high-powered V-8s, there's a big discrepancy in how they drive. Compared with the Chevy's and the Ford's razor-sharp handling, the Dodge is better suited for relaxed cruising.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 5) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Dodge Hellcat");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 797 HP / 707 Pound-Feet <br>
        Price: $62,190 <br><br>

        The 2021 Dodge Challenger SRT Hellcat has mastered Darwin's theory of evolution, transforming into a more fascinating machine year after year. Although a supercharged 6.2-liter V-8 is still at the heart of this big-bodied Dodge coupe, the Hellcat engine now comes in three eye-popping potencies: 717, 797, and 807 horsepower.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 6) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Dodge Demon");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 840 HP / 770 Pound-Feet <br>
        Price: $86,390 <br><br>

        The Challenger SRT Demon is even mightier than the Hellcat version, boasting up to 840 horsepower and exclusive drag-racing equipment. While the limited-edition Demon went out of production after the 2018 model year, it remains one of the coolest and craziest cars to ever wear a Dodge badge. There are few cars that can come close to matching the Demon.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 7) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Mustang GT");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 480 HP / 420 Pound-Feet <br>
        Price: $28,350 <br><br>

        The Ford Mustang family has a legendary history and is populated by models with diverse personalities. This year, that history is recalled by the revival of the Mach 1 moniker, first seen on the 1969 'Stang. The 2021 Mustang will still come as a coupe or a convertible, and its stable of high-performance offerings will be as full as ever.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 8) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Mustang Roush");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 775 HP / 670 Pound-Feet <br>
        Price: $87,720 <br><br>

        Combining Ford’s 5.0L V8 engine with the ROUSH Phase 2 Supercharger, the ROUSH Stage 3 delivers 750 hp, 670 lb-ft of torque and a blistering 0-60 mph time of 3.6 seconds. Equipped in your choice of 6-speed manual or 10-speed automatic transmission, the power is yours to command.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
    if (n == 9) {
        var str = document.getElementById("slideTitle").innerHTML; 
        var res = str.replace(str, "Mustang Shlby GT500");
        document.getElementById("slideTitle").innerHTML = res;

        var str2 = document.getElementById("slideContent").innerHTML; 
        var res2 = str2.replace(str2, `Specs: 760 HP / 625 Pound-Feet <br>
        Price: $74,095 <br><br>

        As the most powerful and quickest factory Mustang ever, the Ford Mustang Shelby GT500 blends modern sports-car performance with iconic muscle-car presence. It builds on the same racetrack-capable chassis as the excellent Ford Mustang Shelby GT350, with an additional 234 horsepower that lends it credibility at the drag strip as well.`);
        document.getElementById("slideContent").innerHTML = res2;
    }
}