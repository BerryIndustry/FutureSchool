let indexSlide = 0;

timedSlide();

function timedSlide(){
    nextSlide();

    setTimeout(timedSlide, 7000);
}

function setCurrentSlide(number){

    clearTimeout(timedSlide);

    var slides = document.getElementsByClassName("slide-content");
    var buttons = document.getElementsByClassName("fas fa-circle");

    for(var i = 0; i < slides.length; i++){
        if(slides[0] == null) throw new Exception("Elemento nullo");

        if(i == number - 1){
            slides[i].classList.remove("none");
            slides[i].classList.add("block");

            buttons[i].classList.add("active");
        }
        else{
            slides[i].classList.add("none");
            slides[i].classList.remove("block");

            buttons[i].classList.remove("active");
        }
    }

    indexSlide = number - 1;
}

function nextSlide(){

    var slides = document.getElementsByClassName("slide-content");

    let number = (indexSlide + 1 >= slides.length) ? 1 : indexSlide + 2;

    setCurrentSlide(number);
}

function prevSlide(){

    var slides = document.getElementsByClassName("slide-content");

    let number = (indexSlide - 1 <= - 1) ? slides.length : indexSlide;
    
    setCurrentSlide(number)
}


function start(){
    let video = document.getElementById("replay-video");
    video.play();
}
