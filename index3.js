// Objeto para almacenar los productos
var productos = {};

function cargarProducto() {
    var clave = prompt("Ingrese la clave del producto:");
    var descripcion = prompt("Ingrese la descripción del producto:");
    var cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    var productosMinimos = parseInt(prompt("Ingrese la cantidad mínima en existencia:"));
    var precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));

    productos[clave] = {
        descripcion: descripcion,
        cantidad: cantidad,
        productosMinimos: productosMinimos,
        precioUnitario: precioUnitario
    };

    console.log('Producto cargado correctamente.');
}

function venderProducto() {
    var clave = prompt("Ingrese la clave del producto:");
    
    if (clave in productos) {
        var cantidadAVender = parseInt(prompt("Ingrese la cantidad de productos a vender:"));

        if (cantidadAVender <= productos[clave].cantidad) {
            productos[clave].cantidad -= cantidadAVender;
            console.log('Venta exitosa. Cantidad restante: ' + productos[clave].cantidad);
        } else {
            console.log('Error: No hay suficientes productos en existencia.');
        }
    } else {
        console.log('Error: La clave ingresada no existe.');
    }
}

function reabastecerProducto() {
    var clave = prompt("Ingrese la clave del producto:");
    
    if (clave in productos) {
        var cantidadAReabastecer = parseInt(prompt("Ingrese la cantidad de productos a agregar:"));
        productos[clave].cantidad += cantidadAReabastecer;
        console.log('Reabastecimiento exitoso. Cantidad restante: ' + productos[clave].cantidad);
    } else {
        console.log('Error: La clave ingresada no existe.');
    }
}

function informacionProducto() {
    var clave = prompt("Ingrese la clave del producto:");
    
    if (clave in productos) {
        var producto = productos[clave];
        console.log('Información del producto:');
        console.log('Clave: ' + clave);
        console.log('Descripción: ' + producto.descripcion);
        console.log('Cantidad existente: ' + producto.cantidad);
        console.log('Cantidad mínima establecida: ' + producto.productosMinimos);
        console.log('Precio unitario: ' + producto.precioUnitario);
    } else {
        console.log('Error: La clave ingresada no existe.');
    }
}

function mostrarMenu() {
    var opcion;
    do {
        console.log('Menú:');
        console.log('1. Cargar un producto');
        console.log('2. Vender producto');
        console.log('3. Reabastecer producto');
        console.log('4. Información producto');
        console.log('5. Salir');
        opcion = parseInt(prompt('Ingrese su opción:'));

        switch (opcion) {
            case 1:
                cargarProducto();
                break;
            case 2:
                venderProducto();
                break;
            case 3:
                reabastecerProducto();
                break;
            case 4:
                informacionProducto();
                break;
            case 5:
                console.log('Saliendo del programa. ¡Hasta luego!');
                break;
            default:
                console.log('Opción inválida. Por favor, ingrese una opción válida.');
        }
    } while (opcion !== 5);
}

// Llama a la función para mostrar el menú
mostrarMenu();
