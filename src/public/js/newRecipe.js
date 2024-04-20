    const btn = document.getElementById("addIngredient");
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault();
        addInput();

    });
    
    function addInput(){
        
        let div = document.getElementById("interesting-shape");
        var currentHeight = div.offsetHeight;
        var newHeight = currentHeight + 40; // Increase the height by 20 pixels (you can adjust this value as needed)
        div.style.height = newHeight + "px";
        let field=document.createElement("input");
        field.type="text";
        field.name="ingredients[]";
        field.classList.add("newIngredient");
        let btnRemove=document.createElement('button');
        btnRemove.classList.add('removeBtn');
        btn.insertAdjacentElement("afterend",btnRemove);
        btn.insertAdjacentElement("afterend",field);
    }  


