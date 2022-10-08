const btn = document.getElementById("btn-mobile");

function toggleMenu(){
    
    var nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btn.addEventListener('click',toggleMenu);