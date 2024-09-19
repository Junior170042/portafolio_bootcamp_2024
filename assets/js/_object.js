function Producto(nombre, precio) {
    let _nombre = nombre;
    let _precio = precio

    this.getProducto = function () {
        return { nombre: _nombre, precio: _precio }
    }
}

function Carrito() {

    let _arrayProductos = []

    this.setCarrito = function (newProduct, cantidad) {
        const existingProduct = _arrayProductos.find(product => product.nombre === newProduct.nombre);
        if (existingProduct) {
            existingProduct.cantidad = cantidad + existingProduct.cantidad;
        } else {
            newProduct.cantidad = cantidad
            _arrayProductos.push(newProduct);
        }
    }
    this.getCarrito = function () {
        return _arrayProductos
    }

    this.getDetailleProducto = function () {
        return this.getCarrito().reduce((total, producto) => {
            return total + producto.cantidad * producto.precio;
        }, 0);
    }

}