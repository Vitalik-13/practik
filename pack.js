$(document).ready(function () {
    $(".burger span").click(function () {
        $(".navigation").toggleClass("active");
    });
});



let arrow =  document.querySelector (".arrow")
let body = document.querySelector("body")
const modal = document.querySelector(".reclama")
const hide = document.querySelector(".absolute")
const form = document.querySelector(".main-form")
const inputsForm = document.querySelectorAll(".input")
let green = document.querySelectorAll(".green-foto");




function rotateElement() {
    green.forEach((item) => item.classList.add("green-foto-two"));
  
  }
setInterval(rotateElement,2000)



function removeRotate(){
    green.forEach((item)=>item.classList.toggle('green-foto-two')) 
        // if(item.classList.contains('green-foto-two')){
        //     item.classList.remove("green-foto-two")
        // }});
}

setInterval(removeRotate,2100)


function sendForm(){
    let result = true
    

    function removeTextError(input){
        let parent = input.parentElement;
        let errorElement = parent.querySelector('.errorText');
        if (errorElement) {
            parent.removeChild(errorElement);
        }
        parent.classList.remove('errorText');
    }

    function removeClassError(item){
        if(item.classList.contains("error")){
            item.classList.remove("error")
        }
    }

    function addErrorText(input,text){
        let parent = input.parentElement
        let errorElement = document.createElement('p')
        errorElement.textContent=text
        parent.append(errorElement)
        errorElement.classList.add('errorText')
    }

    function addErrorClass(input){
         input.classList.add("error")
    }  


    inputsForm.forEach((item)=>{
        removeTextError(item)
          removeClassError(item)
        if(item.value==""){
            addErrorClass(item)
            addErrorText(item,"Не введені дані")
            result = false  
            
            
        }
    })

    return result
}

form.addEventListener("submit",function(event){
    event.preventDefault()
    if(sendForm(this) == true )
    alert("Форма успішно відправлена")
    this.reset()
})
//========================================




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
 
let navLinks = document.querySelectorAll('.nav .header-link');



navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});


function scrollToSection(e) {
  e.preventDefault(); 

  let targetId = this.getAttribute('href');
  
  let targetSection = document.querySelector(targetId); 
 

  targetSection.scrollIntoView({ 
    behavior: 'smooth'
  });
}



// Відключення браузерних налаштувань у посилань, що в footer

let manyLink = document.querySelector('.text-on-foto-footer')

manyLink.addEventListener("click",(e)=>{
    if(e.target.closest(".link-foto")){
       e.preventDefault()
    }
})



  
  




