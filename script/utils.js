function entryAnimation(div){
    if(div.classList.contains("entry-animation"))
        if(div.classList.contains("hidden")) div.classList.remove("hidden");
}

function exitAnimation(div)
{
    if(div.classList.contains("entry-animation"))
        if(!div.classList.contains("hidden")) div.classList.add("hidden");
}


function animatedDiv(divs){
    for(var i = 0; i < divs.length; i++)
        entryAnimation(divs[i]);
}

function exitAnimatedDiv(divs)
{
    for(var i = 0; i < divs.length; i++)
        exitAnimation(divs[i]);
}

function setAnimation(){
    var divs = document.getElementsByClassName("entry-animation");

    var starter = document.getElementById("starter-animation");

    window.addEventListener("scroll" , function(){
        console.log(this.window.scrollY);
        for(var i = 0; i < divs.length; i++)
            if(starter.getBoundingClientRect().top <= 800 && starter.getBoundingClientRect().top >= -400)
                animatedDiv(divs);
            else
                exitAnimatedDiv(divs);
    });
}

