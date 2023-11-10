//Arreglos
var arrayClave = {};
var arrayDescripcion = {};
var arrayExistencia = {};
var arrayMinExistencia = {};
var arrayPU = {};

const productos = parseInt(prompt("Escribe el numero de productos", ""));
cargarProductos();

do{
    var opcion = parseInt(prompt("Escoge la opcion del menú:\n1.Venta de un producto\n2.Reabastecimiento de un producto\n"
    + "3.Actualizar el precio de un producto\n4.Informar sobre un producto\n5.Salir", ""))
    switch(opcion){
        case 1:{
            
        }
    }
}while(opcion!=5);

function cargarProductos(){
    for(let i=0;i<productos;i++){
        alert("Producto "+ (i+1));
        arrayClave[i] = parseInt(prompt("Clave", ""));
        arrayDescripcion[i] = prompt("Descripción", "");
        arrayExistencia[i] = parseInt(prompt("Existencia", ""));
        arrayMinExistencia[i] = parseInt(prompt("Minimo a mantener existencia", ""));
        arrayPU[i] = parseInt(prompt("Precio unitario", ""));
    };
};

/*
        do {
            System.out.println("Menu de Operaciones\n1.Venta de un producto\n2.Reabastecimiento de un producto\n"
            + "3.Actualizar el precio de un producto\n4.Informar sobre un producto\n5.Salir");
            opcion = tc.nextInt();
            switch (opcion) {
                case 1:
                    System.out.print("Ingrese la clave del producto a vender: ");
                    clave = tc.nextInt();
                    System.out.print("Ingrese la cantidad vendida: ");
                    cantidad = tc.nextInt();
                    venderProductos(arrayClave, arrayExistencia, arrayMinExistencia, clave, cantidad, N, encontrado);
                    break;
                case 2:
                    System.out.print("Ingrese la clave del producto a restablecer: ");
                    clave = tc.nextInt();
                    System.out.print("Ingrese el aumento de productos: ");
                    cantidad=tc.nextInt();
                    restablecerProductos(arrayClave, arrayExistencia, clave, cantidad, N, encontrado);
                    break;
                case 3:
                    System.out.print("Ingrese la clave del producto a actualizar: ");
                    clave = tc.nextInt();
                    System.out.print("Ingrese el porcentaje de aumento de precio: ");
                    porcentaje = tc.nextDouble();
                    actualizarPrecio(arrayClave, arrayPU, clave, porcentaje, N, encontrado);
                    break;
                case 4:
                    System.out.print("Ingrese la clave del producto a consultar: ");
                    clave = tc.nextInt();
                    informarProducto(arrayClave, arrayDescripcion, arrayExistencia, arrayMinExistencia, arrayPU, clave, N, encontrado);
                    break;
                case 5:
                    System.out.println("Saliendo del programa");
                    break;
                default:
                    System.out.println("Opcion no valida");
                    break;
            }
        } while (opcion != 5);
    }

    public static void venderProductos(int [] arrayClave, int [] arrayExistencia, int[] arrayMinExistencia, int clave, 
    int cantidad, int N, boolean encontrado) {
        for (int i = 0; i<N; i++) {
            if (arrayClave[i] == clave) {
                if ((arrayExistencia[i] - cantidad) >= arrayMinExistencia[i]) {
                    arrayExistencia[i] -= cantidad;
                    System.out.println("Venta realizada con exito");
                } else {
                    System.out.println("No se puede realizar la venta, existencia minima no mantenida");
                }
                encontrado =true;
            }
        }
        if(!encontrado){
            System.out.println("Producto no encontrado");
        }
    }
    
    public static void restablecerProductos(int[] arrayClave, int [] arrayExistencia, int clave, int cantidad, 
    int N, boolean encontrado){
        for (int i = 0; i<N; i++) {
            if (arrayClave[i] == clave) {
                arrayExistencia[i]+=cantidad;
                System.out.println("Restablecimiento exitoso");
                encontrado=true;
            }    
        }
        if(!encontrado){
            System.out.println("Producto no encontrado");
        }
    }
    
    public static void actualizarPrecio(int [] arrayClave, double[] arrayPU, int clave, double porcentaje, 
    int N, boolean encontrado){
        for(int i=0;i<N;i++){
            if(arrayClave[i] == clave){
                arrayPU[i] = arrayPU[i]*(1+(porcentaje/100));
                System.out.println("Precio actualizado");
                encontrado = true;
            }
        }
        if(!encontrado){
            System.out.println("Producto no encontrado");
        }
    }
    
    public static void informarProducto(int [] arrayClave, String[] arrayDescripcion, int [] arrayExistencia, 
    int [] arrayMinExistencia, double [] arrayPU, int clave, int N, boolean encontrado){
        for(int i=0;i<N;i++){
            if(arrayClave[i]==clave){
                System.out.println("Clave: "+arrayClave[i]);
                System.out.println("Descripcion: "+arrayDescripcion[i]);
                System.out.println("Existencia: "+arrayExistencia[i]);
                System.out.println("Minimo a mantener en existencia: "+arrayMinExistencia[i]);
                System.out.println("Precio unitario: "+arrayPU[i]);
                encontrado = true;
            }
        }
        if(!encontrado){
            System.out.println("Producto no encontrado");
        }
    }
}*/