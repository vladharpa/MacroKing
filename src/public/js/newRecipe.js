    const btn = document.getElementById("addIngredient");
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault();
        addInput();

    });
    let i=0;
    function addInput(){
        
        let div = document.getElementById("interesting-shape");
        var currentHeight = div.offsetHeight;
        var newHeight = currentHeight + 40; // Increase the height by 20 pixels (you can adjust this value as needed)
        div.style.height = newHeight + "px";
        let field=document.createElement("input");
        field.type="text";
        field.style.color="black";
        field.name=`ingredients[${i}]`;
        field.classList.add("newIngredient");
        let btnRemove=document.createElement('img');
        btnRemove.classList.add('removeBtn');
        btnRemove.name=`ingredients[${i}]`;
        
        btn.insertAdjacentElement("afterend",btnRemove);
        btn.insertAdjacentElement("afterend",field);
        i++;
        
    }
   const form = document.getElementsByTagName('form')
   form[0].addEventListener('click',(evt)=>{
    evt.preventDefault();
    const inputArray=document.getElementsByClassName('newIngredient');
    console.log()
    for(let x of inputArray){
        if(x.name==evt.target.name && evt.target.tagName=="IMG"){
            console.log(x.name)
            x.remove();
            evt.target.remove();
           i--;
        }
    }
    
   });



