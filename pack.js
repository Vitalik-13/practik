$(document).ready(function () {
    $(".burger").click(function () {
        $(".navigation").toggleClass("active");
    });
});



let arrow =  document.querySelector (".arrow")
let body = document.querySelector("body")
const modal = document.querySelector(".reclama")
const hide = document.querySelector(".absolute")


body.addEventListener("click",(event)=>{
  if(!event.target.closest('.relative')){
    modal.style.display='none'
}
})
  

function closeModal(){ 
    modal.style.display='none'
}

hide.addEventListener("click", closeModal)
   
   
function openModal(){
    if(window.scrollY >document.body.scrollHeight / 2){
        modal.style.display ="flex"
        window.removeEventListener("scroll",openModal)
    }
}

window.addEventListener("scroll",openModal )

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
 


    
  




