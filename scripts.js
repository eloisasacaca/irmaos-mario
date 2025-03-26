const form= document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-form")


function clique(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)" 
    mascara.style.visibility = "visible"     
 }

 function sumir(){
    form.style.left = "-100%"
    mascara.style.visibility = "hidden"   
 }


