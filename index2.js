const opcion = document.querySelector('#menuOpcion');
const btns = document.querySelectorAll('.btn');
let i = 1;
let PRODUCTOS = Array(10);
//Que se hace al presionar una boton del menu
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('0')) {
            alert('Solo puede agregar un producto a la vez');
            alert('Ingresa la clave del producto');
            clave = prompt();

            alert('Ingresa una descripcion del producto');
            descrip = prompt();

            alert('Ingresa la cantidad existente del producto');
            cantidad = prompt();

            alert('Ingresa la cantidad minima existente del producto');
            cantidadMin = prompt();

            alert('Ingresa el precio unitario del producto');
            precioU = prompt();

        } else if (styles.contains('1')) {
            //Esto sera la funcion para vender un producto
            alert('Ingrese la clave del producto a vender');
            claveSell = prompt();
            if (claveSell === clave) {
                alert('Clave existente', clave);
                console.log('Productos en existencia', cantidad);
                alert('Cantidad de producto a vender');
                console.log(cantidadMin)
                cantidadSell = prompt();
                console.log('Cantidad vendida', cantidadSell);
                cantidadRestante = cantidad - cantidadSell
                console.log('Cantidad Restante', cantidadRestante);
                if (cantidadRestante < cantidadMin) {
                    console.log('Venta exitosa');
                } else {
                    alert('Reabastece tu producto');
                }
            } else {
                alert('Clave no existente, carga tu producto')
            }
        } else if (styles.contains('2')) {
            console.log('Boton 2');

        } else if (styles.contains('3')) {
            console.log('Boton 3')

        } else if (styles.contains('4')) {
            console.log('Boton 4');

        } else if (styles.contains('5')) {
            console.log('Boton 5');
        }
    })
})

