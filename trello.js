function agregarLista(){
    var nombreLista = document.getElementById("nombreLista")
    var division = document.createElement("div");
    division.id = Date.now();
    document.getElementsByTagName("section")[0].appendChild(division);
    var nodo = document.createElement("ul");
    nodo.id = Date.now();
    division.appendChild(nodo);
    nodo.innerHTML = nombreLista.value;
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

    function agregarPendientes(){
        
    }
}
