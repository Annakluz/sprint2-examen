function agregarLista(){
    var nombreLista = document.getElementById("nombreLista")
    var div = document.createElement("div");
    div.id = Date.now();
    document.getElementsByTagName("section")[0].appendChild(div);
    //el indice de en que section en caso de haber mas iran agregandose los hijos.
    var ul = document.createElement("ul");
    ul.id = Date.now();
    div.appendChild(ul);
    ul.innerHTML = nombreLista.value + " " + "<span onclick='eliminar(this)'>X </span>";
    var nombrePendiente = document.createElement("input");
    nombrePendiente.setAttribute("type","text");
    nombrePendiente.id = Date.now();
    div.appendChild(nombrePendiente);
    var agregarPendiente = document.createElement("input");
    agregarPendiente.setAttribute("type","button");
    agregarPendiente.setAttribute("value","Agregar Pendiente");
    agregarPendiente.setAttribute("class","boton"); 
    agregarPendiente.id = Date.now();
    div.appendChild(agregarPendiente); 
    
    agregarPendiente.onclick = function(){ //hasta este punto todo funciona; reconoce la funcion
                            var li= document.createElement("li");
                            li.id = Date.now();
                            ul.appendChild(li);
                            li.innerHTML=nombrePendiente.value + " " + "<span onclick='eliminar(this)'>X </span>";
                       
    }

}
function eliminar(elemento) { //El codigo borra las listas y los pendientes de manera independiente.
       
     var id=elemento.parentNode.getAttribute("id");
     node=document.getElementById(id);
     node.parentNode.removeChild(node);
}
