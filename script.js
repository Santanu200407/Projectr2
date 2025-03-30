let popup=document.getElementById("popup-container");
let home=document.getElementById("btn");
let btn=document.getElementById("btn2");
home.addEventListener("click",()=>{
    popup.style.visibility="visible";
})
btn.addEventListener("click",()=>{
    popup.style.visibility="hidden";
})