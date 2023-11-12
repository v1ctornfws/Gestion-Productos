//Objeto
var productos = {};

//Numero de productos
const numProductos = parseInt(prompt("Escribe el numero de productos", "1"));
cargarProductos();

//Menú
do{
    var opcion = parseInt(prompt("Escoge la opcion del menú:\n1.Venta de un producto\n2.Reabastecimiento de un producto\n"
    + "3.Actualizar el precio de un producto\n4.Informar sobre un producto\n5.Salir", "1"));
    switch(opcion){
        case 1:{
            var prodClave = parseInt(prompt("Ingrese la clave del producto a vender", productos[0].clave));
            var prodCantidad = parseInt(prompt("Ingrese la cantidad vendida", "0"));
            venderProductos();
            break;
        }
        case 2:{
            var prodClave = parseInt(prompt("Ingrese la clave del producto a restablecer", productos[0].clave));
            var prodCantidad = parseInt(prompt("Ingrese el aumento de productos", "0"));
            restablecerProductos();
            break;
        }
        case 3:{
            var prodClave = parseInt(prompt("Ingrese la clave del producto a actualizar", productos[0].clave));
            var prodNuevoPrecio = parseInt(prompt("Ingrese el nuevo Precio", productos[0].precioUnitario));
            actualizarProductos();
            break;
        }
        case 4:{
            var prodClave = parseInt(prompt("Ingresa la clave del producto a consultar", productos[0].clave));
            informarProducto();
        }
        case 5:{
            alert("Finalizando");
            break;
        }
        default:{
            alert("Opcion no disponible, intente de nuevo");
        }
    }
}while(opcion!=5);

//Funciones
function cargarProductos(){
    for(let i=0;i<numProductos;i++){
        alert("Producto "+ (i+1));
        var clave = parseInt(prompt("Clave", ""));
        var descripcion = prompt("Descripción", "");
        var existencia = parseInt(prompt("Existencia", ""));
        var minExistencia = parseInt(prompt("Minimo a mantener existencia", ""));
        var precioUnitario = parseInt(prompt("Precio unitario", ""));

        productos[i] = {
            clave: clave,
            descripcion: descripcion,
            existencia: existencia,
            minExistencia: minExistencia,
            precioUnitario: precioUnitario
        };
    };
};

function venderProductos(){
    for(let i=0;i<numProductos;i++){
        if(productos[i].clave==prodClave){
            if((productos[i].existencia - prodCantidad) >= productos[i].minExistencia){
                productos[i].existencia-=prodCantidad;
                alert("Venta realizada con exito");
            }else{
                alert("No se puede realizar la venta. Existencia minima no mantenida");
            }
            var encontrado = true;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado")
    }
};

function restablecerProductos(){
    for(let i=0;i<numProductos;i++){
        if(productos[i].clave==prodClave){
            productos[i].existencia+=prodCantidad;
            alert("Restablecimiento exitoso");
            var encontrado=true;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado");
    }
};

function actualizarProductos(){
    for(let i=0;i<numProductos;i++){
        if(productos[i].clave==prodClave){
            productos[i].precioUnitario = prodNuevoPrecio;
            alert("Precio actualizado");
            var encontrado=true;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado")
    }
}

function informarProducto(){
    for(let i=0;i<numProductos;i++){
        if(productos[i].clave==prodClave){
            alert("Clave: "+productos[i].clave+"\nDescripcion: "+productos[i].descripcion+
            "\nExistencia: "+productos[i].existencia+"\nMinimo a mantener en existencia: "+productos[i].minExistencia+
            "\nPrecio Unitario: "+productos[i].precioUnitario);
            var encontrado = true;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado");
    }
}