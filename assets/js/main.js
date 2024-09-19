
const productos = [new Producto("Leche", 1000).getProducto(), new Producto("Pan de molde", 2000).getProducto(), new Producto("Queso", 1200).getProducto(), new Producto("Mermelada", 890).getProducto(), new Producto("Azucar", 1300).getProducto(),]


function chileCurrencyFormatter(value) {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: "CLP"
    })
    return formatter.format(value)
}

const miCarrito = new Carrito()

let currentindex;
const addProductToCarrito = (current_index, cantidad) => {
    const currentProduct = productos[current_index]
    miCarrito.setCarrito(currentProduct, cantidad)

    displayCarrito(miCarrito.getCarrito())

    displayDetalleProducto(miCarrito.getDetailleProducto())

}

//displaying product into the cart
const displayCarrito = (carritoProductos) => {

    const textCarritoVacio = document.querySelector("p.vacio")
    const table = document.querySelector("table")
    textCarritoVacio.style.display = "none";
    table.classList.add("show")

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ''
    carritoProductos.map(product => {
        tableBody.innerHTML += `
        <tr>
            <td>${product.nombre}</td>
            <td>${product.cantidad}</td>
            <td>$ ${product.precio}</td>
            <td> $ ${product.precio * product.cantidad}</td>
        </tr>
        `
    })

}

const displayDetalleProducto = (detalleProducto) => {
    const subtotalElement = document.querySelector(".sub-total")

    subtotalElement.classList.add("show")
    subtotalElement.innerHTML = `
      <p class="comentario">Precio total de tu compra</p>

        <p class="precio"> $ ${detalleProducto}</p>
    `
}
const displayProductos = (arrayProductos) => {

    const productContainer = document.querySelector("ul.product-list")

    arrayProductos.map((producto, index) => productContainer.innerHTML += createTemplateProduct(producto, index))

}

const createTemplateProduct = (product, index) => {
    return `
        <li class="product-item">
            <div class="product-content">
                <div class="product-text">
                  <p>${product.nombre}</p>
                    <span>${chileCurrencyFormatter(product.precio)}</span>
                </div>
              
                <button data-currentindex=${index} class="btn-agregar">Agregar</button>
            </div>
        </li>
    `
}

//display all the products
displayProductos(productos)


const form = document.getElementById("form-cantidad")

form.addEventListener('submit', (e) => e.preventDefault())

const dialogueBox = document.getElementById("dialogueBox")
document.getElementById("dialogueClose").addEventListener("click", () => dialogueBox.classList.remove("show"))


const buttonAgregar = document.querySelectorAll(".btn-agregar")
//addding event for each "btn-agregar"
buttonAgregar.forEach(btn => {
    btn.addEventListener("click", function (e) {
        currentindex = e.target.dataset.currentindex;
        dialogueBox.classList.toggle("show")
    })
})

const btnDialogueAdd = document.getElementById("dialogueAdd");
btnDialogueAdd.addEventListener("click", () => {
    const cantidad = document.querySelector("input").value;
    if (!cantidad.trim() || isNaN(cantidad.trim())) {
        alert("Debes ingresar una cantidad valida")
        return
    }

    //adding product to the cart
    addProductToCarrito(currentindex, parseInt(Number(cantidad)))
})


