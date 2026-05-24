const header = document.querySelector(".site-header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        header.classList.add("active-header");
    }

    else{
        header.classList.remove("active-header");
    }

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});