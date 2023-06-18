$(document).ready(function () {
    $(".burger").click(function () {
        $(".navigation").toggleClass("active");
    });
});



let arrow =  document.querySelector (".arrow")
let body = document.querySelector("body")

window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        arrow.style.display="flex"
    }else{
        arrow.style.display='none'
    }
})

arrow.addEventListener("click",()=>{
body.scrollIntoView({
    block:"start",
    inline:"nearest",
    behavior:"smooth"
})
})
