$(document).ready(function () {
    $(".burger").click(function () {
        $(".navigation").toggleClass("active");
    });
});



let arrow =  document.querySelector (".arrow")
let body = document.querySelector("body")
const modal = document.querySelector(".reclama")
const hide = document.querySelector(".absolute")


window.addEventListener("scroll",()=>{
    if(window.scrollY>1850){
        modal.classList.add("show")
    }
})

hide.addEventListener("click",function(){
    modal.classList.add("hide")
   
})

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
