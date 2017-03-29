function agregarLista(){
    var nombreLista = document.getElementById("nombreLista")
    var division = document.createElement("div");
    division.id = Date.now();
    document.getElementsByTagName("section")[0].appendChild(division);
    var ul = document.createElement("ul");
    ul.id = Date.now();
    division.appendChild(ul);
    ul.innerHTML = nombreLista.value;
    var nombrePendiente = document.createElement("input");
    nombrePendiente.setAttribute("type","text");
    nombrePendiente.id = Date.now();
    division.appendChild(nombrePendiente);
    var agregarPendiente = document.createElement("input");
    agregarPendiente.setAttribute("type","button");
    agregarPendiente.setAttribute("value","Agregar Pendiente");
    agregarPendiente.setAttribute("class","boton"); 
    agregarPendiente.id = Date.now();
    division.appendChild(agregarPendiente);
    
    agregarPendiente.onclick = function(){ //hasta este punto todo funciona; reconoce la funcion
                            var li= document.createElement("li");
                            li.id = Date.now();
                            ul.appendChild(li);
                            li.innerHTML=nombrePendiente.value;
                         
    }

}
