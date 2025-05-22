function AddNewTask(){
    const newtask = document.getElementById("task");

    if(newtask.value.trim()){
        const a = document.createElement("li");
        a.classList.add("py-3");

        const s = document.createElement("span");
        s.innerText = newtask.value.trim();

        const b = document.createElement("button");
        b.classList.add("btn", "btn-danger", "mx-3");
        b.innerText = "X Delete";
        b.onclick = () =>{
            a.remove();
        };
        
        // addt to lst btn
        const b2 = document.createElement("button");
        b2.classList.add("btn", "btn-success", "mx-3");
        b2.innerText = "Add to list";
        

        //when add to list is clicked
        b2.onclick = () =>{
        
            const addeditem = document.createElement("li");
            addeditem.classList.add("py-3")

            const itemtext  = document.createElement("span");
            itemtext.innerText = s.innerText;

            addeditem.appendChild(itemtext);
            document.getElementById("additem").appendChild(addeditem)
        }

        a.appendChild(s);
        a.appendChild(b);
        a.appendChild(b2);
       
        document.getElementById("taskList").appendChild(a);
        newtask.value="";
    }
    else{
        alert("please input a valid task");
        newtask.value ="";
    }

}