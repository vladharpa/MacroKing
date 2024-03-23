import inUse from '../controllers/register.controller.js';
const form = document.querySelector('form');
form.addEventListener('submit',()=>{
    if(inUse==true)
    window.alert("folosit");
    else
    windows.alert("succes");
})

console.log("DA")
