document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("addIngredient");
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault();
        Addbtn();
    });

    function Addbtn(){
        let div = document.getElementById("interesting-shape");
        var currentHeight = div.offsetHeight;
        var newHeight = currentHeight + 40; // Increase the height by 20 pixels (you can adjust this value as needed)
        div.style.height = newHeight + "px";
        let newInput = document.createElement("input");
        newInput.type="text";
        newInput.name="ingredients[]";
        newInput.classList.add("newIngredient");
        btn.insertAdjacentElement("afterend", newInput);
    }  
});
