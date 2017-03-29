function agregarLista(){
    var nuevoEspacio = document.createElement("div"); // Div donde estara la lista
    var nuevaLista = document.createElement("ul"); // Dentro se cre una lista
    var nombreLista = document.getElementById("nombreLista") // nombre de la lista
    
    nuevoEspacio.appendChild(nuevaLista) //nueva lista sera hijo de nuevo espacio
    var espacioDeListas = document.getElementById("cajaListas"); //aqui estaran los div y la ul
  
    nuevaLista.innerHTML = nombreLista.value;
    document.body.insertBefore(nuevoEspacio, espacioDeListas)
    
}
function agregarItem(){
    var 
}
