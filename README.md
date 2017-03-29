PROCEDIMIENTO
Para iniciar el proyecto primero se esta creando una estructura en HTML la cual se ira
modificando de acuerdo a las funciones que se darán en JS.
A muchos de los elementos se les ha asignado un id para poder trasladarlo a JS y en caso de que sea necesario a CSS. En el caso de trabajarlo con CSS habrán algunos que se trabajen directamente con su "tag".
He decidido comenzar a crear primero los titulos de las listas para subdivir el problema.
PSEUDOCODIGO AGREGAR LISTA:
1. Crear lista vacia desordenada <ul> dentro del <DIV>
2. Recibir el nombre del input nombre de lista = input.value
3. Mostrar la lista InnerHTML con la funcion agregar lista()
4. Darle a la accion "onclick" del boton "Crear Lista" el valor de la funcion mostrar lista
 *** la funcion no haresultado lo cual me ha estancado para continuar pues no se muestra y me aparece como indefinida en el ultimo intento. Estoy recomenzando otra** La cual funciono para agregar las listas :) Solo me falta el 80% 

PSEODOCODIGO AGREGAR PENDIENTE:
1. Agregar a la funcion anterior por evento dos inputs con id
2. Crear elementos a la lista (appenchild) 
3. Darle a la acción "onclick" del boton "agregar item()"

He conseguido poner los botones despues de cada tarea pero aun no se como es que los llamare en la siguiente funcion, o si tendre que hacer una funcion anidada. 
He ocupado SetAttribute para los botones, aun no se como llegare a que se ejecute la funcion de agregar elementos. Estoy tratando de encontrar la manera en que pueda dar "onclick".
Creo que la funcion debe ir anindada pues no se puede acceder a ella sino hasta que se crea una tarea.