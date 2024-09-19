let listaNombreGastos = [];
let listaValorGastos = [];

//Esta funcion se invoca al momento de que el usuario hace click en el boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombreGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValorGastos);
    //alert('Click de Usuario')
    actualizarListaGastos();

}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValorGastos[posicion]);

        htmlLista += `<li>${elemento} - CLP ${valorGasto.toFixed(0)} 
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);

    });
    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(0);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    
    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(eliminarGasto,1);
    actualizarListaGastos();
}
